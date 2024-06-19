<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import VueSubsection from "@/components/core/VueSubsection.vue";
import { formatResponsables } from "@/helpers/format.ts";
import { Responsable } from "@/helpers/types.ts";

defineProps<{
  responsablesEnseignement: Responsable[];
  responsablesParcours: Responsable[];
  responsablesMention: Responsable[];
}>();
</script>

<template>
  <VueSubsection title="Responsables">
    <div v-if="responsablesEnseignement.length" class="q-pa-sm">
      Responsable(s) de l'enseignement :
      {{ formatResponsables(responsablesEnseignement) }}
    </div>
    <div v-if="responsablesParcours.length" class="q-pa-sm">
      Responsable(s) du parcours :
      {{ formatResponsables(responsablesParcours) }}
    </div>
    <div v-if="responsablesMention.length" class="q-pa-sm">
      Responsable(s) de la mention :
      {{ formatResponsables(responsablesMention) }}
    </div>
  </VueSubsection>
</template>

<style scoped lang="scss"></style>
