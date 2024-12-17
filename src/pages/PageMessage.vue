<script setup lang="ts">
defineProps<{ message?: string }>();
</script>

<template>
  <QPage>
    <QCard flat square class="fixed-center">
      <QCardSection class="text-h5 text-center">
        {{ message }}
      </QCardSection>
    </QCard>
  </QPage>
</template>

<style scoped lang="scss"></style>
