<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import { PHASES } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import {
  SetCurrentPhaseDocument,
  SetCurrentYearDocument,
} from "@/gql/graphql.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { useYearsStore } from "@/stores/years.ts";

import SelectTeacher from "@/components/core/SelectTeacher.vue";
import MenuAdminOptions from "@/components/header/MenuAdminOptions.vue";
import MenuBase from "@/components/header/MenuBase.vue";

graphql(`
  mutation SetCurrentYear($value: Int!) {
    years: updateYear(
      where: { value: { _neq: $value } }
      _set: { current: null }
    ) {
      returning {
        value
      }
    }
    current: updateYearByPk(
      pkColumns: { value: $value }
      _set: { current: true }
    ) {
      value
    }
  }

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

const { t } = useI18n<I18nOptions>();

const { years, currentYear } = useYearsStore();
const { currentPhase } = usePhaseStore();
const { profile, impersonate } = useProfileStore();

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

const phaseOptions = [
  { value: PHASES.REQUESTS, label: t("phase.requests") },
  { value: PHASES.ASSIGNMENTS, label: t("phase.assignments") },
  { value: PHASES.RESULTS, label: t("phase.results") },
  { value: PHASES.SHUTDOWN, label: t("phase.shutdown") },
];
const yearOptions = computed(() =>
  years.value.map((year) => ({
    value: year,
    label: year.toString(),
  })),
);

const isImpersonatingFormOpen = ref(false);
const uid = ref(profile.uid);
</script>

<template>
  <MenuBase :label="t('header.admin.label')" icon="sym_s_settings">
    <QList>
      <QItem class="flex-center">
        <QItemLabel header>{{ t("header.admin.label") }}</QItemLabel>
      </QItem>
      <QSeparator />
      <MenuAdminOptions
        :get-value="currentYear"
        :set-value="setCurrentYearHandle"
        :options="yearOptions"
        :label="t('header.admin.current_year')"
        icon="sym_s_calendar_month"
      />
      <MenuAdminOptions
        :get-value="currentPhase"
        :set-value="setCurrentPhaseHandle"
        :options="phaseOptions"
        :label="t('header.admin.current_phase')"
        icon="sym_s_schedule"
      />
      <QItem v-close-popup clickable @click="isImpersonatingFormOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_comedy_mask" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Incarner un intervenant</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>

  <QDialog v-model="isImpersonatingFormOpen">
    <QCard square class="select-profile">
      <QCardSection>
        <SelectTeacher v-model="uid" />
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          v-close-popup
          label="Incarner"
          flat
          square
          @click="impersonate(uid)"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss">
.q-item {
  white-space: nowrap;
}
.select-profile {
  width: $login-dialog-width;
}
</style>
