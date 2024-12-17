<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import { useAnnees } from "@/stores/annees.ts";
import { usePhases } from "@/stores/phases.ts";
import type { Option } from "@/types/common.ts";
import { Phase } from "@/types/phases.ts";

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
const optionsPhases: ComputedRef<Option<Phase>[]> = computed(() =>
  phases.value.map((phase) => Phase[phase]).sort((a, b) => a.order - b.order),
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
