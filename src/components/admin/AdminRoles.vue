<script setup lang="ts">
import { type I18nOptions, useI18n } from "vue-i18n";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useI18n<I18nOptions>();
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_shield_person" :label="t('admin.roles.admin')">
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_local_police"
      :label="t('admin.roles.commissioners')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
