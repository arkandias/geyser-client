<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { graphql } from "@/gql";
import {
  GetCourseDetailsDocument,
  GetCourseRowsDocument,
  GetTeacherDetailsDocument,
  GetTeacherRowsDocument,
} from "@/gql/graphql.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { useYears } from "@/stores/years.ts";

import DetailsCourse from "@/components/DetailsCourse.vue";
import TableCourses from "@/components/TableCourses.vue";
import TableTeachers from "@/components/TableTeachers.vue";

const { activeYear, isCurrentYearActive } = useYears();
const { profile } = useAuthentication();
const { getValue: selectedCourse } = useQueryParam("courseId", true);
const { getValue: selectedTeacher } = useQueryParam("uid");
const perm = usePermissions();
const { closeLeftPanel, isLeftPanelOpen, openLeftPanel } = useLayout();

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

  query GetTeacherDetails($year: Int!, $uid: String!) {
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

const courseRowsQueryResult = useQuery({
  query: GetCourseRowsDocument,
  variables: reactive({
    year: computed(() => activeYear ?? -1),
  }),
  pause: () => activeYear === null,
  context: { additionalTypenames: ["demande"] },
});
const fetchingCourseRows = computed(() => courseRowsQueryResult.fetching.value);
const courseRows = computed(
  () => courseRowsQueryResult.data.value?.courses ?? [],
);

const teacherRowsQueryResult = useQuery({
  query: GetTeacherRowsDocument,
  variables: reactive({
    year: computed(() => activeYear ?? -1),
    where: computed(() =>
      perm.toViewAllServices ? {} : { uid: { _eq: profile.uid } },
    ),
  }),
  pause: () => activeYear === null,
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

const courseDetailsQueryResponse = useQuery({
  query: GetCourseDetailsDocument,
  variables: reactive({
    courseId: computed(() => selectedCourse ?? -1),
  }),
  pause: () => selectedCourse === null,
  context: {
    additionalTypenames: ["demande", "priorite"],
  },
});
const fetchingCourseDetails = computed(
  () => courseDetailsQueryResponse.fetching.value,
);
const courseDetails = computed(() =>
  courseDetailsQueryResponse.isPaused.value
    ? (courseDetailsQueryResponse.data.value?.course ?? null)
    : null,
);

const teacherDetailsQueryResponse = useQuery({
  query: GetTeacherDetailsDocument,
  variables: reactive({
    year: computed(() => activeYear ?? -1),
    uid: computed(() => selectedTeacher ?? ""),
  }),
  pause: () => !activeYear || !selectedTeacher,
  context: {
    additionalTypenames: [
      "demande",
      "message",
      "modification_service",
      "service",
    ],
  },
});
const teacherDetails = computed(() =>
  teacherDetailsQueryResponse.isPaused.value
    ? (teacherDetailsQueryResponse.data.value?.teacher ?? null)
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
      :disable="!isLeftPanelOpen"
    >
      <template #before>
        <TableTeachers
          :teacher-rows-fragment="teacherRows"
          :fetching="fetchingTeacherRows"
        />
      </template>
      <template #after>
        <QSplitter id="second-splitter" v-model="hSplitterRatio" horizontal>
          <template #before>
            <TableCourses
              :course-rows-fragment="courseRows"
              :teacher-name-fragment="teacherDetails"
              :teacher-requests-fragment="teacherDetails?.requests ?? null"
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
