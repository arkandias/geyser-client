<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { type ComputedRef, type Ref, computed, ref } from "vue";

import { GET_SERVICE_MODIFICATION_TYPES } from "@/graphql/service-modification-types.ts";
import {
  DELETE_SERVICE_MODIFICATION,
  INSERT_SERVICE_MODIFICATION,
} from "@/graphql/service-modifications.ts";
import { nf } from "@/helpers/format.ts";
import { errorNotify, successNotify } from "@/helpers/notify.ts";
import type {
  ServiceModification,
  ServiceModificationType,
} from "@/types/services.ts";

import ServiceTable from "@/components/service/ServiceTable.vue";

const props = defineProps<{
  serviceId: number;
  serviceBase: number;
  modifications: ServiceModification[];
  totalModifications: number;
  editable: boolean;
}>();

const serviceCorrige: ComputedRef<number> = computed(
  () => props.serviceBase - props.totalModifications,
);

const queryServiceModificationTypes = useQuery({
  query: GET_SERVICE_MODIFICATION_TYPES,
  variables: {},
});
const insertModification = useMutation(INSERT_SERVICE_MODIFICATION);
const deleteModification = useMutation(DELETE_SERVICE_MODIFICATION);

const typeModificationOptions: ComputedRef<ServiceModificationType[]> =
  computed(
    () =>
      queryServiceModificationTypes.data.value?.typesModification.map(
        (typeModification) => ({
          label: typeModification.label,
          description: typeModification.description ?? null,
        }),
      ) ?? [],
  );

const formOpen: Ref<boolean> = ref(false);
const typeModification: Ref<ServiceModificationType | null> = ref(null);
const heuresEQTD: Ref<number> = ref(0);

const resetForm = (): void => {
  formOpen.value = false;
  typeModification.value = null;
  heuresEQTD.value = 0;
};
const submitForm = async (): Promise<void> => {
  if (!typeModification.value) {
    errorNotify(
      "Formulaire non valide",
      "Sélectionnez un type de modification de service",
    );
    return;
  }
  if (heuresEQTD.value <= 0) {
    errorNotify(
      "Formulaire non valide",
      "Sélectionnez un nombre d'heures strictement positif",
    );
    return;
  }
  const result = await insertModification.executeMutation({
    serviceId: props.serviceId,
    typeModification: typeModification.value.label,
    heuresEQTD: heuresEQTD.value,
  });
  if (result.data?.modificationService && !result.error) {
    successNotify("Modification ajoutée");
  } else {
    errorNotify("Échec de l'ajout");
  }
  resetForm();
};
const handleDeletion = async (id: number): Promise<void> => {
  const result = await deleteModification.executeMutation({ id: id });
  if (result.data?.modificationService && !result.error) {
    successNotify(`Modification supprimée`);
  } else {
    errorNotify("Échec de la suppression");
  }
};
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
          v-if="formOpen"
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
          @click="formOpen = true"
        />
      </td>
    </tr>
    <tr v-if="formOpen">
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
          v-model="typeModification"
          :options="typeModificationOptions"
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
          v-model.number="heuresEQTD"
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
        {{ modification.serviceModificationType }}
      </td>
      <td>{{ nf.format(modification.heuresEQTD) + " htd" }}</td>
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
