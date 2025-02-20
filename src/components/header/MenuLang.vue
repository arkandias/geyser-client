<script setup lang="ts">
import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { useLanguage } from "@/composables/language.ts";
import { AVAILABLE_LOCALES, LOCALE_LABELS } from "@/services/i18n.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t, locale } = useCustomI18n();
const { setLang } = useLanguage();

const localeOptions = AVAILABLE_LOCALES.map((l) => ({
  value: l,
  label: LOCALE_LABELS[l],
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
          @update:model-value="setLang"
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
