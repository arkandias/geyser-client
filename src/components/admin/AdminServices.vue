<script setup lang="ts">
import { useI18n } from "vue-i18n";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useI18n();
</script>

<template>
  <QList bordered>
    <AdminSection
      icon="sym_s_assignment_ind"
      :label="t('admin.services.services')"
    >
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_assignment_late"
      :label="t('admin.services.service_modifications')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
