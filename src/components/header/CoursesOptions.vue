<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { useQueryParam } from "@/composables/query-param.ts";
import { buttonColor } from "@/helpers/format.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import { useLeftPanelStore } from "@/stores/left-panel.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { isLeftPanelOpen, toggleLeftPanel } = useLeftPanelStore();
const { profile } = useAuthenticationStore();
const { getValue: uid, toggleValue: toggleUid } = useQueryParam("uid");

const isMyUidSelected: ComputedRef<boolean> = computed(
  () => uid.value === profile.uid,
);

const toggleMyUid = async () => {
  await toggleUid(profile.uid);
};
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
    :color="buttonColor(isMyUidSelected)"
    :disable="!profile.active"
    flat
    square
    @click="toggleMyUid"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
