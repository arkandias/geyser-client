<script setup lang="ts">
import { useAuthentication } from "@/composables/authentication.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { buttonColor } from "@/helpers/colors.ts";
import { useLeftPanelStore } from "@/stores/left-panel.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { isLeftPanelOpen, toggleLeftPanel } = useLeftPanelStore();
const { profile } = useAuthentication();
const { getValue: selectedUid, toggleValue: toggleUid } = useQueryParam("uid");
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <MenuYear />
  <QBtn
    icon="sym_s_vertical_split"
    :color="buttonColor(isLeftPanelOpen)"
    flat
    square
    @click="toggleLeftPanel"
  >
    <QTooltip>Filtre intervenants</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="buttonColor(selectedUid === profile.uid)"
    flat
    square
    @click="toggleUid(profile.uid)"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
