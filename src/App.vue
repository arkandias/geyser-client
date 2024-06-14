<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { watch } from "vue";

import TheHeader from "@/components/header/TheHeader.vue";
import { GET_ANNEES } from "@/graphql/annees.ts";
import { GET_PHASES } from "@/graphql/phases.ts";
import PageFermee from "@/pages/PageFermee.vue";
import PageInterdite from "@/pages/PageInterdite.vue";
import {
  active as anneeActive,
  enCours as anneeEnCours,
  annees,
} from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { enCours as phaseEnCours, phases } from "@/stores/phases.ts";

const { logged } = useAuthentication();
const perm = usePermissions();

const queryAnnees = useQuery({ query: GET_ANNEES, variables: {} });
const queryPhases = useQuery({ query: GET_PHASES, variables: {} });

watch(
  queryAnnees.data,
  (value) => {
    annees.value = value?.annees.map((annee) => annee.value) ?? [];
    anneeEnCours.value =
      value?.annees.find((annee) => annee.enCours)?.value ?? null;
    anneeActive.value = anneeEnCours.value;
  },
  { immediate: true },
);
watch(
  queryPhases.data,
  (value) => {
    phases.value = value?.phases.map((phase) => phase.value) ?? [];
    phaseEnCours.value =
      value?.phases.find((phase) => phase.enCours)?.value ?? null;
  },
  { immediate: true },
);
</script>

<template>
  <QLayout view="hHh lpR fFf" class="text-body1">
    <TheHeader :disable="!logged || !perm.dAcceder.value" />
    <QPageContainer>
      <RouterView v-if="logged && perm.dAcceder.value" />
      <PageFermee v-else-if="phaseEnCours === 'fermeture'" />
      <PageInterdite v-else />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss"></style>
