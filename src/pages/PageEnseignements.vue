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
import {
  GET_INTERVENANTS_TABLE_ROWS,
  GET_MY_ROW,
} from "@/graphql/intervenants.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { usePermissions } from "@/stores/permissions.ts";

const { enCoursActive: anneeEnCoursActive, active: anneeActive } = useAnnees();
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

// sync the selected enseignement/intervenant with the query parameter ens/uid
const router = useRouter();
const route = useRoute();
// update ens/uid if the selected enseignement/intervenant changes
watch(
  [enseignement, intervenant],
  async ([rowEnseignement, rowIntervenant]) => {
    await router.replace({
      name: "enseignements",
      query: { ens: rowEnseignement?.id, uid: rowIntervenant?.uid },
    });
  },
);
// update the selected enseignement if ens changes
watch(() => Number(route.query.ens), selectEnseignement, { immediate: true });
// update the selected intervenant if uid changes
watch(() => String(route.query.uid), selectIntervenant, { immediate: true });

// query for the list of enseignements
const queryEnseignements = useQuery({
  query: GET_ENSEIGNEMENTS_TABLE_ROWS,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
  }),
  pause: () => !anneeActive.value,
  context: { additionalTypenames: ["ec_demande"] },
});
// store the fetching status and result of the query result in the Data store
// and update on change
watch(queryEnseignements.fetching, setFetchingEnseignements, {
  immediate: true,
});
watch(
  () => queryEnseignements.data.value?.enseignements ?? [],
  setEnseignements,
  { immediate: true },
);

// query for the list of all active intervenants or just for the user's row,
// depending on whether or not the user has the corresponding permission
const queryIntervenants = useQuery({
  query: GET_INTERVENANTS_TABLE_ROWS,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
  }),
  pause: () => !perm.deVoirLeServiceDAutrui || !anneeActive.value,
  context: {
    additionalTypenames: [
      "ec_demande",
      "ec_message",
      "ec_modification_service",
    ],
  },
});
const queryMyRow = useQuery({
  query: GET_MY_ROW,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
    uid: moi,
  }),
  pause: () => perm.deVoirLeServiceDAutrui || !anneeActive.value,
  context: {
    additionalTypenames: [
      "ec_demande",
      "ec_message",
      "ec_modification_service",
    ],
  },
});
// store the fetching status and result of the query result in the Data store
// and update on change
watch(
  () =>
    perm.deVoirLeServiceDAutrui
      ? queryIntervenants.fetching.value
      : queryMyRow.fetching.value,
  setFetchingIntervenants,
  { immediate: true },
);
watch(
  () =>
    perm.deVoirLeServiceDAutrui
      ? queryIntervenants.data.value?.intervenants ?? []
      : queryMyRow.data.value?.intervenant
        ? [queryMyRow.data.value.intervenant]
        : [],
  setIntervenants,
  { immediate: true },
);

// open/close the intervenant filter based on user's permissions
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
    <QCard v-if="!anneeEnCoursActive" class="warning">
      Vous consultez une archive ({{ anneeActive }})
    </QCard>
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

<style scoped lang="scss">
.warning {
  text-align: center;
  background-color: $accent;
}
</style>
