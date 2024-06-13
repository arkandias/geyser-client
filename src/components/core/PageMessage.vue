<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QPage>
    <QCard flat square class="fixed-center">
      <QCardSection class="text-h5 text-center">
        <slot />
      </QCardSection>
    </QCard>
  </QPage>
</template>

<style scoped lang="scss"></style>
