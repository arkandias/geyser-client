<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t } = useCustomI18n();
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
watch(
  activeYear,
  (value) => {
    selected.value = value;
  },
  { immediate: true },
);

const update = async () => {
  await selectYear(selected.value);
};
</script>

<template>
  <MenuBase :label="t('header.courses.year')" icon="sym_s_history">
    <QList>
      <QItem class="flex-center">
        <QItemLabel header>
          {{ t("header.courses.year") }}
        </QItemLabel>
      </QItem>
      <QSeparator />
      <QItem class="q-pl-sm">
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

<style scoped lang="scss"></style>
