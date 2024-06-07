<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
const model = defineModel<boolean>();
defineProps<{
  title: string;
  editable?: boolean;
}>();
defineSlots<{
  default(): unknown;
  actions(): unknown;
}>();

const titleClass = [
  "text-subtitle1",
  "text-uppercase",
  "text-center",
  "row",
  "no-wrap",
  "justify-between",
];
</script>

<template>
  <QCard bordered flat square>
    <QCardSection :class="titleClass">
      <div class="col-1" />
      <div class="col-auto">{{ title }}</div>
      <div class="col-1">
        <QToggle
          v-if="editable"
          v-model="model"
          icon="sym_s_edit"
          color="primary"
          dense
          size="sm"
        />
      </div>
    </QCardSection>
    <QCardSection>
      <slot />
    </QCardSection>
    <QCardActions v-if="$slots.actions" align="right" class="q-pa-md">
      <slot name="actions" />
    </QCardActions>
  </QCard>
</template>

<style scoped lang="scss"></style>
