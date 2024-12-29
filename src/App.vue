<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive, watch } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { PHASES, isPhase } from "@/config/types/phases.ts";
import { GET_CURRENT_PHASE } from "@/graphql/phases.ts";
import { GET_PROFILE } from "@/graphql/profile.ts";
import { GET_YEARS } from "@/graphql/years.ts";
import { getClaims, logout } from "@/services/keycloak.ts";
import { login, useAuthentication } from "@/stores/authentication.ts";
import { usePhases } from "@/stores/phases.ts";
import { useYears } from "@/stores/years.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageHome from "@/pages/PageHome.vue";

const { setYears, setCurrentYear } = useYears();
const { currentPhase, setCurrentPhase } = usePhases();
const { logged } = useAuthentication();
const perm = usePermissions();

// Global Parameters
const queryYears = useQuery({
  query: GET_YEARS,
  variables: {},
  pause: () => !logged.value,
});
const queryCurrentPhase = useQuery({
  query: GET_CURRENT_PHASE,
  variables: {},
  pause: () => !logged.value,
});
watch(
  queryYears.data,
  (value) => {
    setYears(value?.years.map((year) => year.value) ?? []);
    setCurrentYear(value?.years.find((year) => year.current)?.value ?? null);
  },
  { immediate: true },
);
watch(
  queryCurrentPhase.data,
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

// User Profile
const claimsRef = computed(() => getClaims());
const queryProfile = useQuery({
  query: GET_PROFILE,
  variables: reactive({
    uid: computed(() => claimsRef.value?.userId ?? ""),
  }),
  pause: () => !claimsRef.value,
});
watch(
  [claimsRef, queryProfile.data],
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

const accessGranted = computed(() => logged.value && perm.toAccess);
const accessDeniedMessage: ComputedRef<string> = computed(() => {
  if (!logged.value) {
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
