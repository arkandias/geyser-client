<script setup lang="ts">
import HomePhaseMessage from "@/components/home/HomePhaseMessage.vue";

defineProps<{ message?: string }>();
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h4">Bienvenue</QCardSection>
      <QCardSection v-if="message" class="text-h6 text-center">
        {{ message }}
      </QCardSection>
      <HomePhaseMessage v-else />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
.q-card {
  width: $homepage-width;
}
</style>
