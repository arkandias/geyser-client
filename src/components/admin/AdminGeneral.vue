<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import { PHASES } from "@/config/types/phases.ts";
import { graphql } from "@/gql";
import {
  CreateYearDocument,
  DeleteYearDocument,
  GetGeneralDataDocument,
  SetCurrentPhaseDocument,
  SetCurrentYearDocument,
  UpdateAppSettingDocument,
  UpdateYearVisibilityDocument,
} from "@/gql/graphql.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

import AdminSection from "@/components/admin/AdminSection.vue";
import EditableText from "@/components/core/EditableText.vue";

graphql(`
  query GetGeneralData {
    phases: phase {
      value
      current
      description
    }
    years: year(orderBy: [{ value: DESC }]) {
      value
      comment
      current
      visible
    }
    appSettings: appSetting(orderBy: [{ label: ASC }]) {
      key
      label
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

  mutation UpdateYearVisibility($value: Int!, $visible: Boolean!) {
    updateYearByPk(pkColumns: { value: $value }, _set: { visible: $visible }) {
      value
      visible
    }
  }

  mutation CreateYear($value: Int!) {
    insertYearOne(object: { value: $value, visible: false }) {
      value
    }
  }

  mutation DeleteYear($value: Int!) {
    deleteYearByPk(value: $value) {
      value
    }
  }

  mutation UpdateAppSetting($key: String!, $value: String) {
    updateAppSettingByPk(pkColumns: { key: $key }, _set: { value: $value }) {
      key
      value
    }
  }
`);

const { t } = useI18n<I18nOptions>();

const { currentPhase } = usePhaseStore();
const { currentYear } = useYearsStore();

const phaseOptions = [
  { value: PHASES.REQUESTS, label: t("phase.requests") },
  { value: PHASES.ASSIGNMENTS, label: t("phase.assignments") },
  { value: PHASES.RESULTS, label: t("phase.results") },
  { value: PHASES.SHUTDOWN, label: t("phase.shutdown") },
];

// Data operations
const generalDataQueryResult = useQuery({ query: GetGeneralDataDocument });
const setCurrentPhase = useMutation(SetCurrentPhaseDocument);
const setCurrentYear = useMutation(SetCurrentYearDocument);
const updateYearVisibility = useMutation(UpdateYearVisibilityDocument);
const createYear = useMutation(CreateYearDocument);
const deleteYear = useMutation(DeleteYearDocument);
const updateAppSetting = useMutation(UpdateAppSettingDocument);

const data = computed(() => generalDataQueryResult.data.value);

const setCurrentPhaseHandle = async (phase: string): Promise<void> => {
  await setCurrentPhase.executeMutation({
    value: phase,
  });
};

const setCurrentYearHandle = async (year: number): Promise<void> => {
  await setCurrentYear.executeMutation({
    value: year,
  });
};

const updateYearVisibilityHandle = async (year: number, visible: boolean) => {
  await updateYearVisibility.executeMutation({
    value: year,
    visible,
  });
};

const newYear = ref<number | null>(null);
const createYearHandle = async () => {
  if (!newYear.value) return;
  await createYear.executeMutation({
    value: newYear.value,
  });
};
const deleteYearHandle = async (value: number) => {
  if (
    confirm(
      `Êtes-vous sûr de vouloir supprimer l'année ${value.toString()} ?
Si des cours ou des services sont associés à cette année, vous ne pourrez pas la supprimer.`,
    )
  ) {
    await deleteYear.executeMutation({ value });
  }
};

const appSettingKey = ref<string | null>(null);
const appSettingValue = computed(
  () =>
    data.value?.appSettings.find(
      (appSetting) => appSetting.key === appSettingKey.value,
    )?.value,
);
const appSettingEdit = ref(true);
const updateAppSettingHandle = computed(
  () => (value: string) =>
    updateAppSetting
      .executeMutation({
        key: appSettingKey.value ?? "",
        value: value || null,
      })
      .then(
        (result) => !!result.data?.updateAppSettingByPk?.key && !result.error,
      ),
);
</script>

<template>
  <AdminSection title="Phase en cours">
    <QOptionGroup
      v-model="currentPhase"
      :options="phaseOptions"
      type="radio"
      inline
      dense
      @update:model-value="setCurrentPhaseHandle"
    />
  </AdminSection>

  <AdminSection title="Années">
    <QList bordered separator dense>
      <QItem dense>
        <QItemSection avatar>
          <QBtn
            icon="sym_s_add_circle"
            color="primary"
            size="sm"
            flat
            square
            dense
            @click="createYearHandle()"
          />
        </QItemSection>
        <QItemSection>
          <QInput
            v-model="newYear"
            color="primary"
            placeholder="Nouvelle année"
            clear-icon="sym_s_close"
            clearable
            outlined
            square
            dense
          />
        </QItemSection>
      </QItem>
      <QItem v-for="year in data?.years" :key="year.value" dense>
        <QItemSection avatar>
          <QBtn
            icon="sym_s_cancel"
            color="primary"
            size="sm"
            flat
            square
            dense
            @click="deleteYearHandle(year.value)"
          />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ year.value }}</QItemLabel>
        </QItemSection>
        <QItemSection side>
          <QToggle
            v-model="year.visible"
            label="Visible"
            @update:model-value="
              (value) => updateYearVisibilityHandle(year.value, value)
            "
          />
        </QItemSection>
        <QItemSection side>
          <QRadio
            v-model="currentYear"
            :val="year.value"
            label="En cours"
            dense
            @update:model-value="setCurrentYearHandle"
          />
        </QItemSection>
      </QItem>
    </QList>
  </AdminSection>

  <AdminSection title="Paramètres d'application">
    <QList bordered separator dense>
      <QItem dense>
        <QItemSection avatar>
          <QBtn
            icon="sym_s_edit"
            color="primary"
            size="sm"
            flat
            square
            dense
            @click="appSettingEdit = true"
          />
        </QItemSection>
        <QItemSection>
          <QSelect
            v-model="appSettingKey"
            :options="data?.appSettings.map((appSetting) => appSetting.key)"
            label="Clé"
            outlined
            square
            dense
            options-dense
          />
        </QItemSection>
      </QItem>
      <QItem v-if="appSettingKey">
        <QItemSection>
          <div class="q-py-md">
            <EditableText
              v-model="appSettingEdit"
              :text="appSettingValue ?? ''"
              :set-text="updateAppSettingHandle"
            />
          </div>
        </QItemSection>
      </QItem>
    </QList>
  </AdminSection>
</template>

<style scoped lang="scss"></style>
