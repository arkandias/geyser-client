<script setup lang="ts">
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QList dense class="text-left">
    <slot />
  </QList>
</template>

<style scoped lang="scss">
:slotted(.q-item) {
  padding: 8px !important;
}
</style>
