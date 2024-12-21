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
    <div class="text-subtitle1 text-uppercase">
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
    <div style="display: flex; justify-content: center">
      <slot />
    </div>
  </QCardSection>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
