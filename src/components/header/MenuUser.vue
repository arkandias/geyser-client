<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useRefreshData } from "@/composables/useRefreshData.ts";
import { ROLES, type Role } from "@/config/types/roles.ts";
import { logout } from "@/services/keycloak.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";

import SelectTeacher from "@/components/core/SelectTeacher.vue";
import MenuBase from "@/components/header/MenuBase.vue";

const { t } = useCustomI18n();
const client = useClientHandle().client;

const { displayname, roles, activeRole, setActiveRole, startImpersonating } =
  useProfileStore();
const perm = usePermissions();
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
  [
    { value: ROLES.TEACHER, label: t("role.teacher") },
    { value: ROLES.COMMISSIONER, label: t("role.commissioner") },
    { value: ROLES.ADMIN, label: t("role.admin") },
  ].filter((role) => roles.value.includes(role.value)),
);

const onUpdate = async (value: Role) => {
  setActiveRole(value);
  await refreshData();
};

// Impersonating
const isImpersonateDialogOpen = ref(false);
const uid = ref<string | null>(null);
const onImpersonate = async () => {
  if (uid.value) {
    await startImpersonating(client, uid.value);
    isImpersonateDialogOpen.value = false;
  }
};
watch(isImpersonateDialogOpen, (value) => {
  if (value) {
    uid.value = null;
  }
});
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
          @update:model-value="onUpdate"
        />
      </QItem>
      <template v-if="perm.toAdmin">
        <QSeparator />
        <QItem v-close-popup clickable @click="isImpersonateDialogOpen = true">
          <QItemSection side>
            <QIcon name="sym_s_comedy_mask" />
          </QItemSection>
          <QItemSection>
            <QItemLabel>{{ t("header.user.impersonate.label") }}</QItemLabel>
          </QItemSection>
        </QItem>
      </template>
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

  <QDialog v-model="isImpersonateDialogOpen">
    <QCard square>
      <QCardSection class="text-h6">
        {{ t("header.user.impersonate.dialog.title") }}
      </QCardSection>
      <QCardSection class="text-justify q-pt-none">
        <SelectTeacher v-model="uid" />
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          :disable="!uid"
          :label="t('header.user.impersonate.dialog.button')"
          color="primary"
          flat
          square
          dense
          @click="onImpersonate()"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss">
.q-dialog .q-card {
  width: $info-dialog-max-width;
}
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
