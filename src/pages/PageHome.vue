<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";

import HomePhaseMessage from "@/components/home/HomePhaseMessage.vue";

defineProps<{ message?: string }>();

const { t } = useI18n<I18nOptions>();
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h4">{{ t("home.welcome") }}</QCardSection>
      <QCardSection v-if="message" class="text-h6 text-center">
        {{ message }}
      </QCardSection>
      <HomePhaseMessage v-else />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
.q-card {
  width: $homepage-width;
}
</style>
