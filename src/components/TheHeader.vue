<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, ComputedRef } from "vue";
import { useRouter } from "vue-router";

import { couleurBouton } from "@/helpers/format.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { useRefresh } from "@/stores/refresh.ts";

import MenuAdmin from "@/components/header/MenuAdmin.vue";
import MenuEnseignements from "@/components/header/MenuEnseignements.vue";
import MenuUtilisateur from "@/components/header/MenuUtilisateur.vue";

defineProps<{ disable?: boolean }>();

const $q = useQuasar();
const router = useRouter();
const perm = usePermissions();
const { refresh } = useRefresh();

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
        @click="router.replace({ name: 'accueil' })"
      >
        <QTooltip>Accueil</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_menu_book"
        :disable
        flat
        square
        @click="router.replace({ name: 'enseignements' })"
      >
        <QTooltip>Enseignements</QTooltip>
      </QBtn>
      <Transition>
        <div
          v-if="!disable && router.currentRoute.value.name === 'enseignements'"
          id="transition-wrapper"
        >
          <MenuEnseignements />
        </div>
      </Transition>
      <QSeparator vertical inset color="white" />
      <QBtn icon="sym_s_refresh" :disable flat square @click="refresh()">
        <QTooltip>Rafraîchir les données</QTooltip>
      </QBtn>
      <QBtn
        icon="sym_s_dark_mode"
        :color="couleurBouton($q.dark.isActive)"
        flat
        square
        @click="$q.dark.toggle()"
      >
        <QTooltip>Mode sombre</QTooltip>
      </QBtn>
      <MenuAdmin v-if="perm.dAdministrer" />
      <MenuUtilisateur />
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
