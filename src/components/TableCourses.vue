<script setup lang="ts">
import { computed, reactive, ref, toValue, watchEffect } from "vue";

import { useDownloadAssignments } from "@/composables/download-assignments.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { useQueryParam } from "@/composables/query-param.ts";
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
import { useYearsStore } from "@/stores/years.ts";
import { type Column, isAbbreviable } from "@/types/column.ts";
import { formatProgram, formatUser, nf } from "@/utils/format.ts";
import { totalH } from "@/utils/hours.ts";
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
    name
    nameShort
    visible
    program {
      degree {
        id
        name
        nameShort
        visible
      }
      id
      name
      nameShort
      visible
    }
    track {
      id
      name
      nameShort
      visible
    }
    courseType: typeByType {
      value
      label
    }
    semester
    hoursPerGroup: hoursEffective
    numberOfGroups: groupsEffective
    totalHours: totalHoursEffective
    totalAssigned: requestsAggregate(where: { type: { _eq: "assignment" } }) {
      aggregate {
        sum {
          hours
        }
      }
    }
    totalPrimary: requestsAggregate(where: { type: { _eq: "primary" } }) {
      aggregate {
        sum {
          hours
        }
      }
    }
    totalSecondary: requestsAggregate(where: { type: { _eq: "secondary" } }) {
      aggregate {
        sum {
          hours
        }
      }
    }
    totalPriority: requestsAggregate(
      where: {
        _and: [{ type: { _eq: "primary" } }, { isPriority: { _eq: true } }]
      }
    ) {
      aggregate {
        sum {
          hours
        }
      }
    }
  }

  fragment ServiceDetails on Service {
    teacher {
      uid
      firstname
      lastname
      alias
    }
    requests(orderBy: [{ type: ASC }, { courseId: ASC }]) {
      courseId
      type
      hours
    }
  }
`);

const { activeYear } = useYearsStore();
const perm = usePermissions();
const { downloadAssignments } = useDownloadAssignments();

const courses = computed(() =>
  courseRowFragments.map((fragment) =>
    useFragment(CourseRowFragmentDoc, fragment),
  ),
);
const service = computed(() =>
  useFragment(ServiceDetailsFragmentDoc, serviceDetailsFragment),
);
const teacher = computed(() => service.value?.teacher ?? null);
const requests = computed(() => service.value?.requests ?? null);

const title = computed(() =>
  teacher.value ? formatUser(teacher.value) : "Enseignements",
);

// Row selection
const { getValue: selectedCourse, toggleValue: toggleCourse } = useQueryParam(
  "courseId",
  true,
);
const selectedRow = computed(() => [{ id: selectedCourse.value }]);
const onRowClick = async (_: Event, row: CourseRowFragment) => {
  await toggleCourse(row.id);
};

// Teacher buttons
const showTeacherDetails = ref(false);
const { setValue: selectTeacher } = useQueryParam("uid");

// Columns definition
const columns: Column<CourseRowFragment>[] = [
  {
    name: "program",
    label: "Formation",
    field: (row) => ({
      long: row.program.degree.name + " " + row.program.name,
      short: formatProgram(row.program),
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "track",
    label: "Parcours",
    field: (row) => ({
      long: row.track?.name ?? "",
      short: row.track?.nameShort ?? null,
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "name",
    label: "Nom",
    field: (row) => ({
      long: row.name,
      short: row.nameShort ?? null,
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "type",
    label: "Type",
    field: (row) => row.courseType.label,
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "semester",
    label: "S.",
    tooltip: "Semestre",
    field: (row) => row.semester,
    format: (val: number) => "S" + val.toString(),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "hours",
    label: "H.",
    tooltip: "Nombre d'heures par groupe",
    field: (row) => row.hoursPerGroup,
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "groups",
    label: "G.",
    tooltip: "Nombre de groupes ouverts",
    field: (row) => row.numberOfGroups ?? 0,
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "assigned",
    label: "A.",
    tooltip: "Nombre d'heures attribuées",
    field: (row) => getRequestTotal(row, REQUEST_TYPES.ASSIGNMENT),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: () => perm.toViewAssignments,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_assigned",
    label: "ΔA",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures attribuées",
    field: (row) => (row.totalHours ?? 0) - totalH(row.totalAssigned),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "primary",
    label: "V1",
    tooltip: "Nombre d'heures demandées en vœux principaux",
    field: (row) => getRequestTotal(row, REQUEST_TYPES.PRIMARY),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_primary",
    label: "ΔV1",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux",
    field: (row) => (row.totalHours ?? 0) - totalH(row.totalPrimary),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_primary_priority",
    label: "ΔV1 Prio",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux prioritaires",
    field: (row) => (row.totalHours ?? 0) - totalH(row.totalPriority),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "secondary",
    label: "V2",
    tooltip: "Nombre d'heures demandées en vœux secondaires",
    field: (row) => getRequestTotal(row, REQUEST_TYPES.SECONDARY),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
];
const searchableColumns: string[] = columns
  .filter((col) => col.searchable)
  .map((col) => col.name);
const visibleColumns = ref<string[]>([]);
watchEffect(() => {
  visibleColumns.value = columns
    .filter((col) => toValue(col.visible))
    .map((col) => col.name);
});
const isMenuColumnsOpen = ref(false);
const isMenuColumnsTooltipVisible = ref(false);

// Filters
// Programs
const programs = ref<number[]>([]);
const programsOptions = computed(() =>
  courses.value
    .map((course) => ({
      value: course.program.id,
      label: formatProgram(course.program),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Course types
const courseTypes = ref<string[]>([]);
const courseTypesOptions = computed(() =>
  courses.value
    .map((course) => course.courseType)
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Semesters
const semesters = ref<number[]>([]);
const semestersOptions = computed(() =>
  courses.value
    .map((course) => ({
      value: course.semester,
      label: "S" + course.semester.toString(),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Search
const search = ref("");
const clearSearch = () => {
  search.value = "";
};
// Filter attributes
const filterObj = reactive({
  teacherRequests: requests,
  programs,
  courseTypes,
  semesters,
  search: computed(() => normalizeForSearch(search.value)),
  searchColumns: computed(() =>
    columns.filter((col) => searchableColumns.includes(col.name)),
  ),
});
const filterMethod = (
  rows: readonly CourseRowFragment[],
  terms: typeof filterObj,
): readonly CourseRowFragment[] =>
  rows.filter((row) =>
    terms.teacherRequests
      ? terms.teacherRequests.some((request) => request.courseId === row.id)
      : (terms.programs.length === 0 ||
          terms.programs.some((program) => program === row.program.id)) &&
        (terms.courseTypes.length === 0 ||
          terms.courseTypes.some(
            (courseType) => courseType === row.courseType.label,
          )) &&
        (terms.semesters.length === 0 ||
          terms.semesters.includes(row.semester)) &&
        terms.searchColumns.some((col) =>
          normalizeForSearch(
            isAbbreviable(col)
              ? col.field(row).long + " " + (col.field(row).short ?? "")
              : String(col.field(row)),
          ).includes(terms.search),
        ),
  );

// Styling options controllers
const stickyHeader = ref(false);
const isAssigned = (row: CourseRowFragment) =>
  !!requests.value?.some(
    (request) =>
      request.courseId === row.id && request.type === REQUEST_TYPES.ASSIGNMENT,
  );
const isVisible = (row: CourseRowFragment): boolean =>
  !!service.value ||
  (row.visible &&
    row.program.degree.visible &&
    row.program.visible &&
    (row.track?.visible ?? true));

// Helper
const getRequestTotal = (row: CourseRowFragment, requestType: RequestType) => {
  if (requests.value) {
    return (
      requests.value.find(
        (request) =>
          request.courseId === row.id && request.type === requestType,
      )?.hours ?? 0
    );
  }
  switch (requestType) {
    case REQUEST_TYPES.ASSIGNMENT:
      return totalH(row.totalAssigned);
    case REQUEST_TYPES.PRIMARY:
      return totalH(row.totalPrimary);
    case REQUEST_TYPES.SECONDARY:
      return totalH(row.totalSecondary);
  }
};

const downloadTeacherAssignments = async () => {
  if (!teacher.value || activeYear.value === null) {
    return;
  }
  await downloadAssignments(
    {
      year: activeYear.value,
      where: { service: { uid: { _eq: teacher.value.uid } } },
    },
    activeYear.value.toString() + " " + formatUser(teacher.value),
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
    v-model:selected="selectedRow"
    :title
    :columns
    :visible-columns
    :rows="courses"
    :loading="fetchingCourses"
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    row-key="id"
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
          clear-icon="sym_s_close"
          clearable
          square
          dense
          @clear="clearSearch"
        >
        </QInput>
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
    <template #body-cell="scope">
      <QTd
        :props="scope"
        :class="{
          'non-visible': !isVisible(scope.row),
          assigned: isAssigned(scope.row),
        }"
      >
        {{ scope.value?.short ?? scope.value?.long ?? scope.value }}
        <QTooltip v-if="scope.value?.short" :delay="TOOLTIP_DELAY">
          {{ scope.value.long }}
        </QTooltip>
      </QTd>
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
.non-visible {
  background-color: rgba($negative, 0.1);
}
.assigned {
  background-color: rgba($positive, 0.1);
}
</style>
