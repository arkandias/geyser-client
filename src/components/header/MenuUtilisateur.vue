<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import { formatIntervenant } from "@/helpers/format.ts";
import { activeRole, useAuthentication } from "@/stores/authentication.ts";
import { useRefresh } from "@/stores/refresh.ts";
import type { Option } from "@/types/common.ts";

import MenuBase from "@/components/header/MenuBase.vue";
import { Role } from "@/types/roles.ts";

const { intervenant, allowedRoles, logout } = useAuthentication();
const { refresh } = useRefresh();

const options: ComputedRef<Option<Role>[]> = computed(() =>
  allowedRoles.value
    .map((role) => Role[role])
    .sort((a, b) => a.order - b.order),
);
</script>

<template>
  <MenuBase label="Utilisateur" icon="sym_s_account_circle">
    <QList dense>
      <QItem class="flex-center text-no-wrap">
        <QItemLabel header>
          {{ formatIntervenant(intervenant) }}
        </QItemLabel>
      </QItem>
      <QSeparator />
      <QItem>
        <QOptionGroup
          v-model="activeRole"
          :options
          color="primary"
          type="radio"
          @update:model-value="refresh"
        />
      </QItem>
      <QSeparator />
      <QItem v-close-popup clickable @click="logout">
        <QItemSection side>
          <QIcon name="sym_s_logout" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Déconnexion</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.q-item {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
