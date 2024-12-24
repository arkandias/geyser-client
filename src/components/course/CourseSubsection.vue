<script setup lang="ts">
const edition = defineModel<boolean>();
defineProps<{
  title: string;
  editable?: boolean;
}>();
defineSlots<{ default(): unknown }>();
</script>

<template>
  <QCardSection>
    <div class="text-subtitle1">
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
    </div>
    <slot />
  </QCardSection>
</template>

<style scoped lang="scss">
.q-toggle {
  margin-left: 8px;
}
</style>
