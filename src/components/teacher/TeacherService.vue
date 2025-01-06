<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherServiceFragmentDoc } from "@/gql/graphql.ts";

import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherPriorities from "@/components/teacher/TeacherPriorities.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherServiceDetails from "@/components/teacher/TeacherServiceDetails.vue";

const { dataFragment } = defineProps<{
  year: number;
  uid: string;
  dataFragment: FragmentType<typeof TeacherServiceFragmentDoc>;
}>();

graphql(`
  fragment TeacherService on service {
    ...TeacherServiceDetails
    ...TeacherRequests
    ...TeacherPriorities
    ...TeacherMessage
  }
`);

const perm = usePermissions();

const service = computed(() =>
  useFragment(TeacherServiceFragmentDoc, dataFragment),
);
</script>

<template>
  <TeacherServiceDetails
    :data-fragment="service"
    :editable="perm.toEditAService(uid)"
  />
  <TeacherRequests :data-fragment="service" />
  <TeacherPriorities :data-fragment="service" />
  <TeacherMessage :year :uid :data-fragment="service" />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
