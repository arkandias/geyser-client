<script setup lang="ts" generic="T extends RowDescriptor">
import { ref, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import type {
  FieldDescriptor,
  ParsedRow,
  RowDescriptor,
} from "@/types/csv-data.ts";
import { importCSV } from "@/utils/csv-import.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

const model = defineModel<boolean>();
const { rowDescriptor, importRows } = defineProps<{
  rowDescriptor: T;
  importRows: (rows: ParsedRow<T>[], overwrite: boolean) => Promise<void>;
}>();

const { t } = useCustomI18n();

const selectedFile = ref<File | null>(null);
const overwrite = ref(false);
watch(model, () => {
  selectedFile.value = null;
  overwrite.value = false;
});

const importing = ref(false);

const importHandle = async () => {
  if (!selectedFile.value) {
    notify(NotifyType.ERROR, {
      message: t("admin.import.invalid.message"),
      caption: t("admin.import.invalid.caption.file_empty"),
    });
  }

  importing.value = true;

  try {
    const text = await selectedFile.value?.text();
    if (text === undefined) {
      notify(NotifyType.ERROR, {
        message: t("admin.import.invalid.message"),
        caption: t("admin.import.invalid.caption.unreadable_file"),
      });
      return;
    }
    await importRows(importCSV(text, rowDescriptor), overwrite.value);
  } catch (error) {
    console.error("Import error:", error);
    notify(NotifyType.ERROR, {
      message: t("admin.import.invalid.message"),
      caption:
        error instanceof Error ? error.message : t("notify.error.unknown"),
    });
  } finally {
    importing.value = false;
    selectedFile.value = null;
    model.value = false;
  }
};

const columns: ColumnNonAbbreviable<[string, FieldDescriptor]>[] = [
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
</script>

<template>
  <QDialog v-model="model" square>
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
          :columns
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
          :label="t('admin.button.import')"
          color="primary"
          flat
          square
          @click="importHandle()"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss"></style>
