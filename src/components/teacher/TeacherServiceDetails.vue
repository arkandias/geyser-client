<script setup lang="ts">
import { useMutation, useQuery } from "@urql/vue";
import { computed, ref } from "vue";

import { usePermissions } from "@/composables/usePermissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  DeleteModificationDocument,
  GetModificationTypesDocument,
  InsertModificationDocument,
  TeacherServiceDetailsFragmentDoc,
  UpsertServiceDocument,
} from "@/gql/graphql.ts";
import { formatWH, modifiedService } from "@/utils/hours.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherTable from "@/components/teacher/TeacherTable.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherServiceDetailsFragmentDoc>;
}>();

graphql(`
  query GetModificationTypes {
    modificationTypes: serviceModificationType(orderBy: { label: ASC }) {
      id
      label
      description
    }
  }

  fragment TeacherServiceDetails on Service {
    id
    uid
    year
    hours
    totalModifications: modificationsAggregate {
      aggregate {
        sum {
          hours
        }
      }
    }
    modifications(orderBy: [{ type: { label: ASC } }, { hours: ASC }]) {
      id
      modificationType: type {
        label
      }
      hours
    }
  }

  mutation UpsertService($year: Int!, $uid: String!, $hours: Float!) {
    service: insertServiceOne(
      object: { year: $year, uid: $uid, hours: $hours }
      onConflict: { constraint: service_year_uid_key, updateColumns: [hours] }
    ) {
      id
    }
  }

  mutation InsertModification(
    $serviceId: Int!
    $modificationTypeId: Int!
    $hours: Float!
  ) {
    serviceModification: insertServiceModificationOne(
      object: {
        serviceId: $serviceId
        typeId: $modificationTypeId
        hours: $hours
      }
    ) {
      id
    }
  }

  mutation DeleteModification($id: Int!) {
    serviceModification: deleteServiceModificationByPk(id: $id) {
      id
    }
  }
`);

const perm = usePermissions();

const modificationTypesQueryResult = useQuery({
  query: GetModificationTypesDocument,
  variables: {},
});
const service = computed(() =>
  useFragment(TeacherServiceDetailsFragmentDoc, dataFragment),
);
const upsertService = useMutation(UpsertServiceDocument);
const insertModification = useMutation(InsertModificationDocument);
const deleteModification = useMutation(DeleteModificationDocument);

// Base service hours form
const isBaseServiceFormOpen = ref(false);
const baseServiceHours = ref(
  // eslint-disable-next-line vue/no-ref-object-reactivity-loss
  service.value.hours,
);
const resetBaseServiceForm = (): void => {
  isBaseServiceFormOpen.value = false;
  baseServiceHours.value = service.value.hours;
};
const submitBaseServiceForm = async (): Promise<void> => {
  if (baseServiceHours.value < 0) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Sélectionnez un nombre d'heures strictement positif",
    });
    return;
  }
  if (baseServiceHours.value === service.value.hours) {
    notify(NotifyType.DEFAULT, { message: "Pas de changement à enregistrer" });
  } else {
    const { data, error } = await upsertService.executeMutation({
      year: service.value.year,
      uid: service.value.uid,
      hours: baseServiceHours.value,
    });
    if (data?.service && !error) {
      notify(NotifyType.SUCCESS, { message: "Service de base modifié" });
    } else {
      notify(NotifyType.ERROR, {
        message: "Échec de la modification",
        caption: error?.message,
      });
    }
  }
  resetBaseServiceForm();
};

// Modifications form
const modificationTypesOptions = computed(
  () => modificationTypesQueryResult.data.value?.modificationTypes ?? [],
);
const isModificationFormOpen = ref(false);
const modificationTypeId = ref<number | null>(null);
const modificationHours = ref(0);
const resetModificationForm = (): void => {
  isModificationFormOpen.value = false;
  modificationTypeId.value = null;
  modificationHours.value = 0;
};
const submitModificationForm = async (): Promise<void> => {
  if (!modificationTypeId.value) {
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
  const { data, error } = await insertModification.executeMutation({
    serviceId: service.value.id,
    modificationTypeId: modificationTypeId.value,
    hours: modificationHours.value,
  });
  if (data?.serviceModification && !error) {
    notify(NotifyType.SUCCESS, { message: "Modification ajoutée" });
  } else {
    notify(NotifyType.ERROR, {
      message: "Échec de l'ajout",
      caption: error?.message,
    });
  }
  resetModificationForm();
};

const handleModificationDeletion = async (id: number): Promise<void> => {
  const { data, error } = await deleteModification.executeMutation({ id });
  if (data?.serviceModification && !error) {
    notify(NotifyType.SUCCESS, { message: "Modification supprimée" });
  } else {
    notify(NotifyType.ERROR, {
      message: "Échec de la suppression",
      caption: error?.message,
    });
  }
};
</script>

<template>
  <DetailsSection title="Service">
    <form
      id="edit-base-service"
      @submit.prevent="submitBaseServiceForm"
      @reset="resetBaseServiceForm"
    />
    <form
      id="add-modification"
      @submit.prevent="submitModificationForm"
      @reset="resetModificationForm"
    />
    <TeacherTable>
      <tr>
        <td>
          Base
          <QBtn
            v-if="isBaseServiceFormOpen"
            form="edit-base-service"
            type="submit"
            icon="sym_s_check_circle"
            color="primary"
            size="sm"
            flat
            square
            dense
          >
            <QTooltip :delay="TOOLTIP_DELAY">
              Valider le service de base
            </QTooltip>
          </QBtn>
          <QBtn
            v-else-if="perm.toEditAService(service.uid)"
            form="edit-base-service"
            icon="sym_s_edit"
            color="primary"
            size="sm"
            flat
            square
            dense
            @click="isBaseServiceFormOpen = true"
          >
            <QTooltip :delay="TOOLTIP_DELAY">
              Éditer le service de base
            </QTooltip>
          </QBtn>
        </td>
        <td v-if="isBaseServiceFormOpen">
          <QInput
            v-model.number="baseServiceHours"
            type="number"
            label="Heures"
            square
            dense
            form="edit-base-service"
            class="inline-block"
          />
        </td>
        <td v-else>{{ formatWH(service.hours) }}</td>
      </tr>
      <tr>
        <td>
          Modifications
          <QBtn
            v-if="isModificationFormOpen"
            form="add-modification"
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
            v-else-if="perm.toEditAService(service.uid)"
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
            form="add-modification"
            type="reset"
            icon="sym_s_cancel"
            color="primary"
            size="sm"
            flat
            square
            dense
          >
            <QTooltip :delay="TOOLTIP_DELAY">
              Supprimer la modification
            </QTooltip>
          </QBtn>
          <QSelect
            v-model="modificationTypeId"
            :options="modificationTypesOptions"
            label="Type"
            option-value="id"
            emit-value
            map-options
            square
            dense
            options-dense
            form="add-modification"
            class="inline-block q-ml-sm"
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
            label="Heures"
            square
            dense
            form="add-modification"
            class="inline-block"
          />
        </td>
      </tr>
      <tr v-for="m in service.modifications" :key="m.id">
        <td>
          <QBtn
            v-if="perm.toEditAService(service.uid)"
            icon="sym_s_cancel"
            color="primary"
            size="sm"
            flat
            square
            dense
            @click="handleModificationDeletion(m.id)"
          >
            <QTooltip :delay="TOOLTIP_DELAY">
              Supprimer la modification
            </QTooltip>
          </QBtn>
          {{ m.modificationType.label }}
        </td>
        <td>{{ formatWH(m.hours) }}</td>
      </tr>
      <tr>
        <td colspan="100%" style="border-bottom: 1px solid black" />
      </tr>
      <tr>
        <td>Total</td>
        <td>{{ formatWH(modifiedService(service)) }}</td>
      </tr>
    </TeacherTable>
  </DetailsSection>
</template>

<style scoped lang="scss">
.q-select {
  width: 240px;
}
.q-input {
  width: 60px;
}
</style>
