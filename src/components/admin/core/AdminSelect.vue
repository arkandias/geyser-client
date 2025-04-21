<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modelValue = defineModel<any>();
const selectedFields = defineModel<string[]>("selectedFields");

const { name, multipleSelection } = defineProps<{
  keyPrefix: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[];
  multiple?: boolean;
  multipleSelection?: boolean;
}>();

const { t } = useCustomI18n();

const disable = computed(
  () => multipleSelection && !(selectedFields.value?.includes(name) ?? true),
);
</script>

<template>
  <QSelect
    v-model="modelValue"
    :options="options"
    :label="t(`${keyPrefix}.column.${name}.label`)"
    :disable
    :multiple
    :use-chips="multiple"
    emit-value
    map-options
    clearable
    clear-icon="sym_s_close"
    square
    dense
    options-dense
  >
    <template v-if="multipleSelection" #before>
      <QCheckbox v-model="selectedFields" :val="name" />
    </template>
  </QSelect>
</template>

<style scoped lang="scss"></style>
