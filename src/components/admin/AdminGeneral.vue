<script setup lang="ts">
import { useCustomI18n } from "@/composables/custom-i18n.ts";

import AdminGeneralCustomTexts from "@/components/admin/AdminGeneralCustomTexts.vue";
import AdminGeneralPhase from "@/components/admin/AdminGeneralPhase.vue";
import AdminGeneralYears from "@/components/admin/AdminGeneralYears.vue";
import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_schedule" :label="t('admin.general.phase.label')">
      <AdminGeneralPhase />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_calendar_month"
      :label="t('admin.general.years.label')"
    >
      <AdminGeneralYears />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_edit_note"
      :label="t('admin.general.custom_texts.label')"
    >
      <AdminGeneralCustomTexts />
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
