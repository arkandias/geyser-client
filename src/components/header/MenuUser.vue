<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useRefreshData } from "@/composables/useRefreshData.ts";
import { ROLES, type Role } from "@/config/types/roles.ts";
import { logout } from "@/services/keycloak.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t } = useCustomI18n();
const { displayname, roles, activeRole, setActiveRole } = useProfileStore();
const { refreshData } = useRefreshData();

const role = ref<Role | null>(null);
watch(
  activeRole,
  (value) => {
    role.value = value;
  },
  { immediate: true },
);

const roleOptions = computed(() =>
  roles.value.map((role) => ({
    value: role,
    label: t(`role.${role}`, 1),
  })),
);

const update = async (value: Role) => {
  setActiveRole(value);
  await refreshData();
};
</script>

<template>
  <MenuBase :label="t('header.user.label')" icon="sym_s_account_circle">
    <QList>
      <QItem class="flex-center text-no-wrap">
        <QItemLabel header>
          {{ displayname }}
        </QItemLabel>
      </QItem>
      <QSeparator />
      <QItem class="item-options">
        <QOptionGroup
          v-model="role"
          :options="roleOptions"
          color="primary"
          type="radio"
          @update:model-value="update"
        />
      </QItem>
      <QSeparator />
      <QItem v-close-popup clickable @click="logout()">
        <QItemSection side>
          <QIcon name="sym_s_logout" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ t("header.user.logout") }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>
</template>

<style scoped lang="scss">
.q-item {
  white-space: nowrap;
}
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
</style>
