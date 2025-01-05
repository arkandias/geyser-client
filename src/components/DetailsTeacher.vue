<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  CountResponsibilitiesFragmentDoc,
  TeacherDetailsFragmentDoc,
  type TeacherMessageFragmentDoc,
  type TeacherPrioritiesFragmentDoc,
  type TeacherRequestsFragmentDoc,
  type TeacherResponsibilitiesFragmentDoc,
  type TeacherServiceFragmentDoc,
} from "@/gql/graphql.ts";

import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherNoService from "@/components/teacher/TeacherNoService.vue";
import TeacherPriorities from "@/components/teacher/TeacherPriorities.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherResponsibilities from "@/components/teacher/TeacherResponsibilities.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { detailsFragment, countFragment } = defineProps<{
  year: number;
  uid: string;
  detailsFragment: FragmentType<typeof TeacherDetailsFragmentDoc>;
  countFragment: FragmentType<typeof CountResponsibilitiesFragmentDoc>;
  responsibilityFragments: FragmentType<
    typeof TeacherResponsibilitiesFragmentDoc
  >[];
  serviceFragment: FragmentType<typeof TeacherServiceFragmentDoc> | null;
  requestsFragment: {
    assigned: FragmentType<typeof TeacherRequestsFragmentDoc>;
    primary: FragmentType<typeof TeacherRequestsFragmentDoc>;
    secondary: FragmentType<typeof TeacherRequestsFragmentDoc>;
  };
  priorityFragments: FragmentType<typeof TeacherPrioritiesFragmentDoc>[];
  messageFragment: FragmentType<typeof TeacherMessageFragmentDoc> | null;
}>();

graphql(`
  fragment TeacherDetails on intervenant {
    ...TeacherTitle
    ...TeacherNoService
  }

  fragment CountResponsibilities on responsable_aggregate {
    aggregate {
      count
    }
  }
`);

const perm = usePermissions();

const details = computed(() =>
  useFragment(TeacherDetailsFragmentDoc, detailsFragment),
);
const hasResponsibilities = computed(
  () =>
    !!useFragment(CountResponsibilitiesFragmentDoc, countFragment).aggregate
      ?.count,
);
</script>

<template>
  <TeacherTitle :data-fragment="details" />
  <TeacherResponsibilities
    v-if="hasResponsibilities"
    :data-fragments="responsibilityFragments"
  />
  <template v-if="serviceFragment">
    <TeacherService
      :data-fragment="serviceFragment"
      :editable="perm.toEditAService(uid)"
    />
    <TeacherRequests :data-fragment="requestsFragment" />
    <TeacherPriorities :data-fragments="priorityFragments" />
    <TeacherMessage :year :uid :data-fragment="messageFragment" />
  </template>
  <TeacherNoService v-else :year :data-fragment="details" />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
