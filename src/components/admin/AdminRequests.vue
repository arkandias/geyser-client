<script setup lang="ts">
import { useCustomI18n } from "@/composables/useCustomI18n.ts";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_assignment" :label="t('admin.requests.requests')">
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_assignment_late"
      :label="t('admin.requests.priorities')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
