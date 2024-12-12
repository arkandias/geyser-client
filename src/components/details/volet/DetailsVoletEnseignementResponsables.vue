<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { Responsable } from "@/types/intervenants.ts";

import { formatResponsables } from "@/helpers/format.ts";

defineProps<{
  responsablesEnseignement: Responsable[];
  responsablesParcours: Responsable[];
  responsablesMention: Responsable[];
}>();
</script>

<template>
  <QCardSection>
    <div v-if="responsablesMention.length">
      Responsable(s) de la mention :
      {{ formatResponsables(responsablesMention) }}
    </div>
    <div v-if="responsablesParcours.length">
      Responsable(s) du parcours :
      {{ formatResponsables(responsablesParcours) }}
    </div>
    <div v-if="responsablesEnseignement.length">
      Responsable(s) de l'enseignement :
      {{ formatResponsables(responsablesEnseignement) }}
    </div>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
