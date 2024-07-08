<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

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
