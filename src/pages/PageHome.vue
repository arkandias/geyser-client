<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";
import { usePhaseStore } from "@/stores/phase.ts";

defineProps<{ alert?: string }>();

const { t } = useCustomI18n();
const { currentPhase } = usePhaseStore();
const { customTexts } = useCustomTextsStore();

const title = computed(() => customTexts.value.home_title || t("home.title"));
const subtitle = computed(
  () =>
    customTexts.value[`home_subtitle_${currentPhase.value}`] ||
    t(`home.subtitle.${currentPhase.value}`),
);
const message = computed(
  () =>
    customTexts.value[`home_message_${currentPhase.value}`] ||
    t(`home.message.${currentPhase.value}`),
);
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <!-- eslint-disable vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection class="text-h4 q-pa-xl" v-html="alert || title" />
      <QCardSection v-if="!alert" class="q-pt-none">
        <p class="text-subtitle2 text-center" v-html="subtitle" />
        <div v-if="message" class="text-body2 text-justify" v-html="message" />
      </QCardSection>
      <!-- eslint-enable vue/no-v-html vue/no-v-text-v-html-on-component -->
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
.q-card {
  width: $homepage-width;
}
</style>
