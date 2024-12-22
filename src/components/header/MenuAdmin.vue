<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { PHASE_METADATA, type Phase } from "@/config/types/phases.ts";
import { PHASES } from "@/config/types/phases.ts";
import { SET_CURRENT_PHASE } from "@/graphql/phases.ts";
import { UPDATE_CURRENT_YEAR } from "@/graphql/years.ts";
import { usePhases } from "@/stores/phases.ts";
import { useYears } from "@/stores/years.ts";
import type { Option } from "@/types/common.ts";

import MenuAdminOptions from "@/components/header/MenuAdminOptions.vue";
import MenuBase from "@/components/header/MenuBase.vue";

const { years, currentYear } = useYears();
const { currentPhase } = usePhases();

const updateYear = useMutation(UPDATE_CURRENT_YEAR);
const updatePhase = useMutation(SET_CURRENT_PHASE);

const setCurrentYear = async (year: number | null): Promise<void> => {
  if (year === null) {
    return;
  }
  await updateYear.executeMutation({
    value: year,
  });
};
const setCurrentPhase = async (phase: string | null): Promise<void> => {
  if (phase === null) {
    return;
  }
  await updatePhase.executeMutation({
    value: phase,
  });
};

const optionsYears: ComputedRef<Option<number>[]> = computed(() =>
  years.value
    .map((year) => ({
      value: year,
      label: year.toString(),
    }))
    .sort((a, b) => b.value - a.value),
);
const optionsPhase: ComputedRef<Option<Phase>[]> = computed(() =>
  Object.values(PHASES)
    .map((phase) => ({
      value: phase,
      label: PHASE_METADATA[phase].label,
    }))
    .sort(
      (a, b) => PHASE_METADATA[a.value].order - PHASE_METADATA[b.value].order,
    ),
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
        :get-value="currentYear"
        :set-value="setCurrentYear"
        :options="optionsYears"
        label="Année en cours"
        icon="sym_s_calendar_month"
      />
      <MenuAdminOptions
        :get-value="currentPhase"
        :set-value="setCurrentPhase"
        :options="optionsPhase"
        label="Phase en cours"
        icon="sym_s_schedule"
      />
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss"></style>
