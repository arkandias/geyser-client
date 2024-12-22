<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { ROLE_METADATA, type Role } from "@/config/types/roles.ts";
import { formatUser } from "@/helpers/format.ts";
import { activeRole, useAuthentication } from "@/stores/authentication.ts";
import { useRefresh } from "@/stores/refresh.ts";
import type { Option } from "@/types/common.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { profile, allowedRoles, logout } = useAuthentication();
const { refresh: refreshData } = useRefresh();

const optionsRole: ComputedRef<Option<Role>[]> = computed(() =>
  allowedRoles.value
    .map((role) => ({
      value: role,
      label: ROLE_METADATA[role].label,
    }))
    .sort(
      (a, b) => ROLE_METADATA[a.value].order - ROLE_METADATA[b.value].order,
    ),
);
</script>

<template>
  <MenuBase label="Utilisateur" icon="sym_s_account_circle">
    <QList dense>
      <QItem class="flex-center text-no-wrap">
        <QItemLabel header>
          {{ formatUser(profile) }}
        </QItemLabel>
      </QItem>
      <QSeparator />
      <QItem>
        <QOptionGroup
          v-model="activeRole"
          :options="optionsRole"
          color="primary"
          type="radio"
          @update:model-value="refreshData"
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
