<script setup lang="ts">
import { useCustomI18n } from "@/composables/custom-i18n.ts";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_menu_book" :label="t('admin.courses.courses')">
    </AdminSection>

    <QSeparator />

    <AdminSection icon="sym_s_school" :label="t('admin.courses.degrees')">
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_account_tree"
      :label="t('admin.courses.programs')"
    >
    </AdminSection>

    <QSeparator />

    <AdminSection icon="sym_s_alt_route" :label="t('admin.courses.tracks')">
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_format_list_bulleted"
      :label="t('admin.courses.types')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
