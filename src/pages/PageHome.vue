<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";

import HomePhaseMessage from "@/components/home/HomePhaseMessage.vue";

defineProps<{ message?: string }>();

const { t } = useI18n<I18nOptions>();

const { getValue } = useCustomTextsStore();

const title = getValue("home_title");
const defaultTitle = t("home.title");
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection class="text-h4" v-html="title || defaultTitle" />
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
