<script setup lang="ts">
import { useAuthentication } from "@/composables/authentication.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { useService } from "@/composables/service.ts";
import { useLeftPanelStore } from "@/stores/left-panel.ts";
import { buttonColor } from "@/utils/colors.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { profile } = useAuthentication();
const { hasService } = useService();
const { getValue: selectedUid, toggleValue: toggleUid } = useQueryParam("uid");
const { isLeftPanelOpen, toggleLeftPanel } = useLeftPanelStore();
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <MenuYear />
  <QBtn
    icon="sym_s_vertical_split"
    :color="buttonColor(isLeftPanelOpen)"
    flat
    square
    @click="toggleLeftPanel()"
  >
    <QTooltip>Filtre intervenants</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="buttonColor(selectedUid === profile.uid)"
    :disable="!hasService"
    flat
    square
    @click="toggleUid(profile.uid)"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
