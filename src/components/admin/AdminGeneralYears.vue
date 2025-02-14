<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { ref } from "vue";

import { graphql } from "@/gql";
import {
  CreateYearDocument,
  DeleteYearDocument,
  SetCurrentYearDocument,
  UpdateYearVisibilityDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";

graphql(`
  query GetGeneralData {
    years: year(orderBy: [{ value: DESC }]) {
      value
      current
      visible
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
`);

const { years, currentYear } = useYearsStore();
const setCurrentYear = useMutation(SetCurrentYearDocument);
const updateYearVisibility = useMutation(UpdateYearVisibilityDocument);
const createYear = useMutation(CreateYearDocument);
const deleteYear = useMutation(DeleteYearDocument);

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
</script>

<template>
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
    <QItem v-for="year in years" :key="year.value" dense>
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
</template>

<style scoped lang="scss"></style>
