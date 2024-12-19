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
