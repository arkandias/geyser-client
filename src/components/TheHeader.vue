<script setup lang="ts">
import { useRouter } from "vue-router";

import { useAuthentication } from "@/composables/authentication.ts";
import { useDarkMode } from "@/composables/dark-mode.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { useRefreshData } from "@/composables/refresh-data.ts";
import { version } from "@/config/config.ts";
import { buttonColor } from "@/utils/colors.ts";

import MenuAdmin from "@/components/header/MenuAdmin.vue";
import MenuInfo from "@/components/header/MenuInfo.vue";
import MenuUser from "@/components/header/MenuUser.vue";
import MenusCourses from "@/components/header/MenusCourses.vue";

defineProps<{ disable?: boolean }>();

const router = useRouter();
const { profile, isImpersonating, stopImpersonating } = useAuthentication();
const perm = usePermissions();
const { refreshData } = useRefreshData();
const { isDarkModeActive, toggleDarkMode } = useDarkMode();
</script>

<template>
  <QHeader id="header">
    <QBar v-if="isImpersonating" id="warning-impersonating">
      <div class="col text-body1">
        Vous incarnez un intervenant ({{ profile.uid }})
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
        :disable
        flat
        square
        @click="router.replace({ name: 'home' })"
      >
        <QTooltip>Accueil</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_badge"
        :disable
        flat
        square
        @click="router.replace({ name: 'teacher' })"
      >
        <QTooltip>Mes informations</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_menu_book"
        :disable
        flat
        square
        @click="router.replace({ name: 'courses' })"
      >
        <QTooltip>Enseignements</QTooltip>
      </QBtn>
      <Transition>
        <div
          v-if="!disable && router.currentRoute.value.name === 'courses'"
          id="transition-wrapper"
        >
          <MenusCourses />
        </div>
      </Transition>
      <QSeparator vertical inset color="white" />
      <QBtn icon="sym_s_refresh" :disable flat square @click="refreshData()">
        <QTooltip>Rafraîchir les données</QTooltip>
      </QBtn>
      <QBtn
        icon="sym_s_dark_mode"
        :color="buttonColor(isDarkModeActive)"
        flat
        square
        @click="toggleDarkMode()"
      >
        <QTooltip>Mode sombre</QTooltip>
      </QBtn>
      <MenuUser />
      <MenuAdmin v-if="perm.toAdmin" />
      <MenuInfo />
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
