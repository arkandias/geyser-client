<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { PHASES } from "@/config/types/phases.ts";
import { ROLES } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import {
  GetCurrentPhaseDocument,
  GetCustomTextsDocument,
  GetYearsDocument,
} from "@/gql/graphql.ts";
import { getClaims } from "@/services/keycloak.ts";
import { setRoleHeader } from "@/services/urql.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { useYearsStore } from "@/stores/years.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageHome from "@/pages/PageHome.vue";

graphql(`
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

  query GetCustomTexts {
    customTexts: uiText(orderBy: [{ key: ASC }]) {
      key
      value
    }
  }
`);

const { t } = useCustomI18n();

const { fetchProfile, fetching, loaded, isActive, activeRole } =
  useProfileStore();
const { currentPhase, setCurrentPhase } = usePhaseStore();
const { setYears } = useYearsStore();
const { setCustomTexts } = useCustomTextsStore();

// User profile and active role
const claims = getClaims();
void fetchProfile(claims?.userId ?? "");
watch(activeRole, setRoleHeader, { immediate: true });

// Phase
const currentPhaseQueryResult = useQuery({
  query: GetCurrentPhaseDocument,
  variables: {},
  pause: () => !isActive.value,
  context: { additionalTypenames: ["Phase"] },
});
watch(
  currentPhaseQueryResult.data,
  (value) => {
    if (value?.phases[0]?.value === undefined) {
      // not fetched yet
      return;
    }
    setCurrentPhase(value.phases[0].value);
  },
  { immediate: true },
);

// Years
const yearsQueryResult = useQuery({
  query: GetYearsDocument,
  variables: {},
  pause: () => !isActive.value,
  context: { additionalTypenames: ["Year"] },
});
watch(
  yearsQueryResult.data,
  (value) => {
    if (value?.years === undefined) {
      // not fetched yet
      return;
    }
    setYears(
      value.years.map((year) => ({
        ...year,
        current: !!year.current,
      })),
    );
  },
  { immediate: true },
);

// Custom texts
const customTextsQueryResult = useQuery({
  query: GetCustomTextsDocument,
  variables: {},
  context: { additionalTypenames: ["UiText"] },
});
watch(
  customTextsQueryResult.data,
  (value) => {
    if (value?.customTexts === undefined) {
      // not fetched yet
      return;
    }
    setCustomTexts(value.customTexts);
  },
  { immediate: true },
);

const accessDeniedMessage = computed(() => {
  if (!claims) {
    return t("home.alert.no_auth");
  }
  if (fetching.value) {
    return t("home.alert.loading_profile");
  }
  if (!loaded.value) {
    return t("home.alert.profile_not_loaded");
  }
  if (!isActive.value) {
    return t("home.alert.profile_not_active");
  }
  if (currentPhaseQueryResult.fetching.value) {
    return t("home.alert.loading_phase");
  }
  if (
    currentPhase.value === PHASES.SHUTDOWN &&
    activeRole.value !== ROLES.ADMIN
  ) {
    return t("home.alert.shutdown");
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
      <PageHome v-else :alert="accessDeniedMessage" />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss"></style>
