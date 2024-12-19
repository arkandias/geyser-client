<script setup lang="ts">
import { buttonColor } from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import { useLayout } from "@/stores/layout.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { filtreIntervenants, toggleLeftPanel } = useLayout();
const { isMyServiceSelected, myService, toggleMyService } = useData();
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
    :color="buttonColor(isMyServiceSelected)"
    :disable="!myService"
    flat
    square
    @click="toggleMyService"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
