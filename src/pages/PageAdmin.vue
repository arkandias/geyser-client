<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";

import AdminGeneral from "@/components/admin/AdminGeneral.vue";
import AdminTeachers from "@/components/admin/AdminTeachers.vue";

const { t } = useI18n<I18nOptions>();

const tab = ref("general");
const tabs = [
  { name: "general", label: t("admin.general.section_label") },
  { name: "teachers", label: t("admin.teachers.section_label") },
  { name: "courses", label: t("admin.courses.section_label") },
];
</script>

<template>
  <QPage class="q-pa-md">
    <QTabs
      v-model="tab"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      class="text-grey"
      dense
    >
      <QTab v-for="t in tabs" :key="t.name" :name="t.name" :label="t.label" />
    </QTabs>

    <QTabPanels v-model="tab" keep-alive animated>
      <QTabPanel name="general">
        <AdminGeneral />
      </QTabPanel>

      <QTabPanel name="teachers">
        <AdminTeachers />
      </QTabPanel>

      <QTabPanel name="courses">
        <!-- <AdminCourses />-->
      </QTabPanel>

      <QTabPanel name="coordinations">
        <!-- <AdminCoordinations />-->
      </QTabPanel>
    </QTabPanels>
  </QPage>
</template>

<style scoped lang="scss"></style>
