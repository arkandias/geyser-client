<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import PanelDetails from "@/components/PanelDetails.vue";
import PanelEnseignements from "@/components/PanelEnseignements.vue";
import PanelIntervenants from "@/components/PanelIntervenants.vue";
import { GET_ENSEIGNEMENTS_TABLE_ROWS } from "@/graphql/enseignements.ts";
import { GET_INTERVENANTS_TABLE_ROWS } from "@/graphql/intervenants.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { usePermissions } from "@/stores/permissions.ts";

const { active: anneeActive } = useAnnees();
const { uid: moi } = useAuthentication();
const perm = usePermissions();
const { closeFilter, filtreIntervenants, openFilter } = useLayout();
const {
  enseignement,
  intervenant,
  selectEnseignement,
  selectIntervenant,
  setEnseignements,
  setFetchingEnseignements,
  setFetchingIntervenants,
  setIntervenants,
} = useData();

const router = useRouter();
const route = useRoute();
watch(
  [enseignement, intervenant],
  async ([rowEnseignement, rowIntervenant]) => {
    await router.replace({
      name: "enseignements",
      query: { ens: rowEnseignement?.id, uid: rowIntervenant?.uid },
    });
  },
);
watch(
  () => String(route.query.uid),
  (uid) => {
    selectIntervenant(uid);
  },
  { immediate: true },
);
watch(
  () => Number(route.query.ens),
  (id) => {
    selectEnseignement(id);
  },
  { immediate: true },
);

const queryEnseignements = useQuery({
  query: GET_ENSEIGNEMENTS_TABLE_ROWS,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
  }),
  pause: () => !anneeActive.value,
  context: { additionalTypenames: ["ec_demande"] },
});
watch(
  queryEnseignements.fetching,
  (value) => {
    setFetchingEnseignements(value);
  },
  { immediate: true },
);
watch(
  queryEnseignements.data,
  (value) => {
    setEnseignements(value?.enseignements ?? []);
  },
  { immediate: true },
);

const queryIntervenants = useQuery({
  query: GET_INTERVENANTS_TABLE_ROWS,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
    condition: computed(() =>
      perm.deVoirLeServiceDAutrui
        ? { actif: { _eq: true } }
        : { uid: { _eq: moi.value } },
    ),
  }),
  pause: () => !anneeActive.value,
  context: {
    additionalTypenames: [
      "ec_demande",
      "ec_message",
      "ec_modification_service",
    ],
  },
});
watch(
  queryIntervenants.fetching,
  (value) => {
    setFetchingIntervenants(value);
  },
  { immediate: true },
);
watch(
  queryIntervenants.data,
  (value) => {
    setIntervenants(value?.intervenants ?? []);
  },
  { immediate: true },
);

watch(
  () => perm.deVoirLeServiceDAutrui,
  (value) => {
    if (value) {
      openFilter();
    } else {
      closeFilter();
    }
  },
  { immediate: true },
);
</script>

<template>
  <QPage>
    <QSplitter
      id="splitter-ens"
      v-model="vSplitterRatio"
      :limits="[0, 100]"
      :disable="!filtreIntervenants"
    >
      <template #before>
        <PanelIntervenants v-if="perm.deVoirLeServiceDAutrui" />
      </template>
      <template #after>
        <QSplitter v-model="hSplitterRatio" horizontal>
          <template #before>
            <PanelEnseignements />
          </template>
          <template #after>
            <PanelDetails />
          </template>
        </QSplitter>
      </template>
    </QSplitter>
  </QPage>
</template>

<style scoped lang="scss"></style>
