<script
  setup
  lang="ts"
  generic="
    T extends RowDescriptor,
    IdKey extends string & keyof T,
    Constraint,
    UpdateColumn
  "
>
import type { AnyVariables, UseMutationResponse } from "@urql/vue";
import { type Ref, computed, ref, toValue, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import type {
  FieldDescriptor,
  NullableParsedRow,
  ParsedRow,
  RowDescriptor,
  VisibleParsedRow,
} from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm } from "@/utils/admin-data.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { importCSV } from "@/utils/csv-import.ts";
import { getField, normalizeForSearch } from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

type Row = ParsedRow<T>;
type Id = Row[IdKey];
type FormData = NullableParsedRow<T>;
type OperationData = VisibleParsedRow<T>;
type OperationResult<N extends string> = Partial<
  Record<N, { returning: { id: Id }[] } | null>
>;
type MutationHandle<Name extends string, Variables extends AnyVariables> = Pick<
  UseMutationResponse<OperationResult<Name>, Variables>,
  "executeMutation"
>;

const formValues = defineModel<FormData>("formValues", { required: true });
const selectedFields = defineModel<string[] | null>("selectedFields", {
  default: null,
});
const {
  name,
  messagePrefix,
  rowDescriptor,
  idKey,
  rows,
  columns,
  formatRow,
  validateOperationData,
  insertData,
  upsertData,
  updateData,
  deleteData,
  constraint,
  updateColumns,
} = defineProps<{
  name: string;
  messagePrefix: string;
  rowDescriptor: T;
  idKey: IdKey;
  rows: Row[];
  columns: ColumnNonAbbreviable<Row>[];
  formatRow: (row: Row) => string;
  validateOperationData: (
    operationData: Partial<OperationData>,
    checkConflicts: boolean,
  ) => void;
  insertData: MutationHandle<"insertData", { objects: OperationData[] }>;
  upsertData: MutationHandle<
    "upsertData",
    {
      objects: OperationData[];
      onConflict: {
        constraint: Constraint;
        updateColumns: UpdateColumn[];
      };
    }
  >;
  updateData: MutationHandle<
    "updateData",
    {
      ids: Id[];
      changes: Partial<OperationData>;
    }
  >;
  deleteData: MutationHandle<"deleteData", { ids: Id[] }>;
  constraint: Constraint;
  updateColumns: UpdateColumn[];
}>();
defineSlots<{ form(slotProps: { multipleSelection: boolean }): unknown }>();

const { t } = useCustomI18n();

// ===== Data Table =====
const selectedRows: Ref<Row[]> = ref([]);
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
        label: formatRow(selectedRows.value[0]!),
      });
    default:
      return t(messagePrefix + ".form.title.multiple", {
        count: selectedRows.value.length,
      });
  }
});

const openForm = (rows?: Row[]) => {
  if (rows) {
    selectedRows.value = rows;
  }
  formValues.value = initForm(rowDescriptor, selectedRows.value);
  if (selectedFields.value) {
    selectedFields.value = [];
  }
  isFormOpen.value = true;
};

// ===== Data Operations =====
const errorMessage = (error: unknown) =>
  error instanceof Error ? error.message : t("notification.error.unknown");

function validateFormData(): OperationData;
function validateFormData(fields: (keyof T)[]): Partial<OperationData>;
function validateFormData(
  fields?: (keyof T)[],
): OperationData | Partial<OperationData> {
  const operationData: Partial<OperationData> = {};

  Object.entries(rowDescriptor).forEach(([key, fieldDescriptor]) => {
    if (fieldDescriptor.hidden) {
      return;
    }

    if (fields && !fields.includes(key)) {
      return;
    }

    let value = formValues.value[key];

    if (fieldDescriptor.type === "string") {
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      value = value || null;
    }

    if (!fieldDescriptor.nullable && value == null) {
      throw new Error(
        t("admin.data.error.emptyField", {
          field: t(messagePrefix + ".form.fields." + key),
        }),
      );
    }

    if (
      fieldDescriptor.type === "number" &&
      value != null &&
      !Number.isFinite(value)
    ) {
      throw new Error(
        t("admin.data.error.notANumber", {
          field: t(messagePrefix + ".form.fields." + key),
        }),
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    operationData[key as keyof OperationData] = value!;
  });

  if (!fields) {
    return operationData as OperationData;
  }

  return operationData;
}

const insertDataHandle = async () => {
  let object: OperationData;
  try {
    object = validateFormData();
    validateOperationData(object, true);
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalidForm"),
      caption: errorMessage(error),
    });
    return;
  }

  const { data, error } = await insertData.executeMutation({
    objects: [object],
  });
  if (error) {
    console.error(error);
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.insertFailed"),
      caption: errorMessage(error),
    });
    return;
  }
  if (data?.insertData?.returning) {
    notify(NotifyType.SUCCESS, {
      message: t(
        messagePrefix + ".data.success.insert",
        data.insertData.returning.length,
      ),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.noReturnData"),
    });
  }

  isFormOpen.value = false;
};

const updateDataHandle = async () => {
  let changes: Partial<OperationData>;
  try {
    changes =
      multipleSelection.value && selectedFields.value
        ? validateFormData(selectedFields.value)
        : validateFormData();
    validateOperationData(changes, false);
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.invalidForm"),
      caption: errorMessage(error),
    });
    return;
  }

  const { data, error } = await updateData.executeMutation({
    ids: selectedRows.value.map((row) => row[idKey]),
    changes,
  });
  if (error) {
    console.error(error);
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.updateFailed"),
      caption: errorMessage(error),
    });
    return;
  }
  if (data?.updateData?.returning) {
    notify(NotifyType.SUCCESS, {
      message: t(
        messagePrefix + ".data.success.update",
        data.updateData.returning.length,
      ),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.noReturnData"),
    });
  }

  isFormOpen.value = false;
  selectedRows.value = [];
};

const deleteDataHandle = async () => {
  if (
    !selection.value ||
    !confirm(
      selectedRows.value.length === 1
        ? t(messagePrefix + ".data.confirm.delete.single", {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            label: formatRow(selectedRows.value[0]!),
          })
        : t(
            messagePrefix + ".data.confirm.delete.multiple",
            selectedRows.value.length,
          ),
    )
  ) {
    return;
  }

  const { data, error } = await deleteData.executeMutation({
    ids: selectedRows.value.map((row) => row[idKey]),
  });
  if (error) {
    console.error(error);
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.deleteFailed"),
      caption: errorMessage(error),
    });
    return;
  }
  if (data?.deleteData?.returning) {
    notify(NotifyType.SUCCESS, {
      message: t(
        messagePrefix + ".data.success.delete",
        data.deleteData.returning.length,
      ),
    });
  } else {
    notify(NotifyType.DEFAULT, {
      message: t("admin.data.error.noReturnData"),
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

const importColumns: ColumnNonAbbreviable<[string, FieldDescriptor]>[] = [
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
    field: ([_, fieldDescriptor]) => fieldDescriptor.type,
    format: (val: string) => t("admin.data.import.table.type." + val),
  },
  {
    name: "nonNullable",
    label: t("admin.data.import.table.columns.nonNullable"),
    align: "center",
    field: ([_, fieldDescriptor]) => !fieldDescriptor.nullable,
    format: (val: boolean) => (val ? "✓" : "✗"),
  },
];

const importRows = Object.entries(rowDescriptor).filter(
  ([_, fieldDescriptor]) => !fieldDescriptor.hidden,
);

const importRowsHandle = async () => {
  if (!selectedFile.value) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.importFailed"),
      caption: t("admin.data.error.emptyFile"),
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
        t("admin.data.error.unreadableFile", { reason: errorMessage(error) }),
      );
    }

    let importedRows: OperationData[];
    try {
      importedRows = importCSV(text, rowDescriptor);
    } catch (error) {
      console.error(error);
      throw new Error(
        t("admin.data.error.parsingError", { reason: errorMessage(error) }),
      );
    }

    importedRows.forEach((row, index) => {
      try {
        validateOperationData(row, false);
      } catch (error) {
        console.error(t("admin.data.error.invalidRow", { index }), error);
        throw new Error(
          t("admin.data.error.invalidRow", {
            index,
            reason: errorMessage(error),
          }),
        );
      }
    });

    const { data, error } = await upsertData.executeMutation({
      objects: importedRows,
      onConflict: {
        constraint,
        updateColumns: overwrite.value ? updateColumns : [],
      },
    });
    if (error) {
      console.error(error);
      throw new Error(
        t("admin.data.error.insertError", {
          reason: error.message,
        }),
      );
    }
    if (data?.upsertData?.returning) {
      notify(NotifyType.SUCCESS, {
        message: t(
          messagePrefix + ".data.success.import",
          data.upsertData.returning.length,
        ),
      });
    } else {
      notify(NotifyType.DEFAULT, {
        message: t("admin.data.error.noReturnData"),
      });
    }

    isImportDialogOpen.value = false;
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.data.error.importFailed"),
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
      Object.entries(rowDescriptor)
        .filter(([_, fieldDescriptor]) => !fieldDescriptor.hidden)
        .map(([key]) => key),
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
        :disable="!selection || (multipleSelection && !selectedFields)"
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
    :columns
    :rows
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
          :disable="multipleSelection && !selectedFields?.length"
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
      <QCardSection v-html="t('admin.data.import.csvInstructions')" />
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
            :label="t('admin.data.import.filePickerLabel')"
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
