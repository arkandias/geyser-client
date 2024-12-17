<script setup lang="ts">
import { couleurPriorite, formatIntervenant } from "@/helpers/format.ts";
import type { Priorite } from "@/types/demandes.ts";

defineProps<{ priorite: Priorite }>();
</script>

<template>
  <QChip :color="couleurPriorite(priorite.prioritaire)" outline square dense>
    <QAvatar
      :color="couleurPriorite(priorite.prioritaire)"
      text-color="white"
      square
    >
      {{ priorite.anciennete }}
    </QAvatar>
    {{ formatIntervenant(priorite.intervenant) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
