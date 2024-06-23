<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import DetailsIntervenantMessages from "@/components/details/DetailsIntervenantMessages.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";
import { Message, RowIntervenant } from "@/helpers/types.ts";

const props = defineProps<{ intervenant: RowIntervenant }>();

const messages: ComputedRef<Message[]> = computed(
  () => props.intervenant.messages,
);
</script>

<template>
  <DetailsSection title="Messages">
    <DetailsIntervenantMessages :uid="intervenant.uid" :messages />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
