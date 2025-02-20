<script setup lang="ts">
import { useCustomI18n } from "@/composables/custom-i18n.ts";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();
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
