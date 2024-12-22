<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";

import { formatCourseCaption } from "@/helpers/format.ts";
import type { CourseDetails } from "@/types/course.ts";

import DetailsCourseExtras from "@/components/details/course/DetailsCourseExtras.vue";
import DetailsCourseExtrasInformation from "@/components/details/course/DetailsCourseExtrasInformation.vue";
import DetailsCourseInformation from "@/components/details/course/DetailsCourseInformation.vue";
import DetailsCourseRequests from "@/components/details/course/DetailsCourseRequests.vue";

const { details } = defineProps<{
  details: CourseDetails | null;
}>();

// Expansion item props
const isExpanded: Ref<boolean> = ref(false);
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

// On course details change: close and scroll to top (sync)
watch(
  () => details,
  () => {
    isExpanded.value = false;
    document.getElementById("volet")?.scrollIntoView();
  },
  {
    flush: "sync",
  },
);
</script>

<template>
  <QExpansionItem
    id="volet"
    v-model="isExpanded"
    expand-separator
    :label
    :caption
    dense
    dense-toggle
  >
    <QCard flat square class="text-body2">
      <DetailsCourseExtras v-if="details" :details />
      <DetailsCourseExtrasInformation v-else />
    </QCard>
  </QExpansionItem>
  <QCard flat square>
    <DetailsCourseRequests v-if="details" :details="details" />
    <DetailsCourseInformation v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
