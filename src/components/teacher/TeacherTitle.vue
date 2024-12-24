<script setup lang="ts">
import { formatUser } from "@/helpers/format.ts";
import type { Profile } from "@/types/profile.ts";

defineProps<{ profile: Profile; position?: string }>();
</script>

<template>
  <QCard flat square class="text-center">
    <QCardSection>
      <div class="text-h5">{{ formatUser(profile) }}</div>
      <div v-if="position" class="text-body1 text-italic">{{ position }}</div>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
