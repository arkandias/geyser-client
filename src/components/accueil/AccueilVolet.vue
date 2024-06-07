<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
defineProps<{ label: string }>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QExpansionItem
    group="accueil"
    expand-separator
    :label
    header-class="text-subtitle1 text-uppercase text-center"
    class="text-body2 text-justify"
  >
    <QCard flat square>
      <QCardSection>
        <slot />
      </QCardSection>
    </QCard>
  </QExpansionItem>
</template>

<style scoped lang="scss"></style>
