<script setup lang="ts">
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";

import AdminCoordinations from "@/components/admin/AdminCoordinations.vue";
import AdminCourses from "@/components/admin/AdminCourses.vue";
import AdminGeneral from "@/components/admin/AdminGeneral.vue";
import AdminPriorities from "@/components/admin/AdminPriorities.vue";
import AdminRoles from "@/components/admin/AdminRoles.vue";
import AdminServices from "@/components/admin/AdminServices.vue";
import AdminTeachers from "@/components/admin/AdminTeachers.vue";

const { section = "general" } = defineProps<{
  section?: string;
}>();

const { t } = useI18n<I18nOptions>();

const routeTabs = [
  {
    name: "general",
    label: t("admin.general.title"),
    to: "/admin/general",
  },
  {
    name: "teachers",
    label: t("admin.teachers.title"),
    to: "/admin/teachers",
  },
  {
    name: "services",
    label: t("admin.services.title"),
    to: "/admin/services",
  },
  {
    name: "courses",
    label: t("admin.courses.title"),
    to: "/admin/courses",
  },
  {
    name: "priorities",
    label: t("admin.priorities.title"),
    to: "/admin/priorities",
  },
  {
    name: "coordinations",
    label: t("admin.coordinations.title"),
    to: "/admin/coordinations",
  },
  {
    name: "roles",
    label: t("admin.roles.title"),
    to: "/admin/roles",
  },
];
</script>

<template>
  <QPage class="q-pa-md">
    <QTabs
      active-color="primary"
      indicator-color="primary"
      align="justify"
      class="text-grey"
      dense
    >
      <QRouteTab
        v-for="tab in routeTabs"
        :key="tab.name"
        :name="tab.name"
        :label="tab.label"
        :to="tab.to"
        exact
      />
    </QTabs>

    <QTabPanels :model-value="section" keep-alive animated>
      <QTabPanel name="general">
        <AdminGeneral />
      </QTabPanel>

      <QTabPanel name="teachers">
        <AdminTeachers />
      </QTabPanel>

      <QTabPanel name="services">
        <AdminServices />
      </QTabPanel>

      <QTabPanel name="courses">
        <AdminCourses />
      </QTabPanel>

      <QTabPanel name="priorities">
        <AdminPriorities />
      </QTabPanel>

      <QTabPanel name="coordinations">
        <AdminCoordinations />
      </QTabPanel>

      <QTabPanel name="roles">
        <AdminRoles />
      </QTabPanel>
    </QTabPanels>
  </QPage>
</template>

<style scoped lang="scss">
:global(.admin-form) {
  min-width: $admin-form-min-width;
}
</style>
