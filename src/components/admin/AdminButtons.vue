<script setup lang="ts">
import { useCustomI18n } from "@/composables/custom-i18n.ts";

defineProps<{
  onCreateClick?: (() => void) | (() => Promise<void>);
  onEditClick?: (() => void) | (() => Promise<void>);
  onDeleteClick?: (() => void) | (() => Promise<void>);
  onImportClick?: (() => void) | (() => Promise<void>);
  onExportClick?: (() => void) | (() => Promise<void>);
  selection?: boolean;
}>();

const { t } = useCustomI18n();
</script>

<template>
  <div class="q-mb-md">
    <div class="q-gutter-md row">
      <QBtn
        v-if="onCreateClick"
        :label="t('admin.buttons.create')"
        icon="sym_s_add"
        color="primary"
        no-caps
        outline
        @click="onCreateClick"
      />
      <QBtn
        v-if="onEditClick"
        :label="t('admin.buttons.edit')"
        icon="sym_s_edit"
        color="primary"
        :disable="!selection"
        no-caps
        outline
        @click="onEditClick"
      />
      <QBtn
        v-if="onDeleteClick"
        :label="t('admin.buttons.delete')"
        icon="sym_s_delete"
        color="primary"
        :disable="!selection"
        no-caps
        outline
        @click="onDeleteClick"
      />
      <QSpace />
      <QBtn
        v-if="onImportClick"
        :label="t('admin.buttons.import')"
        icon="sym_s_upload"
        color="primary"
        no-caps
        outline
        @click="onImportClick"
      />
      <QBtn
        v-if="onExportClick"
        :label="t('admin.buttons.export')"
        icon="sym_s_download"
        color="primary"
        no-caps
        outline
        @click="onExportClick"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
