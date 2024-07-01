<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { ComputedRef, computed } from "vue";

import type { Option } from "@/helpers/types.ts";

import { selected, useAnnees } from "@/stores/annees.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { annees } = useAnnees();

const options: ComputedRef<Option<number>[]> = computed(() =>
  annees.value
    .map((annee) => ({
      value: annee,
      label: annee.toString(),
    }))
    .sort((a, b) => b.value - a.value),
);
</script>

<template>
  <MenuBase label="Année" icon="sym_s_history">
    <QList dense>
      <QItem class="flex-center">
        <QItemLabel header>Année</QItemLabel>
      </QItem>
      <QSeparator />
      <QItem>
        <QOptionGroup
          v-model="selected"
          :options
          color="primary"
          type="radio"
        />
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.q-item {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
