<script setup lang="ts">
import { couleurBouton } from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import { useLayout } from "@/stores/layout.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { filtreIntervenants, toggleLeftPanel } = useLayout();
const { myServiceSelected, myService, toggleMonService } = useData();
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <MenuYear />
  <QBtn
    icon="sym_s_vertical_split"
    :color="couleurBouton(filtreIntervenants)"
    flat
    square
    @click="toggleLeftPanel"
  >
    <QTooltip>Filtre intervenants</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="couleurBouton(myServiceSelected)"
    :disable="!myService"
    flat
    square
    @click="toggleMonService"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
