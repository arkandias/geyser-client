<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { formatCourseCaption } from "@/helpers/format.ts";
import type { CourseDetails } from "@/types/course.ts";

import DetailsExpansion from "@/components/details/DetailsExpansion.vue";
import DetailsCourseExtraInformation from "@/components/details/course/DetailsCourseExtraInformation.vue";
import DetailsCourseExtras from "@/components/details/course/DetailsCourseExtras.vue";
import DetailsCourseInformation from "@/components/details/course/DetailsCourseInformation.vue";
import DetailsCourseRequests from "@/components/details/course/DetailsCourseRequests.vue";

const { details } = defineProps<{
  details: CourseDetails | null;
}>();

const label: ComputedRef<string> = computed(() =>
  details
    ? details.name
    : "Sélectionnez un enseignement dans la liste ci-dessus",
);

const caption: ComputedRef<string> = computed(() =>
  details
    ? formatCourseCaption(details)
    : "Cliquez sur ce volet pour afficher des informations supplémentaires",
);
</script>

<template>
  <DetailsExpansion :label :caption>
    <DetailsCourseExtras v-if="details" :details />
    <DetailsCourseExtraInformation v-else />
  </DetailsExpansion>
  <QCard flat square>
    <DetailsCourseRequests v-if="details" :details="details" />
    <DetailsCourseInformation v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
