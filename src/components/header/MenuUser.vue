<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useRefreshData } from "@/composables/refresh-data.ts";
import { ROLE_OPTIONS, type Role } from "@/config/types/roles.ts";
import { logout } from "@/services/keycloak.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { formatUser } from "@/utils/format.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { profile, roles, activeRole, setActiveRole } = useProfileStore();
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
  ROLE_OPTIONS.filter((role) => roles.value.includes(role.value)),
);

const onUpdate = async (value: Role) => {
  setActiveRole(value);
  await refreshData();
};
</script>

<template>
  <MenuBase label="Utilisateur" icon="sym_s_account_circle">
    <QList>
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
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
