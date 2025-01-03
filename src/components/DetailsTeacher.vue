<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  TeacherDetailsFragmentDoc,
  type TeacherMessageFragmentDoc,
  type TeacherRequestsFragmentDoc,
  type TeacherServiceFragmentDoc,
} from "@/gql/graphql.ts";

import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherNoService from "@/components/teacher/TeacherNoService.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { detailsFragment } = defineProps<{
  year: number;
  uid: string;
  detailsFragment: FragmentType<typeof TeacherDetailsFragmentDoc>;
  serviceFragment: FragmentType<typeof TeacherServiceFragmentDoc> | null;
  requestsFragment: {
    assigned: FragmentType<typeof TeacherRequestsFragmentDoc>;
    primary: FragmentType<typeof TeacherRequestsFragmentDoc>;
    secondary: FragmentType<typeof TeacherRequestsFragmentDoc>;
  };
  messagesFragment: FragmentType<typeof TeacherMessageFragmentDoc> | null;
}>();

graphql(`
  fragment TeacherDetails on intervenant {
    ...TeacherTitle
    ...TeacherNoService
  }
`);

const perm = usePermissions();

const details = computed(() =>
  useFragment(TeacherDetailsFragmentDoc, detailsFragment),
);
</script>

<template>
  <TeacherTitle :data-fragment="details" />
  <!-- TODO: Responsabilités -->
  <template v-if="serviceFragment">
    <TeacherService
      :data-fragment="serviceFragment"
      :editable="perm.toEditAService(uid)"
    />
    <TeacherRequests :data-fragment="requestsFragment" />
    <!-- TODO: Priorités -->
    <TeacherMessage :year :uid :data-fragment="messagesFragment" />
  </template>
  <TeacherNoService v-else :year :data-fragment="details" />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
