<!-----------------------------------------------------------------------------
  - Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                        -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { ref, Ref } from "vue";

import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import EditableText from "@/components/core/EditableText.vue";

defineProps<{
  name: string;
  text: string | null;
  defaultText?: string;
  setText?: (text: string) => Promise<boolean>;
  editable?: boolean;
}>();
const edition: Ref<boolean> = ref(false);
</script>

<template>
  <DetailsSubsection v-model="edition" title="Description" :editable>
    <EditableText v-model="edition" :name :text :default-text :set-text />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
