<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { selected, useYears } from "@/stores/years.ts";
import type { Option } from "@/types/common.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { years } = useYears();

const options: ComputedRef<Option<number>[]> = computed(() =>
  years.value
    .map((year) => ({
      value: year,
      label: year.toString(),
    }))
    .sort((a, b) => b.value - a.value),
);
</script>

<template>
  <MenuBase label="Année" icon="sym_s_history">
    <QList dense>
      <QItem class="flex-center">
        <QItemLabel header>Année</QItemLabel>
      </QItem>
      <QSeparator />
      <QItem>
        <QOptionGroup
          v-model="selected"
          :options
          color="primary"
          type="radio"
        />
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.q-item {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
