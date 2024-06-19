<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import InformationsAccueil from "@/components/accueil/InformationsAccueil.vue";
import { formatIntervenant } from "@/helpers/format.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import MessageAccueil from "@/components/accueil/MessageAccueil.vue";

const { intervenant } = useAuthentication();
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h5">
        Bienvenue,
        <br />
        {{ formatIntervenant(intervenant) }}
      </QCardSection>
      <MessageAccueil />
    </QCard>
    <InformationsAccueil />
  </QPage>
</template>

<style scoped lang="scss">
.q-page > .q-card {
  width: 750px;
  margin: 16px;
  padding: 0;
}
</style>
