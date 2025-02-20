<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { PHASES } from "@/config/types/phases.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";
import { usePhaseStore } from "@/stores/phase.ts";

const props = defineProps<{ statusMessage?: string }>();

const { t } = useCustomI18n();
const { currentPhase } = usePhaseStore();
const { getValue } = useCustomTextsStore();

const title = props.statusMessage ?? getValue("home_title");
const defaultTitle = t("home.title");

const subtitle = getValue(`home_subtitle_${currentPhase.value}`);
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
      throw new Error(`Unknown phase: ${String(currentPhase.value)}`);
  }
});

const message = getValue(`home_message_${currentPhase.value}`);
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
      throw new Error(`Unknown phase: ${String(currentPhase.value)}`);
  }
});

const subtitleClass = ["text-h6", "text-center"];
const messageClass = ["text-justify"];
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection class="text-h4" v-html="title || defaultTitle" />
      <QCardSection v-if="message" class="text-h6 text-center">
        {{ message }}
      </QCardSection>
      <QCardSection>
        <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
        <p :class="subtitleClass" v-html="subtitle || defaultSubtitle" />
        <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
        <div :class="messageClass" v-html="message || defaultMessage" />
      </QCardSection>
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
.q-card {
  width: $homepage-width;
}
</style>
