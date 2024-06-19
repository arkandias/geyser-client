<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { usePhases } from "@/stores/phases.ts";

const { enCours: phaseEnCours } = usePhases();
</script>

<template>
  <QCardSection v-if="phaseEnCours === 'voeux'">
    <p>Geyser est actuellement en phase de vœux.</p>
    <p>
      Vous pouvez faire des demandes principales et secondaires. Merci de
      demander l’équivalent de votre service en demandes principales et en
      demandes secondaires.
    </p>
  </QCardSection>
  <QCardSection v-if="phaseEnCours === 'commission'">
    <p>Les travaux de la commission sont en cours.</p>
    <p>
      Vous ne pouvez plus faire de demandes. Vous serez informé lorsque Geyser
      rouvrira pour consulter les attributions.
    </p>
  </QCardSection>
  <QCardSection v-if="phaseEnCours === 'consultation'">
    <p>Geyser est actuellement en phase de consultation.</p>
  </QCardSection>
  <QCardSection v-if="phaseEnCours === 'fermeture'">
    <p>Geyser est actuellement fermé.</p>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
