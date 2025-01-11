<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { useRefreshData } from "@/composables/refresh-data.ts";
import { ROLE_OPTIONS, type Role } from "@/config/types/roles.ts";
import { formatUser } from "@/helpers/format.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { claims, profile, activeRole, isLogged, setActiveRole, login, logout } =
  useAuthentication();
const { refreshData } = useRefreshData();

const model = ref<Role | null>(null);
watch(
  activeRole,
  (value) => {
    model.value = value;
  },
  { immediate: true },
);

const roleOptions = computed(() =>
  ROLE_OPTIONS.filter((role) => claims.allowedRoles.includes(role.value)),
);

const onUpdate = async (value: Role) => {
  setActiveRole(value);
  await refreshData();
};
</script>

<template>
  <MenuBase label="Utilisateur" icon="sym_s_account_circle">
    <QList>
      <template v-if="isLogged">
        <QItem class="flex-center text-no-wrap">
          <QItemLabel header>
            {{ formatUser(profile) }}
          </QItemLabel>
        </QItem>
        <QSeparator />
        <QItem class="item-options">
          <QOptionGroup
            v-model="model"
            :options="roleOptions"
            color="primary"
            type="radio"
            @update:model-value="onUpdate"
          />
        </QItem>
        <QSeparator />
      </template>
      <QItem v-close-popup clickable @click="isLogged ? logout() : login()">
        <QItemSection side>
          <QIcon :name="isLogged ? 'sym_s_logout' : 'sym_s_login'" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ isLogged ? "Déconnexion" : "Connexion" }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
