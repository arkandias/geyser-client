<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { ComputedRef, computed } from "vue";

import MenuBase from "@/components/header/MenuBase.vue";
import { formatIntervenant, formatRole } from "@/helpers/format.ts";
import { Option } from "@/helpers/types.ts";
import { compareOrder } from "@/helpers/utils.ts";
import { activeRole, useAuthentication } from "@/stores/authentication.ts";
import { useRefresh } from "@/stores/refresh.ts";

const { intervenant, allowedRoles, logout } = useAuthentication();
const { refresh } = useRefresh();

const order = { admin: 1, commissaire: 2, intervenant: 3 };
const options: ComputedRef<Option<string>[]> = computed(() =>
  allowedRoles.value
    .map((role) => ({
      value: role,
      label: formatRole(role),
    }))
    .sort(compareOrder(order)),
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
      <QItem v-close-popup clickable @click="logout()">
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
