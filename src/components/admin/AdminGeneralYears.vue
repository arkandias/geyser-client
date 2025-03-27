<script setup lang="ts">
import { useMutation } from "villus";
import { ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, useNotify } from "@/composables/useNotify.ts";
import { graphql } from "@/gql";
import {
  ComputePrioritiesDocument,
  CopyCoursesDocument,
  CreateServicesDocument,
  DeleteYearDocument,
  InsertYearDocument,
  SetCurrentYearDocument,
  UpdateYearDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

const { t } = useCustomI18n();
const { notify } = useNotify();
const { years, currentYear } = useYearsStore();

const selectedYear = ref<number | null>(null);
const isFormOpen = ref(false);
const formValue = ref<number | null>(null);

graphql(`
  mutation SetCurrentYear($value: Int!) {
    year: updateYearByPk(
      pkColumns: { value: $value }
      _set: { current: true }
    ) {
      value
    }
  }

  mutation InsertYear($value: Int!, $visible: Boolean!) {
    year: insertYearOne(object: { value: $value, visible: $visible }) {
      value
    }
  }

  mutation UpdateYear($value: Int!, $changes: YearSetInput!) {
    year: updateYearByPk(pkColumns: { value: $value }, _set: $changes) {
      value
    }
  }

  mutation DeleteYear($value: Int!) {
    year: deleteYearByPk(value: $value) {
      value
    }
  }

  mutation CreateServices($year: Int!) {
    createYearServices(args: { p_year: $year }) {
      id
    }
  }

  mutation CopyCourses($year: Int!) {
    copyYearCourses(args: { p_year: $year }) {
      id
    }
  }

  mutation ComputePriorities($year: Int!) {
    computeYearPriorities(args: { p_year: $year }) {
      id
    }
  }
`);

const setCurrentYear = useMutation(SetCurrentYearDocument, {
  refetchTags: ["all"],
});
const insertYear = useMutation(InsertYearDocument, {
  refetchTags: ["all"],
});
const updateYear = useMutation(UpdateYearDocument, {
  refetchTags: ["all"],
});
const deleteYear = useMutation(DeleteYearDocument, {
  refetchTags: ["all"],
});
const createServices = useMutation(CreateServicesDocument, {
  refetchTags: ["all"],
});
const copyCourses = useMutation(CopyCoursesDocument, {
  refetchTags: ["all"],
});
const computePriorities = useMutation(ComputePrioritiesDocument, {
  refetchTags: ["all"],
});

const setCurrentYearHandle = async (year: number): Promise<void> => {
  const { error } = await setCurrentYear.execute({
    value: year,
  });

  if (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.general.years.error.setCurrent"),
      caption: error.message,
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.setCurrent"),
    });
  }
};

const insertYearHandle = async () => {
  if (formValue.value === null) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalidForm"),
      caption: t("admin.general.years.error.emptyValue"),
    });
    return;
  }

  const { data, error } = await insertYear.execute({
    value: formValue.value,
    visible: false,
  });

  isFormOpen.value = false;

  if (error || data?.year?.value === undefined) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.insertFailed"),
      caption: error?.message ?? t("admin.data.error.noReturnData"),
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.insert", {
        value: data.year.value,
      }),
    });
  }
};

const updateYearHandle = async (
  value: number,
  changes: {
    value?: number;
    visible?: boolean;
  },
) => {
  const { data, error } = await updateYear.execute({
    value,
    changes,
  });

  isFormOpen.value = false;

  if (error || data?.year?.value === undefined) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.updateFailed"),
      caption: error?.message ?? t("admin.data.error.noReturnData"),
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.update", {
        value: data.year.value,
      }),
    });
  }
};

const updateYearValueHandle = async () => {
  if (selectedYear.value === null) {
    return;
  }

  if (formValue.value === null) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalidForm"),
      caption: t("admin.general.years.error.emptyValue"),
    });
    return;
  }

  await updateYearHandle(selectedYear.value, { value: formValue.value });
};

const updateYearVisibilityHandle = async (value: number, visible: boolean) => {
  await updateYearHandle(value, { visible });
};

const deleteYearHandle = async (value: number) => {
  if (!confirm(t("admin.general.years.confirm.delete", { year: value }))) {
    return;
  }

  const { data, error } = await deleteYear.execute({ value });
  if (error || data?.year?.value === undefined) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.deleteFailed"),
      caption: error?.message ?? t("admin.data.error.noReturnData"),
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.delete"),
    });
  }
};

const createServicesHandle = async () => {
  if (selectedYear.value === null) {
    return;
  }

  const { data, error } = await createServices.execute({
    year: selectedYear.value,
  });

  if (error || !data?.createYearServices) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.createServices"),
      caption: error?.message ?? t("admin.data.error.noReturnData"),
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t(
        "admin.general.years.success.createServices",
        data.createYearServices.length,
      ),
    });
  }
};

const copyCoursesHandle = async () => {
  if (selectedYear.value === null) {
    return;
  }

  const { data, error } = await copyCourses.execute({
    year: selectedYear.value,
  });

  if (error || !data?.copyYearCourses) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.copyCourses"),
      caption: error?.message ?? t("admin.data.error.noReturnData"),
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t(
        "admin.general.years.success.copyCourses",
        data.copyYearCourses.length,
      ),
    });
  }
};

const computePrioritiesHandle = async () => {
  if (selectedYear.value === null) {
    return;
  }

  const { data, error } = await computePriorities.execute({
    year: selectedYear.value,
  });

  if (error || !data?.computeYearPriorities) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.computePriorities"),
      caption: error?.message ?? t("admin.data.error.noReturnData"),
    });
  } else {
    notify(NotifyType.SUCCESS, {
      message: t("admin.general.years.success.computePriorities", {
        count: data.computeYearPriorities.length,
      }),
    });
  }
};

const create = () => {
  selectedYear.value = null;
  formValue.value = null;
  isFormOpen.value = true;
};

const edit = (year: number) => {
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
      @click="create()"
    />
  </div>

  <QList bordered separator dense>
    <QItem v-for="year in years" :key="year.value" dense>
      <QItemSection side>
        <QBtn
          icon="sym_s_settings"
          color="primary"
          flat
          square
          dense
          @click="selectedYear = year.value"
        >
          <QMenu square auto-close>
            <QList>
              <QItem clickable @click="createServicesHandle()">
                <QItemSection side>
                  <QIcon name="sym_s_assignment_ind" color="primary" />
                </QItemSection>
                <QItemSection>
                  {{ t("admin.general.years.button.createServices") }}
                </QItemSection>
              </QItem>
              <QItem clickable @click="copyCoursesHandle()">
                <QItemSection side>
                  <QIcon name="sym_s_menu_book" color="primary" />
                </QItemSection>
                <QItemSection>
                  {{ t("admin.general.years.button.copyCourses") }}
                </QItemSection>
              </QItem>
              <QItem clickable @click="computePrioritiesHandle()">
                <QItemSection side>
                  <QIcon name="sym_s_assignment_late" color="primary" />
                </QItemSection>
                <QItemSection>
                  {{ t("admin.general.years.button.computePriorities") }}
                </QItemSection>
              </QItem>
            </QList>
          </QMenu>
        </QBtn>
      </QItemSection>
      <QItemSection side>
        <QBtn
          icon="sym_s_edit"
          color="primary"
          flat
          square
          dense
          @click="edit(year.value)"
        />
      </QItemSection>
      <QItemSection side>
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
        {{ year.value }}
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
          :model-value="currentYear"
          :val="year.value"
          :label="t('admin.general.years.current')"
          :disable="!year.visible"
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
            type="number"
            :label="t('admin.general.years.year')"
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
