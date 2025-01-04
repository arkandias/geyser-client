<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { useQueryParam } from "@/composables/query-param.ts";
import { graphql } from "@/gql";
import { GetTeacherDetailsDocument } from "@/gql/graphql.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import { useYearsStore } from "@/stores/years.ts";

import DetailsTeacher from "@/components/DetailsTeacher.vue";

graphql(`
  query GetTeacherDetails($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      ...TeacherDetails
      services(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        ...TeacherService
      }
      assigned: demandes_aggregate(
        where: {
          _and: [
            { enseignement: { annee: { _eq: $year } } }
            { type: { _eq: "attribution" } }
          ]
        }
      ) {
        ...TeacherRequests
      }
      primary: demandes_aggregate(
        where: {
          _and: [
            { enseignement: { annee: { _eq: $year } } }
            { type: { _eq: "principale" } }
          ]
        }
      ) {
        ...TeacherRequests
      }
      secondary: demandes_aggregate(
        where: {
          _and: [
            { enseignement: { annee: { _eq: $year } } }
            { type: { _eq: "secondaire" } }
          ]
        }
      ) {
        ...TeacherRequests
      }
      messages(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        ...TeacherMessage
      }
    }
  }
`);

const { activeYear } = useYearsStore();
const { profile } = useAuthenticationStore();
const { getValue: uid } = useQueryParam("uid");

const teacherDetailsQueryResult = useQuery({
  query: GetTeacherDetailsDocument,
  variables: {
    year: activeYear,
    uid: uid.value ?? profile.uid,
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
const details = computed(
  () => teacherDetailsQueryResult.data.value?.teacher ?? null,
);
</script>

<template>
  <QPage>
    <QCard flat square class="column items-center">
      <DetailsTeacher
        v-if="activeYear !== null && details"
        :year="activeYear"
        :uid="uid ?? profile.uid"
        :details-fragment="details"
        :service-fragment="details.services[0] ?? null"
        :requests-fragment="details"
        :messages-fragment="details.messages[0] ?? null"
      />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
:deep(.displayed-text) {
  max-width: $teacher-message-max-width;
}
</style>
