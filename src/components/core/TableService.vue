<script setup lang="ts">
defineSlots<{ default(): unknown }>();
</script>

<template>
  <table>
    <slot />
  </table>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
}
table {
  min-width: $service-table-min-width;
  border-spacing: 8px;
}
:slotted(td:last-child) {
  text-align: end;
}
:slotted(td:first-child) {
  text-align: start;
}
</style>
