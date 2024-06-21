<!-----------------------------------------------------------------------------
  - Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                        -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
defineProps<{ title: string }>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCardSection>
    <div class="text-subtitle1 text-uppercase">{{ title }}</div>
    <div style="display: flex; justify-content: center">
      <slot />
    </div>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
