<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive } from "vue";

import { useQueryParam } from "@/composables/query-param.ts";
import { graphql } from "@/gql";
import { GetTeacherDetailsDocument } from "@/gql/graphql.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { useYearsStore } from "@/stores/years.ts";

import TeacherCoordinations from "@/components/teacher/TeacherCoordinations.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherServiceCreation from "@/components/teacher/TeacherServiceCreation.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

graphql(`
  query GetTeacherDetails($year: Int!, $uid: String!) {
    teacher: teacherByPk(uid: $uid) {
      coordinationsAggregate {
        aggregate {
          count
        }
      }
      ...TeacherTitle
      ...TeacherCoordinations
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
const { profile } = useProfileStore();
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
const isCoordinator = computed(
  () => !!data.value?.teacher?.coordinationsAggregate.aggregate?.count,
);
</script>

<template>
  <QPage>
    <QCard v-if="activeYear && teacher" flat square class="column items-center">
      <TeacherTitle v-if="teacher" :data-fragment="teacher" />
      <TeacherCoordinations v-if="isCoordinator" :data-fragment="teacher" />
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
