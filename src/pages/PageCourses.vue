<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, watch } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { graphql } from "@/gql";
import {
  GetCourseDetailsDocument,
  GetCourseRowsDocument,
  GetTeacherRequestsDocument,
  GetTeacherRowsDocument,
} from "@/gql/graphql.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import {
  hSplitterRatio,
  useLeftPanelStore,
  vSplitterRatio,
} from "@/stores/left-panel.ts";
import { useYearsStore } from "@/stores/years.ts";

import DetailsCourse from "@/components/DetailsCourse.vue";
import TableCourses from "@/components/TableCourses.vue";
import TableTeachers from "@/components/TableTeachers.vue";

graphql(`
  query GetCourseRows($year: Int!) {
    courses: enseignement(
      where: {
        _and: [
          { annee: { _eq: $year } }
          { heures_corrigees: { _gt: 0 } }
          { groupes_corriges: { _gt: 0 } }
        ]
      }
      order_by: [
        { mention: { cursus: { nom: asc } } }
        { mention: { nom: asc } }
        { parcours: { nom: asc } }
        { semestre: asc }
        { nom: asc }
        { type: asc }
      ]
    ) {
      ...CourseRow
    }
  }

  query GetTeacherRows($year: Int!, $where: intervenant_bool_exp = {}) {
    teachers: intervenant(
      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      ...TeacherRow
    }
  }

  query GetCourseDetails($courseId: Int!) {
    course: enseignement_by_pk(id: $courseId) {
      ...CourseDetails
    }
  }

  query GetTeacherRequests($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      ...TeacherName
      requests: demandes(
        where: { enseignement: { annee: { _eq: $year } } }
        order_by: [{ type: asc }, { ens_id: asc }]
      ) {
        ...TeacherRequest
      }
    }
  }
`);

const { activeYear, isCurrentYearActive } = useYearsStore();
const { profile } = useAuthenticationStore();
const { closeLeftPanel, isLeftPanelOpen, openLeftPanel } = useLeftPanelStore();

const { getValue: selectedCourse } = useQueryParam("courseId", true);
const { getValue: selectedTeacher } = useQueryParam("uid");
const perm = usePermissions();

// Course rows
const courseRowsQueryResult = useQuery({
  query: GetCourseRowsDocument,
  variables: {
    year: () => activeYear.value ?? -1,
  },
  pause: () => activeYear.value === null,
  context: { additionalTypenames: ["demande"] },
});
const fetchingCourseRows = computed(() => courseRowsQueryResult.fetching.value);
const courseRows = computed(
  () => courseRowsQueryResult.data.value?.courses ?? [],
);

// Teacher rows
const teacherRowsQueryResult = useQuery({
  query: GetTeacherRowsDocument,
  variables: {
    year: () => activeYear.value ?? -1,
    where: () => (perm.toViewAllServices ? {} : { uid: { _eq: profile.uid } }),
  },
  pause: () => activeYear.value === null,
  context: {
    additionalTypenames: [
      "demande",
      "message",
      "modification_service",
      "service",
    ],
  },
});
const fetchingTeacherRows = computed(
  () => teacherRowsQueryResult.fetching.value,
);
const teacherRows = computed(
  () => teacherRowsQueryResult.data.value?.teachers ?? [],
);

// Selected course details
const courseDetailsQueryResult = useQuery({
  query: GetCourseDetailsDocument,
  variables: {
    courseId: () => selectedCourse.value ?? -1,
  },
  pause: () => selectedCourse.value === null,
  context: {
    additionalTypenames: ["demande", "priorite"],
  },
});
const fetchingCourseDetails = computed(
  () => courseDetailsQueryResult.fetching.value,
);
const courseDetails = computed(() =>
  courseDetailsQueryResult.isPaused.value
    ? null
    : (courseDetailsQueryResult.data.value?.course ?? null),
);

// Selected teacher requests
const teacherRequestsQueryResult = useQuery({
  query: GetTeacherRequestsDocument,
  variables: {
    year: () => activeYear.value ?? -1,
    uid: () => selectedTeacher.value ?? "",
  },
  pause: () => !activeYear.value || !selectedTeacher.value,
  context: {
    additionalTypenames: [
      "demande",
      "message",
      "modification_service",
      "service",
    ],
  },
});
const teacherRequests = computed(() =>
  teacherRequestsQueryResult.isPaused.value
    ? null
    : (teacherRequestsQueryResult.data.value?.teacher ?? null),
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
    <QCard v-if="!isCurrentYearActive" id="warning-archive">
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
          :teacher-row-fragments="teacherRows"
          :fetching="fetchingTeacherRows"
        />
      </template>
      <template #after>
        <QSplitter id="second-splitter" v-model="hSplitterRatio" horizontal>
          <template #before>
            <TableCourses
              :course-row-fragments="courseRows"
              :teacher-name-fragment="teacherRequests"
              :teacher-request-fragments="teacherRequests?.requests ?? null"
              :fetching-courses="fetchingCourseRows"
            />
          </template>
          <template #after>
            <DetailsCourse
              :course-details-fragment="courseDetails"
              :fetching="fetchingCourseDetails"
            />
          </template>
        </QSplitter>
      </template>
    </QSplitter>
  </QPage>
</template>

<style scoped lang="scss">
#warning-archive {
  height: $archive-warning-height;
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
  height: calc(100vh - $header-height - $archive-warning-height);
}
#first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height) * v-bind("hSplitterRatio") / 100);
}
/* prettier-ignore */
#warning-archive + #first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height - $archive-warning-height) * v-bind('hSplitterRatio') / 100);
}
</style>
