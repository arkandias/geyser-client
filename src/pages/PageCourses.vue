<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { graphql } from "@/gql";
import {
  GetCourseDetailsDocument,
  GetCourseRowsDocument,
  GetServiceDetailsDocument,
  GetServiceRowsDocument,
} from "@/gql/graphql.ts";
import {
  hSplitterRatio,
  useLeftPanelStore,
  vSplitterRatio,
} from "@/stores/left-panel.ts";
import { useYearsStore } from "@/stores/years.ts";

import TableCourses from "@/components/TableCourses.vue";
import TableTeachers from "@/components/TableTeachers.vue";
import DetailsCourse from "@/components/course/DetailsCourse.vue";

graphql(`
  query GetCourseRows($year: Int!) {
    courses: course(
      where: {
        _and: [
          { year: { _eq: $year } }
          { hoursEffective: { _gt: 0 } }
          { groupsEffective: { _gt: 0 } }
        ]
      }
      orderBy: [
        { program: { degree: { name: ASC } } }
        { program: { name: ASC } }
        { track: { name: ASC } }
        { semester: ASC }
        { name: ASC }
        { type: ASC }
      ]
    ) {
      ...CourseRow
    }
  }

  query GetServiceRows($year: Int!, $where: TeacherBoolExp = {}) {
    services: service(
      where: { _and: [{ year: { _eq: $year } }, { teacher: $where }] }
      orderBy: [{ teacher: { lastname: ASC } }, { teacher: { firstname: ASC } }]
    ) {
      ...ServiceRows
    }
  }

  query GetCourseDetails($courseId: Int!) {
    course: courseByPk(id: $courseId) {
      ...CourseDetails
    }
  }

  query GetServiceDetails($year: Int!, $uid: String!) {
    services: service(
      where: { _and: [{ year: { _eq: $year } }, { uid: { _eq: $uid } }] }
      limit: 1 # unique
    ) {
      ...ServiceDetails
    }
  }
`);

const { activeYear, isCurrentYearActive } = useYearsStore();
const { profile } = useAuthentication();
const { closeLeftPanel, isLeftPanelOpen, openLeftPanel } = useLeftPanelStore();

const { getValue: selectedCourse } = useQueryParam("courseId", true);
const { getValue: selectedTeacher } = useQueryParam("uid");
const perm = usePermissions();

// Course rows
const courseRowsQueryResult = useQuery({
  query: GetCourseRowsDocument,
  variables: reactive({
    year: computed(() => activeYear.value ?? NaN),
  }),
  pause: () => activeYear.value === null,
  context: {
    additionalTypenames: ["Request"],
  },
});
const fetchingCourseRows = computed(() => courseRowsQueryResult.fetching.value);
const courseRows = computed(
  () => courseRowsQueryResult.data.value?.courses ?? [],
);

// Service rows
const serviceRowsQueryResult = useQuery({
  query: GetServiceRowsDocument,
  variables: reactive({
    year: computed(() => activeYear.value ?? NaN),
    where: computed(() =>
      perm.toViewAllServices ? {} : { uid: { _eq: profile.uid } },
    ),
  }),
  pause: () => activeYear.value === null,
  context: {
    additionalTypenames: ["Request", "ServiceModification", "Service"],
  },
});
const fetchingServiceRowss = computed(
  () => serviceRowsQueryResult.fetching.value,
);
const serviceRows = computed(
  () => serviceRowsQueryResult.data.value?.services ?? [],
);

// Selected course details
const courseDetailsQueryResult = useQuery({
  query: GetCourseDetailsDocument,
  variables: reactive({
    courseId: computed(() => selectedCourse.value ?? NaN),
  }),
  pause: () => selectedCourse.value === null,
  context: {
    additionalTypenames: ["Request", "Priority"],
  },
});
const courseDetails = computed(() =>
  courseDetailsQueryResult.isPaused.value
    ? null
    : (courseDetailsQueryResult.data.value?.course ?? null),
);

// Selected teacher courses
const teacherCoursesQueryResult = useQuery({
  query: GetServiceDetailsDocument,
  variables: reactive({
    year: computed(() => activeYear.value ?? NaN),
    uid: computed(() => selectedTeacher.value ?? ""),
  }),
  pause: () => !activeYear.value || !selectedTeacher.value,
  context: {
    additionalTypenames: ["Request", "ServiceModification", "Service"],
  },
});
const teacher = computed(() =>
  teacherCoursesQueryResult.isPaused.value
    ? null
    : (teacherCoursesQueryResult.data.value?.services[0] ?? null),
);

// Toggle left panel based on user's permissions
watch(
  () => perm.toViewAllServices,
  (value) => {
    if (value) {
      openLeftPanel();
    } else {
      closeLeftPanel();
    }
  },
  { immediate: true },
);
</script>

<template>
  <QPage>
    <QCard v-if="!isCurrentYearActive" id="warning-archive" class="text-body1">
      Vous consultez une archive ({{ activeYear }})
    </QCard>
    <QSplitter
      id="first-splitter"
      v-model="vSplitterRatio"
      :limits="[0, 100]"
      :disable="!isLeftPanelOpen"
    >
      <template #before>
        <TableTeachers
          :service-row-fragments="serviceRows"
          :fetching="fetchingServiceRowss"
        />
      </template>
      <template #after>
        <QSplitter id="second-splitter" v-model="hSplitterRatio" horizontal>
          <template #before>
            <TableCourses
              :course-row-fragments="courseRows"
              :fetching-courses="fetchingCourseRows"
              :service-details-fragment="teacher"
            />
          </template>
          <template #after>
            <DetailsCourse :data-fragment="courseDetails" />
          </template>
        </QSplitter>
      </template>
    </QSplitter>
  </QPage>
</template>

<style scoped lang="scss">
#warning-archive {
  height: $warning-height;
  text-align: center;
  background-color: $accent;
  color: black;
}
.q-splitter :deep(.q-splitter__separator) {
  background-color: $primary;
}
.dev .q-splitter :deep(.q-splitter__separator) {
  background-color: $secondary;
}

// Adjust splitters height to window's height
// and set tables height for sticky headers
#first-splitter,
#first-splitter :deep(.sticky-header-table) {
  height: calc(100vh - $header-height);
  #header:has(#warning-impersonating) ~ .q-page-container & {
    height: calc(100vh - $header-height - $warning-height);
  }
}
#warning-archive + #first-splitter,
#warning-archive + #first-splitter :deep(.sticky-header-table) {
  height: calc(100vh - $header-height - $warning-height);
  #header:has(#warning-impersonating) ~ .q-page-container & {
    height: calc(100vh - $header-height - $warning-height - $warning-height);
  }
}
#first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height) * v-bind("hSplitterRatio") / 100);
  #header:has(#warning-impersonating) ~ .q-page-container & {
    height: calc(
      (100vh - $header-height - $warning-height) * v-bind("hSplitterRatio") /
        100
    );
  }
}
/* prettier-ignore */
#warning-archive + #first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height - $warning-height) * v-bind('hSplitterRatio') / 100);
  #header:has(#warning-impersonating) ~ .q-page-container & {
    height: calc((100vh - $header-height - $warning-height - $warning-height) * v-bind('hSplitterRatio') / 100);
  }
}

// sticky header tables
:deep(.sticky-header-table) {
  thead tr:first-child th {
    background-color: #ffffff;
    top: 0;
  }
  thead tr th {
    position: sticky;
    z-index: 1;
  }
  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
  }
  /* prevent scrolling behind sticky top row on focus */
  tbody {
    /* height of all previous header rows */
    scroll-margin-top: 48px;
  }
}
/* background color in dark mode */
.body--dark :deep(.sticky-header-table) thead tr:first-child th {
  background-color: $dark;
}
</style>
