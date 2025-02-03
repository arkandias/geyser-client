<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { PHASE_OPTIONS } from "@/config/types/phases.ts";
import { ROLES, ROLE_OPTIONS } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import {
  SetCurrentPhaseDocument,
  SetCurrentYearDocument,
} from "@/gql/graphql.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useProfileStore } from "@/stores/profile.ts";
import { useYearsStore } from "@/stores/years.ts";
import type { HasuraClaims } from "@/types/claims.ts";

import SelectTeacher from "@/components/core/SelectTeacher.vue";
import MenuAdminOptions from "@/components/header/MenuAdminOptions.vue";
import MenuBase from "@/components/header/MenuBase.vue";

graphql(`
  mutation SetCurrentYear($value: Int!) {
    years: updateYear(
      where: { value: { _neq: $value } }
      _set: { current: null }
    ) {
      returning {
        value
      }
    }
    current: updateYearByPk(
      pkColumns: { value: $value }
      _set: { current: true }
    ) {
      value
    }
  }

  mutation SetCurrentPhase($value: String!) {
    phases: updatePhase(
      where: { value: { _neq: $value } }
      _set: { current: null }
    ) {
      returning {
        value
      }
    }
    enCours: updatePhaseByPk(
      pkColumns: { value: $value }
      _set: { current: true }
    ) {
      value
    }
  }
`);

const { years, currentYear } = useYearsStore();
const { currentPhase } = usePhaseStore();
const { impersonate } = useProfileStore();

const setCurrentYear = useMutation(SetCurrentYearDocument);
const setCurrentPhase = useMutation(SetCurrentPhaseDocument);

const setCurrentYearHandle = async (year: number | null): Promise<void> => {
  if (year === null) {
    return;
  }
  await setCurrentYear.executeMutation({
    value: year,
  });
};
const setCurrentPhaseHandle = async (phase: string | null): Promise<void> => {
  if (phase === null) {
    return;
  }
  await setCurrentPhase.executeMutation({
    value: phase,
  });
};

const yearOptions = computed(() =>
  years.value.map((year) => ({
    value: year,
    label: year.toString(),
  })),
);

const isImpersonatingFormOpen = ref(false);
const newClaims = ref<HasuraClaims>({
  userId: claims.userId,
  defaultRole: ROLES.TEACHER,
  allowedRoles: [ROLES.TEACHER],
});
watch(
  () => newClaims.value.allowedRoles.includes(newClaims.value.defaultRole),
  () => {
    newClaims.value.defaultRole = ROLES.TEACHER;
  },
);
</script>

<template>
  <MenuBase label="Administration" icon="sym_s_settings">
    <QList>
      <QItem class="flex-center">
        <QItemLabel header>Administration</QItemLabel>
      </QItem>
      <QSeparator />
      <MenuAdminOptions
        :get-value="currentYear"
        :set-value="setCurrentYearHandle"
        :options="yearOptions"
        label="Année en cours"
        icon="sym_s_calendar_month"
      />
      <MenuAdminOptions
        :get-value="currentPhase"
        :set-value="setCurrentPhaseHandle"
        :options="[...PHASE_OPTIONS]"
        label="Phase en cours"
        icon="sym_s_schedule"
      />
      <QItem v-close-popup clickable @click="isImpersonatingFormOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_comedy_mask" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Incarner un intervenant</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>

  <QDialog v-model="isImpersonatingFormOpen">
    <QCard square class="select-profile">
      <QCardSection>
        <SelectTeacher v-model="newClaims.userId" />
      </QCardSection>
      <QCardSection>
        <div class="text-body1">Rôles autorisés :</div>
        <QOptionGroup
          v-model="newClaims.allowedRoles"
          :options="[...ROLE_OPTIONS]"
          :option-disable="(role) => role.value === ROLES.TEACHER"
          type="checkbox"
          inline
        />
      </QCardSection>
      <QCardSection>
        <div class="text-body1">Rôle par défaut :</div>
        <QOptionGroup
          v-model="newClaims.defaultRole"
          :options="[...ROLE_OPTIONS]"
          inline
        />
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          v-close-popup
          label="Incarner"
          flat
          square
          @click="impersonate(newClaims)"
        />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss">
.q-item {
  white-space: nowrap;
}
.select-profile {
  width: $login-dialog-width;
}
</style>
