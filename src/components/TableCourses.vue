<script setup lang="ts">
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useDownloadAssignments } from "@/composables/useDownloadAssignments.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useQueryParam } from "@/composables/useQueryParam.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import {
  REQUEST_TYPES,
  type RequestType,
} from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type CourseRowFragment,
  CourseRowFragmentDoc,
  ServiceDetailsFragmentDoc,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import { type Column, getField } from "@/types/column.ts";
import { formatProgram } from "@/utils/format.ts";
import { compare, normalizeForSearch, uniqueValue } from "@/utils/misc.ts";

import PageTeacher from "@/pages/PageTeacher.vue";

const { courseRowFragments, serviceDetailsFragment } = defineProps<{
  courseRowFragments: FragmentType<typeof CourseRowFragmentDoc>[];
  fetchingCourses?: boolean;
  serviceDetailsFragment: FragmentType<typeof ServiceDetailsFragmentDoc> | null;
}>();

graphql(`
  fragment CourseRow on Course {
    id
    name: nameDisplay
    visible
    program {
      degree {
        id
        name: nameDisplay
        visible
      }
      id
      name: nameDisplay
      visible
    }
    track {
      id
      name: nameDisplay
      visible
    }
    courseType: type {
      id
      label
      coefficient
    }
    semester
    hoursPerGroup: hoursEffective
    numberOfGroups: groupsEffective
    totalHours: totalHoursEffective
    requests {
      id
      type
      hours
      isPriority
    }
  }

  fragment ServiceDetails on Service {
    teacher {
      uid
      displayname
    }
    requests(orderBy: [{ type: ASC }, { courseId: ASC }]) {
      courseId
      type
      hours
    }
  }
`);

const { t, n } = useCustomI18n();

const { activeYear } = useYearsStore();
const perm = usePermissions();
const { downloadAssignments } = useDownloadAssignments();

type CourseRow = Omit<CourseRowFragment, "requests"> & {
  totalAssigned: number;
  totalPrimary: number;
  totalSecondary: number;
  totalPriority: number;
};

const courses = computed<CourseRow[]>(() =>
  courseRowFragments.map((f) => {
    const { requests, ...rest } = useFragment(CourseRowFragmentDoc, f);
    const totals = requests.reduce(
      (acc, req) => ({
        totalAssigned:
          acc.totalAssigned +
          (req.type === REQUEST_TYPES.ASSIGNMENT ? req.hours : 0),
        totalPrimary:
          acc.totalAssigned +
          (req.type === REQUEST_TYPES.PRIMARY ? req.hours : 0),
        totalSecondary:
          acc.totalAssigned +
          (req.type === REQUEST_TYPES.SECONDARY ? req.hours : 0),
        totalPriority:
          acc.totalAssigned +
          (req.type === REQUEST_TYPES.PRIMARY && req.isPriority
            ? req.hours
            : 0),
      }),
      {
        totalAssigned: 0,
        totalPrimary: 0,
        totalSecondary: 0,
        totalPriority: 0,
      },
    );
    return { ...rest, ...totals };
  }),
);
const service = computed(() =>
  useFragment(ServiceDetailsFragmentDoc, serviceDetailsFragment),
);
const teacher = computed(() => service.value?.teacher ?? null);
const requests = computed(() => service.value?.requests ?? null);

const getTeacherTotal = (row: CourseRow, requestType: RequestType) => {
  if (requests.value) {
    return (
      requests.value.find(
        (r) => r.courseId === row.id && r.type === requestType,
      )?.hours ?? 0
    );
  }
  return null;
};

const title = computed(
  () => teacher.value?.displayname ?? t("courses.label", 2),
);

// Row selection
const { getValue: selectedCourse, toggleValue: toggleCourse } = useQueryParam(
  "courseId",
  true,
);
const selectedRow = computed(() => [{ id: selectedCourse.value }]);
const onRowClick = async (_: Event, row: CourseRow) => {
  await toggleCourse(row.id);
};

// Teacher buttons
const showTeacherDetails = ref(false);
const { setValue: selectTeacher } = useQueryParam("uid");

// Columns definition
const columns: Column<CourseRow>[] = [
  {
    name: "program",
    label: "Formation",
    align: "left",
    field: (row) => formatProgram(row.program),
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
    name: "type",
    label: "Type",
    align: "left",
    field: (row) => row.courseType.label,
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "semester",
    label: "S.",
    tooltip: "Semestre",
    align: "left",
    field: (row) => row.semester,
    format: (val: number) => `S${val}`,
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "hours",
    label: "H.",
    tooltip: "Nombre d'heures par groupe",
    align: "left",
    field: (row) =>
      (row.hoursPerGroup ?? 0) *
      (weightedHours.value ? row.courseType.coefficient : 1),
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "groups",
    label: "G.",
    tooltip: "Nombre de groupes ouverts",
    align: "left",
    field: (row) => row.numberOfGroups ?? 0,
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "assigned",
    label: "A.",
    tooltip: "Nombre d'heures attribuées",
    field: (row) =>
      (getTeacherTotal(row, REQUEST_TYPES.ASSIGNMENT) ?? row.totalAssigned) *
      (weightedHours.value ? row.courseType.coefficient : 1),
    format: (val: number | null) =>
      val === null ? "-" : n(val, "decimalFixed"),
    sortable: true,
    visible: perm.toViewAssignments,
    searchable: false,
  },
  {
    name: "diffAssigned",
    label: "ΔA",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures attribuées",
    field: (row) =>
      ((row.totalHours ?? 0) - row.totalAssigned) *
      (weightedHours.value ? row.courseType.coefficient : 1),
    format: (val: number) => (teacher.value ? "-" : n(val, "decimalFixed")),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "primary",
    label: "V1",
    tooltip: "Nombre d'heures demandées en vœux principaux",
    field: (row) =>
      (getTeacherTotal(row, REQUEST_TYPES.PRIMARY) ?? row.totalPrimary) *
      (weightedHours.value ? row.courseType.coefficient : 1),
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
    field: (row) =>
      ((row.totalHours ?? 0) - row.totalPrimary) *
      (weightedHours.value ? row.courseType.coefficient : 1),
    format: (val: number) => (teacher.value ? "-" : n(val, "decimalFixed")),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "diffPrimaryPriority",
    label: "ΔV1 Prio",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux prioritaires",
    field: (row) =>
      ((row.totalHours ?? 0) - row.totalPriority) *
      (weightedHours.value ? row.courseType.coefficient : 1),
    format: (val: number) => (teacher.value ? "-" : n(val, "decimalFixed")),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "secondary",
    label: "V2",
    tooltip: "Nombre d'heures demandées en vœux secondaires",
    field: (row) =>
      (getTeacherTotal(row, REQUEST_TYPES.SECONDARY) ?? row.totalSecondary) *
      (weightedHours.value ? row.courseType.coefficient : 1),
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
      label: formatProgram(c.program),
    }))
    .filter(uniqueValue("value"))
    .sort(compare("label")),
);

// Course types
const courseTypes = ref<string[]>([]);
const courseTypesOptions = computed(() =>
  courses.value
    .map((c) => c.courseType)
    .filter(uniqueValue("id"))
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

// Search
const search = ref<string | null>(null);

// Filter attributes
const filterObj = computed(() => ({
  teacherRequests: requests.value,
  programs: programs.value,
  courseTypes: courseTypes.value,
  semesters: semesters.value,
  search: normalizeForSearch(search.value ?? ""),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly CourseRow[],
  terms: typeof filterObj.value,
): readonly CourseRow[] =>
  rows.filter((row) =>
    terms.teacherRequests
      ? terms.teacherRequests.some((r) => r.courseId === row.id)
      : (terms.programs.length === 0 ||
          terms.programs.some((p) => p === row.program.id)) &&
        (terms.courseTypes.length === 0 ||
          terms.courseTypes.some((ct) => ct === row.courseType.label)) &&
        (terms.semesters.length === 0 ||
          terms.semesters.includes(row.semester)) &&
        terms.searchColumns.some((col) =>
          normalizeForSearch(String(getField(row, col.field))).includes(
            terms.search,
          ),
        ),
  );

// Options
const weightedHours = ref(false);
const stickyHeader = ref(false);

// Row styling
const isAssigned = computed(
  () => (row: CourseRow) =>
    requests.value?.some(
      (r) => r.courseId === row.id && r.type === REQUEST_TYPES.ASSIGNMENT,
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

const downloadTeacherAssignments = async () => {
  if (activeYear.value === null || !teacher.value) {
    return;
  }
  await downloadAssignments(
    {
      year: activeYear.value,
      where: { service: { uid: { _eq: teacher.value.uid } } },
    },
    `${activeYear.value} ${teacher.value.displayname}`,
  );
};
</script>

<template>
  <QDialog v-model="showTeacherDetails">
    <QLayout view="hHh lpR fFf" container class="teacher-details-layout">
      <QPageContainer>
        <PageTeacher />
      </QPageContainer>
    </QLayout>
  </QDialog>

  <QTable
    :columns
    :visible-columns
    :rows="courses"
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
    @row-click="onRowClick"
  >
    <template #top>
      <div class="q-table__title">
        {{ title }}
        <QBtn
          v-if="service"
          icon="sym_s_visibility"
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
          v-if="service"
          icon="sym_s_close"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="selectTeacher()"
        >
          <QTooltip :delay="TOOLTIP_DELAY">
            Désélectionner l'intervenant
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
      </div>
      <QSpace />
      <div class="row q-gutter-md">
        <QSelect
          v-model="programs"
          :options="programsOptions"
          :disable="!!service"
          color="primary"
          label="Formation"
          emit-value
          map-options
          multiple
          use-chips
          square
          dense
          options-dense
        >
          <!-- this slot to use dense QChip -->
          <template #selected-item="scope">
            <QChip
              :tabindex="scope.tabindex"
              class="q-ma-none"
              color="grey3"
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
            >
              {{ scope.opt.label }}
            </QChip>
          </template>
        </QSelect>
        <QSelect
          v-model="courseTypes"
          :options="courseTypesOptions"
          :disable="!!service"
          color="primary"
          label="Type"
          emit-value
          map-options
          multiple
          square
          dense
          options-dense
        >
          <!-- this slot to use dense QChip -->
          <template #selected-item="scope">
            <QChip
              :tabindex="scope.tabindex"
              class="q-ma-none"
              color="grey3"
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
            >
              {{ scope.opt.label }}
            </QChip>
          </template>
        </QSelect>
        <QSelect
          v-model="semesters"
          :options="semestersOptions"
          :disable="!!service"
          color="primary"
          label="Semestre"
          emit-value
          map-options
          multiple
          square
          dense
          options-dense
        >
          <!-- this slot to use dense QChip -->
          <template #selected-item="scope">
            <QChip
              :tabindex="scope.tabindex"
              class="q-ma-none"
              color="grey3"
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
            >
              {{ scope.opt.label }}
            </QChip>
          </template>
        </QSelect>
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
  max-width: min($teacher-page-content-width * 1.5, 80vw);
  max-height: 80vh;
  background-color: white;
}
.body--dark .teacher-details-layout {
  background-color: $dark;
}
.q-select {
  min-width: $table-filter-select-min-width;
}
.q-input {
  width: $table-filter-search-input-width;
}
:deep(.non-visible) {
  background-color: rgba($negative, 0.1);
}
:deep(.assigned) {
  background-color: rgba($positive, 0.1);
}
</style>
