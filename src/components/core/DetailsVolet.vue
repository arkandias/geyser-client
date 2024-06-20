<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { Ref, ref, watch } from "vue";

import { useData } from "@/stores/data.ts";

defineProps<{
  label?: string;
  caption?: string;
  disable?: boolean;
}>();
defineSlots<{ default(): unknown }>();

const { enseignement, intervenant } = useData();

const expanded: Ref<boolean> = ref(false);

// on change: close and scroll to top
watch([() => enseignement.value?.id, () => intervenant.value?.uid], () => {
  expanded.value = false;
  document.getElementById("details")?.scrollIntoView();
});
</script>

<template>
  <QExpansionItem
    id="volet"
    v-model="expanded"
    expand-separator
    :label
    :caption
    :disable
    class="details"
    dense
    dense-toggle
  >
    <QCard v-if="!disable" flat square class="text-body2">
      <slot />
    </QCard>
  </QExpansionItem>
</template>

<style scoped lang="scss">
.details {
  background-color: $grey-3;
}
.body--dark .details {
  background-color: $grey-9;
}
</style>
