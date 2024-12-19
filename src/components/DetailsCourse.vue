<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { formatCourseCaption } from "@/helpers/format.ts";
import type { CourseDetails } from "@/types/course.ts";

import DetailsEnseignement from "@/components/details/DetailsEnseignement.vue";
import DetailsInformations from "@/components/details/DetailsInformations.vue";
import DetailsCourseExtras from "@/components/details/volet/DetailsCourseExtras.vue";
import DetailsExpandable from "@/components/details/volet/DetailsExpandable.vue";
import DetailsVoletInformations from "@/components/details/volet/DetailsVoletInformations.vue";

const { courseDetails: details } = defineProps<{
  courseDetails: CourseDetails | null;
}>();

const label: ComputedRef<string> = computed(() =>
  details ? details.name : "Ce volet contient des informations supplémentaires",
);

const caption: ComputedRef<string> = computed(() =>
  details
    ? formatCourseCaption(details)
    : "Cliquez dessus pour afficher ces informations",
);
</script>

<template>
  <DetailsExpandable :label :caption :disable="!details">
    <DetailsCourseExtras v-if="details" :details />
    <DetailsVoletInformations v-else />
  </DetailsExpandable>
  <QCard flat square>
    <DetailsEnseignement v-if="details" :details />
    <DetailsInformations v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
