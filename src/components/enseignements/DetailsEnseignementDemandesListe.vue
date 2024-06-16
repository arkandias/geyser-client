<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import CarteResumeDemande from "@/components/core/CarteResumeDemande.vue";
import { Demande } from "@/helpers/types.ts";

defineProps<{
  title: string;
  demandes: Demande[];
}>();
</script>

<template>
  <QCardSection>
    <div class="q-mb-md">{{ title }}</div>
    <div class="row q-gutter-xs">
      <CarteResumeDemande
        v-for="demande in demandes"
        :key="demande.id"
        :demande
      />
    </div>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
