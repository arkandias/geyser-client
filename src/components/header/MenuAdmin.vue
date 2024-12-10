<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import { formatPhase } from "@/helpers/format.ts";
import type { Option } from "@/helpers/types.ts";
import { compareOrder } from "@/helpers/utils.ts";
import { useAnnees } from "@/stores/annees.ts";
import { usePhases } from "@/stores/phases.ts";

import MenuAdminOptions from "@/components/header/MenuAdminOptions.vue";
import MenuBase from "@/components/header/MenuBase.vue";

const {
  annees,
  enCours: anneeEnCours,
  setEnCours: setAnneeEnCours,
} = useAnnees();

const {
  phases,
  enCours: phaseEnCours,
  setEnCours: setPhaseEnCours,
} = usePhases();

const optionsAnnees: ComputedRef<Option<number>[]> = computed(() =>
  annees.value
    .map((annee) => ({
      value: annee,
      label: annee.toString(),
    }))
    .sort((a, b) => b.value - a.value),
);
const orderPhases = { voeux: 1, commission: 2, consultation: 3, fermeture: 4 };
const optionsPhases: ComputedRef<Option<string>[]> = computed(() =>
  phases.value
    .map((phase) => ({
      value: phase,
      label: formatPhase(phase),
    }))
    .sort(compareOrder(orderPhases)),
);
</script>

<template>
  <MenuBase label="Paramètres" icon="sym_s_settings">
    <QList dense>
      <QItem class="flex-center">
        <QItemLabel header>Paramètres</QItemLabel>
      </QItem>
      <QSeparator />
      <MenuAdminOptions
        :get-value="anneeEnCours"
        :set-value="setAnneeEnCours"
        :options="optionsAnnees"
        label="Année en cours"
        icon="sym_s_calendar_month"
      />
      <MenuAdminOptions
        :get-value="phaseEnCours"
        :set-value="setPhaseEnCours"
        :options="optionsPhases"
        label="Phase en cours"
        icon="sym_s_schedule"
      />
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss"></style>
