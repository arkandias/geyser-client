<script setup lang="ts">
import { type I18nOptions, useI18n } from "vue-i18n";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useI18n<I18nOptions>();
</script>

<template>
  <QList bordered>
    <AdminSection
      icon="sym_s_account_tree"
      :label="t('admin.coordinations.programs')"
    >
    </AdminSection>

    <QSeparator />
    <AdminSection
      icon="sym_s_alt_route"
      :label="t('admin.coordinations.tracks')"
    >
    </AdminSection>

    <QSeparator />
    <AdminSection
      icon="sym_s_menu_book"
      :label="t('admin.coordinations.courses')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
