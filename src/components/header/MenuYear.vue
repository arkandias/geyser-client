<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";
import { useYearsStore } from "@/stores/years.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t } = useI18n<I18nOptions>();

const { years, activeYear, selectYear } = useYearsStore();

const options = computed(() =>
  years.value
    .map((year) => ({
      value: year.value,
      label: year.value.toString(),
    }))
    .sort((a, b) => b.value - a.value),
);

const selected = ref<number | null>(null);

const update = async () => {
  await selectYear(selected.value);
};

watch(
  activeYear,
  (value) => {
    selected.value = value;
  },
  { immediate: true },
);
</script>

<template>
  <MenuBase :label="t('header.year.label')" icon="sym_s_history">
    <QList>
      <QItem class="flex-center">
        <QItemLabel header>{{ t("header.year.label") }}</QItemLabel>
      </QItem>
      <QSeparator />
      <QItem class="item-options">
        <QOptionGroup
          v-model="selected"
          :options
          color="primary"
          type="radio"
          @update:model-value="update"
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
