<script setup lang="ts">
import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useQueryParam } from "@/composables/useQueryParam.ts";
import { useService } from "@/composables/useService.ts";
import { useLeftPanelStore } from "@/stores/useLeftPanelStore.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { buttonColor } from "@/utils/colors.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { t } = useCustomI18n();

const { uid } = useProfileStore();
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
    <QTooltip>{{ t("header.courses.teachersFilter") }}</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="buttonColor(selectedUid === uid)"
    :disable="!hasService"
    flat
    square
    @click="toggleUid(uid)"
  >
    <QTooltip>{{ t("header.courses.myRequests") }}</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
