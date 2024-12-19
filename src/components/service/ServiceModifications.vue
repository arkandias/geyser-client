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
import type { ServiceModification } from "@/types/service-modification.ts";

import ServiceTable from "@/components/service/ServiceTable.vue";

const props = defineProps<{
  serviceId: number;
  serviceBase: number;
  modifications: ServiceModification[];
  totalModifications: number;
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
const modificationTypes: Ref<ModificationType | null> = ref(null);
const weightedHours: Ref<number> = ref(0);

const resetForm = (): void => {
  isFormOpen.value = false;
  modificationTypes.value = null;
  weightedHours.value = 0;
};
const submitForm = async (): Promise<void> => {
  if (!modificationTypes.value) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un type de modification de service",
    });
    return;
  }
  if (weightedHours.value <= 0) {
    notify(NotifyType.Error, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await insertModification.executeMutation({
    serviceId: props.serviceId,
    modificationType: modificationTypes.value.value,
    weightedHours: weightedHours.value,
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

const serviceCorrige: ComputedRef<number> = computed(
  () => props.serviceBase - props.totalModifications,
);
</script>

<template>
  <form id="addModification" @submit.prevent="submitForm" @reset="resetForm" />
  <ServiceTable>
    <tr>
      <td>Base</td>
      <td>{{ nf.format(serviceBase) + " htd" }}</td>
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
          v-model="modificationTypes"
          :options="modificationTypesOptions"
          option-value="label"
          label-slot
          label="Type"
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
          v-model.number="weightedHours"
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
    <tr v-for="modification in modifications" :key="modification.id">
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
        {{ modification.modificationType }}
      </td>
      <td>{{ nf.format(modification.weightedHours) + " htd" }}</td>
    </tr>
    <tr>
      <td colspan="100%" style="border-bottom: 1px solid black" />
    </tr>
    <tr>
      <td>Total</td>
      <td>{{ nf.format(serviceCorrige) + " htd" }}</td>
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
