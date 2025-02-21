<script
  setup
  lang="ts"
  generic="
    T extends RowDescriptor,
    Id extends Scalar,
    IdKey extends string,
    DataObj extends SimpleObject,
    UpdateColumn
  "
>
import type { CombinedError } from "@urql/vue";
import { type Ref, computed, ref, shallowReactive, toRaw, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import type {
  Header,
  ParsedRow,
  RowDescriptor,
  Scalar,
  SimpleObject,
} from "@/types/csv-data.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { getField, normalizeForSearch } from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import AdminButtons from "@/components/admin/AdminButtons.vue";
import AdminImport from "@/components/admin/AdminImport.vue";

type Row = ParsedRow<T> & Record<IdKey, Id>;
type OperationResult<T extends string> = Promise<{
  data?: Partial<
    Record<T, { affectedRows: number; returning: Record<IdKey, Id>[] } | null>
  > | null;
  error?: CombinedError | undefined;
}>;

const {
  rowDescriptor,
  idKey,
  columns,
  rows,
  initForm,
  getFormTitle,
  validateRow,
  insertData,
  updateRows,
  deleteRows,
  messagePrefix,
  overwrittenColumnsOnImport,
  exportName,
  exportHeaders,
} = defineProps<{
  rowDescriptor: T;
  idKey: IdKey;
  columns: ColumnNonAbbreviable<Row>[];
  rows: Row[];
  initForm: (selectedRows?: Row[]) => Row;
  getFormTitle: (selectedRows?: Row[]) => string;
  validateRow: {
    (row: Row, selectedFields: string[]): Partial<DataObj> | null;
    (row: Row, selectedFields?: null): DataObj | null;
  };
  insertData: (variables: {
    objects: DataObj[];
    updateColumns: UpdateColumn[];
  }) => OperationResult<"insertObjects">;
  updateRows: (variables: {
    ids: Id[];
    changes: Partial<DataObj>;
  }) => OperationResult<"updateObjects">;
  deleteRows: (variables: { ids: Id[] }) => OperationResult<"deleteObjects">;
  messagePrefix: string;
  // rowToCSV, rowFromCSV
  overwrittenColumnsOnImport: UpdateColumn[];
  exportName?: string;
  exportHeaders?: Header[];
  // use i18n
  insertNotify: (returning?: { id: Id }[] | null) => void;
  updateNotify: (returning?: { id: Id }[] | null) => void;
  deleteNotify: (returning?: { id: Id }[] | null) => void;
  confirmDeletion: (rows: Row[]) => boolean;
  importNotify: (returning: Id[] | null) => void;
  exportNotify: (exported: number, error?: unknown) => void;
}>();
defineSlots<{ default(): unknown }>();

const { t } = useCustomI18n();

const selectedRows: Ref<Row[]> = ref([]);
const formTitle = computed(() => getFormTitle(selectedRows.value));
const isFormOpen = ref(false);
const formValues = shallowReactive<Row>(initForm());
const selectedFields = ref<string[]>([]);

// TODO: v-models?
const selection = computed<boolean>(() => !!selectedRows.value.length);
// const singleSelection = computed<boolean>(
//   () => selectedRows.value.length === 1,
// );
// const multipleSelection = computed<boolean>(
//   () => selectedRows.value.length > 1,
// );

watch(isFormOpen, (value) => {
  if (value) {
    const rows = toRaw(selectedRows.value);
    Object.assign(formValues, initForm(rows));
    selectedFields.value = [];
  }
});

const openForm = (rows?: Row[]) => {
  if (rows) {
    selectedRows.value = rows;
  }
  isFormOpen.value = true;
};

const notifyOperationResult = (
  operation: "insert" | "update" | "delete" | "import" | "export",
  affectedRows: number | null,
) => {
  const message = messagePrefix + ".data." + operation;
  if (affectedRows === null) {
    notify(NotifyType.ERROR, { message: t(message + ".invalid") });
  }
  notify(NotifyType.SUCCESS, {
    message: t(message + ".valid", { count: affectedRows }),
  });
};

const insertDataHandle = async () => {
  const dataObj = validateRow(formValues);
  if (!dataObj) {
    return;
  }
  const { data, error } = await insertData({
    objects: [dataObj],
    updateColumns: [],
  });
  if (error) {
    return;
  }
  notifyOperationResult(
    "insert",
    data?.insertObjects?.returning.length ?? null,
  );
  isFormOpen.value = false;
};

const updateDataHandle = async () => {
  const dataObj = validateRow(formValues, selectedFields.value);
  if (!dataObj) {
    return;
  }
  const { data, error } = await updateRows({
    ids: selectedRows.value.map((row) => row[idKey]),
    changes: dataObj,
  });
  if (error) {
    return;
  }
  notifyOperationResult(
    "update",
    data?.updateObjects?.returning.length ?? null,
  );
  isFormOpen.value = false;
};

const deleteDataHandle = async () => {
  if (
    !selection.value ||
    !confirm(
      t(messagePrefix + ".data.delete.confirm", {
        count: selectedRows.value.length,
      }),
    )
  ) {
    return;
  }
  const { data, error } = await deleteRows({
    ids: selectedRows.value.map((row) => row[idKey]),
  });
  if (error) {
    return;
  }
  notifyOperationResult(
    "delete",
    data?.deleteObjects?.returning.length ?? null,
  );
  selectedRows.value = [];
  isFormOpen.value = false;
};

// Search filter
const search = ref<string | null>(null);
const searchableColumns = columns
  .filter((col) => col.searchable)
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

// Import
const isImportFormOpen = ref(false);
const importObjects = async (rows: Row[], overwrite: boolean) => {
  const objects = rows.map((row, index) => {
    const obj = validateRow(row);
    if (!obj) {
      throw new Error(`Invalid row at index ${index.toString()}`);
    }
    return obj;
  });
  const { data, error } = await insertData({
    objects,
    updateColumns: overwrite ? overwrittenColumnsOnImport : [],
  });
  if (error) {
    return;
  }
  notifyOperationResult(
    "import",
    data?.insertObjects?.returning.length ?? null,
  );
};

// Export
const exportDataHandle = () => {
  try {
    downloadCSV(
      `${exportName ?? "export"}_${Date.now().toString()}`,
      selectedRows.value.length ? selectedRows.value : rows,
      exportHeaders,
    );
    notifyOperationResult("export", selectedRows.value.length || rows.length);
  } catch (error) {
    console.error("Export error:", error);
    notify(NotifyType.ERROR, {
      message: t(messagePrefix + ".data.export.invalid"),
      caption: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
</script>

<template>
  <AdminButtons
    :on-create-click="() => openForm([])"
    :on-edit-click="() => openForm()"
    :on-delete-click="deleteDataHandle"
    :on-import-click="() => (isImportFormOpen = true)"
    :on-export-click="exportDataHandle"
    :selection
  />

  <QTable
    v-model:selected="selectedRows"
    :rows="rows"
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
        v-model="search"
        color="primary"
        placeholder="Recherche"
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
          id="teacher-form"
          class="q-gutter-md"
          @submit="selection ? updateDataHandle() : insertDataHandle()"
        >
          <slot />
        </QForm>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          form="teacher-form"
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

  <AdminImport v-model="isImportFormOpen" :row-descriptor :import-objects />
</template>

<style scoped lang="scss"></style>
