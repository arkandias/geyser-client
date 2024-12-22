<script setup lang="ts">
import { type ComputedRef, computed } from "vue";
import { useRouter } from "vue-router";

import { buttonColor } from "@/helpers/format.ts";
import { isQueryParam, toggleQueryParam } from "@/helpers/query-params.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useLayout } from "@/stores/layout.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const router = useRouter();

const { isLeftPanelOpen, toggleLeftPanel } = useLayout();
const { profile } = useAuthentication();

const isMyUidSelected: ComputedRef<boolean> = computed(() =>
  isQueryParam(router, "uid", profile.uid),
);

const toggleMyUid = async () => {
  await toggleQueryParam(router, "uid", profile.uid);
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
