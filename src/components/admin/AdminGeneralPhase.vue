<script setup lang="ts">
import { useMutation } from "@urql/vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { PHASES } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import { SetCurrentPhaseDocument } from "@/gql/graphql.ts";
import { usePhaseStore } from "@/stores/phase.ts";

graphql(`
  mutation SetCurrentPhase($value: String!) {
    phases: updatePhase(
      where: { value: { _neq: $value } }
      _set: { current: null }
    ) {
      returning {
        value
      }
    }
    enCours: updatePhaseByPk(
      pkColumns: { value: $value }
      _set: { current: true }
    ) {
      value
    }
  }
`);

const { t } = useCustomI18n();
const { currentPhase } = usePhaseStore();
const setCurrentPhase = useMutation(SetCurrentPhaseDocument);

const phaseOptions = [
  { value: PHASES.REQUESTS, label: t("phase.requests") },
  { value: PHASES.ASSIGNMENTS, label: t("phase.assignments") },
  { value: PHASES.RESULTS, label: t("phase.results") },
  { value: PHASES.SHUTDOWN, label: t("phase.shutdown") },
];

const setCurrentPhaseHandle = async (phase: string): Promise<void> => {
  await setCurrentPhase.executeMutation({
    value: phase,
  });
};
</script>

<template>
  <QOptionGroup
    v-model="currentPhase"
    :options="phaseOptions"
    type="radio"
    inline
    dense
    @update:model-value="setCurrentPhaseHandle"
  />
</template>

<style scoped lang="scss"></style>
