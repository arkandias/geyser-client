<script setup lang="ts">
import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useLocale } from "@/composables/useLocale.ts";
import { AVAILABLE_LOCALES, LOCALE_LABELS } from "@/config/types/locales.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t, locale } = useCustomI18n();
const { setLocale } = useLocale();

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
      <QItem class="q-pl-sm">
        <QOptionGroup
          v-model="locale"
          :options="localeOptions"
          color="primary"
          type="radio"
          @update:model-value="setLocale"
        />
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss"></style>
