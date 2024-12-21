<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { type ComputedRef, type Ref, computed, ref } from "vue";

import { GET_MODIFICATION_TYPES } from "@/graphql/modification-types.ts";
import {
  DELETE_SERVICE_MODIFICATION,
  INSERT_SERVICE_MODIFICATION,
} from "@/graphql/service-modifications.ts";
import { nf } from "@/helpers/format.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import type { ModificationType } from "@/types/modification-type.ts";
import type { ServiceDetails } from "@/types/service.ts";

import ServiceTable from "@/components/service/ServiceTable.vue";

const { service, editable } = defineProps<{
  service: ServiceDetails;
  editable: boolean;
}>();

const queryModificationTypes = useQuery({
  query: GET_MODIFICATION_TYPES,
  variables: {},
});
const insertModification = useMutation(INSERT_SERVICE_MODIFICATION);
const deleteModification = useMutation(DELETE_SERVICE_MODIFICATION);

const modificationTypesOptions: ComputedRef<ModificationType[]> = computed(
  () => queryModificationTypes.data.value?.modificationTypes ?? [],
);

const isFormOpen: Ref<boolean> = ref(false);
const modificationType: Ref<string | null> = ref(null);
const hours: Ref<number> = ref(0);

const resetForm = (): void => {
  isFormOpen.value = false;
  modificationType.value = null;
  hours.value = 0;
};

const submitForm = async (): Promise<void> => {
  if (!modificationType.value) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un type de modification de service",
    });
    return;
  }
  if (hours.value <= 0) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await insertModification.executeMutation({
    serviceId: service.id,
    modificationType: modificationType.value,
    weightedHours: hours.value,
  });
  if (result.data?.serviceModification && !result.error) {
    notify(NotifyType.Success, { message: "Modification ajoutée" });
  } else {
    notify(NotifyType.Error, { message: "Échec de l'ajout" });
  }
  resetForm();
};

const handleDeletion = async (id: number): Promise<void> => {
  const result = await deleteModification.executeMutation({ id: id });
  if (result.data?.serviceModification && !result.error) {
    notify(NotifyType.Success, { message: "Modification supprimée" });
  } else {
    notify(NotifyType.Error, { message: "Échec de la suppresssion" });
  }
};

const modifiedService: ComputedRef<number> = computed(
  () =>
    service.base -
    (service.totalModifications.aggregate?.sum?.weightedHours ?? 0),
);
</script>

<template>
  <form id="addModification" @submit.prevent="submitForm" @reset="resetForm" />
  <ServiceTable>
    <tr>
      <td>Base</td>
      <td>{{ nf.format(service.base) + " htd" }}</td>
    </tr>
    <tr>
      <td>
        Modifications
        <QBtn
          v-if="isFormOpen"
          form="addModification"
          type="submit"
          icon="sym_s_check_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
        />
        <QBtn
          v-else-if="editable"
          icon="sym_s_add_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="isFormOpen = true"
        />
      </td>
    </tr>
    <tr v-if="isFormOpen">
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
        />
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
          v-model.number="hours"
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
          @click="handleDeletion(modification.id)"
        />
        {{ modification.modificationType.label }}
      </td>
      <td>{{ nf.format(modification.weightedHours) + " htd" }}</td>
    </tr>
    <tr>
      <td colspan="100%" style="border-bottom: 1px solid black" />
    </tr>
    <tr>
      <td>Total</td>
      <td>{{ nf.format(modifiedService) + " htd" }}</td>
    </tr>
  </ServiceTable>
</template>

<style scoped lang="scss">
.q-select {
  width: $modification-form-select-width;
  margin: 0 8px;
}
.q-input {
  width: $modification-form-input-width;
  margin: 0 8px;
}
</style>
