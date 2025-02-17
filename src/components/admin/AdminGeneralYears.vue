<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

import { graphql } from "@/gql";
import {
  CreateYearDocument,
  DeleteYearDocument,
  SetCurrentYearDocument,
  UpdateYearVisibilityDocument,
} from "@/gql/graphql.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import { useYearsStore } from "@/stores/years.ts";

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

  mutation UpdateYearVisibility($value: Int!, $visible: Boolean!) {
    updateYearByPk(pkColumns: { value: $value }, _set: { visible: $visible }) {
      value
      visible
    }
  }

  mutation CreateYear($value: Int!, $visible: Boolean!) {
    insertYearOne(object: { value: $value, visible: $visible }) {
      value
    }
  }

  mutation DeleteYear($value: Int!) {
    deleteYearByPk(value: $value) {
      value
    }
  }
`);

const { t } = useI18n<I18nOptions>();
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

const yearInsert = ref(false);
const newYear = reactive<{ value: number; visible: boolean }>({
  value: 0,
  visible: true,
});

const insertYearHandle = async () => {
  await createYear.executeMutation(newYear);
  yearInsert.value = false;
};

const deleteYearHandle = async (value: number) => {
  if (
    confirm(t("admin.general.years.confirm.delete", { year: value.toString() }))
  ) {
    await deleteYear.executeMutation({ value });
  }
};
</script>

<template>
  <div class="q-mb-md">
    <QBtn
      :label="t('admin.general.years.new_year_button')"
      color="primary"
      no-caps
      outline
      @click="yearInsert = true"
    />
  </div>

  <QList bordered separator dense>
    <QItem v-for="year in years" :key="year.value" dense>
      <QItemSection avatar>
        <QBtn
          icon="sym_s_cancel"
          color="primary"
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
          :label="t('admin.general.years.visible')"
          @update:model-value="
            (value) => updateYearVisibilityHandle(year.value, value)
          "
        />
      </QItemSection>
      <QItemSection side>
        <QRadio
          v-model="currentYear"
          :val="year.value"
          :label="t('admin.general.years.current')"
          dense
          @update:model-value="setCurrentYearHandle"
        />
      </QItemSection>
    </QItem>
  </QList>

  <QDialog v-model="yearInsert" square>
    <QCard flat square>
      <QCardSection>
        <div class="q-gutter-md">
          <QInput
            v-model.number="newYear.value"
            :label="t('admin.general.years.new_year_button')"
            type="number"
            square
            dense
          />
          <QToggle
            v-model="newYear.visible"
            :label="t('admin.general.years.visible')"
            left-label
          />
        </div>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          :label="t('admin.general.years.insert_year_button')"
          color="positive"
          flat
          square
          @click="insertYearHandle"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss"></style>
