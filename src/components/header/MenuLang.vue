<script setup lang="ts">
import { useI18n } from "vue-i18n";

import {
  AVAILABLE_LOCALES,
  type I18nOptions,
  LOCALE_LABELS,
} from "@/services/i18n.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t, locale } = useI18n<I18nOptions>();

const localeOptions = AVAILABLE_LOCALES.map((locale) => ({
  value: locale,
  label: LOCALE_LABELS[locale],
}));
</script>

<template>
  <MenuBase :label="t('header.lang.label')" icon="sym_s_translate">
    <QList>
      <QItem class="flex-center text-no-wrap">
        <QItemLabel header>
          {{ t("header.lang.label") }}
        </QItemLabel>
      </QItem>
      <QSeparator />
      <QItem class="item-options">
        <QOptionGroup
          v-model="locale"
          :options="localeOptions"
          color="primary"
          type="radio"
        />
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
