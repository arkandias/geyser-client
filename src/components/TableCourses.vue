<script setup lang="ts">
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useDownloadAssignments } from "@/composables/useDownloadAssignments.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useQueryParam } from "@/composables/useQueryParam.ts";
import { useServices } from "@/composables/useServices.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { type CourseRowFragment, CourseRowFragmentDoc } from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import { type Column, getField } from "@/types/column.ts";
import { compare, normalizeForSearch, uniqueValue } from "@/utils/misc.ts";

import PageService from "@/pages/PageService.vue";

const { courseRowFragments } = defineProps<{
  courseRowFragments: FragmentType<typeof CourseRowFragmentDoc>[];
  fetchingCourses?: boolean;
}>();

graphql(`
  fragment CourseRow on Course {
    id
    name: nameDisplay
    visible
    program {
      degree {
        name: nameDisplay
        visible
      }
      id
      name: nameDisplay
      visible
    }
    track {
      name: nameDisplay
      visible
    }
    semester
    type {
      label
      coefficient
    }
    hoursPerGroup: hoursEffective
    numberOfGroups: groupsEffective
    totalHours: totalHoursEffective
    requests {
      serviceId
      type
      hours
      isPriority
    }
  }
`);

const { t, n } = useCustomI18n();
const { activeYear } = useYearsStore();
const { services } = useServices();
const perm = usePermissions();
const { downloadAssignments } = useDownloadAssignments();

// Service selection
const { getValue: selectedService, setValue: selectService } = useQueryParam(
  "serviceId",
  true,
);
const service = computed(
  () => services.value.find((s) => s.id === selectedService.value) ?? null,
);

const title = computed(
  () => service.value?.teacher.displayname ?? t("courses.label", 2),
);

// Options
const stickyHeader = ref(false);
const weightedHours = ref(false);

type CourseRow = Omit<CourseRowFragment, "hoursPerGroup" | "numberOfGroups"> & {
  hours: number;
  groups: number;
  totalAssigned: number;
  totalPrimary: number;
  totalSecondary: number;
  diffAssigned: number | null;
  diffPrimary: number | null;
  diffPrimaryPriority: number | null;
};

const courses = computed<CourseRow[]>(() =>
  courseRowFragments.map((f) => {
    const { hoursPerGroup, numberOfGroups, requests, ...rest } = useFragment(
      CourseRowFragmentDoc,
      f,
    );
    const { totalAssigned, totalPrimary, totalSecondary, totalPriority } =
      requests.reduce(
        (t, r) => ({
          totalAssigned:
            t.totalAssigned +
            (r.type === REQUEST_TYPES.ASSIGNMENT ? r.hours : 0),
          totalPrimary:
            t.totalPrimary + (r.type === REQUEST_TYPES.PRIMARY ? r.hours : 0),
          totalSecondary:
            t.totalSecondary +
            (r.type === REQUEST_TYPES.SECONDARY ? r.hours : 0),
          totalPriority:
            t.totalPriority +
            (r.type === REQUEST_TYPES.PRIMARY && r.isPriority ? r.hours : 0),
        }),
        {
          totalAssigned: 0,
          totalPrimary: 0,
          totalSecondary: 0,
          totalPriority: 0,
        },
      );
    const weight = weightedHours.value ? rest.type.coefficient : 1;
    return {
      ...rest,
      hours: (hoursPerGroup ?? 0) * weight,
      groups: numberOfGroups ?? 0,
      requests,
      totalAssigned: totalAssigned * weight,
      diffAssigned: ((rest.totalHours ?? 0) - totalAssigned) * weight,
      totalPrimary: totalPrimary * weight,
      diffPrimary: ((rest.totalHours ?? 0) - totalPrimary) * weight,
      diffPrimaryPriority: ((rest.totalHours ?? 0) - totalPriority) * weight,
      totalSecondary: totalSecondary * weight,
    };
  }),
);

const coursesWithTeacher = computed<CourseRow[]>(() =>
  courses.value.map((row) => {
    const serviceRequests = row.requests.filter(
      (r) => r.serviceId === service.value?.id,
    );
    return {
      ...row,
      ...(service.value
        ? {
            totalAssigned:
              serviceRequests.find((r) => r.type === REQUEST_TYPES.ASSIGNMENT)
                ?.hours ?? 0,
            totalPrimary:
              serviceRequests.find((r) => r.type === REQUEST_TYPES.PRIMARY)
                ?.hours ?? 0,
            totalSecondary:
              serviceRequests.find((r) => r.type === REQUEST_TYPES.SECONDARY)
                ?.hours ?? 0,
            diffAssigned: null,
            diffPrimary: null,
            diffPrimaryPriority: null,
          }
        : {}),
    };
  }),
);

// Row selection
const { getValue: selectedCourse, toggleValue: toggleCourse } = useQueryParam(
  "courseId",
  true,
);
const selectedRow = computed(() => [{ id: selectedCourse.value }]);
const selectRow = async (_: Event, row: CourseRow) => {
  await toggleCourse(row.id);
};

// Columns definition
const columns: Column<CourseRow>[] = [
  {
    name: "program",
    label: "Formation",
    align: "left",
    field: (row) => `${row.program.degree.name} ${row.program.name}`,
    sortable: true,
    visible: true,
    searchable: true,
  },
  {
    name: "track",
    label: "Parcours",
    align: "left",
    field: (row) => row.track?.name,
    sortable: true,
    visible: true,
    searchable: true,
  },
  {
    name: "name",
    label: "Nom",
    align: "left",
    field: "name",
    format: (val: string) => (val.length > 40 ? val.slice(0, 40) + "…" : val),
    sortable: true,
    visible: true,
    searchable: true,
  },
  {
    name: "semester",
    label: "S.",
    tooltip: "Semestre",
    align: "left",
    field: "semester",
    format: (val: number) => `S${val}`,
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "type",
    label: "Type",
    align: "left",
    field: (row) => row.type.label,
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "hours",
    label: "H.",
    tooltip: "Nombre d'heures par groupe",
    align: "left",
    field: "hours",
    format: (val: number) => n(val, "decimal"),
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "groups",
    label: "G.",
    tooltip: "Nombre de groupes ouverts",
    align: "left",
    field: "groups",
    format: (val: number) => n(val, "decimal"),
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "totalAssigned",
    label: "A.",
    tooltip: "Nombre d'heures attribuées",
    field: "totalAssigned",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: perm.toViewAssignments,
    searchable: false,
  },
  {
    name: "diffAssigned",
    label: "ΔA",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures attribuées",
    field: "diffAssigned",
    format: (val: number | null) =>
      val === null ? "-" : n(val, "decimalFixed"),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "totalPrimary",
    label: "V1",
    tooltip: "Nombre d'heures demandées en vœux principaux",
    field: "totalPrimary",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "diffPrimary",
    label: "ΔV1",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux",
    field: "diffPrimary",
    format: (val: number | null) =>
      val === null ? "-" : n(val, "decimalFixed"),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "diffPrimaryPriority",
    label: "ΔV1 Prio",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux prioritaires",
    field: "diffPrimaryPriority",
    format: (val: number | null) =>
      val === null ? "-" : n(val, "decimalFixed"),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "totalSecondary",
    label: "V2",
    tooltip: "Nombre d'heures demandées en vœux secondaires",
    field: "totalPrimary",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: true,
    searchable: false,
  },
];
const searchableColumns = columns
  .filter((col) => col.searchable)
  .map((col) => col.name);
const visibleColumns = ref(
  columns.filter((col) => col.visible).map((col) => col.name),
);
const isMenuColumnsOpen = ref(false);
const isMenuColumnsTooltipVisible = ref(false);

// Filters
// Programs
const programs = ref<number[]>([]);
const programsOptions = computed(() =>
  courses.value
    .map((c) => ({
      value: c.program.id,
      label: `${c.program.degree.name} ${c.program.name}`,
    }))
    .filter(uniqueValue("value"))
    .sort(compare("label")),
);

// Semesters
const semesters = ref<number[]>([]);
const semestersOptions = computed(() =>
  courses.value
    .map((c) => ({
      value: c.semester,
      label: `S${c.semester}`,
    }))
    .filter(uniqueValue("value"))
    .sort(compare("label")),
);

// Course types
const courseTypes = ref<string[]>([]);
const courseTypeOptions = computed(() =>
  courses.value
    .map((c) => c.type)
    .filter(uniqueValue("label"))
    .sort(compare("label")),
);

// Search
const search = ref<string | null>(null);

// Filter attributes
const filterObj = computed(() => ({
  serviceId: service.value?.id ?? null,
  programs: programs.value,
  semesters: semesters.value,
  courseTypes: courseTypes.value,
  search: normalizeForSearch(search.value ?? ""),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly CourseRow[],
  terms: typeof filterObj.value,
): readonly CourseRow[] =>
  rows.filter((row) =>
    terms.serviceId
      ? row.requests.some((r) => r.serviceId === terms.serviceId)
      : (terms.programs.length === 0 ||
          terms.programs.some((p) => p === row.program.id)) &&
        (terms.semesters.length === 0 ||
          terms.semesters.includes(row.semester)) &&
        (terms.courseTypes.length === 0 ||
          terms.courseTypes.some((ct) => ct === row.type.label)) &&
        terms.searchColumns.some((col) =>
          normalizeForSearch(String(getField(row, col.field))).includes(
            terms.search,
          ),
        ),
  );

// Row styling
const isAssigned = computed(
  () => (row: CourseRow) =>
    service.value !== null &&
    row.requests.some(
      (r) =>
        r.serviceId === service.value?.id &&
        r.type === REQUEST_TYPES.ASSIGNMENT,
    ),
);
const isVisible = (row: CourseRow) =>
  row.visible &&
  row.program.degree.visible &&
  row.program.visible &&
  (row.track?.visible ?? true);
const tableRowClassFn = computed(
  () => (row: CourseRow) =>
    isAssigned.value(row) ? "assigned" : !isVisible(row) ? "non-visible" : "",
);

// Teacher buttons
const showTeacherDetails = ref(false);
const downloadTeacherAssignments = async () => {
  if (activeYear.value === null || !service.value) {
    return;
  }
  await downloadAssignments(
    {
      year: activeYear.value,
      where: { serviceId: { _eq: service.value.id } },
    },
    `${activeYear.value} ${service.value.teacher.displayname}`,
  );
};
</script>

<template>
  <QDialog v-model="showTeacherDetails">
    <QLayout view="hHh lpR fFf" container class="teacher-details-layout">
      <QPageContainer>
        <PageService />
      </QPageContainer>
    </QLayout>
  </QDialog>

  <QTable
    :columns
    :visible-columns
    :rows="coursesWithTeacher"
    :selected="selectedRow"
    :loading="fetchingCourses"
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    :table-row-class-fn
    flat
    square
    dense
    virtual-scroll
    :class="{ 'sticky-header-table': stickyHeader }"
    @row-click="selectRow"
  >
    <template #top>
      <div class="q-table__title">
        {{ title }}
        <QBtn
          v-if="service"
          icon="sym_s_badge"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="showTeacherDetails = true"
        >
          <QTooltip :delay="TOOLTIP_DELAY">
            Afficher les informations de l'intervenant
          </QTooltip>
        </QBtn>
        <QBtn
          v-if="service && perm.toViewAssignments"
          icon="sym_s_download"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="downloadTeacherAssignments()"
        >
          <QTooltip :delay="TOOLTIP_DELAY">
            Télécharger les attributions de l'intervenant
          </QTooltip>
        </QBtn>
        <QBtn
          v-if="service"
          icon="sym_s_close"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="selectService()"
        >
          <QTooltip :delay="TOOLTIP_DELAY">
            Désélectionner l'intervenant
          </QTooltip>
        </QBtn>
      </div>
      <QSpace />
      <div class="row q-gutter-md">
        <QSelect
          v-model="programs"
          :options="programsOptions"
          :disable="!!service"
          label="Formation"
          emit-value
          map-options
          multiple
          use-chips
          square
          dense
          options-dense
        />
        <QSelect
          v-model="semesters"
          :options="semestersOptions"
          :disable="!!service"
          label="Semestre"
          emit-value
          map-options
          multiple
          use-chips
          square
          dense
          options-dense
        />
        <QSelect
          v-model="courseTypes"
          :options="courseTypeOptions"
          :disable="!!service"
          label="Type"
          emit-value
          map-options
          multiple
          use-chips
          square
          dense
          options-dense
        />
        <QInput
          v-model="search"
          :disable="!!service"
          color="primary"
          placeholder="Recherche"
          clearable
          clear-icon="sym_s_close"
          square
          dense
        />
        <QToggle
          v-model="weightedHours"
          icon="sym_s_function"
          color="primary"
          dense
        >
          <QTooltip>Heures EQTD</QTooltip>
        </QToggle>
        <QToggle
          v-model="stickyHeader"
          icon="sym_s_scrollable_header"
          color="primary"
          dense
        >
          <QTooltip>En-tête fixe</QTooltip>
        </QToggle>
        <QBtn
          icon="sym_s_view_column"
          :color="isMenuColumnsOpen ? 'primary' : 'grey'"
          flat
          square
          dense
        >
          <QTooltip v-model="isMenuColumnsTooltipVisible">
            Colonnes visibles
          </QTooltip>
          <QMenu
            v-model="isMenuColumnsOpen"
            auto-close
            square
            dense
            @show="isMenuColumnsTooltipVisible = false"
          >
            <QList dense>
              <QItem v-for="col in columns" :key="col.name" dense>
                <QToggle
                  v-model="visibleColumns"
                  :val="col.name"
                  :label="col.label"
                  color="primary"
                  dense
                />
                <QTooltip
                  v-if="col.tooltip"
                  anchor="center left"
                  self="center right"
                >
                  {{ col.tooltip }}
                </QTooltip>
              </QItem>
            </QList>
          </QMenu>
        </QBtn>
      </div>
    </template>
    <template #header-cell="scope">
      <QTh :props="scope">
        {{ scope.col.label }}
        <QTooltip
          v-if="scope.col.tooltip"
          :delay="TOOLTIP_DELAY"
          anchor="top middle"
          self="center middle"
        >
          {{ scope.col.tooltip }}
        </QTooltip>
      </QTh>
    </template>
  </QTable>
</template>

<style scoped lang="scss">
.teacher-details-layout {
  max-width: min($teacher-details-width * 1.5, 80vw);
  max-height: 80vh;
  background-color: white;
}
.body--dark .teacher-details-layout {
  background-color: $dark;
}
.q-select {
  min-width: 120px;
}
.q-input {
  width: 120px;
}
:deep(.non-visible) {
  background-color: rgba($negative, 0.1);
}
:deep(.assigned) {
  background-color: rgba($positive, 0.1);
}
</style>
