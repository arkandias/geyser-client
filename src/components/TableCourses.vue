<script setup lang="ts">
import { computed, ref, toValue, watchEffect } from "vue";

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
  TeacherNameFragmentDoc,
  TeacherRequestFragmentDoc,
} from "@/gql/graphql.ts";
import { formatProgram, formatUser, nf } from "@/helpers/format.ts";
import { totalH } from "@/helpers/hours.ts";
import { compare, normalizeForSearch, uniqueValue } from "@/helpers/misc.ts";
import { type Column, isAbbreviable } from "@/types/column.ts";

import PageTeacher from "@/pages/PageTeacher.vue";

const { courseRowsFragment, teacherNameFragment, teacherRequestsFragment } =
  defineProps<{
    courseRowsFragment: FragmentType<typeof CourseRowFragmentDoc>[];
    teacherNameFragment: FragmentType<typeof TeacherNameFragmentDoc> | null;
    teacherRequestsFragment:
      | FragmentType<typeof TeacherRequestFragmentDoc>[]
      | null;
    fetchingCourses?: boolean;
  }>();

const perm = usePermissions();

graphql(`
  fragment CourseRow on enseignement {
    id
    name: nom
    shortName: nom_court
    visible
    program: mention {
      degree: cursus {
        id
        name: nom
        shortName: nom_court
        visible
      }
      id
      name: nom
      shortName: nom_court
      visible
    }
    track: parcours {
      id
      name: nom
      shortName: nom_court
      visible
    }
    courseType: typeByType {
      value
      label
    }
    semester: semestre
    hoursPerGroup: heures_corrigees
    numberOfGroups: groupes_corriges
    totalHours: total_heures_corrigees
    totalAssigned: demandes_aggregate(where: { type: { _eq: "attribution" } }) {
      aggregate {
        sum {
          hours: heures
        }
      }
    }
    totalPrimary: demandes_aggregate(where: { type: { _eq: "principale" } }) {
      aggregate {
        sum {
          hours: heures
        }
      }
    }
    totalSecondary: demandes_aggregate(where: { type: { _eq: "secondaire" } }) {
      aggregate {
        sum {
          hours: heures
        }
      }
    }
    totalPriority: demandes_aggregate(
      where: {
        _and: [{ type: { _eq: "principale" } }, { prioritaire: { _eq: true } }]
      }
    ) {
      aggregate {
        sum {
          hours: heures
        }
      }
    }
  }

  fragment TeacherName on intervenant {
    uid
    firstname: prenom
    lastname: nom
    alias
  }

  fragment TeacherRequest on demande {
    courseId: ens_id
    type
    hours: heures
  }
`);

const courses = computed(() =>
  courseRowsFragment.map((fragment) =>
    useFragment(CourseRowFragmentDoc, fragment),
  ),
);
const teacherName = computed(() =>
  useFragment(TeacherNameFragmentDoc, teacherNameFragment),
);
const teacherRequests = computed(
  () =>
    teacherRequestsFragment?.map((fragment) =>
      useFragment(TeacherRequestFragmentDoc, fragment),
    ) ?? null,
);

const title = computed(() =>
  teacherName.value ? formatUser(teacherName.value) : "Enseignements",
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
      long: formatProgram(row.program),
      short:
        row.program.degree.shortName !== null || row.program.shortName !== null
          ? formatProgram(row.program)
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
// reset visible columns if permissions change
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
const filterObj = computed(() => ({
  teacherRequests: teacherRequests.value,
  programs: programs.value,
  courseTypes: courseTypes.value,
  semesters: semesters.value,
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly CourseRowFragment[],
  terms: typeof filterObj.value,
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
            String(
              isAbbreviable(col)
                ? col.field(row).long + (col.field(row).short ?? "")
                : col.field(row),
            ),
          ).includes(terms.search),
        ),
  );

// Styling options controllers
const stickyHeader = ref(false);
const isAssigned = (row: CourseRowFragment) =>
  teacherRequests.value?.some(
    (request) =>
      request.courseId === row.id && request.type === REQUEST_TYPES.ASSIGNMENT,
  ) ?? false;
const isVisible = (row: CourseRowFragment): boolean =>
  !teacherName.value &&
  row.visible &&
  row.program.degree.visible &&
  row.program.visible &&
  (row.track?.visible ?? true);

// Helpers
const getRequestTotal = (row: CourseRowFragment, requestType: RequestType) => {
  if (teacherRequests.value) {
    return (
      teacherRequests.value.find(
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
          v-if="teacherName"
          icon="sym_s_visibility"
          :color="selectedCourse === null ? 'primary' : 'grey'"
          size="sm"
          flat
          square
          dense
          @click="showTeacherDetails = true"
        />
        <QBtn
          v-if="teacherName"
          icon="sym_s_close"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="selectTeacher()"
        />
      </div>
      <QSpace />
      <div class="row q-gutter-md">
        <QSelect
          v-model="programs"
          :options="programsOptions"
          :disable="!!teacherName"
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
          :disable="!!teacherName"
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
          :disable="!!teacherName"
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
          :disable="!!teacherName"
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
  max-width: min($teacher-message-max-width * 1.05, 80vw);
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
.attribue {
  background-color: rgba($positive, 0.1);
}
</style>
