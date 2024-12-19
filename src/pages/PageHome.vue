<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive } from "vue";

import { GET_TEACHERS_ROWS } from "@/graphql/teachers.ts";
import { formatUser } from "@/helpers/format.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useYears } from "@/stores/years.ts";
import type { TeacherRow } from "@/types/teachers.ts";

import DetailsVoletIntervenant from "@/components/details/volet/DetailsVoletIntervenant.vue";
import HomeInfo from "@/components/home/HomeInfo.vue";
import HomeMessage from "@/components/home/HomeMessage.vue";
import HomeSubsection from "@/components/home/HomeSubsection.vue";
import ServiceModifications from "@/components/service/ServiceModifications.vue";
import ServiceRequests from "@/components/service/ServiceRequests.vue";

const { current: currentYear } = useYears();
const { profile, uid: myUid } = useAuthentication();

const queryMyRow = useQuery({
  query: GET_TEACHERS_ROWS,
  variables: reactive({
    year: computed(() => currentYear.value ?? 0),
    where: { uid: { _eq: myUid } },
  }),
  pause: () => currentYear.value === null,
  context: {
    additionalTypenames: ["demande", "message", "modification_service"],
  },
});
const myRow: ComputedRef<TeacherRow | null> = computed(
  () => queryMyRow.data.value?.teachers[0] ?? null,
);
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h5">
        Bienvenue,
        <br />
        {{ formatUser(profile) }}
      </QCardSection>
      <HomeMessage />
      <DetailsVoletIntervenant v-if="myRow" :teacher-row="myRow">
        <template #service="scope">
          <HomeSubsection title="Mon service">
            <ServiceModifications v-bind="scope" />
          </HomeSubsection>
        </template>
        <template #requests="scope">
          <HomeSubsection title="Mes demandes">
            <ServiceRequests v-bind="scope" />
          </HomeSubsection>
        </template>
      </DetailsVoletIntervenant>
    </QCard>
    <HomeInfo />
  </QPage>
</template>

<style scoped lang="scss">
.q-page > * {
  max-width: $homepage-max-width;
  margin-bottom: 16px;
}
</style>
