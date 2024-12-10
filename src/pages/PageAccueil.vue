<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import type { ComputedRef } from "vue";
import { computed, reactive } from "vue";

import { GET_MY_ROW } from "@/graphql/intervenants.ts";
import { formatIntervenant } from "@/helpers/format.ts";
import type { RowIntervenant } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";

import AccueilInformations from "@/components/accueil/AccueilInformations.vue";
import AccueilMessage from "@/components/accueil/AccueilMessage.vue";
import AccueilSubsection from "@/components/accueil/AccueilSubsection.vue";
import ResumeDemandes from "@/components/core/ResumeDemandes.vue";
import ServiceIntervenant from "@/components/core/ServiceIntervenant.vue";
import DetailsVoletIntervenant from "@/components/details/volet/DetailsVoletIntervenant.vue";

const { enCours: anneeEnCours } = useAnnees();
const { intervenant, uid } = useAuthentication();

const queryMyRow = useQuery({
  query: GET_MY_ROW,
  variables: reactive({
    annee: computed(() => anneeEnCours.value ?? 0),
    uid,
  }),
  pause: () => anneeEnCours.value === null,
  context: {
    additionalTypenames: ["demande", "message", "modification_service"],
  },
});
const myRow: ComputedRef<RowIntervenant | null> = computed(
  () => queryMyRow.data.value?.intervenant ?? null,
);
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h5">
        Bienvenue,
        <br />
        {{ formatIntervenant(intervenant) }}
      </QCardSection>
      <AccueilMessage />
      <DetailsVoletIntervenant v-if="myRow" :intervenant="myRow">
        <template #service="scope">
          <AccueilSubsection title="Mon service">
            <ServiceIntervenant v-bind="scope" />
          </AccueilSubsection>
        </template>
        <template #demandes="scope">
          <AccueilSubsection title="Mes demandes">
            <ResumeDemandes v-bind="scope" />
          </AccueilSubsection>
        </template>
      </DetailsVoletIntervenant>
    </QCard>
    <AccueilInformations />
  </QPage>
</template>

<style scoped lang="scss">
.q-page > * {
  max-width: $homepage-max-width;
  margin-bottom: 16px;
}
</style>
