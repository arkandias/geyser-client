<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { type ComputedRef, type Ref, computed, ref } from "vue";

import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { GET_MODIFICATION_TYPES } from "@/graphql/modification-types.ts";
import {
  DELETE_SERVICE_MODIFICATION,
  INSERT_SERVICE_MODIFICATION,
} from "@/graphql/service-modifications.ts";
import { UPSERT_SERVICE } from "@/graphql/services.ts";
import { formatWH } from "@/helpers/format.ts";
import { modifiedService } from "@/helpers/hours.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import type { ModificationType } from "@/types/modification-type.ts";
import type { ServiceDetails } from "@/types/service.ts";

import ServiceTable from "@/components/core/ServiceTable.vue";

const { service, positionBaseServiceHours, editable } = defineProps<{
  service: ServiceDetails;
  positionBaseServiceHours?: number | null;
  editable?: boolean;
}>();

const upsertService = useMutation(UPSERT_SERVICE);
const queryModificationTypes = useQuery({
  query: GET_MODIFICATION_TYPES,
  variables: {},
});
const insertModification = useMutation(INSERT_SERVICE_MODIFICATION);
const deleteModification = useMutation(DELETE_SERVICE_MODIFICATION);

const isBaseServiceFormOpen: Ref<boolean> = ref(false);
const baseServiceHours: Ref<number> = ref(positionBaseServiceHours ?? 0);

const resetBaseServiceForm = (): void => {
  isBaseServiceFormOpen.value = false;
  baseServiceHours.value = positionBaseServiceHours ?? 0;
};
const submitBaseServiceForm = async (): Promise<void> => {
  if (baseServiceHours.value < 0) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await upsertService.executeMutation({
    uid: service.uid,
    year: service.year,
    hours: baseServiceHours.value,
  });
  if (result.data?.service && !result.error) {
    notify(NotifyType.Success, { message: "Service de base modifié" });
  } else {
    notify(NotifyType.Error, { message: "Échec de la modification" });
  }
  resetBaseServiceForm();
};

const modificationTypesOptions: ComputedRef<ModificationType[]> = computed(
  () => queryModificationTypes.data.value?.modificationTypes ?? [],
);

const isModificationFormOpen: Ref<boolean> = ref(false);
const modificationType: Ref<string | null> = ref(null);
const modificationHours: Ref<number> = ref(0);

const resetModificationForm = (): void => {
  isModificationFormOpen.value = false;
  modificationType.value = null;
  modificationHours.value = 0;
};

const submitModificationForm = async (): Promise<void> => {
  if (!modificationType.value) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un type de modification de service",
    });
    return;
  }
  if (modificationHours.value <= 0) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await insertModification.executeMutation({
    serviceId: service.id,
    modificationType: modificationType.value,
    weightedHours: modificationHours.value,
  });
  if (result.data?.serviceModification && !result.error) {
    notify(NotifyType.Success, { message: "Modification ajoutée" });
  } else {
    notify(NotifyType.Error, { message: "Échec de l'ajout" });
  }
  resetModificationForm();
};

const handleModificationDeletion = async (id: number): Promise<void> => {
  const result = await deleteModification.executeMutation({ id: id });
  if (result.data?.serviceModification && !result.error) {
    notify(NotifyType.Success, { message: "Modification supprimée" });
  } else {
    notify(NotifyType.Error, { message: "Échec de la suppresssion" });
  }
};
</script>

<template>
  <form
    id="editBaseService"
    @submit.prevent="submitBaseServiceForm"
    @reset="resetBaseServiceForm"
  />
  <form
    id="addModification"
    @submit.prevent="submitModificationForm"
    @reset="resetModificationForm"
  />
  <ServiceTable>
    <tr>
      <td>
        Base
        <QBtn
          v-if="isBaseServiceFormOpen"
          form="editBaseService"
          type="submit"
          icon="sym_s_check_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
        >
          <QTooltip :delay="TOOLTIP_DELAY">Valider le service de base</QTooltip>
        </QBtn>
        <QBtn
          v-else-if="editable"
          form="editBaseService"
          icon="sym_s_edit"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="isBaseServiceFormOpen = true"
        >
          <QTooltip :delay="TOOLTIP_DELAY">Éditer le service de base</QTooltip>
        </QBtn>
      </td>
      <td v-if="isBaseServiceFormOpen">
        <QInput
          v-model.number="baseServiceHours"
          type="number"
          step="any"
          suffix="htd"
          square
          dense
          form="editBaseService"
          class="inline-block"
        />
      </td>
      <td v-else>{{ formatWH(service.base) }}</td>
    </tr>
    <tr>
      <td>
        Modifications
        <QBtn
          v-if="isModificationFormOpen"
          form="addModification"
          type="submit"
          icon="sym_s_check_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
        >
          <QTooltip :delay="TOOLTIP_DELAY">Valider la modification</QTooltip>
        </QBtn>
        <QBtn
          v-else-if="editable"
          icon="sym_s_add_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="isModificationFormOpen = true"
        >
          <QTooltip :delay="TOOLTIP_DELAY">Ajouter une modification</QTooltip>
        </QBtn>
      </td>
    </tr>
    <tr v-if="isModificationFormOpen">
      <td>
        <QBtn
          form="addModification"
          type="reset"
          icon="sym_s_cancel"
          color="primary"
          size="sm"
          flat
          square
          dense
        >
          <QTooltip :delay="TOOLTIP_DELAY">Supprimer la modification</QTooltip>
        </QBtn>
        <QSelect
          v-model="modificationType"
          :options="modificationTypesOptions"
          label="Type"
          emit-value
          map-options
          square
          dense
          options-dense
          form="addModification"
          class="inline-block"
        >
          <template #option="scope">
            <QItem v-bind="scope.itemProps">
              <QItemSection>
                <QItemLabel>{{ scope.opt.label }}</QItemLabel>
                <QItemLabel v-if="scope.opt.description" caption>
                  {{ scope.opt.description }}
                </QItemLabel>
              </QItemSection>
            </QItem>
          </template>
        </QSelect>
      </td>
      <td>
        <QInput
          v-model.number="modificationHours"
          type="number"
          step="any"
          suffix="htd"
          square
          dense
          form="addModification"
          class="inline-block"
        />
      </td>
    </tr>
    <tr v-for="modification in service.modifications" :key="modification.id">
      <td>
        <QBtn
          v-if="editable"
          icon="sym_s_cancel"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="handleModificationDeletion(modification.id)"
        >
          <QTooltip :delay="TOOLTIP_DELAY">Supprimer la modification</QTooltip>
        </QBtn>
        {{ modification.modificationType.label }}
      </td>
      <td>{{ formatWH(modification.weightedHours) }}</td>
    </tr>
    <tr>
      <td colspan="100%" style="border-bottom: 1px solid black" />
    </tr>
    <tr>
      <td>Total</td>
      <td>{{ formatWH(modifiedService(service)) }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss">
.q-select {
  width: $modification-form-type-select-width;
  margin: 0 8px;
}
.q-input {
  width: $modification-form-hours-input-width;
  margin: 0 8px;
}
</style>
