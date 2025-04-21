<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modelValue = defineModel<any>();
const selectedFields = defineModel<string[]>("selectedFields");

const { name, multipleSelection } = defineProps<{
  keyPrefix: string;
  name: string;
  multipleSelection?: boolean;
}>();

const { t } = useCustomI18n();

const disable = computed(
  () => multipleSelection && !(selectedFields.value?.includes(name) ?? true),
);
</script>

<template>
  <div class="q-mr-md">
    <QCheckbox v-if="multipleSelection" v-model="selectedFields" :val="name" />
    <QToggle
      v-model="modelValue"
      :label="t(`${keyPrefix}.column.${name}.label`)"
      :disable
      left-label
    />
  </div>
</template>

<style scoped lang="scss"></style>
