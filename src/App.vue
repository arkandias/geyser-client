<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive, watch } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { PHASES, isPhase } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import {
  GetCurrentPhaseDocument,
  GetUserProfileDocument,
  GetYearsDocument,
} from "@/gql/graphql.ts";
import { getClaims, logout } from "@/services/keycloak.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageHome from "@/pages/PageHome.vue";

const { setYears, setCurrentYear } = useYearsStore();
const { currentPhase, setCurrentPhase } = usePhaseStore();
const { login, logged } = useAuthenticationStore();
const perm = usePermissions();

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

  query GetUserProfile($uid: String!) {
    profile: intervenant_by_pk(uid: $uid) {
      uid
      firstname: prenom
      lastname: nom
      alias
      active: actif
    }
  }
`);

// User Profile
const claimsRef = computed(() => getClaims());
const userProfileQueryResult = useQuery({
  query: GetUserProfileDocument,
  variables: reactive({
    uid: computed(() => claimsRef.value?.userId ?? ""),
  }),
  pause: () => !claimsRef.value,
});
watch(
  [claimsRef, userProfileQueryResult.data],
  ([claims, result]) => {
    if (claims === null) {
      console.error("Login failed: No claims");
      return;
    }
    if (result?.profile === undefined) {
      return;
    }
    if (result.profile === null) {
      console.error("Login failed: Profile not found", result.profile);
      return;
    }
    login(result.profile, claims.allowedRoles, claims.defaultRole, logout);
  },
  { immediate: true },
);

// App Parameters
const yearsQueryResult = useQuery({
  query: GetYearsDocument,
  variables: {},
  pause: () => !logged,
});
const currentPhaseQueryResult = useQuery({
  query: GetCurrentPhaseDocument,
  variables: {},
  pause: () => !logged,
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

const accessGranted = computed(() => logged && perm.toAccess);
const accessDeniedMessage: ComputedRef<string> = computed(() => {
  if (!logged) {
    return "Vous n'êtes pas connecté";
  }
  if (currentPhase === PHASES.SHUTDOWN) {
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
