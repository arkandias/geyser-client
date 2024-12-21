<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { buttonColor } from "@/helpers/format.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { useLayout } from "@/stores/layout.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { filtreIntervenants, toggleLeftPanel } = useLayout();
const { selectedTeacher, selectCourse, selectTeacher } = useData();
const { profile } = useAuthentication();

const isMyRowSelected: ComputedRef<boolean> = computed(
  () => selectedTeacher.value[0]?.uid === profile.uid,
);

const toggleMyRow = () => {
  if (isMyRowSelected.value) {
    selectTeacher(null);
  } else {
    selectTeacher(profile.uid);
    selectCourse(null);
  }
};
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <MenuYear />
  <QBtn
    icon="sym_s_vertical_split"
    :color="buttonColor(filtreIntervenants)"
    flat
    square
    @click="toggleLeftPanel"
  >
    <QTooltip>Filtre intervenants</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="buttonColor(isMyRowSelected)"
    flat
    square
    @click="toggleMyRow"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
