<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, useNotify } from "@/composables/useNotify.ts";
import { PHASES } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import {
  GetAppDataDocument,
  GetUserProfileDocument,
  RoleTypeEnum,
} from "@/gql/graphql.ts";
import { setRoleHeader } from "@/services/urql.ts";
import { useCustomTextsStore } from "@/stores/useCustomTextsStore.ts";
import { usePhaseStore } from "@/stores/usePhaseStore.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { HasuraClaims } from "@/types/claims.ts";

import TheHeader from "@/components/TheHeader.vue";
import PageHome from "@/pages/PageHome.vue";

const { claims } = defineProps<{ claims: HasuraClaims | null }>();

graphql(`
  query GetUserProfile($uid: String!) {
    profile: teacherByPk(uid: $uid) {
      uid
      displayname
      active
      roles {
        id
        type
      }
      services {
        id
        year
      }
    }
  }

  query GetAppData {
    phases: phase(
      where: { current: { _eq: true } }
      limit: 1 # unique
    ) {
      value
    }
    years: year(orderBy: { value: DESC }) {
      value
      current
      visible
    }
    customTexts: uiText(orderBy: [{ key: ASC }]) {
      key
      value
    }
  }
`);

const { t } = useCustomI18n();
const { notify } = useNotify();
const { active, activeRole, loaded, setProfile } = useProfileStore();
const { currentPhase, setCurrentPhase } = usePhaseStore();
const { setYears } = useYearsStore();
const { setCustomText } = useCustomTextsStore();

// Fetch user profile
const getUserProfile = useQuery({
  query: GetUserProfileDocument,
  variables: { uid: claims?.userId ?? "" },
  pause: !claims,
  context: { additionalTypenames: ["All"] },
});
watch(
  [getUserProfile.data, getUserProfile.error],
  ([data, error]) => {
    if (error) {
      notify(NotifyType.ERROR, {
        message: t("app.userProfile.error"),
        caption: error.message,
      });
    }

    if (data?.profile) {
      setProfile({
        uid: data.profile.uid,
        displayname: data.profile.displayname ?? "",
        active: data.profile.active,
        roles: data.profile.roles.map((role) => role.type),
        services: data.profile.services,
      });
    }
  },
  { immediate: true },
);
watch(activeRole, setRoleHeader, { immediate: true });

// Fetch app data
const getAppData = useQuery({
  query: GetAppDataDocument,
  variables: {},
  pause: () => !loaded.value || !active.value,
  context: { additionalTypenames: ["All"] },
});
watch(
  [getAppData.data, getAppData.error],
  ([data, error]) => {
    if (error) {
      notify(NotifyType.ERROR, {
        message: t("app.data.error"),
        caption: error.message,
      });
      return;
    }
    if (data?.phases[0]) {
      setCurrentPhase(data.phases[0].value);
    }
    if (data?.years) {
      setYears(
        data.years.map((year) => ({
          value: year.value,
          current: year.current,
          visible: year.visible,
        })),
      );
    }
    if (data?.customTexts) {
      data.customTexts.forEach((text) => {
        setCustomText(text.key, text.value);
      });
    }
  },
  { immediate: true },
);

// Access check and information messages
const accessDeniedMessage = computed(() => {
  if (!claims) {
    return t("home.alert.noAuth");
  }
  if (getUserProfile.fetching.value) {
    return t("home.alert.loadingProfile");
  }
  if (!loaded.value) {
    return t("home.alert.profileNotLoaded");
  }
  if (!active.value) {
    return t("home.alert.profileNotActive");
  }
  if (getAppData.fetching.value) {
    return t("home.alert.loadingAppData");
  }
  if (
    currentPhase.value === PHASES.SHUTDOWN &&
    activeRole.value !== RoleTypeEnum.Admin
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
