<script setup lang="ts">
import { type ComputedRef, computed, reactive } from "vue";

import { formatCourseCaption } from "@/helpers/format.ts";
import type { CourseDetails } from "@/types/courses.ts";

import DetailsEnseignement from "@/components/details/DetailsEnseignement.vue";
import DetailsInformations from "@/components/details/DetailsInformations.vue";
import DetailsCourseExtras from "@/components/details/volet/DetailsCourseExtras.vue";
import DetailsVolet from "@/components/details/volet/DetailsVolet.vue";
import DetailsVoletInformations from "@/components/details/volet/DetailsVoletInformations.vue";

const props = defineProps<{ details?: CourseDetails }>();

// const queryCourseDetails = useQuery({
//   query: GET_COURSE_DETAILS,
//   variables: reactive({
//     courseId: computed(() => props.courseRow?.id ?? -1),
//   }),
//   pause: () => !props.courseRow,
//   context: {
//     additionalTypenames: ["demande", "priorite"],
//   },
// });

// const courseDetails: ComputedRef<CourseDetails | null> = computed(
//   () => queryCourseDetails.data.value?.course ?? null,
// );

const label: ComputedRef<string> = computed(() =>
  props.details
    ? props.details.name
    : "Ce volet contient des informations supplémentaires",
);

const caption: ComputedRef<string> = computed(() =>
  props.details
    ? formatCourseCaption(props.details)
    : "Cliquez dessus pour afficher ces informations",
);
</script>

<template>
  <DetailsVolet :label :caption>
    <DetailsCourseExtras v-if="details" :details />
    <DetailsVoletInformations v-else />
  </DetailsVolet>
  <QCard flat square>
    <DetailsEnseignement v-if="details" :details />
    <!--    <DetailsIntervenant-->
    <!--      v-else-if="selectedTeacher[0]"-->
    <!--      :teacher-row="selectedTeacher[0]"-->
    <!--    />-->
    <DetailsInformations v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
