<script
  setup
  lang="ts"
  generic="
    T extends RowDescriptor,
    IdKey extends string & keyof T,
    DataObj extends SimpleObject<Scalar>
  "
>
import type { CombinedError } from "@urql/vue";
import { type Ref, computed, ref, toValue, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import type {
  GetDataFn,
  ParsedRow,
  PrimitiveTypeName,
  RowDescriptor,
  Scalar,
  SimpleObject,
} from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm } from "@/utils/admin-data.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { importCSV } from "@/utils/csv-import.ts";
import { getField, normalizeForSearch } from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

type Row = ParsedRow<T>;
type Id = NonNullable<Row[IdKey]>;
type RowWithId = Row & Record<IdKey, Id>;
type OperationResult = {
  data: {
    returning: SimpleObject<Scalar>[] | null;
  } | null;
  error: CombinedError | null;
};

const formValues = defineModel<Row>("formValues", { required: true });
const selectedFields = defineModel<string[]>("selectedFields", {
  required: true,
});
const {
  name,
  messagePrefix,
  rowDescriptor,
  idKey,
  rows,
  columns,
  getLabel = (row: Row) => String(row["label"]),
  getData,
  insertData,
  upsertData,
  updateData,
  deleteData,
  exportFields = null,
  nullableFields = [],
} = defineProps<{
  name: string;
  messagePrefix: string;
  rowDescriptor: T;
  idKey: IdKey;
  rows: Row[];
  columns: ColumnNonAbbreviable<Row>[];
  getLabel?: (row: Row) => string;
  getData: GetDataFn<Row, DataObj>;
  insertData: (objects: DataObj[]) => Promise<OperationResult>;
  upsertData: (
    objects: DataObj[],
    overwrite: boolean,
  ) => Promise<OperationResult>;
  updateData: (
    ids: Id[],
    changes: Partial<DataObj>,
  ) => Promise<OperationResult>;
  deleteData: (ids: Id[]) => Promise<OperationResult>;
  exportFields?: string[] | null;
  nullableFields?: string[];
}>();
defineSlots<{ form(slotProps: { multipleSelection: boolean }): unknown }>();

const { t } = useCustomI18n();

// ===== Data Table =====
const selectedRows: Ref<RowWithId[]> = ref([]);
const selection = computed(() => !!selectedRows.value.length);
const multipleSelection = computed<boolean>(
  () => selectedRows.value.length > 1,
);

// ===== Data Form =====
const isFormOpen = ref(false);
const formTitle = computed(() => {
  switch (selectedRows.value.length) {
    case 0:
      return t(messagePrefix + ".form.title.none");
    case 1:
      return t(messagePrefix + ".form.title.single", {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        label: getLabel(selectedRows.value[0]!),
      });
    default:
      return t(messagePrefix + ".form.title.multiple", {
        count: selectedRows.value.length,
      });
  }
});

const openForm = (rows?: RowWithId[]) => {
  if (rows) {
    selectedRows.value = rows;
  }
  formValues.value = initForm(rowDescriptor, selectedRows.value);
  selectedFields.value = [];
  isFormOpen.value = true;
};

// ===== Data Operations =====
const errorMessage = (error: unknown) =>
  error instanceof Error ? error.message : t("notification.error.unknown");

const insertDataHandle = async () => {
  let dataObj: DataObj;
  try {
    dataObj = getData(formValues.value, true);
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalid_form"),
      caption: errorMessage(error),
    });
    return;
  }

  const { data, error } = await insertData([dataObj]);
  if (error) {
    console.error(error);
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.insert_failed"),
      caption: errorMessage(error),
    });
    return;
  }
  if (data?.returning) {
    notify(NotifyType.SUCCESS, {
      message: t(messagePrefix + ".data.success.insert", data.returning.length),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.no_return_data"),
    });
  }

  isFormOpen.value = false;
};

const updateDataHandle = async () => {
  let dataObj: Partial<DataObj>;
  try {
    dataObj = multipleSelection.value
      ? getData(formValues.value, false, selectedFields.value)
      : getData(formValues.value, false);
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalid_form"),
      caption: errorMessage(error),
    });
    return;
  }

  const { data, error } = await updateData(
    selectedRows.value.map((row) => row[idKey]),
    dataObj,
  );
  if (error) {
    console.error(error);
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.update_failed"),
      caption: errorMessage(error),
    });
    return;
  }
  if (data?.returning) {
    notify(NotifyType.SUCCESS, {
      message: t(messagePrefix + ".data.success.update", data.returning.length),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.no_return_data"),
    });
  }

  isFormOpen.value = false;
};

const deleteDataHandle = async () => {
  if (
    !selection.value ||
    !confirm(
      selectedRows.value.length === 1
        ? t(messagePrefix + ".data.confirm.delete.single", {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            label: getLabel(selectedRows.value[0]!),
          })
        : t(
            messagePrefix + ".data.confirm.delete.multiple",
            selectedRows.value.length,
          ),
    )
  ) {
    return;
  }

  const { data, error } = await deleteData(
    selectedRows.value.map((row) => row[idKey]),
  );
  if (error) {
    console.error(error);
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.delete_failed"),
      caption: errorMessage(error),
    });
    return;
  }
  if (data?.returning) {
    notify(NotifyType.SUCCESS, {
      message: t(messagePrefix + ".data.success.delete", data.returning.length),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.no_return_data"),
    });
  }

  selectedRows.value = [];
};

// ===== Search & Filtering =====
const search = ref<string | null>(null);
const searchableColumns = columns
  .filter((col) => toValue(col.searchable))
  .map((col) => col.name);
const filterObj = computed(() => ({
  search: normalizeForSearch(search.value ?? ""),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly Row[],
  terms: typeof filterObj.value,
): readonly Row[] =>
  rows.filter((row) =>
    terms.searchColumns.some((col) =>
      normalizeForSearch(String(getField(row, col.field))).includes(
        terms.search,
      ),
    ),
  );

// ===== Data Import =====
const isImportDialogOpen = ref(false);
const selectedFile = ref<File | null>(null);
const overwrite = ref(false);
const importing = ref(false);

watch(isImportDialogOpen, (value) => {
  if (value) {
    selectedFile.value = null;
    overwrite.value = false;
  }
});

const importColumns: ColumnNonAbbreviable<[string, PrimitiveTypeName]>[] = [
  {
    name: "key",
    label: t("admin.data.import.table.columns.key"),
    align: "left",
    field: ([key]) => key,
  },
  {
    name: "type",
    label: t("admin.data.import.table.columns.type"),
    align: "left",
    field: ([_, typename]) => typename,
    format: (val: string) => t("admin.data.import.table.type." + val),
  },
  {
    name: "non_nullable",
    label: t("admin.data.import.table.columns.non_nullable"),
    align: "center",
    field: ([key]) => !nullableFields.includes(key),
    format: (val: boolean) => (val ? "✓" : "✗"),
  },
];

const importRows = Object.entries(rowDescriptor).filter(
  ([key]) => exportFields?.includes(key) ?? true,
);

const importRowsHandle = async () => {
  if (!selectedFile.value) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.import_failed"),
      caption: t("admin.data.error.empty_file"),
    });
    return;
  }

  importing.value = true;

  try {
    let text: string;
    try {
      text = await selectedFile.value.text();
    } catch (error) {
      console.error(error);
      throw new Error(
        t("admin.data.error.unreadable_file", { reason: errorMessage(error) }),
      );
    }

    let importedRows: ParsedRow<T>[];
    try {
      importedRows = importCSV(text, rowDescriptor);
    } catch (error) {
      console.error(error);
      throw new Error(
        t("admin.data.error.parsing_error", { reason: errorMessage(error) }),
      );
    }

    const objects = importedRows.map((row, index) => {
      try {
        return getData(row, false);
      } catch (error) {
        console.error(t("admin.data.error.invalid_row", { index }), error);
        throw new Error(
          t("admin.data.error.invalid_row", {
            index,
            reason: errorMessage(error),
          }),
        );
      }
    });

    const { data, error } = await upsertData(objects, overwrite.value);
    if (error) {
      console.error(error);
      throw new Error(
        t("admin.data.error.insert_error", {
          reason: error.message,
        }),
      );
    }
    if (data?.returning) {
      notify(NotifyType.SUCCESS, {
        message: t(
          messagePrefix + ".data.success.import",
          data.returning.length,
        ),
      });
    } else {
      notify(NotifyType.DEFAULT, {
        message: t("admin.data.error.no_return_data"),
      });
    }

    isImportDialogOpen.value = false;
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.import_failed"),
      caption: errorMessage(error),
    });
  } finally {
    importing.value = false;
  }
};

// ===== Data Export =====
const exportDataHandle = () => {
  try {
    downloadCSV(
      `${name}_${Date.now().toString()}`,
      selectedRows.value.length ? selectedRows.value : rows,
      exportFields,
    );
    notify(NotifyType.SUCCESS, {
      message: t(
        messagePrefix + ".data.success.export",
        selectedRows.value.length || rows.length,
      ),
    });
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".export.invalid.message"),
      caption: errorMessage(error),
    });
  }
};
</script>

<template>
  <div class="q-mb-md">
    <div class="q-gutter-md row">
      <QBtn
        :label="t('admin.data.button.create')"
        icon="sym_s_add"
        color="primary"
        no-caps
        outline
        @click="openForm([])"
      />
      <QBtn
        :label="t('admin.data.button.edit')"
        icon="sym_s_edit"
        color="primary"
        :disable="!selection"
        no-caps
        outline
        @click="openForm()"
      />
      <QBtn
        :label="t('admin.data.button.delete')"
        icon="sym_s_delete"
        color="primary"
        :disable="!selection"
        no-caps
        outline
        @click="deleteDataHandle()"
      />
      <QSpace />
      <QBtn
        :label="t('admin.data.button.import')"
        icon="sym_s_upload"
        color="primary"
        no-caps
        outline
        @click="isImportDialogOpen = true"
      />
      <QBtn
        :label="t('admin.data.button.export')"
        icon="sym_s_download"
        color="primary"
        no-caps
        outline
        @click="exportDataHandle()"
      />
    </div>
  </div>

  <QTable
    v-model:selected="selectedRows"
    :rows
    :columns
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    :row-key="idKey"
    selection="multiple"
    bordered
    flat
    dense
  >
    <template #top>
      <QInput
        v-if="searchableColumns.length"
        v-model="search"
        color="primary"
        :placeholder="t('admin.data.search')"
        clearable
        clear-icon="sym_s_close"
        square
        dense
        style="width: 100%"
      />
    </template>
  </QTable>

  <QDialog v-model="isFormOpen" square>
    <QCard flat square class="admin-form">
      <QCardSection v-if="isFormOpen" class="text-h6">
        {{ formTitle }}
      </QCardSection>
      <QCardSection>
        <QForm
          :id="`${name}-form`"
          class="q-gutter-md"
          @submit="selection ? updateDataHandle() : insertDataHandle()"
        >
          <slot name="form" :multiple-selection />
        </QForm>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          :form="`${name}-form`"
          type="submit"
          :label="
            selection
              ? t('admin.data.button.update')
              : t('admin.data.button.create')
          "
          color="primary"
          :disable="multipleSelection && !selectedFields.length"
          flat
          square
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <QDialog v-model="isImportDialogOpen" square>
    <QCard flat square class="admin-form">
      <QCardSection class="text-h6">
        {{ t("admin.data.import.title") }}
      </QCardSection>
      <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection v-html="t('admin.data.import.csv_instructions')" />
      <QCardSection>
        <QTable
          :columns="importColumns"
          :rows="importRows"
          :pagination="{ rowsPerPage: 0 }"
          hide-bottom
          bordered
          flat
          dense
        />
      </QCardSection>
      <QCardSection>
        <div class="column q-gutter-md">
          <QFile
            v-model="selectedFile"
            accept=".csv"
            :label="t('admin.data.import.file_picker_label')"
            clearable
            clear-icon="sym_s_close"
            outlined
            dense
          >
            <template #prepend>
              <QIcon name="sym_s_attach_file" />
            </template>
          </QFile>
          <QCheckbox
            v-model="overwrite"
            :label="t('admin.data.import.overwrite')"
            dense
          />
        </div>
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          :loading="importing"
          :label="t('admin.data.button.import')"
          color="primary"
          flat
          square
          @click="importRowsHandle()"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss"></style>
