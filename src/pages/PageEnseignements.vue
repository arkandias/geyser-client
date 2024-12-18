<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useDataSync } from "@/composables/datasync.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { getNumber } from "@/helpers/utils.ts";
import { useData } from "@/stores/data.ts";
import { hSplitterRatio, useLayout, vSplitterRatio } from "@/stores/layout.ts";
import { useYears } from "@/stores/years.ts";

import PanelDetails from "@/components/PanelDetails.vue";
import PanelEnseignements from "@/components/PanelEnseignements.vue";
import PanelIntervenants from "@/components/PanelIntervenants.vue";

const router = useRouter();
const route = useRoute();
const {
  active: activeYear,
  isCurrentActive: isCurrentYearActive,
  selected: selectedYear,
  select: selectYear,
} = useYears();
const perm = usePermissions();
const { closeLeftPanel, filtreIntervenants, openLeftPanel } = useLayout();
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
      getNumber(route.query, "year"),
      getNumber(route.query, "course_id"),
      getNumber(route.query, "service_id"),
    ] as const,
  ([year, courseId, serviceId]) => {
    selectYear(year);
    selectEnseignement(courseId);
    selectService(serviceId);
  },
  { immediate: true },
);
watch(
  [
    () => selectedYear.value ?? undefined,
    () => selectedEnseignement.value[0]?.id,
    () => selectedService.value[0]?.id,
  ],
  async ([year, courseId, serviceId]) => {
    await router.replace({
      query: { year: year, course_id: courseId, service_id: serviceId },
    });
  },
);

// open or close the left panel based on user's permissions
watch(
  () => perm.deVoirLeServiceDAutrui,
  (value) => {
    if (value) {
      openLeftPanel();
    } else {
      closeLeftPanel();
    }
  },
  { immediate: true },
);
</script>

<template>
  <QPage>
    <QCard v-if="!isCurrentYearActive" id="warning-archive">
      Vous consultez une archive ({{ activeYear }})
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
