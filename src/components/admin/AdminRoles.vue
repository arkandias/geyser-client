<script setup lang="ts">
import { useCustomI18n } from "@/composables/useCustomI18n.ts";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();
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

    <QSeparator />

    <AdminSection
      icon="sym_s_account_tree"
      :label="t('admin.roles.coordinations.programs')"
    >
    </AdminSection>

    <QSeparator />
    <AdminSection
      icon="sym_s_alt_route"
      :label="t('admin.roles.coordinations.tracks')"
    >
    </AdminSection>

    <QSeparator />
    <AdminSection
      icon="sym_s_menu_book"
      :label="t('admin.roles.coordinations.courses')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
