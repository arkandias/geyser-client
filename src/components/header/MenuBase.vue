<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

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
