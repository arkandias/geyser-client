<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive } from "vue";

import { GET_COURSE_DETAILS } from "@/graphql/courses.ts";
import {
  formatCourseCaption,
  formatTeacherCaption,
  formatUser,
} from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import type { CourseDetails } from "@/types/courses.ts";

import DetailsEnseignement from "@/components/details/DetailsEnseignement.vue";
import DetailsInformations from "@/components/details/DetailsInformations.vue";
import DetailsIntervenant from "@/components/details/DetailsIntervenant.vue";
import DetailsVolet from "@/components/details/volet/DetailsVolet.vue";
import DetailsVoletEnseignement from "@/components/details/volet/DetailsVoletEnseignement.vue";
import DetailsVoletInformations from "@/components/details/volet/DetailsVoletInformations.vue";

const { selectedTeacher, selectedCourse } = useData();

const queryCourseDetails = useQuery({
  query: GET_COURSE_DETAILS,
  variables: reactive({
    ensId: computed(() => selectedCourse.value[0]?.id ?? 0),
  }),
  pause: () => selectedCourse.value.length === 0,
  context: {
    additionalTypenames: ["demande", "priorite"],
  },
});
const courseDetails: ComputedRef<CourseDetails | null> = computed(
  () => queryCourseDetails.data.value?.course ?? null,
);

const label: ComputedRef<string> = computed(() =>
  selectedCourse.value[0]
    ? selectedCourse.value[0].name
    : selectedTeacher.value[0]
      ? formatUser(selectedTeacher.value[0])
      : "Ce volet contient des informations supplémentaires",
);
const caption: ComputedRef<string> = computed(() =>
  selectedCourse.value[0]
    ? formatCourseCaption(selectedCourse.value[0])
    : selectedTeacher.value[0]
      ? formatTeacherCaption(selectedTeacher.value[0])
      : "Cliquez dessus pour afficher ces informations",
);
</script>

<template>
  <DetailsVolet :label :caption>
    <DetailsVoletEnseignement
      v-if="selectedCourse[0] && courseDetails"
      :course-details
    />
    <!--    <DetailsVoletIntervenant-->
    <!--      v-else-if="selectedTeacher[0]"-->
    <!--      :teacher="selectedTeacher[0]"-->
    <!--    >-->
    <!--      <template #service="scope">-->
    <!--        <DetailsSubsection title="Service">-->
    <!--          <ServiceIntervenant v-bind="scope" />-->
    <!--        </DetailsSubsection>-->
    <!--      </template>-->
    <!--      <template #requests="scope">-->
    <!--        <DetailsSubsection title="Demandes">-->
    <!--          <ResumeDemandes v-bind="scope" />-->
    <!--        </DetailsSubsection>-->
    <!--      </template>-->
    <!--    </DetailsVoletIntervenant>-->
    <DetailsVoletInformations v-else />
  </DetailsVolet>
  <QCard flat square>
    <DetailsEnseignement
      v-if="selectedTeacher[0] && courseDetails"
      :course-details
    />
    <DetailsIntervenant
      v-else-if="selectedTeacher[0]"
      :teacher-row="selectedTeacher[0]"
    />
    <DetailsInformations v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
