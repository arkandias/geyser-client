<script setup lang="ts">
import { formatCoordinators } from "@/helpers/format.ts";
import type { Coordinator } from "@/types/coordinator.ts";

defineProps<{
  programCoordinators: Coordinator[];
  trackCoordinators: Coordinator[];
  courseCoordinators: Coordinator[];
}>();
</script>

<template>
  <div v-if="programCoordinators.length">
    Responsable{{ programCoordinators.length > 1 ? "s" : "" }} de la mention :
    {{ formatCoordinators(programCoordinators) }}
  </div>
  <div v-if="trackCoordinators.length">
    Responsable{{ programCoordinators.length > 1 ? "s" : "" }} du parcours :
    {{ formatCoordinators(trackCoordinators) }}
  </div>
  <div v-if="courseCoordinators.length">
    Responsable{{ programCoordinators.length > 1 ? "s" : "" }} de l'UE :
    {{ formatCoordinators(courseCoordinators) }}
  </div>
</template>

<style scoped lang="scss"></style>
