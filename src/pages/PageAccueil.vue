<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive } from "vue";

import { GET_SERVICES_TABLE_ROWS } from "@/graphql/services.ts";
import { formatIntervenant } from "@/helpers/format.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useYears } from "@/stores/years.ts";
import type { ServiceRow } from "@/types/rows.ts";

import AccueilInformations from "@/components/accueil/AccueilInformations.vue";
import AccueilMessage from "@/components/accueil/AccueilMessage.vue";
import AccueilSubsection from "@/components/accueil/AccueilSubsection.vue";
import ResumeDemandes from "@/components/core/ResumeDemandes.vue";
import ServiceIntervenant from "@/components/core/ServiceIntervenant.vue";
import DetailsVoletIntervenant from "@/components/details/volet/DetailsVoletIntervenant.vue";

const { current: currentYear } = useYears();
const { profile, uid: moi } = useAuthentication();

const queryMyService = useQuery({
  query: GET_SERVICES_TABLE_ROWS,
  variables: reactive({
    year: computed(() => currentYear.value ?? 0),
    where: { intervenant: { uid: { _eq: moi } } },
  }),
  pause: () => currentYear.value === null,
  context: {
    additionalTypenames: ["demande", "message", "modification_service"],
  },
});
const myService: ComputedRef<ServiceRow | null> = computed(
  () => queryMyService.data.value?.services[0] ?? null,
);
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h5">
        Bienvenue,
        <br />
        {{ formatIntervenant(profile) }}
      </QCardSection>
      <AccueilMessage />
      <DetailsVoletIntervenant v-if="myService" :service="myService">
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
