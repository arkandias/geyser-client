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

const $q = useQuasar();
const router = useRouter();
const perm = usePermissions();
const { refresh } = useRefresh();
</script>

<template>
  <QHeader id="header">
    <QToolbar>
      <QToolbarTitle shrink>
        <QAvatar icon="sym_s_spa" square size="xl" />
        Geyser
      </QToolbarTitle>
      <QSpace />
      <QBtn
        icon="sym_s_home"
        flat
        square
        @click="
          () => {
            router.push({ path: '/' });
          }
        "
      >
        <QTooltip>Accueil</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_assignment"
        flat
        square
        @click="
          () => {
            router.push({ path: '/service' });
          }
        "
      >
        <QTooltip>Service</QTooltip>
      </QBtn>
      <QSeparator vertical inset color="white" />
      <QBtn
        icon="sym_s_menu_book"
        flat
        square
        @click="
          () => {
            router.push({ path: '/enseignements' });
          }
        "
      >
        <QTooltip>Liste enseignements</QTooltip>
      </QBtn>
      <Transition>
        <div
          v-if="router.currentRoute.value.name === 'enseignements'"
          id="transition-wrapper"
        >
          <div style="width: 129px">
            <MenuEnseignements />
          </div>
        </div>
      </Transition>
      <QSeparator vertical inset color="white" />
      <QBtn icon="sym_s_refresh" flat square @click="refresh">
        <QTooltip>Rafraîchir les données</QTooltip>
      </QBtn>
      <QBtn
        icon="sym_s_dark_mode"
        :color="couleurBouton($q.dark.isActive)"
        flat
        square
        @click="() => $q.dark.toggle()"
      >
        <QTooltip>Mode sombre</QTooltip>
      </QBtn>
      <MenuAnnee />
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
  width: 129px;
}
.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
