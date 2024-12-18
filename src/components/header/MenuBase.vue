<script setup lang="ts">
import { type Ref, ref } from "vue";

import { couleurBouton } from "@/helpers/format.ts";

defineProps<{
  label: string;
  icon: string;
}>();
defineSlots<{ default(): unknown }>();

const open: Ref<boolean> = ref(false);
const tooltip: Ref<boolean> = ref(false);
</script>

<template>
  <QBtn :icon :color="couleurBouton(open)" flat square>
    <QTooltip v-model="tooltip">{{ label }}</QTooltip>
    <QMenu v-model="open" square @show="tooltip = false">
      <slot />
    </QMenu>
  </QBtn>
</template>

<style scoped lang="scss"></style>
