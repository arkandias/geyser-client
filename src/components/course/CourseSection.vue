<script setup lang="ts">
defineProps<{ title: string }>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCardSection>
    <div class="text-h6">{{ title }}</div>
    <slot />
  </QCardSection>
</template>

<style scoped lang="scss"></style>
