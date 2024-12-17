<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getNumber, getValue } from "@/helpers/utils.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { usePermissions } from "@/stores/permissions.ts";

import PanelDetails from "@/components/PanelDetails.vue";
import PanelEnseignements from "@/components/PanelEnseignements.vue";
import PanelIntervenants from "@/components/PanelIntervenants.vue";
import { useDataSync } from "@/composables/datasync.ts";

const router = useRouter();
const route = useRoute();
const {
  active: anneeActive,
  enCoursActive: anneeEnCoursActive,
  selected: selectedAnnee,
  select: selectAnnee,
} = useAnnees();
const perm = usePermissions();
const { closeFilter, filtreIntervenants, openFilter } = useLayout();
const {
  selectedEnseignement,
  selectedService,
  selectEnseignement,
  selectService,
} = useData();
useDataSync();

// sync query parameters with selection
watch(
  () =>
    [
      getNumber(route.query, "annee"),
      getNumber(route.query, "ens"),
      getValue(route.query, "uid"),
    ] as const,
  ([annee, ens, uid]) => {
    selectAnnee(annee);
    selectEnseignement(ens);
    selectService(uid);
  },
  { immediate: true },
);
watch(
  [
    () => selectedAnnee.value ?? undefined,
    () => selectedEnseignement.value[0]?.id,
    () => selectedService.value[0]?.intervenant.uid,
  ],
  async ([annee, ens, uid]) => {
    await router.replace({
      query: { annee, ens, uid },
    });
  },
);

// open or close the intervenant filter based on user's permissions
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
        <PanelIntervenants />
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
.dev .q-splitter :deep(.q-splitter__separator) {
  background-color: $secondary;
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
