<script setup lang="ts" generic="T extends string | number">
import { ref, watch } from "vue";

import type { Option } from "@/types/option.ts";

const { getValue } = defineProps<{
  label: string;
  icon: string;
  options: Option<T>[];
  getValue: T | null;
  setValue: (value: T | null) => void;
}>();

const model = ref<T | null>(null);
watch(
  () => getValue,
  (value) => {
    model.value = value;
  },
  { immediate: true },
);
</script>

<template>
  <QExpansionItem group="menu-admin" expand-separator>
    <template #header="{ expanded }">
      <QItemSection side>
        <QIcon :name="icon" :color="expanded ? 'primary' : 'grey'" />
      </QItemSection>
      <QItemSection class="text-no-wrap">
        {{ label }}
      </QItemSection>
    </template>
    <QList dense>
      <QItem class="item-options">
        <QOptionGroup
          v-model="model"
          :options
          color="primary"
          type="radio"
          @update:model-value="setValue"
        />
      </QItem>
    </QList>
  </QExpansionItem>
</template>

<style scoped lang="scss">
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
