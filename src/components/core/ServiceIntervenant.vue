<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { ComputedRef, Ref, computed, ref } from "vue";

import TableService from "@/components/core/TableService.vue";
import {
  DELETE_MODIFICATION,
  GET_TYPES_MODIFICATION,
  INSERT_MODIFICATION,
} from "@/graphql/modifications.ts";
import { nf } from "@/helpers/format.ts";
import { errorNotify, successNotify } from "@/helpers/notify.ts";
import { Modification, TypeModification } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";

const props = defineProps<{
  uid: string;
  serviceBase: number;
  modifications: Modification[];
  totalModifications: number;
  editable: boolean;
}>();

const { active: anneeActive } = useAnnees();

const serviceCorrige: ComputedRef<number> = computed(
  () => props.serviceBase - props.totalModifications,
);

const queryTypesModification = useQuery({
  query: GET_TYPES_MODIFICATION,
  variables: {},
});
const insertModification = useMutation(INSERT_MODIFICATION);
const deleteModification = useMutation(DELETE_MODIFICATION);

const typeModificationOptions: ComputedRef<TypeModification[]> = computed(
  () =>
    queryTypesModification.data.value?.typesModification.map(
      (typeModification) => ({
        label: typeModification.label,
        description: typeModification.description ?? null,
      }),
    ) ?? [],
);

const openForm: Ref<boolean> = ref(false);
const typeModification: Ref<string | null> = ref(null);
const heuresEQTD: Ref<number> = ref(0);

const onReset = (): void => {
  openForm.value = false;
  typeModification.value = null;
  heuresEQTD.value = 0;
};
const onSubmit = async (): Promise<void> => {
  if (!typeModification.value) {
    errorNotify(
      "Formulaire non valide",
      "Sélectionnez un type de modification de service",
    );
    return;
  }
  if (!(heuresEQTD.value > 0)) {
    errorNotify(
      "Formulaire non valide",
      "Sélectionnez un nombre d'heures strictement positif",
    );
    return;
  }
  const result = await insertModification.executeMutation({
    annee: anneeActive.value ?? 0,
    uid: props.uid,
    typeModification: typeModification.value,
    heuresEQTD: heuresEQTD.value,
  });
  if (result.data?.modificationService?.id && !result.error) {
    successNotify("Modification ajoutée");
  } else {
    errorNotify("Échec de l'ajout");
  }
  onReset();
};
const onDelete = async (id: number): Promise<void> => {
  const result = await deleteModification.executeMutation({ id: id });
  if (result.data?.modificationService?.id && !result.error) {
    successNotify(`Modification supprimée`);
  } else {
    errorNotify("Échec de la suppression");
  }
};
</script>

<template>
  <form id="addModification" @submit.prevent="onSubmit" @reset="onReset" />
  <TableService>
    <tr>
      <td>Base</td>
      <td>{{ nf.format(serviceBase) + " htd" }}</td>
    </tr>
    <tr>
      <td>
        Modifications
        <QBtn
          v-if="editable"
          icon="sym_s_add_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="openForm = true"
        />
      </td>
    </tr>
    <tr v-if="openForm">
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
                <QItemLabel caption>{{ scope.opt.description }}</QItemLabel>
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
        <QBtn
          form="addModification"
          type="submit"
          icon="sym_s_check_circle"
          color="primary"
          size="sm"
          flat
          square
          dense
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
          @click="onDelete(modification.id)"
        />
        {{ modification.typeModification }}
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
  </TableService>
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
