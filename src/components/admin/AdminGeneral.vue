<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";

import AdminGeneralCustomTexts from "@/components/admin/AdminGeneralCustomTexts.vue";
import AdminGeneralPhase from "@/components/admin/AdminGeneralPhase.vue";
import AdminGeneralYears from "@/components/admin/AdminGeneralYears.vue";
import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useI18n<I18nOptions>();
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_schedule" :label="t('admin.general.phase')">
      <AdminGeneralPhase />
    </AdminSection>

    <QSeparator />

    <AdminSection icon="sym_s_calendar_month" :label="t('admin.general.years')">
      <AdminGeneralYears />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_edit_note"
      :label="t('admin.general.custom_text')"
    >
      <AdminGeneralCustomTexts />
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
