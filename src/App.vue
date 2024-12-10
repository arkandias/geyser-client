<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import type { Ref } from "vue";
import { watch } from "vue";

import { GET_ANNEES } from "@/graphql/annees.ts";
import { GET_PHASES } from "@/graphql/phases.ts";
import {
  enCours as anneeEnCours,
  annees,
  selected as selectedAnnee,
} from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { enCours as phaseEnCours, phases } from "@/stores/phases.ts";

import TheHeader from "@/components/TheHeader.vue";
import type { Phase } from "@/helpers/types.ts";
import PageMessage from "@/pages/PageMessage.vue";

const { logged } = useAuthentication();
const perm = usePermissions();

const queryAnnees = useQuery({
  query: GET_ANNEES,
  variables: {},
  pause: () => !logged.value,
});
const queryPhases = useQuery({
  query: GET_PHASES,
  variables: {},
  pause: () => !logged.value,
});

watch(
  queryAnnees.data,
  (value) => {
    annees.value = value?.annees.map((annee) => annee.value) ?? [];
    anneeEnCours.value =
      value?.annees.find((annee) => annee.enCours)?.value ?? null;
    if (selectedAnnee.value === null) {
      selectedAnnee.value = anneeEnCours.value;
    }
  },
  { immediate: true },
);
watch(
  queryPhases.data as Ref<
    { phases: { value: Phase; enCours: boolean }[] } | undefined
  >,
  (value) => {
    phases.value = value?.phases.map((phase) => phase.value) ?? [];
    phaseEnCours.value =
      value?.phases.find((phase) => phase.enCours)?.value ?? null;
  },
  { immediate: true },
);

const layoutClass = {
  "text-body1": true,
  dev: import.meta.env.DEV,
};
</script>

<template>
  <QLayout view="hHh lpR fFf" :class="layoutClass">
    <TheHeader :disable="!logged || !perm.dAcceder" />
    <QPageContainer>
      <RouterView v-if="logged && perm.dAcceder" />
      <PageMessage
        v-else-if="phaseEnCours === 'fermeture'"
        message="Geyser est actuellement fermé"
      />
      <PageMessage v-else message="Vous n'avez pas accès à Geyser" />
    </QPageContainer>
  </QLayout>
</template>

<style scoped lang="scss"></style>
