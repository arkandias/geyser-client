<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed } from "vue";

import { PHASE_OPTIONS } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import {
  SetCurrentPhaseDocument,
  SetCurrentYearDocument,
} from "@/gql/graphql.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

import MenuAdminOptions from "@/components/header/MenuAdminOptions.vue";
import MenuBase from "@/components/header/MenuBase.vue";

const { years, currentYear } = useYearsStore();
const { currentPhase } = usePhaseStore();

graphql(`
  mutation SetCurrentYear($value: Int!) {
    years: update_annee(
      where: { value: { _neq: $value } }
      _set: { en_cours: null }
    ) {
      returning {
        value
      }
    }
    current: update_annee_by_pk(
      pk_columns: { value: $value }
      _set: { en_cours: true }
    ) {
      value
    }
  }

  mutation SetCurrentPhase($value: String!) {
    phases: update_phase(
      where: { value: { _neq: $value } }
      _set: { en_cours: null }
    ) {
      returning {
        value
      }
    }
    enCours: update_phase_by_pk(
      pk_columns: { value: $value }
      _set: { en_cours: true }
    ) {
      value
    }
  }
`);

const setCurrentYear = useMutation(SetCurrentYearDocument);
const setCurrentPhase = useMutation(SetCurrentPhaseDocument);

const setCurrentYearHandle = async (year: number | null): Promise<void> => {
  if (year === null) {
    return;
  }
  await setCurrentYear.executeMutation({
    value: year,
  });
};
const setCurrentPhaseHandle = async (phase: string | null): Promise<void> => {
  if (phase === null) {
    return;
  }
  await setCurrentPhase.executeMutation({
    value: phase,
  });
};

const yearOptions = computed(() =>
  years.value.map((year) => ({
    value: year,
    label: year.toString(),
  })),
);
</script>

<template>
  <MenuBase label="Administration" icon="sym_s_settings">
    <QList dense>
      <QItem class="flex-center">
        <QItemLabel header>Administration</QItemLabel>
      </QItem>
      <QSeparator />
      <MenuAdminOptions
        :get-value="currentYear"
        :set-value="setCurrentYearHandle"
        :options="yearOptions"
        label="Année en cours"
        icon="sym_s_calendar_month"
      />
      <MenuAdminOptions
        :get-value="currentPhase"
        :set-value="setCurrentPhaseHandle"
        :options="[...PHASE_OPTIONS]"
        label="Phase en cours"
        icon="sym_s_schedule"
      />
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss"></style>
