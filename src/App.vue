<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, watch } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { PHASES, isPhase } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import { GetCurrentPhaseDocument, GetYearsDocument } from "@/gql/graphql.ts";
import { roleHeader } from "@/services/urql.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageHome from "@/pages/PageHome.vue";

graphql(`
  query GetYears {
    years: annee(order_by: { value: desc }) {
      value
      current: en_cours
      visible
    }
  }

  query GetCurrentPhase {
    phases: phase(
      where: { en_cours: { _eq: true } }
      limit: 1 # unique
    ) {
      value
    }
  }
`);

const { setYears, setCurrentYear } = useYearsStore();
const { currentPhase, setCurrentPhase } = usePhaseStore();
const { isLogged, activeRole, login } = useAuthentication();
const perm = usePermissions();

// User profile
void login();
watch(activeRole, (value) => {
  roleHeader["X-Hasura-Role"] = value;
});

// App parameters
const yearsQueryResult = useQuery({
  query: GetYearsDocument,
  variables: {},
  pause: () => !isLogged.value,
});
const currentPhaseQueryResult = useQuery({
  query: GetCurrentPhaseDocument,
  variables: {},
  pause: () => !isLogged.value,
});
watch(
  yearsQueryResult.data,
  (value) => {
    setYears(value?.years.map((year) => year.value) ?? []);
    setCurrentYear(value?.years.find((year) => year.current)?.value ?? null);
  },
  { immediate: true },
);
watch(
  currentPhaseQueryResult.data,
  (value) => {
    if (value?.phases[0]?.value === undefined) {
      // not fetched yet
      return;
    }
    if (isPhase(value.phases[0].value)) {
      setCurrentPhase(value.phases[0].value);
      return;
    }
    console.warn("Invalid current phase", value.phases[0].value);
    setCurrentPhase(null);
  },
  { immediate: true },
);

const accessGranted = computed(() => isLogged.value && perm.toAccess);
const accessDeniedMessage = computed(() => {
  if (!isLogged.value) {
    return "Vous n'êtes pas connecté";
  }
  if (currentPhase.value === PHASES.SHUTDOWN) {
    return "Geyser est actuellement fermé";
  }
  return "Vous n'avez pas la permission d'accéder à Geyser";
});

// Apply distinct styling in development vs production environments to provide
// visual feedback to developers about which environment they're using
const devClass = {
  dev: import.meta.env.DEV,
};
</script>

<template>
  <QLayout view="hHh lpR fFf" class="text-body-1" :class="devClass">
    <TheHeader :disable="!accessGranted" />
    <QPageContainer>
      <RouterView v-if="accessGranted" />
      <PageHome v-else :message="accessDeniedMessage" />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss"></style>
