<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, watch } from "vue";

import { useData } from "@/stores/data.ts";

defineProps<{
  label: string;
  caption: string;
}>();
defineSlots<{ default(): unknown }>();

const { enseignement, intervenant } = useData();

const expanded: Ref<boolean> = ref(false);

// on change: close and scroll to top (sync)
watch(
  [
    () => enseignement.value?.id,
    () => enseignement.value?.id ?? intervenant.value?.uid,
  ],
  () => {
    expanded.value = false;
    document.getElementById("volet")?.scrollIntoView();
  },
  {
    flush: "sync",
  },
);
</script>

<template>
  <QExpansionItem
    id="volet"
    v-model="expanded"
    expand-separator
    :label
    :caption
    dense
    dense-toggle
  >
    <QCard flat square class="text-body2">
      <slot />
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
