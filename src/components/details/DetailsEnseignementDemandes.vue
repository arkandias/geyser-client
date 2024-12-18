<script setup lang="ts">
import type { Request } from "@/types/demandes.ts";

import CarteDemande from "@/components/core/CarteDemande.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";

defineProps<{
  title: string;
  demandes: Request[];
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
          :Request
          :archive
        />
      </div>
    </QCardSection>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
