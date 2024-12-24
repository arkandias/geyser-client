<script setup lang="ts">
const edition = defineModel<boolean>();
defineProps<{
  title: string;
  editable?: boolean;
}>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCard flat square>
    <QCardSection class="text-subtitle1 text-uppercase text-center">
      {{ title }}
      <QBtn
        v-if="editable"
        icon="sym_s_edit"
        color="primary"
        size="sm"
        flat
        square
        dense
        @click="edition = !edition"
      />
    </QCardSection>
    <QCardSection>
      <slot />
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
