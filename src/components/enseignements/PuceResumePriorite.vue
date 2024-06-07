<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { couleurPriorite, formatIntervenant } from "@/helpers/format.ts";
import { Priorite } from "@/helpers/types.ts";

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
