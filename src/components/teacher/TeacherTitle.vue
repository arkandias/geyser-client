<script setup lang="ts">
import { formatUser } from "@/helpers/format.ts";
import type { Profile } from "@/types/profile.ts";

defineProps<{ profile: Profile; position?: string }>();
</script>

<template>
  <QCardSection class="text-h5">
    <div class="text-h5">{{ formatUser(profile) }}</div>
    <div v-if="position" class="text-body1 text-italic">{{ position }}</div>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
