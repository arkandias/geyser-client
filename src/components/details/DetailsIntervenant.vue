<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { RowIntervenant } from "@/helpers/types.ts";
import type { ComputedRef } from "vue";
import { computed } from "vue";

import DetailsIntervenantMessage from "@/components/details/DetailsIntervenantMessage.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ intervenant: RowIntervenant }>();

const contenu: ComputedRef<string | null> = computed(
  () => props.intervenant.messages[0]?.contenu ?? null,
);
</script>

<template>
  <DetailsSection title="Messages">
    <DetailsIntervenantMessage :uid="intervenant.uid" :contenu />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
