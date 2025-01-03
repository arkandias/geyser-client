<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { graphql } from "@/gql";
import { GetTeacherDetailsDocument } from "@/gql/graphql.ts";

import DetailsTeacherDefault from "@/components/teacher/DetailsTeacherDefault.vue";
import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherNoService from "@/components/teacher/TeacherNoService.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { year, uid } = defineProps<{
  year: number;
  uid: string;
}>();

graphql(`
  query GetTeacherDetails($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      ...TeacherTitle
      ...TeacherRequests
      ...TeacherNoService
      services(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        ...TeacherService
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

const perm = usePermissions();

const teacherDetailsQueryResult = useQuery({
  query: GetTeacherDetailsDocument,
  variables: { year, uid },
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
const service = computed(() => details.value?.services[0] ?? null);
</script>

<template>
  <template v-if="details">
    <TeacherTitle :data-fragment="details" />
    <!-- TODO: Responsabilités -->
    <!-- TODO: Priorités -->
    <template v-if="service">
      <TeacherService
        v-if="service"
        :data-fragment="service"
        :editable="perm.toEditAService(uid)"
      />
      <TeacherRequests :data-fragment="details" />
      <TeacherMessage :year :uid :data-fragment="details.messages[0] ?? null" />
    </template>
    <TeacherNoService v-else :year :data-fragment="details" />
  </template>
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
