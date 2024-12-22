<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive, watch } from "vue";
import { useRoute } from "vue-router";

import { usePermissions } from "@/composables/permissions.ts";
import { GET_COURSES_ROWS, GET_COURSE_DETAILS } from "@/graphql/courses.ts";
import { GET_TEACHERS_ROWS, GET_TEACHER_DETAILS } from "@/graphql/teachers.ts";
import { getNumber, getValue } from "@/helpers/utils.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { useYears } from "@/stores/years.ts";
import type { CourseDetails } from "@/types/course.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import DetailsCourse from "@/components/DetailsCourse.vue";
import TableCourses from "@/components/TableCourses.vue";
import TableTeachers from "@/components/TableTeachers.vue";

const route = useRoute();

const { activeYear, isCurrentYearActive, selectYear } = useYears();
const { profile } = useAuthentication();
const perm = usePermissions();
const { closeLeftPanel, filtreIntervenants, openLeftPanel } = useLayout();
const {
  selectedCourse,
  selectedTeacher,
  selectCourse,
  selectTeacher,
  setCourses,
  setTeachers,
  setFetchingCourses,
  setFetchingTeachers,
} = useData();

// Get selections from query parameters
watch(
  [
    () => getNumber(route.query, "year"),
    () => getNumber(route.query, "courseId"),
    () => getValue(route.query, "uid"),
  ],
  () => {
    selectYear(getNumber(route.query, "year"));
    selectCourse(getNumber(route.query, "courseId"));
    selectTeacher(getValue(route.query, "uid"));
  },
  { immediate: true },
);

// Fetch and store courses rows
const queryCoursesRows = useQuery({
  query: GET_COURSES_ROWS,
  variables: reactive({
    year: computed(() => activeYear.value ?? -1),
  }),
  pause: () => activeYear.value === null,
  context: { additionalTypenames: ["demande"] },
});
watch(queryCoursesRows.fetching, setFetchingCourses, {
  immediate: true,
});
watch(
  () => queryCoursesRows.data.value?.courses ?? [],
  (courses) => {
    setCourses(courses);
    selectCourse(getNumber(route.query, "courseId"));
  },
  {
    immediate: true,
  },
);

// Fetch and store teachers rows
const queryTeachersRows = useQuery({
  query: GET_TEACHERS_ROWS,
  variables: reactive({
    year: computed(() => activeYear.value ?? -1),
    where: computed(() =>
      perm.toViewAllServices ? {} : { uid: { _eq: profile.uid } },
    ),
  }),
  pause: () => activeYear.value === null,
  context: {
    additionalTypenames: ["demande", "message", "modification_service"],
  },
});
watch(() => queryTeachersRows.fetching.value, setFetchingTeachers, {
  immediate: true,
});
watch(
  () => queryTeachersRows.data.value?.teachers ?? [],
  (teachers) => {
    setTeachers(teachers);
    selectTeacher(getValue(route.query, "uid"));
  },
  {
    immediate: true,
  },
);

const queryCourseDetails = useQuery({
  query: GET_COURSE_DETAILS,
  variables: reactive({
    courseId: computed(() => selectedCourse.value[0]?.id ?? -1),
  }),
  pause: () => !selectedCourse.value[0],
  context: {
    additionalTypenames: ["demande", "priorite"],
  },
});

const queryTeacherDetails = useQuery({
  query: GET_TEACHER_DETAILS,
  variables: reactive({
    year: computed(() => activeYear.value ?? -1),
    uid: computed(() => selectedTeacher.value[0]?.uid ?? ""),
  }),
  pause: () => !activeYear.value || !selectedTeacher.value[0],
  context: {
    additionalTypenames: ["demande", "message", "modification_service"],
  },
});

const courseDetails: ComputedRef<CourseDetails | null> = computed(() =>
  selectedCourse.value[0]
    ? (queryCourseDetails.data.value?.course ?? null)
    : null,
);

const teacherDetails: ComputedRef<TeacherDetails | null> = computed(() =>
  selectedTeacher.value[0]
    ? (queryTeacherDetails.data.value?.teacher ?? null)
    : null,
);

// Toggle the left panel based on user's permissions
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
    <QCard v-if="!isCurrentYearActive" id="warning-archive">
      Vous consultez une archive ({{ activeYear }})
    </QCard>
    <QSplitter
      id="first-splitter"
      v-model="vSplitterRatio"
      :limits="[0, 100]"
      :disable="!filtreIntervenants"
    >
      <template #before>
        <TableTeachers />
      </template>
      <template #after>
        <QSplitter id="second-splitter" v-model="hSplitterRatio" horizontal>
          <template #before>
            <TableCourses :teacher="teacherDetails" />
          </template>
          <template #after>
            <DetailsCourse :details="courseDetails" />
          </template>
        </QSplitter>
      </template>
    </QSplitter>
  </QPage>
</template>

<style scoped lang="scss">
#warning-archive {
  height: $warning-archive-height;
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

// adjust splitter's height to window's height
#first-splitter,
#first-splitter :deep(.sticky-header-table) {
  height: calc(100vh - $header-height);
}
#warning-archive + #first-splitter,
#warning-archive + #first-splitter :deep(.sticky-header-table) {
  height: calc(100vh - $header-height - $warning-archive-height);
}
#first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height) * v-bind("hSplitterRatio") / 100);
}
/* prettier-ignore */
#warning-archive + #first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height - $warning-archive-height) * v-bind('hSplitterRatio') / 100);
}
</style>
