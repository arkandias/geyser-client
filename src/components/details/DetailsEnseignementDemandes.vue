<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { Demande } from "@/types/demandes.ts";

import CarteDemande from "@/components/core/CarteDemande.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";

defineProps<{
  title: string;
  demandes: Demande[];
  archive?: boolean;
}>();
</script>

<template>
  <DetailsSubsection :title>
    <QCardSection>
      <div class="row q-gutter-xs">
        <CarteDemande
          v-for="demande in demandes"
          :key="demande.id"
          :demande
          :archive
        />
      </div>
    </QCardSection>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
