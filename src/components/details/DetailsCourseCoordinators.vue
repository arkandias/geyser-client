<script setup lang="ts">
import { formatCoordinators } from "@/helpers/format.ts";
import type { Coordinator } from "@/types/coordinators.ts";

defineProps<{
  programCoordinators: Coordinator[];
  trackCoordinators: Coordinator[];
  courseCoordinators: Coordinator[];
}>();
</script>

<template>
  <QCardSection>
    <div v-if="programCoordinators.length">
      Responsable(s) de la mention :
      {{ formatCoordinators(programCoordinators) }}
    </div>
    <div v-if="trackCoordinators.length">
      Responsable(s) du parcours :
      {{ formatCoordinators(trackCoordinators) }}
    </div>
    <div v-if="courseCoordinators.length">
      Responsable(s) de l'enseignement :
      {{ formatCoordinators(courseCoordinators) }}
    </div>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
