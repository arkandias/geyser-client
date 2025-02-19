<script setup lang="ts">
import { useI18n } from "vue-i18n";

import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useI18n();
</script>

<template>
  <QList bordered>
    <AdminSection
      icon="sym_s_priority"
      :label="t('admin.priorities.priorities')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
