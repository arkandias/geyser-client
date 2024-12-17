<script setup lang="ts" generic="T">
import type { ShallowRef } from "vue";
import { shallowRef, watch } from "vue";

import type { Nullable, Option } from "@/types/common.ts";

const props = defineProps<{
  label: string;
  icon: string;
  options: Option<T>[];
  getValue: Nullable<T>;
  setValue: (value: Nullable<T>) => void;
}>();

const model: ShallowRef<Nullable<T>> = shallowRef(null);

watch(
  () => props.getValue,
  () => {
    model.value = props.getValue;
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
      <QItem>
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
.q-item {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
