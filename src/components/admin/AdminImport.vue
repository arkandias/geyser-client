<script setup lang="ts" generic="T extends Record<string, FieldDescriptor>">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import {
  type FieldDescriptor,
  type ParsedObject,
  importCSV,
} from "@/utils/csv-import.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

const model = defineModel<boolean>();
const { descriptorObj, insertObjects } = defineProps<{
  descriptorObj: T;
  insertObjects: (objects: ParsedObject<T>[]) => Promise<void>;
}>();

const { t } = useI18n<I18nOptions>();

const selectedFile = ref<File | null>(null);
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

    const objects = importCSV(text, descriptorObj);

    await insertObjects(objects);
  } catch (error) {
    notify(NotifyType.ERROR, {
      message: t("admin.import.invalid.message"),
      caption:
        error instanceof Error
          ? error.message
          : t("admin.import.invalid.caption.unknown_error"),
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
          :rows="Object.entries(descriptorObj)"
          hide-bottom
          bordered
          flat
          dense
        />
      </QCardSection>
      <QCardSection>
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
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          :loading="importing"
          :label="t('admin.import.import_button')"
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
