<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import { useAppSetting } from "@/composables/app-setting.ts";
import { PHASES } from "@/config/types/phases.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import { usePhaseStore } from "@/stores/phase.ts";

const { t } = useI18n<I18nOptions>();

const { currentPhase } = usePhaseStore();

const subtitle = useAppSetting(`phase-subtitle-${currentPhase.value}`, {
  sanitize: true,
});

const defaultSubtitle = computed(() => {
  switch (currentPhase.value) {
    case PHASES.REQUESTS:
      return t("home.subtitle.requests");
    case PHASES.ASSIGNMENTS:
      return t("home.subtitle.assignments");
    case PHASES.RESULTS:
      return t("home.subtitle.results");
    case PHASES.SHUTDOWN:
      return t("home.subtitle.shutdown");
    default:
      throw new Error(`Unknown phase`);
  }
});

const message = useAppSetting(`phase-message-${currentPhase.value}`, {
  sanitize: true,
});

const defaultMessage = computed(() => {
  switch (currentPhase.value) {
    case PHASES.REQUESTS:
      return t("home.message.requests");
    case PHASES.ASSIGNMENTS:
      return t("home.message.assignments");
    case PHASES.RESULTS:
      return t("home.message.results");
    case PHASES.SHUTDOWN:
      return t("home.message.shutdown");
    default:
      throw new Error(`Unknown phase`);
  }
});

const subtitleClass = ["text-h6", "text-center"];
const messageClass = ["text-justify"];
</script>

<template>
  <QCardSection>
    <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
    <p :class="subtitleClass" v-html="subtitle || defaultSubtitle" />
    <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
    <div :class="messageClass" v-html="message || defaultMessage" />
  </QCardSection>
</template>

<style scoped lang="scss"></style>
