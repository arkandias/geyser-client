<script setup lang="ts">
import { ref } from "vue";

import AdminGeneral from "@/components/admin/AdminGeneral.vue";

const tab = ref("general");

const tabs = [
  { name: "general", label: "Général" },
  { name: "teachers", label: "Intervenants" },
  { name: "courses", label: "Enseignements" },
  { name: "coordinations", label: "Responsabilités" },
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
        <!-- <AdminTeachers />-->
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
