<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import CarteDemande from "@/components/core/CarteDemande.vue";
import { Demande } from "@/helpers/types.ts";
import VueSubsection from "@/components/core/VueSubsection.vue";

defineProps<{
  title: string;
  demandes: Demande[];
  archive?: boolean;
}>();
</script>

<template>
  <VueSubsection :title>
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
  </VueSubsection>
</template>

<style scoped lang="scss"></style>
