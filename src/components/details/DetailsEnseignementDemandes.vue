<script setup lang="ts">
import type { RequestDetails } from "@/types/requests.ts";

import CarteDemande from "@/components/core/CarteDemande.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";

defineProps<{
  title: string;
  requests: RequestDetails[];
  archive?: boolean;
}>();
</script>

<template>
  <DetailsSubsection :title>
    <QCardSection>
      <div class="row q-gutter-xs">
        <CarteDemande
          v-for="request in requests"
          :key="request.id"
          :RequestDetails
          :archive
        />
      </div>
    </QCardSection>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
