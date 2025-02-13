<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { useQueryParam } from "@/composables/query-param.ts";
import { useService } from "@/composables/service.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import { useLeftPanelStore } from "@/stores/left-panel.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { buttonColor } from "@/utils/colors.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const { t } = useI18n<I18nOptions>();

const { profile } = useProfileStore();
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
    <QTooltip>{{ t("header.tooltip.teachers_filter") }}</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="buttonColor(selectedUid === profile.uid)"
    :disable="!hasService"
    flat
    square
    @click="toggleUid(profile.uid)"
  >
    <QTooltip>{{ t("header.tooltip.my_requests") }}</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
