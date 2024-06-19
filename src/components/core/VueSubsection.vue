<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
defineProps<{
  title: string;
}>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCardSection>
    <div class="text-subtitle1">{{ title }}</div>
    <slot />
  </QCardSection>
</template>

<style scoped lang="scss"></style>
