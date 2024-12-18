<script setup lang="ts">
import { formatResponsables } from "@/helpers/format.ts";
import type { Coordinator } from "@/types/enseignements.ts";

defineProps<{
  responsablesEnseignement: Coordinator[];
  responsablesParcours: Coordinator[];
  responsablesMention: Coordinator[];
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
