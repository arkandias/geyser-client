<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";

defineProps<{
  onCreateClick: () => void;
  onImportClick: () => void;
  onExportClick: () => void;
}>();

const { t } = useI18n<I18nOptions>();
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
        @click="onCreateClick"
      />
      <QBtn
        :label="t('admin.buttons.import')"
        icon="sym_s_upload"
        color="primary"
        no-caps
        outline
        @click="onImportClick"
      />
      <QBtn
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
