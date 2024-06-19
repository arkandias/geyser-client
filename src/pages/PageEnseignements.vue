<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

import PanelDetails from "@/components/PanelDetails.vue";
import PanelEnseignements from "@/components/PanelEnseignements.vue";
import PanelIntervenants from "@/components/PanelIntervenants.vue";
import { GET_ENSEIGNEMENTS_TABLE_ROWS } from "@/graphql/enseignements.ts";
import { GET_INTERVENANTS_TABLE_ROWS } from "@/graphql/intervenants.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { usePermissions } from "@/stores/permissions.ts";

const { active: anneeActive } = useAnnees();
const perm = usePermissions();
const { closeFilter, filtreIntervenants, openFilter } = useLayout();
const { setEnseignements, setIntervenants } = useData();

const queryEnseignements = useQuery({
  query: GET_ENSEIGNEMENTS_TABLE_ROWS,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
  }),
  pause: () => !anneeActive.value,
  context: { additionalTypenames: ["ec_demande"] },
});
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
  }),
  pause: () => !anneeActive.value || !perm.deVoirLeServiceDAutrui.value,
  context: {
    additionalTypenames: [
      "ec_modification_service",
      "ec_message",
      "ec_demande",
    ],
  },
});
watch(
  queryIntervenants.data,
  (value) => {
    setIntervenants(value?.intervenants ?? []);
  },
  { immediate: true },
);

watch(
  perm.deVoirLeServiceDAutrui,
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
        <PanelIntervenants v-if="perm.deVoirLeServiceDAutrui.value" />
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
