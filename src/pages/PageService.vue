<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, ComputedRef, reactive, ref, Ref, watch } from "vue";

import SelectIntervenant from "@/components/core/SelectIntervenant.vue";
import ServiceDemandes from "@/components/service/ServiceDemandes.vue";
import ServiceMessage from "@/components/service/ServiceMessage.vue";
import ServiceModifications from "@/components/service/ServiceModifications.vue";
import { GET_TYPES_MESSAGE } from "@/graphql/messages.ts";
import { GET_SERVICE } from "@/graphql/services.ts";
import { Message, Modification } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePermissions } from "@/stores/permissions.ts";

const { active: anneeActive } = useAnnees();
const { uid: moi } = useAuthentication();
const perm = usePermissions();

const queryTypesMessage = useQuery({
  query: GET_TYPES_MESSAGE,
  variables: {},
});

const uid: Ref<string> = ref(moi.value);
watch(moi, (value) => {
  uid.value = value;
});

const queryService = useQuery({
  query: GET_SERVICE,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
    uid,
  }),
  pause: () => !anneeActive.value,
  context: {
    additionalTypenames: [
      "ec_modification_service",
      "ec_message",
      "ec_demande",
    ],
  },
});

const serviceBase: ComputedRef<number> = computed(
  () => queryService.data.value?.intervenant?.services[0]?.heuresEQTD ?? 0,
);
const modifications: ComputedRef<Modification[]> = computed(
  () => queryService.data.value?.intervenant?.modifications ?? [],
);
const totalAttributions: ComputedRef<number> = computed(
  () =>
    queryService.data.value?.intervenant?.totalAttributions.aggregate?.sum
      ?.heuresEQTD ?? 0,
);
const totalModifications: ComputedRef<number> = computed(
  () =>
    queryService.data.value?.intervenant?.totalModifications.aggregate?.sum
      ?.heuresEQTD ?? 0,
);
const totalPrincipales: ComputedRef<number> = computed(
  () =>
    queryService.data.value?.intervenant?.totalPrincipales.aggregate?.sum
      ?.heuresEQTD ?? 0,
);
const totalSecondaires: ComputedRef<number> = computed(
  () =>
    queryService.data.value?.intervenant?.totalSecondaires.aggregate?.sum
      ?.heuresEQTD ?? 0,
);
const messages: ComputedRef<Message[]> = computed(
  () => queryService.data.value?.intervenant?.messages ?? [],
);

const typesMessage: ComputedRef<string[]> = computed(
  () =>
    queryTypesMessage.data.value?.typesMessage.map(
      (typeMessage) => typeMessage.value,
    ) ?? [],
);
const typesMessageVisibles: ComputedRef<string[]> = computed(() =>
  typesMessage.value.filter((typeMessage) =>
    perm.deVoirUnMessage.value(typeMessage, uid.value),
  ),
);
</script>

<template>
  <QPage class="column items-center">
    <QCard flat square class="text-center">
      <QCardSection class="text-h5"> Service </QCardSection>
      <QCardSection
        v-if="perm.deVoirLeServiceDAutrui.value"
        class="select-container"
      >
        <SelectIntervenant v-model="uid" style="width: 250px" />
      </QCardSection>
    </QCard>
    <ServiceModifications
      v-if="perm.deVoirUnService.value(uid)"
      :uid
      :editable="perm.deModifierUnService.value(uid)"
      :service-base
      :total-modifications
      :modifications
    />
    <ServiceDemandes
      :total-attributions
      :total-principales
      :total-secondaires
    />
    <ServiceMessage
      v-for="typeMessage in typesMessageVisibles"
      :key="typeMessage"
      :uid
      :editable="perm.deModifierUnMessage.value(typeMessage, uid)"
      :message="
        messages.find((message) => message.typeMessage === typeMessage) ?? {
          typeMessage,
          contenu: '',
        }
      "
    />
  </QPage>
</template>

<style scoped lang="scss">
.q-page > .q-card {
  width: 500px;
  margin: 16px;
}
.select-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
