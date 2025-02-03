<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, watch } from "vue";

import { PHASES, isPhase } from "@/config/types/phases.ts";
import { ROLES, type Role, isRole } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import {
  GetCurrentPhaseDocument,
  GetUserProfileDocument,
  GetYearsDocument,
} from "@/gql/graphql.ts";
import { getClaims } from "@/services/keycloak.ts";
import { setRoleHeader } from "@/services/urql.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { useYearsStore } from "@/stores/years.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageHome from "@/pages/PageHome.vue";

graphql(`
  query GetUserProfile($uid: String!) {
    profile: teacherByPk(uid: $uid) {
      uid
      firstname
      lastname
      alias
      active
      roles {
        type
      }
    }
  }

  query GetCurrentPhase {
    phases: phase(
      where: { current: { _eq: true } }
      limit: 1 # unique
    ) {
      value
    }
  }

  query GetYears {
    years: year(orderBy: { value: DESC }) {
      value
      current
      visible
    }
  }
`);

const { setProfile, setRoles, isActive, activeRole } = useProfileStore();
const { currentPhase, setCurrentPhase } = usePhaseStore();
const { setYears, setCurrentYear } = useYearsStore();

// User profile
const claims = getClaims();
const profileQueryResult = useQuery({
  query: GetUserProfileDocument,
  variables: { uid: claims?.userId ?? "" },
  pause: () => claims === null,
});
watch(
  profileQueryResult.data,
  (value) => {
    if (value?.profile) {
      setProfile(value.profile);
      setRoles(
        value.profile.roles.reduce<Role[]>((acc, role) => {
          if (isRole(role.type)) {
            acc.push(role.type);
          } else {
            console.error(`Invalid role: ${role.type}`);
          }
          return acc;
        }, []),
      );
    }
  },
  { immediate: true },
);
watch(activeRole, setRoleHeader, { immediate: true });

// Phase
const currentPhaseQueryResult = useQuery({
  query: GetCurrentPhaseDocument,
  variables: {},
  pause: () => !isActive.value,
});
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
    console.error(`Invalid current phase: ${value.phases[0].value}`);
  },
  { immediate: true },
);

// Years
const yearsQueryResult = useQuery({
  query: GetYearsDocument,
  variables: {},
  pause: () => !isActive.value,
});
watch(
  yearsQueryResult.data,
  (value) => {
    setYears(value?.years.map((year) => year.value) ?? []);
    setCurrentYear(value?.years.find((year) => year.current)?.value ?? null);
  },
  { immediate: true },
);

const accessDeniedMessage = computed(() => {
  if (!claims) {
    return "Vous n'êtes pas authentifié";
  }
  if (profileQueryResult.fetching.value) {
    return "Chargement de votre profil...";
  }
  if (!profileQueryResult.data.value?.profile) {
    return "Votre profil n'a pas pu être chargé";
  }
  if (!isActive.value) {
    return "Votre profil n'est pas actif";
  }
  if (currentPhaseQueryResult.fetching.value) {
    return "Chargement de la phase en cours...";
  }
  if (
    activeRole.value !== ROLES.ADMIN &&
    currentPhase.value === PHASES.SHUTDOWN
  ) {
    return "Geyser est actuellement fermé";
  }
  return "";
});
const accessGranted = computed(() => !accessDeniedMessage.value);

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
