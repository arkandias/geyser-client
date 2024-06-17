<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import MenuAdmin from "@/components/header/MenuAdmin.vue";
import MenuAnnee from "@/components/header/MenuAnnee.vue";
import MenuEnseignements from "@/components/header/MenuEnseignements.vue";
import MenuUtilisateur from "@/components/header/MenuUtilisateur.vue";
import { couleurBouton } from "@/helpers/format.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { useRefresh } from "@/stores/refresh.ts";
import { computed, ComputedRef } from "vue";

defineProps<{ disable?: boolean }>();

const $q = useQuasar();
const router = useRouter();
const perm = usePermissions();
const { refresh } = useRefresh();

const version: ComputedRef<string> = computed(
  () =>
    import.meta.env.VITE_BUILD_VERSION ?? (import.meta.env.DEV ? "dev" : ""),
);
</script>

<template>
  <QHeader id="header">
    <QToolbar>
      <QToolbarTitle shrink>
        <QAvatar icon="sym_s_spa" square size="xl" />
        Geyser
      </QToolbarTitle>
      <small>{{ version }}</small>
      <QSpace />
      <QBtn
        icon="sym_s_home"
        :disable
        flat
        square
        @click="router.push({ name: 'accueil' })"
      >
        <QTooltip>Accueil</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_assignment"
        :disable
        flat
        square
        @click="router.push({ name: 'service' })"
      >
        <QTooltip>Service</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_menu_book"
        :disable
        flat
        square
        @click="router.push({ name: 'enseignements' })"
      >
        <QTooltip>Liste enseignements</QTooltip>
      </QBtn>
      <Transition>
        <div
          v-if="!disable && router.currentRoute.value.name === 'enseignements'"
          id="transition-wrapper"
        >
          <div style="width: 130px">
            <MenuEnseignements />
          </div>
        </div>
      </Transition>
      <QSeparator vertical inset color="white" />
      <QBtn icon="sym_s_refresh" :disable flat square @click="refresh">
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
      <MenuAnnee :disable />
      <MenuAdmin v-if="perm.dAdministrer.value" />
      <MenuUtilisateur />
    </QToolbar>
  </QHeader>
</template>

<style scoped lang="scss">
#transition-wrapper {
  display: inline;
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: width 1s ease;
}
.v-enter-to,
.v-leave-from {
  width: 130px;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
