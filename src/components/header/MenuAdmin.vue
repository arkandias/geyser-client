<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { type Phase, labelPhase, orderPhase } from "@/config/types/phases.ts";
import { PHASES } from "@/config/types/phases.ts";
import { usePhases } from "@/stores/phases.ts";
import { useYears } from "@/stores/years.ts";
import type { Option } from "@/types/common.ts";

import MenuAdminOptions from "@/components/header/MenuAdminOptions.vue";
import MenuBase from "@/components/header/MenuBase.vue";

const { years, current: currentYear, setCurrent: setCurrentYear } = useYears();

const { current: currentPhase, setCurrent: setCurrentPhase } = usePhases();

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
      label: labelPhase(phase),
    }))
    .sort((a, b) => orderPhase(a.value) - orderPhase(b.value)),
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
