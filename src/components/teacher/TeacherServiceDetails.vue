<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { computed, ref } from "vue";

import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  DeleteModificationDocument,
  GetModificationTypesDocument,
  InsertModificationDocument,
  TeacherServiceDetailsFragmentDoc,
  UpsertServiceDocument,
} from "@/gql/graphql.ts";
import { formatWH } from "@/helpers/format.ts";
import { modifiedService } from "@/helpers/hours.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherTable from "@/components/teacher/TeacherTable.vue";

const { dataFragment, editable } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceDetailsFragmentDoc>;
  editable?: boolean;
}>();

graphql(`
  query GetModificationTypes {
    modificationTypes: type_modification_service(order_by: { value: asc }) {
      value
      label
      description
    }
  }

  fragment TeacherServiceDetails on service {
    id
    uid
    year: annee
    base: heures_eqtd
    totalModifications: modifications_aggregate {
      aggregate {
        sum {
          hours: heures_eqtd
        }
      }
    }
    modifications {
      id
      modificationType: typeByType {
        label
      }
      hours: heures_eqtd
    }
  }

  mutation UpsertService($year: Int!, $uid: String!, $hours: Float!) {
    service: insert_service_one(
      object: { annee: $year, uid: $uid, heures_eqtd: $hours }
      on_conflict: {
        constraint: service_annee_uid_key
        update_columns: [heures_eqtd]
      }
    ) {
      id
    }
  }

  mutation InsertModification(
    $serviceId: Int!
    $modificationType: String!
    $hours: Float!
  ) {
    serviceModification: insert_modification_service_one(
      object: {
        service_id: $serviceId
        type: $modificationType
        heures_eqtd: $hours
      }
    ) {
      id
    }
  }

  mutation DeleteModification($id: Int!) {
    serviceModification: delete_modification_service_by_pk(id: $id) {
      id
    }
  }
`);

const modificationTypesQueryResult = useQuery({
  query: GetModificationTypesDocument,
  variables: {},
});
const data = computed(() =>
  useFragment(TeacherServiceDetailsFragmentDoc, dataFragment),
);
const upsertService = useMutation(UpsertServiceDocument);
const insertModification = useMutation(InsertModificationDocument);
const deleteModification = useMutation(DeleteModificationDocument);

// Base service hours form
const isBaseServiceFormOpen = ref(false);
const baseServiceHours = ref(
  // eslint-disable-next-line vue/no-ref-object-reactivity-loss
  data.value.base,
);
const resetBaseServiceForm = (): void => {
  isBaseServiceFormOpen.value = false;
  baseServiceHours.value = data.value.base;
};
const submitBaseServiceForm = async (): Promise<void> => {
  if (baseServiceHours.value < 0) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  if (baseServiceHours.value === data.value.base) {
    notify(NotifyType.DEFAULT, { message: "Pas de changement à enregistrer" });
  } else {
    const result = await upsertService.executeMutation({
      year: data.value.year,
      uid: data.value.uid,
      hours: baseServiceHours.value,
    });
    if (result.data?.service && !result.error) {
      notify(NotifyType.SUCCESS, { message: "Service de base modifié" });
    } else {
      notify(NotifyType.ERROR, { message: "Échec de la modification" });
    }
  }
  resetBaseServiceForm();
};

// Modifications form
const modificationTypesOptions = computed(
  () => modificationTypesQueryResult.data.value?.modificationTypes ?? [],
);
const isModificationFormOpen = ref(false);
const modificationType = ref<string | null>(null);
const modificationHours = ref(0);
const resetModificationForm = (): void => {
  isModificationFormOpen.value = false;
  modificationType.value = null;
  modificationHours.value = 0;
};
const submitModificationForm = async (): Promise<void> => {
  if (!modificationType.value) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un type de modification de service",
    });
    return;
  }
  if (modificationHours.value <= 0) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  const result = await insertModification.executeMutation({
    serviceId: data.value.id,
    modificationType: modificationType.value,
    hours: modificationHours.value,
  });
  if (result.data?.serviceModification && !result.error) {
    notify(NotifyType.SUCCESS, { message: "Modification ajoutée" });
  } else {
    notify(NotifyType.ERROR, { message: "Échec de l'ajout" });
  }
  resetModificationForm();
};

const handleModificationDeletion = async (id: number): Promise<void> => {
  const result = await deleteModification.executeMutation({ id: id });
  if (result.data?.serviceModification && !result.error) {
    notify(NotifyType.SUCCESS, { message: "Modification supprimée" });
  } else {
    notify(NotifyType.ERROR, { message: "Échec de la suppresssion" });
  }
};
</script>

<template>
  <DetailsSection title="Service">
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
    <TeacherTable>
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
            <QTooltip :delay="TOOLTIP_DELAY"
              >Valider le service de base</QTooltip
            >
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
            <QTooltip :delay="TOOLTIP_DELAY"
              >Éditer le service de base</QTooltip
            >
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
        <td v-else>{{ formatWH(data.base) }}</td>
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
            <QTooltip :delay="TOOLTIP_DELAY"
              >Supprimer la modification</QTooltip
            >
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
      <tr v-for="modification in data.modifications" :key="modification.id">
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
            <QTooltip :delay="TOOLTIP_DELAY"
              >Supprimer la modification</QTooltip
            >
          </QBtn>
          {{ modification.modificationType.label }}
        </td>
        <td>{{ formatWH(modification.hours) }}</td>
      </tr>
      <tr>
        <td colspan="100%" style="border-bottom: 1px solid black" />
      </tr>
      <tr>
        <td>Total</td>
        <td>{{ formatWH(modifiedService(data)) }}</td>
      </tr>
    </TeacherTable>
  </DetailsSection>
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
