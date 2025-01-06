<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  TeacherDetailsFragmentDoc,
  type TeacherServiceFragmentDoc,
} from "@/gql/graphql.ts";

import TeacherNoService from "@/components/teacher/TeacherNoService.vue";
import TeacherResponsibilities from "@/components/teacher/TeacherResponsibilities.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { detailsFragment } = defineProps<{
  year: number;
  uid: string;
  detailsFragment: FragmentType<typeof TeacherDetailsFragmentDoc>;
  serviceFragment: FragmentType<typeof TeacherServiceFragmentDoc> | null;
}>();

graphql(`
  fragment TeacherDetails on intervenant {
    ...TeacherTitle
    ...TeacherResponsibilities
    ...TeacherNoService

    responsibilitiesAggregate: responsabilites_aggregate {
      aggregate {
        count
      }
    }
  }
`);

const details = computed(() =>
  useFragment(TeacherDetailsFragmentDoc, detailsFragment),
);
const hasResponsibilities = computed(
  () => !!details.value.responsibilitiesAggregate.aggregate?.count,
);
</script>

<template>
  <TeacherTitle :data-fragment="details" />
  <TeacherResponsibilities
    v-if="hasResponsibilities"
    :data-fragment="details"
  />
  <TeacherService
    v-if="serviceFragment"
    :year
    :uid
    :data-fragment="serviceFragment"
  />
  <TeacherNoService v-else :year :uid :data-fragment="details" />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
