<script setup lang="ts">
import { formatCoordinators } from "@/helpers/format.ts";
import type { Coordinator } from "@/types/courses.ts";

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
      {{ formatCoordinators(responsablesMention) }}
    </div>
    <div v-if="responsablesParcours.length">
      Responsable(s) du parcours :
      {{ formatCoordinators(responsablesParcours) }}
    </div>
    <div v-if="responsablesEnseignement.length">
      Responsable(s) de l'enseignement :
      {{ formatCoordinators(responsablesEnseignement) }}
    </div>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
