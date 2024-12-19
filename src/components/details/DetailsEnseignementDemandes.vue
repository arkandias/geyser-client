<script setup lang="ts">
import type { RequestDetails } from "@/types/requests.ts";

import RequestCard from "@/components/core/RequestCard.vue";
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
        <RequestCard
          v-for="request in requests"
          :key="request.id"
          :request
          :archive
        />
      </div>
    </QCardSection>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
