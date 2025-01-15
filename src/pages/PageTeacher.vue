<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { graphql } from "@/gql";
import { GetTeacherDetailsDocument } from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";

import TeacherResponsibilities from "@/components/teacher/TeacherResponsibilities.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherServiceCreation from "@/components/teacher/TeacherServiceCreation.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

graphql(`
  query GetTeacherDetails($year: Int!, $uid: String!) {
    teacher: teacherByPk(uid: $uid) {
      responsibilitiesAggregate {
        aggregate {
          count
        }
      }
      ...TeacherTitle
      ...TeacherResponsibilities
      ...TeacherNoService

      services(
        where: { year: { _eq: $year } }
        limit: 1 # unique
      ) {
        id
        ...TeacherService
      }
    }
  }
`);

const { activeYear } = useYearsStore();
const { profile } = useAuthentication();
const { getValue: uid } = useQueryParam("uid");

const activeUid = computed(() => uid.value ?? profile.uid);

const teacherDetailsQueryResult = useQuery({
  query: GetTeacherDetailsDocument,
  variables: reactive({
    year: computed(() => activeYear.value ?? NaN),
    uid: activeUid,
  }),
  pause: () => activeYear.value === null,
  context: {
    additionalTypenames: ["Request", "ServiceModification", "Service"],
  },
});
const data = computed(() => teacherDetailsQueryResult.data.value);
const teacher = computed(() => data.value?.teacher ?? null);
const service = computed(() => data.value?.teacher?.services[0] ?? null);
const hasResponsibilities = computed(
  () => !!data.value?.teacher?.responsibilitiesAggregate.aggregate?.count,
);
</script>

<template>
  <QPage>
    <QCard v-if="activeYear && teacher" flat square class="column items-center">
      <TeacherTitle v-if="teacher" :data-fragment="teacher" />
      <TeacherResponsibilities
        v-if="hasResponsibilities"
        :data-fragment="teacher"
      />
      <TeacherService v-if="service" :data-fragment="service" />
      <TeacherServiceCreation
        v-else
        :year="activeYear"
        :uid="activeUid"
        :data-fragment="teacher"
      />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss"></style>
