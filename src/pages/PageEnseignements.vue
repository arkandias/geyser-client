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

const {
  enCoursActive: anneeEnCoursActive,
  active: anneeActive,
  setActive: setAnneeActive,
} = useAnnees();
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

// sync active annee and selected enseignement/intervenant with the
// corresponding query parameters annee and ens/uid
const router = useRouter();
const route = useRoute();
// update query parameters annee/ens/uid if active annee or selected
// enseignement/intervenant change
watch(
  [
    () => (anneeEnCoursActive.value ? undefined : anneeActive.value),
    enseignement,
    intervenant,
  ],
  async ([annee, rowEnseignement, rowIntervenant]) => {
    await router.replace({
      name: "enseignements",
      query: { annee, ens: rowEnseignement?.id, uid: rowIntervenant?.uid },
    });
  },
);
// update the active year if query parameter annee changes
watch(() => Number(route.query.annee), setAnneeActive, { immediate: true });
// update the selected enseignement if query parameter ens changes
watch(() => Number(route.query.ens), selectEnseignement, { immediate: true });
// update the selected intervenant if query parameter uid changes
watch(() => String(route.query.uid ?? null), selectIntervenant, {
  immediate: true,
});

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
    <QCard v-if="!anneeEnCoursActive" id="warning-archive">
      Vous consultez une archive ({{ anneeActive }})
    </QCard>
    <QSplitter
      id="first-splitter"
      v-model="vSplitterRatio"
      :limits="[0, 100]"
      :disable="!filtreIntervenants"
    >
      <template #before>
        <PanelIntervenants v-if="perm.deVoirLeServiceDAutrui" />
      </template>
      <template #after>
        <QSplitter id="second-splitter" v-model="hSplitterRatio" horizontal>
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
#warning-archive {
  height: $warning-archive-height;
  text-align: center;
  background-color: $accent;
  color: black;
}
.q-splitter :deep(.q-splitter__separator) {
  background-color: $primary;
}

// adjust splitter's height to window's height
#first-splitter,
#first-splitter :deep(.sticky-header-table) {
  height: calc(100vh - $header-height);
}
#warning-archive + #first-splitter,
#warning-archive + #first-splitter :deep(.sticky-header-table) {
  height: calc(100vh - $header-height - $warning-archive-height);
}
#first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height) * v-bind("hSplitterRatio") / 100);
}
/* prettier-ignore */
#warning-archive + #first-splitter #second-splitter :deep(.sticky-header-table) {
  height: calc((100vh - $header-height - $warning-archive-height) * v-bind('hSplitterRatio') / 100);
}
</style>
