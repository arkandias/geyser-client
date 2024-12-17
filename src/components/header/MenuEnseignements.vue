<script setup lang="ts">
import { couleurBouton } from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import { useLayout } from "@/stores/layout.ts";

import MenuAnnee from "@/components/header/MenuAnnee.vue";

const { filtreIntervenants, toggleFilter } = useLayout();
const { myServiceSelected, myService, toggleMonService } = useData();
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <MenuAnnee />
  <QBtn
    icon="sym_s_vertical_split"
    :color="couleurBouton(filtreIntervenants)"
    flat
    square
    @click="toggleFilter"
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
