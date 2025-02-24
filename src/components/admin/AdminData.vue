<script
  setup
  lang="ts"
  generic="
    T extends RowDescriptor,
    Id extends Scalar,
    DataObj extends SimpleObject<Scalar>
  "
>
import { type Ref, computed, ref, toValue, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import type {
  FieldDescriptor,
  GetObjectFn,
  ParsedRow,
  RowDescriptor,
  Scalar,
  SimpleObject,
} from "@/types/csv-data.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { importCSV } from "@/utils/csv-import.ts";
import { getField, normalizeForSearch } from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

type Row = ParsedRow<T>;

const formValues = defineModel<Row>("formValues", { required: true });
const selectedFields = defineModel<string[]>("selectedFields", {
  required: true,
});
const {
  name,
  messagePrefix,
  rowDescriptor,
  rows,
  columns,
  getId,
  getLabel,
  getObject,
  initForm,
  insertData,
  updateData,
  deleteData,
} = defineProps<{
  name: string;
  messagePrefix: string;
  rowDescriptor: T;
  rows: Row[];
  columns: ColumnNonAbbreviable<Row>[];
  getId: (row: Row) => Id;
  getLabel: (row: Row) => Record<string, string>;
  getObject: GetObjectFn<Row, DataObj>;
  initForm: (selectedRows?: Row[]) => Row;
  insertData: (
    objects: DataObj[],
    overwrite?: boolean,
  ) => Promise<number | null>;
  updateData: (ids: Id[], changes: Partial<DataObj>) => Promise<number | null>;
  deleteData: (ids: Id[]) => Promise<number | null>;
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
      return t(
        messagePrefix + ".form.title.single",
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        getLabel(selectedRows.value[0]!),
      );
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
  isFormOpen.value = true;
};

watch(isFormOpen, (value) => {
  if (value) {
    Object.assign(formValues.value, initForm(selectedRows.value));
    selectedFields.value = [];
  }
});

// ===== Data Operations =====
const insertDataHandle = async () => {
  let dataObj: DataObj;
  try {
    dataObj = getObject(formValues.value);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".data.form.invalid"),
      caption: message,
    });
    return;
  }
  const affectedRows = await insertData([dataObj], false);
  if (affectedRows === null) {
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".form.invalid.insert"),
    });
    return;
  }
  notify(NotifyType.SUCCESS, {
    message: t(messagePrefix + ".insert.valid", affectedRows),
  });
  isFormOpen.value = false;
};

const updateDataHandle = async () => {
  let dataObj: Partial<DataObj>;
  try {
    dataObj = getObject(formValues.value, selectedFields.value);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".form.invalid.message"),
      caption: message,
    });
    return;
  }
  const affectedRows = await updateData(
    selectedRows.value.map((row) => getId(row)),
    dataObj,
  );
  if (affectedRows === null) {
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".form.invalid.update"),
    });
    return;
  }
  notify(NotifyType.SUCCESS, {
    message: t(messagePrefix + ".update.valid", affectedRows),
  });
  isFormOpen.value = false;
};

const deleteDataHandle = async () => {
  if (
    !selection.value ||
    !confirm(
      selectedRows.value.length === 1
        ? t(messagePrefix + ".delete.confirm.single", {
            // TODO: should be label
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            id: getId(selectedRows.value[0]!),
          })
        : t(
            messagePrefix + ".delete.confirm.multiple",
            selectedRows.value.length,
          ),
    )
  ) {
    return;
  }
  const affectedRows = await deleteData(
    selectedRows.value.map((row) => getId(row)),
  );
  if (affectedRows === null) {
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".data.delete.invalid"),
    });
    return;
  }
  notify(NotifyType.SUCCESS, {
    message: t(messagePrefix + ".delete.valid", {
      count: affectedRows,
    }),
  });
  selectedRows.value = [];
  isFormOpen.value = false;
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

const columnsImport: ColumnNonAbbreviable<[string, FieldDescriptor]>[] = [
  {
    name: "key",
    label: t("admin.import.table.columns.key"),
    align: "left",
    field: ([key]) => key,
  },
  {
    name: "type",
    label: t("admin.import.table.columns.type"),
    align: "left",
    field: ([_, descriptor]) => descriptor.type,
    format: (val: string) => t("admin.import.table.values.type_" + val),
  },
  {
    name: "non_nullable",
    label: t("admin.import.table.columns.non_nullable"),
    align: "center",
    field: ([_, descriptor]) => !!descriptor.nullable,
    format: (val: boolean) => (!val ? "✓" : "✗"),
  },
];

const importRowsHandle = async () => {
  try {
    if (!selectedFile.value) {
      throw new Error(t(messagePrefix + ".import.invalid.caption.file_empty"));
    }
    importing.value = true;
    const text = await selectedFile.value.text();
    const importedRows = importCSV(text, rowDescriptor);
    const objects = importedRows.map((row, index) => {
      try {
        return getObject(row);
      } catch (error) {
        throw new Error(
          t("admin.import.invalid.caption", {
            index,
            error_message:
              error instanceof Error ? error.message : "Unknown error",
          }),
        );
      }
    });
    const affectedRows = await insertData(objects, overwrite.value);
    if (affectedRows === null) {
      throw new Error();
    }
    notify(NotifyType.SUCCESS, {
      message: t(messagePrefix + ".import.valid", affectedRows),
    });
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".import.invalid.message"),
      caption: error instanceof Error ? error.message : "Unknown error",
    });
  } finally {
    importing.value = false;
    isImportDialogOpen.value = false;
  }
};

// ===== Data Export =====
const exportDataHandle = () => {
  try {
    downloadCSV(
      `${name}_${Date.now().toString()}`,
      selectedRows.value.length ? selectedRows.value : rows,
    );
    notify(NotifyType.SUCCESS, {
      message: t(
        messagePrefix + ".export.valid",
        selectedRows.value.length || rows.length,
      ),
    });
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".export.invalid.message"),
      caption: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
</script>

<template>
  <div class="q-mb-md">
    <div class="q-gutter-md row">
      <QBtn
        :label="t('admin.buttons.create')"
        icon="sym_s_add"
        color="primary"
        no-caps
        outline
        @click="openForm([])"
      />
      <QBtn
        :label="t('admin.buttons.edit')"
        icon="sym_s_edit"
        color="primary"
        :disable="!selection"
        no-caps
        outline
        @click="openForm()"
      />
      <QBtn
        :label="t('admin.buttons.delete')"
        icon="sym_s_delete"
        color="primary"
        :disable="!selection"
        no-caps
        outline
        @click="deleteDataHandle()"
      />
      <QSpace />
      <QBtn
        :label="t('admin.buttons.import')"
        icon="sym_s_upload"
        color="primary"
        no-caps
        outline
        @click="isImportDialogOpen = true"
      />
      <QBtn
        :label="t('admin.buttons.export')"
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
    row-key="uid"
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
        :placeholder="t(messagePrefix + '.table.search')"
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
            selection ? t('admin.buttons.update') : t('admin.buttons.create')
          "
          color="primary"
          flat
          square
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <QDialog v-model="isImportDialogOpen" square>
    <QCard flat square class="admin-form">
      <QCardSection class="text-h6">
        {{ t("admin.import.title") }}
      </QCardSection>
      <QCardSection>
        <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
        <div v-html="t('admin.import.csv_instructions')" />
      </QCardSection>
      <QCardSection>
        <QTable
          :columns="columnsImport"
          :rows="Object.entries(rowDescriptor)"
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
            :label="t('admin.import.file_picker_label')"
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
            :label="t('admin.import.overwrite')"
            dense
          />
        </div>
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          :loading="importing"
          :label="t('admin.buttons.import')"
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
