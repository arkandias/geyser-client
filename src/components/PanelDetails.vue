<script setup lang="ts">
import { useQuery } from "@urql/vue";
import type { ComputedRef } from "vue";
import { computed, reactive } from "vue";

import { GET_ENSEIGNEMENT_DETAILS } from "@/graphql/enseignements.ts";
import {
  formatIntervenant,
  formatResumeIntervenant,
} from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import type { Details } from "@/types/enseignements.ts";

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

const { enseignement, service } = useData();

const queryDetails = useQuery({
  query: GET_ENSEIGNEMENT_DETAILS,
  variables: reactive({
    ensId: computed(() => enseignement.value?.id ?? 0),
  }),
  pause: () => enseignement.value === null,
  context: {
    additionalTypenames: ["demande", "priorite"],
  },
});
const details: ComputedRef<Details | null> = computed(
  () => queryDetails.data.value?.enseignement ?? null,
);

const label: ComputedRef<string> = computed(() =>
  enseignement.value
    ? enseignement.value.nom
    : service.value
      ? formatIntervenant(service.value.intervenant)
      : "Ce volet contient des informations supplémentaires",
);
const caption: ComputedRef<string> = computed(() =>
  enseignement.value
    ? enseignement.value.mention.cursus.nom +
      " \u2014 " +
      enseignement.value.mention.nom +
      " \u2014 " +
      (enseignement.value.parcours?.nom
        ? enseignement.value.parcours.nom + " \u2014 "
        : "") +
      `S${enseignement.value.semestre.toString()}` +
      " \u2014 " +
      enseignement.value.typeEnseignement.label
    : service.value
      ? formatResumeIntervenant(service.value)
      : "Cliquez dessus pour afficher ces informations",
);
</script>

<template>
  <DetailsVolet :label :caption>
    <DetailsVoletEnseignement v-if="enseignement && details" :details />
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
    <DetailsEnseignement v-if="enseignement && details" :details />
    <DetailsIntervenant v-else-if="service" :service />
    <DetailsInformations v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
