<script setup lang="ts">
import HomeMessageDefault from "@/components/core/HomeMessageDefault.vue";

defineProps<{ message?: string }>();
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h4"> Bienvenue </QCardSection>
      <QCardSection v-if="message" class="text-h6 text-center">
        {{ message }}
      </QCardSection>
      <HomeMessageDefault v-else />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
.q-card {
  max-width: $homepage-max-width;
}
</style>
