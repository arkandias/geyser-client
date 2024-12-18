<script setup lang="ts">
import { couleurPriorite, formatIntervenant } from "@/helpers/format.ts";
import type { Priority } from "@/types/demandes.ts";

defineProps<{ priorite: Priority }>();
</script>

<template>
  <QChip :color="couleurPriorite(priorite.isPriority)" outline square dense>
    <QAvatar
      :color="couleurPriorite(priorite.isPriority)"
      text-color="white"
      square
    >
      {{ priorite.seniority }}
    </QAvatar>
    {{ formatIntervenant(priorite.profile) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
