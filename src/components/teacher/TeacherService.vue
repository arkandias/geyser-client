<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceFragmentDoc } from "@/gql/graphql.ts";

import TeacherServiceDetails from "@/components/teacher/TeacherServiceDetails.vue";
import TeacherServiceMessage from "@/components/teacher/TeacherServiceMessage.vue";
import TeacherServicePriorities from "@/components/teacher/TeacherServicePriorities.vue";
import TeacherServiceRequests from "@/components/teacher/TeacherServiceRequests.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceFragmentDoc>;
}>();

graphql(`
  fragment TeacherService on Service {
    ...TeacherServiceDetails
    ...TeacherServiceRequests
    ...TeacherServicePriorities
    ...TeacherServiceMessage
  }
`);

const service = computed(() =>
  useFragment(TeacherServiceFragmentDoc, dataFragment),
);
</script>

<template>
  <TeacherServiceDetails :data-fragment="service" />
  <TeacherServiceRequests :data-fragment="service" />
  <TeacherServicePriorities :data-fragment="service" />
  <TeacherServiceMessage :data-fragment="service" />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
