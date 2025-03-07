<script setup lang="ts">
import { useRouter } from "vue-router";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useDarkMode } from "@/composables/useDarkMode.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useRefreshData } from "@/composables/useRefreshData.ts";
import { version } from "@/config/env.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { buttonColor } from "@/utils/colors.ts";

import MenuInfo from "@/components/header/MenuInfo.vue";
import MenuLang from "@/components/header/MenuLang.vue";
import MenuUser from "@/components/header/MenuUser.vue";
import ToolbarCourses from "@/components/header/ToolbarCourses.vue";

defineProps<{ disable?: boolean }>();

const { t } = useCustomI18n();

const router = useRouter();
const { uid, isImpersonating, stopImpersonating } = useProfileStore();
const perm = usePermissions();
const { refreshData } = useRefreshData();
const { isDarkModeActive, toggleDarkMode } = useDarkMode();
</script>

<template>
  <QHeader id="header">
    <QBar v-if="isImpersonating" id="warning-impersonating">
      <div class="col text-body1">
        {{ t("header.warning.impersonating", { uid }) }}
      </div>
      <QBtn icon="sym_s_close" flat square @click="stopImpersonating()" />
    </QBar>
    <QToolbar>
      <QToolbarTitle shrink>
        <QAvatar icon="sym_s_spa" square size="xl" />
        Geyser
        <QBadge v-if="version" outline align="middle">{{ version }}</QBadge>
      </QToolbarTitle>
      <QSpace />
      <QBtn
        icon="sym_s_home"
        :color="buttonColor(router.currentRoute.value.name === 'home')"
        :disable
        flat
        square
        @click="router.push({ name: 'home' })"
      >
        <QTooltip>{{ t("header.home.label") }}</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_badge"
        :color="buttonColor(router.currentRoute.value.name === 'teacher')"
        :disable
        flat
        square
        @click="router.push({ name: 'teacher' })"
      >
        <QTooltip>{{ t("header.teacher.label") }}</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_menu_book"
        :color="buttonColor(router.currentRoute.value.name === 'courses')"
        :disable
        flat
        square
        @click="router.push({ name: 'courses' })"
      >
        <QTooltip>{{ t("header.courses.label") }}</QTooltip>
      </QBtn>
      <Transition>
        <div
          v-if="!disable && router.currentRoute.value.name === 'courses'"
          id="transition-wrapper"
        >
          <ToolbarCourses />
        </div>
      </Transition>
      <QSeparator vertical inset color="white" />
      <QBtn
        v-if="perm.toAdmin"
        icon="sym_s_settings"
        :color="buttonColor(router.currentRoute.value.name === 'admin')"
        flat
        square
        @click="router.push({ path: '/admin/general' })"
      >
        <QTooltip>{{ t("header.admin.label") }}</QTooltip>
      </QBtn>
      <QSeparator v-if="perm.toAdmin" vertical inset color="white" />
      <QBtn icon="sym_s_refresh" :disable flat square @click="refreshData()">
        <QTooltip>{{ t("header.refreshData.label") }}</QTooltip>
      </QBtn>
      <QBtn
        :icon="isDarkModeActive ? 'sym_s_dark_mode' : 'sym_s_light_mode'"
        flat
        square
        @click="toggleDarkMode()"
      >
        <QTooltip>{{ t("header.darkMode.label") }}</QTooltip>
      </QBtn>
      <MenuLang />
      <MenuInfo />
      <MenuUser />
    </QToolbar>
  </QHeader>
</template>

<style scoped lang="scss">
#header {
  height: $header-height;
  background-color: $primary;
}
#header:has(#warning-impersonating) {
  height: $header-height + $warning-height;
}
.dev #header {
  background-color: $secondary;
}
#warning-impersonating {
  height: $warning-height;
  text-align: center;
  background-color: $accent;
  color: black;
}
#transition-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
}
#transition-wrapper * {
  white-space: nowrap;
}
.v-enter-active,
.v-leave-active {
  transition: width 1s ease;
}
.v-enter-to,
.v-leave-from {
  width: 185px;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
