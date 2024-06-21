<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import AccueilInformations from "@/components/accueil/AccueilInformations.vue";
import AccueilMessage from "@/components/accueil/AccueilMessage.vue";
import { formatIntervenant } from "@/helpers/format.ts";
import { useAuthentication } from "@/stores/authentication.ts";

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
      <AccueilMessage />
      <!--      <AccueilSubsection title="Service">-->
      <!--        <ServiceIntervenant-->
      <!--          service-base=""-->
      <!--          uid=""-->
      <!--          total-modifications=""-->
      <!--          editable=""-->
      <!--          modifications=""-->
      <!--        />-->
      <!--      </AccueilSubsection>-->
      <!--      <AccueilSubsection title="Résumé">-->
      <!--        <ResumeDemandes-->
      <!--          total-attributions=""-->
      <!--          total-secondaires=""-->
      <!--          total-principales=""-->
      <!--        />-->
      <!--      </AccueilSubsection>-->
    </QCard>
    <AccueilInformations />
  </QPage>
</template>

<style scoped lang="scss">
.q-page > * {
  width: $homepage-width;
  margin-bottom: 16px;
}
</style>
