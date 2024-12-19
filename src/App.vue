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
import { current as currentPhase } from "@/stores/phases.ts";
import {
  current as currentYear,
  selected as selectedYear,
  years,
} from "@/stores/years.ts";
import { isProfile } from "@/types/profile.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageMessage from "@/pages/PageMessage.vue";

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
    years.value = value?.years.map((year) => year.value) ?? [];
    currentYear.value =
      value?.years.find((year) => year.current)?.value ?? null;
    selectedYear.value = currentYear.value;
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
      currentPhase.value = value.phases[0].value;
      return;
    }
    console.warn("Invalid current phase", value.phases[0].value);
    currentPhase.value = null;
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
      console.warn("No claims found during logging");
      return;
    }
    if (result?.profile === undefined) {
      return;
    }
    if (!isProfile(result.profile)) {
      console.warn("Invalid profile during logging", result.profile);
      return;
    }
    login(result.profile, claims.allowedRoles, claims.defaultRole, logout);
  },
  { immediate: true },
);

const accessGranted = computed(() => logged.value && perm.dAcceder);
const accessDeniedMessage: ComputedRef<string> = computed(() => {
  if (!logged.value) {
    return "Vous n'êtes pas connecté";
  }
  if (currentPhase.value === PHASES.SHUTDOWN) {
    return "Geyser est actuellement fermé";
  }
  return "Vous n'avez pas la permission d'accéder à Geyser";
});

// Apply distinct styling in development vs production environments
// to provide visual feedback to developers about which environment
// they're using
const devClass = {
  dev: import.meta.env.DEV,
};
</script>

<template>
  <QLayout view="hHh lpR fFf" class="text-body-1" :class="devClass">
    <TheHeader :disable="!accessGranted" />
    <QPageContainer>
      <RouterView v-if="accessGranted" />
      <PageMessage v-else :message="accessDeniedMessage" />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss"></style>
