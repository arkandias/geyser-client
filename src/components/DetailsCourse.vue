<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";

import { formatCourseCaption } from "@/helpers/format.ts";
import type { CourseDetails } from "@/types/course.ts";

import CourseExpansionContent from "@/components/course/CourseExpansionContent.vue";
import CourseExpansionDefault from "@/components/course/CourseExpansionDefault.vue";
import CourseRequests from "@/components/course/CourseRequests.vue";
import CourseRequestsDefault from "@/components/course/CourseRequestsDefault.vue";

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

// When the selected course changes: scroll to top (sync)
watch(
  () => details?.courseId,
  () => {
    // isExpanded.value = false;
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
      <CourseExpansionContent v-if="details" :details />
      <CourseExpansionDefault v-else />
    </QCard>
  </QExpansionItem>
  <QCard>
    <CourseRequests v-if="details" :details="details" />
    <CourseRequestsDefault v-else />
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
