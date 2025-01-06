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
  width: $teacher-page-content-width;
  border-spacing: 8px;
}
:slotted(td:last-child) {
  text-align: end;
}
:slotted(td:first-child) {
  text-align: start;
}
</style>
