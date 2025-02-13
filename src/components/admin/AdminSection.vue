<script setup lang="ts">
defineProps<{
  title: string;
}>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCard flat square bordered class="q-my-md">
    <QCardSection>
      <div class="text-h6">{{ title }}</div>
    </QCardSection>
    <QCardSection>
      <slot />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
