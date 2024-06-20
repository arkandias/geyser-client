<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
defineSlots<{ default(): unknown }>();
</script>

<template>
  <table>
    <slot />
  </table>
</template>

<style scoped lang="scss">
table {
  min-width: $service-table-min-width;
  border-spacing: 8px;
}
:slotted(td:first-child) {
  text-align: start;
}
:slotted(td:nth-child(2)) {
  text-align: end;
}
</style>
