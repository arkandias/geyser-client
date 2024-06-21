<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef, reactive } from "vue";

import DetailsInformations from "@/components/details/DetailsInformations.vue";
import DetailsVolet from "@/components/details/DetailsVolet.vue";
import DetailsEnseignement from "@/components/details/DetailsEnseignement.vue";
import DetailsIntervenant from "@/components/details/DetailsIntervenant.vue";
import { useData } from "@/stores/data.ts";
import {
  formatIntervenant,
  formatResumeIntervenant,
} from "@/helpers/format.ts";
import DetailsVoletInformations from "@/components/details/DetailsVoletInformations.vue";
import { useQuery } from "@urql/vue";
import { GET_ENSEIGNEMENT_DETAILS } from "@/graphql/enseignements.ts";
import { Details } from "@/helpers/types.ts";
import DetailsVoletEnseignement from "@/components/details/DetailsVoletEnseignement.vue";
import DetailsVoletIntervenant from "@/components/details/DetailsVoletIntervenant.vue";

const { enseignement, intervenant } = useData();

const queryDetails = useQuery({
  query: GET_ENSEIGNEMENT_DETAILS,
  variables: reactive({
    ensId: computed(() => enseignement.value?.id ?? 0),
  }),
  pause: () => !enseignement.value,
  context: {
    additionalTypenames: ["ec_demande", "ec_priorite"],
  },
});
const details: ComputedRef<Details | null> = computed(
  () => queryDetails.data.value?.enseignement ?? null,
);

const label: ComputedRef<string> = computed(() =>
  enseignement.value
    ? enseignement.value.nom
    : intervenant.value
      ? formatIntervenant(intervenant.value)
      : "Ce volet contient des informations supplémentaires",
);
const caption: ComputedRef<string> = computed(() =>
  enseignement.value
    ? enseignement.value.mention.cursus.nom +
      " \u2014 " +
      enseignement.value.mention.nom +
      " \u2014 " +
      (enseignement.value.parcours?.nom ?? "") +
      " \u2014 S" +
      enseignement.value.semestre.toString() +
      " \u2014 " +
      enseignement.value.typeEnseignement.label
    : intervenant.value
      ? formatResumeIntervenant(intervenant.value)
      : "Cliquez dessus pour afficher ces informations",
);
</script>

<template>
  <DetailsVolet :label :caption>
    <DetailsVoletEnseignement v-if="enseignement && details" :details />
    <DetailsVoletIntervenant v-else-if="intervenant" :intervenant />
    <DetailsVoletInformations v-else />
  </DetailsVolet>
  <QCard flat square>
    <DetailsEnseignement v-if="enseignement && details" :details />
    <DetailsIntervenant v-else-if="intervenant" :intervenant />
    <DetailsInformations v-else />
  </QCard>
</template>

<style scoped lang="scss"></style>
