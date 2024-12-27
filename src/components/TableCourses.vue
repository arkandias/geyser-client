<script setup lang="ts">
import {
  type ComputedRef,
  type Ref,
  computed,
  ref,
  toValue,
  watchEffect,
} from "vue";
import { useRouter } from "vue-router";

import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import {
  REQUEST_TYPES,
  type RequestType,
} from "@/config/types/request-types.ts";
import { formatProgram, formatUser, nf } from "@/helpers/format.ts";
import { totalH } from "@/helpers/hours.ts";
import { compare, normalizeForSearch, uniqueValue } from "@/helpers/misc.ts";
import { toggleQueryParam } from "@/helpers/query-params.ts";
import { useData } from "@/stores/data.ts";
import { type Column, isAbbreviable } from "@/types/column.ts";
import type { Option } from "@/types/common.ts";
import type { CourseRow } from "@/types/course.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import PageTeacher from "@/pages/PageTeacher.vue";

const { teacher } = defineProps<{
  teacher: TeacherDetails | null;
}>();

const router = useRouter();

const perm = usePermissions();
const { courses, fetchingCourses, selectedCourse } = useData();

const selectCourse = async (_: Event, row: CourseRow) => {
  await toggleQueryParam(router, "courseId", row.id, true);
};

const deselectTeacher = async () => {
  await toggleQueryParam(router, "uid", undefined);
};

const getRequestTotal = (
  row: CourseRow,
  requestType: RequestType,
  teacher: TeacherDetails | null,
) => {
  if (teacher) {
    return (
      teacher.requests.find(
        (request) =>
          request.course.id === row.id && request.type === requestType,
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

const title: ComputedRef<string> = computed(() =>
  teacher ? formatUser(teacher) : "Enseignements",
);

// Columns definition
const columns: Column<CourseRow>[] = [
  {
    name: "program",
    label: "Formation",
    field: (row) => ({
      long: formatProgram(row.program.degree.name, row.program.name),
      short:
        row.program.degree.shortName !== null || row.program.shortName !== null
          ? formatProgram(
              row.program.degree.shortName ?? row.program.degree.name,
              row.program.shortName ?? row.program.name,
            )
          : null,
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
      short: row.track?.shortName,
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
      short: row.shortName,
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
    field: (row) => getRequestTotal(row, REQUEST_TYPES.ASSIGNMENT, teacher),
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
    field: (row) => getRequestTotal(row, REQUEST_TYPES.PRIMARY, teacher),
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
    field: (row) => getRequestTotal(row, REQUEST_TYPES.SECONDARY, teacher),
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
const visibleColumns: Ref<string[]> = ref([]);
// reset visible columns if permissions change
watchEffect(() => {
  visibleColumns.value = columns
    .filter((col) => toValue(col.visible))
    .map((col) => col.name);
});
const isMenuColumnsOpen: Ref<boolean> = ref(false);
const isMenuColumnsTooltipVisible: Ref<boolean> = ref(false);

// Filters
// Programs
const programs: Ref<number[]> = ref([]);
const programsOptions: ComputedRef<Option<number>[]> = computed(() =>
  courses.value
    .map((course) => ({
      value: course.program.id,
      label: formatProgram(
        course.program.degree.shortName ?? course.program.degree.name,
        course.program.shortName ?? course.program.name,
      ),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Course types
const courseTypes: Ref<string[]> = ref([]);
const courseTypesOptions: ComputedRef<Option<string>[]> = computed(() =>
  courses.value
    .map((course) => course.courseType)
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Semesters
const semesters: Ref<number[]> = ref([]);
const semestersOptions: ComputedRef<Option<number>[]> = computed(() =>
  courses.value
    .map((course) => ({
      value: course.semester,
      label: "S" + course.semester.toString(),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Search
const search: Ref<string> = ref("");
const clearSearch = () => {
  search.value = "";
};
// Filter attributes
const filterObj = computed(() => ({
  teacherRequests: teacher ? teacher.requests : null,
  programs: programs.value,
  courseTypes: courseTypes.value,
  semesters: semesters.value,
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly CourseRow[],
  terms: typeof filterObj.value,
): readonly CourseRow[] =>
  rows.filter((row) =>
    terms.teacherRequests
      ? terms.teacherRequests.some((request) => request.course.id === row.id)
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
            String(
              isAbbreviable(col)
                ? col.field(row).long + (col.field(row).short ?? "")
                : col.field(row),
            ),
          ).includes(terms.search),
        ),
  );

// Styling options controllers
const stickyHeader: Ref<boolean> = ref(false);
const isAssigned = (row: CourseRow) =>
  teacher?.requests.some(
    (request) =>
      request.course.id === row.id && request.type === REQUEST_TYPES.ASSIGNMENT,
  ) ?? false;
const isVisible = (row: CourseRow): boolean =>
  !teacher &&
  row.visible &&
  row.program.degree.visible &&
  row.program.visible &&
  (row.track?.visible ?? true);

const showTeacherDetails: Ref<boolean> = ref(false);
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
    v-model:selected="selectedCourse"
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
    @row-click="selectCourse"
  >
    <template #top>
      <div class="q-table__title">
        {{ title }}
        <QBtn
          v-if="teacher"
          icon="sym_s_visibility"
          :color="!selectedCourse[0] ? 'primary' : 'grey'"
          size="sm"
          flat
          square
          dense
          @click="showTeacherDetails = true"
        />
        <QBtn
          v-if="teacher"
          icon="sym_s_close"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="deselectTeacher"
        />
      </div>
      <QSpace />
      <div class="row q-gutter-md">
        <QSelect
          v-model="programs"
          :options="programsOptions"
          :disable="!!teacher"
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
          <!--slot pour utiliser QChip avec l'attribut dense-->
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
          :disable="!!teacher"
          color="primary"
          label="Type"
          emit-value
          map-options
          multiple
          square
          dense
          options-dense
        >
          <!--slot pour utiliser QChip avec l'attribut dense-->
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
          :disable="!!teacher"
          color="primary"
          label="Semestre"
          emit-value
          map-options
          multiple
          square
          dense
          options-dense
        >
          <!--slot pour utiliser QChip avec l'attribut dense-->
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
          :disable="!!teacher"
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
          <QTooltip v-model="isMenuColumnsTooltipVisible"
            >Colonnes visibles</QTooltip
          >
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
          attribue: isAssigned(scope.row),
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
  width: $teacher-page-width * 1.05;
  max-width: 80vw;
  height: 80vh;
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
.attribue {
  background-color: rgba($positive, 0.1);
}
</style>
