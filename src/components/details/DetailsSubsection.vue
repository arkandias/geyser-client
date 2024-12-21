<script setup lang="ts">
const edition = defineModel<boolean>();
defineProps<{
  title: string;
  editable?: boolean;
  center?: boolean;
}>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCardSection>
    <div class="text-subtitle1">
      {{ title }}
      <QToggle
        v-if="editable"
        v-model="edition"
        icon="sym_s_edit"
        color="primary"
        size="sm"
        dense
      />
    </div>
    <slot />
  </QCardSection>
</template>

<style scoped lang="scss">
.q-toggle {
  margin-left: 8px;
}
</style>
