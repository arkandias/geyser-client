<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useDataSync } from "@/composables/datasync.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { GET_COURSE_DETAILS } from "@/graphql/courses.ts";
import { GET_TEACHER_DETAILS } from "@/graphql/teachers.ts";
import { getNumber, getValue } from "@/helpers/utils.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { useYears } from "@/stores/years.ts";
import type { CourseDetails } from "@/types/course.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import DetailsCourse from "@/components/DetailsCourse.vue";
import TableCourses from "@/components/TableCourses.vue";
import TableTeachers from "@/components/TableTeachers.vue";

const router = useRouter();
const route = useRoute();
const {
  selected: selectedYear,
  active: activeYear,
  isCurrentActive: isCurrentYearActive,
  select: selectYear,
} = useYears();
const perm = usePermissions();
const { closeLeftPanel, filtreIntervenants, openLeftPanel } = useLayout();
const { selectedCourse, selectedTeacher, selectCourse, selectTeacher } =
  useData();

useDataSync();

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

// sync query parameters with selection
watch(
  [
    () => getNumber(route.query, "year"),
    () => getNumber(route.query, "course_id"),
    () => getValue(route.query, "uid"),
  ],
  () => {
    selectYear(getNumber(route.query, "year"));
    selectCourse(getNumber(route.query, "course_id"));
    selectTeacher(getValue(route.query, "uid"));
  },
  { immediate: true },
);
watch(
  [
    () => selectedYear.value ?? undefined,
    () => selectedCourse.value[0]?.id,
    () => selectedTeacher.value[0]?.uid,
  ],
  async ([year, courseId, serviceId]) => {
    await router.replace({
      query: { year: year, course_id: courseId, uid: serviceId },
    });
  },
);

// open or close the left panel based on user's permissions
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
