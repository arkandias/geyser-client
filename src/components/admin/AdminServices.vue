<script setup lang="ts">
import { useCustomI18n } from "@/composables/custom-i18n.ts";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();
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
