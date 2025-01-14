<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceFragmentDoc } from "@/gql/graphql.ts";

import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherPriorities from "@/components/teacher/TeacherPriorities.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherServiceDetails from "@/components/teacher/TeacherServiceDetails.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceFragmentDoc>;
}>();

graphql(`
  fragment TeacherService on Service {
    ...TeacherServiceDetails
    ...TeacherRequests
    ...TeacherPriorities
    ...TeacherMessage
  }
`);

const service = computed(() =>
  useFragment(TeacherServiceFragmentDoc, dataFragment),
);
</script>

<template>
  <TeacherServiceDetails :data-fragment="service" />
  <TeacherRequests :data-fragment="service" />
  <TeacherPriorities :data-fragment="service" />
  <TeacherMessage :data-fragment="service" />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
