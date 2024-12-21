<script setup lang="ts">
import HomeInfo from "@/components/home/HomeInfo.vue";
import HomeMessage from "@/components/home/HomeMessage.vue";

defineProps<{ message?: string }>();
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h4"> Bienvenue </QCardSection>
      <QCardSection v-if="message" class="text-h6 text-center">
        {{ message }}
      </QCardSection>
      <HomeMessage v-else />
    </QCard>
    <!-- TODO: <HomeInfo />-->
  </QPage>
</template>

<style scoped lang="scss">
.q-page > * {
  max-width: $homepage-max-width;
  margin-bottom: 16px;
}
</style>
