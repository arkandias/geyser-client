<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { Ref, ref, watch } from "vue";

const props = defineProps<{
  label?: string;
  caption?: string;
  disable?: boolean;
}>();
defineSlots<{ default(): unknown }>();

const expanded: Ref<boolean> = ref(false);

// changement d'enseignement : tout fermer et revenir en haut de la fenêtre
watch([() => props.label, () => props.caption], () => {
  expanded.value = false;
  document.getElementById("volet")?.scrollIntoView();
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
