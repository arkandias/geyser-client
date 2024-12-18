<script setup lang="ts">
import { useQuasar } from "quasar";
import { type ComputedRef, computed } from "vue";
import { useRouter } from "vue-router";

import { usePermissions } from "@/composables/permissions.ts";
import { couleurBouton } from "@/helpers/format.ts";
import { useRefresh } from "@/stores/refresh.ts";

import CoursesOptions from "@/components/header/CoursesOptions.vue";
import MenuAdmin from "@/components/header/MenuAdmin.vue";
import MenuUser from "@/components/header/MenuUser.vue";

defineProps<{ disable?: boolean }>();

const $q = useQuasar();
const router = useRouter();
const perm = usePermissions();
const { refresh: refreshData } = useRefresh();

const version: ComputedRef<string | null> = computed(() =>
  import.meta.env.DEV ? "dev" : (import.meta.env.VITE_BUILD_VERSION ?? null),
);
</script>

<template>
  <QHeader id="header">
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
          v-if="!disable && router.currentRoute.value.name === 'enseignements'"
          id="transition-wrapper"
        >
          <CoursesOptions />
        </div>
      </Transition>
      <QSeparator vertical inset color="white" />
      <QBtn icon="sym_s_refresh" :disable flat square @click="refreshData">
        <QTooltip>Rafraîchir les données</QTooltip>
      </QBtn>
      <QBtn
        icon="sym_s_dark_mode"
        :color="couleurBouton($q.dark.isActive)"
        flat
        square
        @click="$q.dark.toggle"
      >
        <QTooltip>Mode sombre</QTooltip>
      </QBtn>
      <MenuAdmin v-if="perm.dAdministrer" />
      <MenuUser />
    </QToolbar>
  </QHeader>
</template>

<style scoped lang="scss">
#header {
  height: $header-height;
  background-color: $primary;
}
.dev #header {
  background-color: $secondary;
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
