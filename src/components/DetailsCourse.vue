<script setup lang="ts">
import { computed, watch } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseDetailsFragmentDoc } from "@/gql/graphql.ts";

import CourseArchives from "@/components/course/CourseArchives.vue";
import CourseCoordinators from "@/components/course/CourseCoordinators.vue";
import CourseDescription from "@/components/course/CourseDescription.vue";
import CourseExpansion from "@/components/course/CourseExpansion.vue";
import CourseExpansionDefault from "@/components/course/CourseExpansionDefault.vue";
import CoursePriorities from "@/components/course/CoursePriorities.vue";
import CourseRequests from "@/components/course/CourseRequests.vue";
import DetailsCourseDefault from "@/components/course/DetailsCourseDefault.vue";

const { courseDetailsFragment, fetching } = defineProps<{
  courseDetailsFragment: FragmentType<typeof CourseDetailsFragmentDoc> | null;
  fetching?: boolean;
}>();

graphql(`
  fragment CourseDetails on enseignement {
    courseId: id
    ...CourseExpansion
    ...CourseCoordinators
    ...CourseDescriptionData
    ...CourseRequests
    ...CoursePriorities
    ...CourseArchives
  }
`);

const details = computed(() =>
  useFragment(CourseDetailsFragmentDoc, courseDetailsFragment),
);

// When the selected course changes: scroll to top (sync)
watch(
  () => details.value?.courseId,
  () => {
    document.getElementById("volet")?.scrollIntoView();
  },
  {
    flush: "sync",
  },
);
</script>

<template>
  <CourseExpansion :data-fragment="details">
    <QCard flat square class="text-body2">
      <template v-if="details && !fetching">
        <CourseCoordinators :data-fragment="details" />
        <CourseDescription :data-fragment="details" />
      </template>
      <CourseExpansionDefault v-else :fetching />
    </QCard>
  </CourseExpansion>
  <QCard flat square>
    <template v-if="details && !fetching">
      <CourseRequests :data-fragment="details" />
      <QSeparator />
      <CoursePriorities :data-fragment="details" />
      <QSeparator />
      <CourseArchives :data-fragment="details" />
    </template>
    <DetailsCourseDefault v-else :fetching />
  </QCard>
</template>

<style scoped lang="scss">
.q-expansion-item {
  background-color: $grey-3;
}
.body--dark .q-expansion-item {
  background-color: $grey-9;
}
</style>
