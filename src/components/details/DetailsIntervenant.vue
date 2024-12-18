<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import type { ServiceRow } from "@/types/rows.ts";

import DetailsIntervenantMessage from "@/components/details/DetailsIntervenantMessage.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ service: ServiceRow }>();

const contenu: ComputedRef<string | null> = computed(
  () => props.service.messages[0]?.body ?? null,
);
</script>

<template>
  <DetailsSection title="Messages">
    <DetailsIntervenantMessage
      :service-id="service.id"
      :uid="service.teacher.uid"
      :contenu
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
