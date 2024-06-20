<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import VueSection from "@/components/core/VueSection.vue";
import DetailsIntervenantMessages from "@/components/intervenant/DetailsIntervenantMessages.vue";
import { Message, RowIntervenant } from "@/helpers/types.ts";

const props = defineProps<{ intervenant: RowIntervenant }>();

const messages: ComputedRef<Message[]> = computed(
  () => props.intervenant.messages,
);
</script>

<template>
  <VueSection title="Messages">
    <DetailsIntervenantMessages :uid="intervenant.uid" :messages />
  </VueSection>
</template>

<style scoped lang="scss"></style>
