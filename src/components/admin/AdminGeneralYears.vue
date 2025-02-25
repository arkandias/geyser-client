<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { graphql } from "@/gql";
import {
  DeleteYearDocument,
  InsertYearDocument,
  SetCurrentYearDocument,
  UpdateYearDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

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

  mutation InsertYear($value: Int!, $visible: Boolean!) {
    insertYearOne(object: { value: $value, visible: $visible }) {
      value
    }
  }

  mutation UpdateYear($value: Int!, $changes: YearSetInput!) {
    updateYearByPk(pkColumns: { value: $value }, _set: $changes) {
      value
    }
  }

  mutation DeleteYear($value: Int!) {
    deleteYearByPk(value: $value) {
      value
    }
  }
`);

const { t } = useCustomI18n();
const { years, currentYear } = useYearsStore();

const selectedYear = ref<number | null>(null);
const isFormOpen = ref(false);
const formValue = ref<number | null>(null);

const setCurrentYear = useMutation(SetCurrentYearDocument);
const insertYear = useMutation(InsertYearDocument);
const updateYear = useMutation(UpdateYearDocument);
const deleteYear = useMutation(DeleteYearDocument);

const setCurrentYearHandle = async (year: number): Promise<void> => {
  await setCurrentYear.executeMutation({
    value: year,
  });
};

const insertYearHandle = async () => {
  if (formValue.value === null) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalid_form"),
      caption: t("admin.general.years.error.empty_value"),
    });
    return;
  }

  const { data, error } = await insertYear.executeMutation({
    value: formValue.value,
    visible: false,
  });
  if (error) {
    console.error(error);
    throw new Error(
      t("admin.data.error.insert_error", {
        reason: error.message,
      }),
    );
  }

  if (data?.insertYearOne?.value !== undefined) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.insert", {
        value: data.insertYearOne.value,
      }),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.no_return_data"),
    });
  }

  isFormOpen.value = false;
};

const updateYearHandle = async (
  value: number,
  changes: {
    value?: number;
    visible?: boolean;
  },
) => {
  const { data, error } = await updateYear.executeMutation({
    value,
    changes,
  });
  if (error) {
    console.error(error);
    throw new Error(
      t("admin.data.error.update_error", {
        reason: error.message,
      }),
    );
  }

  if (data?.updateYearByPk?.value !== undefined) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.update", {
        value: data.updateYearByPk.value,
      }),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.no_return_data"),
    });
  }
};

const updateYearValueHandle = async () => {
  if (selectedYear.value === null) {
    return;
  }

  if (formValue.value === null) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalid_form"),
      caption: t("admin.general.years.error.empty_value"),
    });
    return;
  }

  await updateYearHandle(selectedYear.value, { value: formValue.value });

  isFormOpen.value = false;
};

const updateYearVisibilityHandle = async (value: number, visible: boolean) => {
  await updateYearHandle(value, { visible });
};

const deleteYearHandle = async (value: number) => {
  if (
    !confirm(
      t("admin.general.years.confirm.delete", { year: value.toString() }),
    )
  ) {
    return;
  }

  const { data, error } = await deleteYear.executeMutation({ value });
  if (error) {
    console.error(error);
    throw new Error(
      t("admin.data.error.delete_error", {
        reason: error.message,
      }),
    );
  }

  if (data?.deleteYearByPk?.value !== undefined) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.delete", {
        value: data.deleteYearByPk.value,
      }),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.no_return_data"),
    });
  }
};

const onCreateClick = () => {
  selectedYear.value = null;
  formValue.value = null;
  isFormOpen.value = true;
};

const onEditClick = (year: number) => {
  selectedYear.value = year;
  formValue.value = year;
  isFormOpen.value = true;
};
</script>

<template>
  <div class="q-mb-md">
    <QBtn
      :label="t('admin.general.years.button.create')"
      icon="sym_s_add"
      color="primary"
      no-caps
      outline
      @click="onCreateClick()"
    />
  </div>

  <QList bordered separator dense>
    <QItem v-for="year in years" :key="year.value" dense>
      <QItemSection avatar>
        <QBtn
          icon="sym_s_edit"
          color="primary"
          flat
          square
          dense
          @click="onEditClick(year.value)"
        />
      </QItemSection>
      <QItemSection avatar>
        <QBtn
          icon="sym_s_delete"
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
          :disable="year.current"
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

  <QDialog v-model="isFormOpen" square>
    <QCard flat square>
      <QCardSection>
        <QForm
          id="year-insert"
          class="q-gutter-md"
          @submit="selectedYear ? updateYearValueHandle() : insertYearHandle()"
        >
          <QInput
            v-model.number="formValue"
            :label="t('admin.general.years.year')"
            type="number"
            square
            dense
          />
        </QForm>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          form="year-insert"
          type="submit"
          :label="
            selectedYear
              ? t('admin.general.years.button.update')
              : t('admin.general.years.button.create')
          "
          color="primary"
          :disable="formValue === null"
          flat
          square
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss"></style>
