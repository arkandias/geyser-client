<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

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
