<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive } from "vue";

import { GET_COURSE_DETAILS } from "@/graphql/courses.ts";
import { formatResumeIntervenant, formatUser } from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import type { CourseDetails } from "@/types/courses.ts";

import ResumeDemandes from "@/components/core/ResumeDemandes.vue";
import ServiceIntervenant from "@/components/core/ServiceIntervenant.vue";
import DetailsEnseignement from "@/components/details/DetailsEnseignement.vue";
import DetailsInformations from "@/components/details/DetailsInformations.vue";
import DetailsIntervenant from "@/components/details/DetailsIntervenant.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import DetailsVolet from "@/components/details/volet/DetailsVolet.vue";
import DetailsVoletEnseignement from "@/components/details/volet/DetailsVoletEnseignement.vue";
import DetailsVoletInformations from "@/components/details/volet/DetailsVoletInformations.vue";
import DetailsVoletIntervenant from "@/components/details/volet/DetailsVoletIntervenant.vue";

const { selectedService, selectedCourse } = useData();

const queryDetails = useQuery({
  query: GET_COURSE_DETAILS,
  variables: reactive({
    ensId: computed(() => selectedCourse.value[0]?.id ?? 0),
  }),
  pause: () => selectedCourse.value.length === 0,
  context: {
    additionalTypenames: ["demande", "priorite"],
  },
});
const details: ComputedRef<CourseDetails | null> = computed(
  () => queryDetails.data.value?.enseignement ?? null,
);

const label: ComputedRef<string> = computed(() =>
  selectedCourse.value[0]
    ? enseignement.value.name
    : service.value
      ? formatUser(service.value.teacher)
      : "Ce volet contient des informations supplémentaires",
);
const caption: ComputedRef<string> = computed(() =>
  enseignement.value
    ? enseignement.value.program.degree.name +
      " \u2014 " +
      enseignement.value.program.name +
      " \u2014 " +
      (enseignement.value.track?.name
        ? enseignement.value.track.name + " \u2014 "
        : "") +
      `S${enseignement.value.semester.toString()}` +
      " \u2014 " +
      enseignement.value.courseType.label
    : service.value
      ? formatResumeIntervenant(service.value)
      : "Cliquez dessus pour afficher ces informations",
);
</script>

<template>
  <DetailsVolet :label :caption>
    <DetailsVoletEnseignement v-if="enseignement && details" :CourseDetails />
    <DetailsVoletIntervenant v-else-if="service" :service>
      <template #service="scope">
        <DetailsSubsection title="Service">
          <ServiceIntervenant v-bind="scope" />
        </DetailsSubsection>
      </template>
      <template #demandes="scope">
        <DetailsSubsection title="Demandes">
          <ResumeDemandes v-bind="scope" />
        </DetailsSubsection>
      </template>
    </DetailsVoletIntervenant>
    <DetailsVoletInformations v-else />
  </DetailsVolet>
  <QCard flat square>
    <DetailsEnseignement v-if="enseignement && details" :CourseDetails />
    <DetailsIntervenant v-else-if="service" :service />
    <DetailsInformations v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
