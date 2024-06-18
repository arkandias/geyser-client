<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

import DetailsEnseignement from "@/components/enseignements/DetailsEnseignement.vue";
import TableEnseignements from "@/components/enseignements/TableEnseignements.vue";
import TableIntervenants from "@/components/enseignements/TableIntervenants.vue";
import { GET_MY_ROW } from "@/graphql/intervenants.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import {
  selectedEnseignements,
  selectedIntervenants,
  useData,
} from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { usePermissions } from "@/stores/permissions.ts";

const { active: anneeActive } = useAnnees();
const { uid: moi } = useAuthentication();
const perm = usePermissions();
const { filtreIntervenants, openFilter, closeFilter } = useLayout();
const { intervenant, enseignement, setMyRow } = useData();

const queryIntervenant = useQuery({
  query: GET_MY_ROW,
  variables: reactive({
    uid: moi,
    annee: computed(() => anneeActive.value ?? 0),
  }),
  pause: () => !anneeActive.value,
  context: {
    additionalTypenames: ["ec_modification_service", "ec_demande"],
  },
});

watch(queryIntervenant.data, (value) => {
  setMyRow(value?.intervenant ?? null);
});

watch(perm.deVoirLeServiceDAutrui, (value) => {
  if (value) {
    openFilter();
  } else {
    closeFilter();
  }
});
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
        <TableIntervenants
          v-if="perm.deVoirLeServiceDAutrui.value"
          v-model="selectedIntervenants"
        />
      </template>
      <template #after>
        <QSplitter v-model="hSplitterRatio" horizontal>
          <template #before>
            <TableEnseignements v-model="selectedEnseignements" :intervenant />
          </template>
          <template #after>
            <DetailsEnseignement :enseignement />
          </template>
        </QSplitter>
      </template>
    </QSplitter>
  </QPage>
</template>

<style scoped lang="scss"></style>
