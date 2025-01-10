<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { useRefreshData } from "@/composables/refresh-data.ts";
import { ROLE_OPTIONS, type Role } from "@/config/types/roles.ts";
import { formatUser } from "@/helpers/format.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import type { Profile } from "@/types/user.ts";

import TeacherSelect from "@/components/core/TeacherSelect.vue";
import MenuBase from "@/components/header/MenuBase.vue";

const {
  profile,
  activeRole,
  allowedRoles,
  logged,
  logout,
  setActiveRole,
  login,
} = useAuthenticationStore();
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
  ROLE_OPTIONS.filter((role) => allowedRoles.value.includes(role.value)),
);

const onUpdate = async (value: Role) => {
  setActiveRole(value);
  await refreshData();
};

const isLoginOpen = ref(false);
const newProfile = ref<Profile | null>(null);
const onLogin = () => {
  if (newProfile.value === null) {
    console.error("Login failed: Profile not found");
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la connexion",
      caption: "Le profil n'a pas pu être chargé",
    });
    return;
  }
  login({ ...newProfile.value, active: true });
  isLoginOpen.value = false;
};
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
      <QItem v-if="logged" v-close-popup clickable @click="logout">
        <QItemSection side>
          <QIcon name="sym_s_logout" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Déconnexion</QItemLabel>
        </QItemSection>
      </QItem>
      <QItem v-else v-close-popup clickable @click="isLoginOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_login" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Connexion</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>

  <QDialog v-model="isLoginOpen">
    <QCard square class="select-profile">
      <QCardSection>
        <TeacherSelect v-model:profile="newProfile" />
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          label="Connexion"
          :disable="!newProfile"
          flat
          square
          dense
          @click="onLogin"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss">
.item-options {
  padding-left: 8px;
}
.q-radio__label {
  white-space: nowrap;
}
.select-profile {
  width: $login-dialog-width;
}
</style>
