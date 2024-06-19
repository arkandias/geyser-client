<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { couleurBouton } from "@/helpers/format.ts";
import { useData } from "@/stores/data.ts";
import { useLayout } from "@/stores/layout.ts";
import { usePermissions } from "@/stores/permissions.ts";

const perm = usePermissions();
const { filtreIntervenants, toggleFilter } = useLayout();
const { selectedMe, myRow, toggleMonService } = useData();
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <QBtn
    icon="sym_s_vertical_split"
    :color="couleurBouton(filtreIntervenants)"
    :disable="!perm.deVoirLeServiceDAutrui.value"
    flat
    square
    @click="toggleFilter"
  >
    <QTooltip>Filtre intervenants</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="couleurBouton(selectedMe)"
    :disable="!myRow"
    flat
    square
    @click="toggleMonService"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
