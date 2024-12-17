<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import type { RowService } from "@/types/rows.ts";

import DetailsIntervenantMessage from "@/components/details/DetailsIntervenantMessage.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ service: RowService }>();

const contenu: ComputedRef<string | null> = computed(
  () => props.service.messages[0]?.contenu ?? null,
);
</script>

<template>
  <DetailsSection title="Messages">
    <DetailsIntervenantMessage
      :service-id="service.id"
      :uid="service.intervenant.uid"
      :contenu
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
