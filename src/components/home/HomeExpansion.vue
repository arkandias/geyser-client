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

<style scoped lang="scss">
.q-expansion-item {
  background-color: $grey-3;
}
.body--dark .q-expansion-item {
  background-color: $grey-9;
}
</style>
