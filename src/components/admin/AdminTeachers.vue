<script setup lang="ts">
import { type I18nOptions, useI18n } from "vue-i18n";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useI18n<I18nOptions>();
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_work" :label="t('admin.teachers.position')">
    </AdminSection>

    <QSeparator />

    <AdminSection icon="sym_s_groups" :label="t('admin.teachers.teachers')">
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
