<script setup lang="ts">
import { ref } from "vue";

import { buttonColor } from "@/helpers/format.ts";

defineProps<{
  label: string;
  icon: string;
}>();
defineSlots<{ default(): unknown }>();

const isOpen = ref(false);
const tooltip = ref(false);
</script>

<template>
  <QBtn :icon :color="buttonColor(isOpen)" flat square>
    <QTooltip v-model="tooltip">{{ label }}</QTooltip>
    <QMenu v-model="isOpen" square @show="tooltip = false">
      <slot />
    </QMenu>
  </QBtn>
</template>

<style scoped lang="scss"></style>
