<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";

import AdminCourses from "@/components/admin/AdminCourses.vue";
import AdminGeneral from "@/components/admin/AdminGeneral.vue";
import AdminRequests from "@/components/admin/AdminRequests.vue";
import AdminRoles from "@/components/admin/AdminRoles.vue";
import AdminTeachers from "@/components/admin/AdminTeachers.vue";

const { section = "general" } = defineProps<{
  section?: string;
}>();

const { t } = useCustomI18n();

const routeTabs = computed(() => [
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
    name: "courses",
    label: t("admin.courses.title"),
    to: "/admin/courses",
  },
  {
    name: "requests",
    label: t("admin.requests.title"),
    to: "/admin/requests",
  },
  {
    name: "roles",
    label: t("admin.roles.title"),
    to: "/admin/roles",
  },
]);
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

      <QTabPanel name="courses">
        <AdminCourses />
      </QTabPanel>

      <QTabPanel name="requests">
        <AdminRequests />
      </QTabPanel>

      <QTabPanel name="roles">
        <AdminRoles />
      </QTabPanel>
    </QTabPanels>
  </QPage>
</template>

<style scoped lang="scss"></style>
