<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import DetailsEnseignement from "@/components/enseignement/DetailsEnseignement.vue";
import DetailsIntervenant from "@/components/intervenant/DetailsIntervenant.vue";
import { useData } from "@/stores/data.ts";

const { enseignement, intervenant } = useData();
</script>

<template>
  <DetailsEnseignement v-if="enseignement" :enseignement />
  <DetailsIntervenant v-else-if="intervenant" :intervenant />
</template>

<style scoped lang="scss"></style>
