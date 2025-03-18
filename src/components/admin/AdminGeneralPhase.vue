<script setup lang="ts">
import { useMutation } from "villus";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { PHASES } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import { SetCurrentPhaseDocument } from "@/gql/graphql.ts";
import { usePhaseStore } from "@/stores/usePhaseStore.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

const { t } = useCustomI18n();
const { currentPhase } = usePhaseStore();

const phaseOptions = [
  { value: PHASES.REQUESTS, label: t("phase.requests") },
  { value: PHASES.ASSIGNMENTS, label: t("phase.assignments") },
  { value: PHASES.RESULTS, label: t("phase.results") },
  { value: PHASES.SHUTDOWN, label: t("phase.shutdown") },
];

graphql(`
  mutation SetCurrentPhase($value: String!) {
    phase: updatePhaseByPk(
      pkColumns: { value: $value }
      _set: { current: true }
    ) {
      value
    }
  }
`);

const setCurrentPhase = useMutation(SetCurrentPhaseDocument, {
  refetchTags: ["All"],
});

const setCurrentPhaseHandle = async (phase: string): Promise<void> => {
  const { error } = await setCurrentPhase.execute({
    value: phase,
  });
  if (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.general.phase.error.setCurrent"),
      caption: error.message,
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.phase.success.setCurrent"),
    });
  }
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
