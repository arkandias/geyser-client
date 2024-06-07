<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import {
  ComputedRef,
  Ref,
  computed,
  reactive,
  ref,
  toValue,
  watch,
  watchEffect,
} from "vue";

import { GET_INTERVENANTS_TABLE_ROWS } from "@/graphql/intervenants.ts";
import { nf, normalizeForSearch, tooltipDelay } from "@/helpers/format.ts";
import { ColumnNonAbbreviable, RowIntervenant } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";
import { usePermissions } from "@/stores/permissions.ts";

const selected = defineModel<RowIntervenant[]>({ required: true });

const { active: anneeActive } = useAnnees();
const perm = usePermissions();

const queryIntervenants = useQuery({
  query: GET_INTERVENANTS_TABLE_ROWS,
  variables: reactive({
    annee: computed(() => anneeActive.value ?? 0),
  }),
  // todo: remove computed with urql/vue update
  pause: computed(() => !anneeActive.value),
  context: {
    additionalTypenames: ["ec_modification_service", "ec_demande"],
  },
});

const rows: ComputedRef<RowIntervenant[]> = computed(
  () => queryIntervenants.data.value?.intervenants ?? [],
);

const select = (_: Event, row: RowIntervenant) => {
  if (selected.value.length > 0 && selected.value[0].uid === row.uid) {
    selected.value = [];
  } else {
    selected.value = [row];
  }
};
// update value of `selected` when the corresponding row changes
// (this is not automatic!)
watch(
  () => rows.value.find((row) => row.uid === selected.value[0]?.uid),
  (value) => {
    selected.value = value ? [value] : [];
  },
);

const columns: ColumnNonAbbreviable<RowIntervenant>[] = [
  {
    name: "nom",
    label: "Nom",
    align: "left",
    field: (row) => row.nom,
    sortable: true,
    visible: true,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "prenom",
    label: "Prénom",
    align: "left",
    field: (row) => row.prenom,
    sortable: true,
    visible: true,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "service",
    label: "S.",
    tooltip: "Service à réaliser (en heures EQTD)",
    field: (row) =>
      nf.format(
        (row.services[0]?.heuresEQTD ?? 0) -
          (row.totalModifications.aggregate?.sum?.heuresEQTD ?? 0),
      ),
    align: "left",
    sortable: true,
    visible: perm.deVoirLeServiceDAutrui.value,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "differentiel",
    label: "\u0394",
    tooltip: "Nombre d'heures EQTD manquantes",
    field: (row) =>
      nf.format(
        (row.services[0]?.heuresEQTD ?? 0) -
          (row.totalModifications.aggregate?.sum?.heuresEQTD ?? 0) -
          (row.totalAttributions.aggregate?.sum?.heures ?? 0),
      ),
    align: "left",
    sortable: true,
    visible: perm.deVoirLeServiceDAutrui.value,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "attributions",
    label: "A.",
    tooltip: "Nombre d'heures EQTD attribuées",
    field: (row) =>
      nf.format(row.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0),
    align: "left",
    sortable: true,
    visible: perm.deVoirLesAttributions.value,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "principales",
    label: "V1",
    tooltip: "Nombre d'heures EQTD demandées en vœux principaux",
    field: (row) =>
      nf.format(row.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "secondaires",
    label: "V2",
    tooltip: "Nombre d'heures EQTD demandées en vœux secondaires",
    field: (row) =>
      nf.format(row.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
];
const searchableColumns: string[] = columns
  .filter((col) => col.searchable)
  .map((col) => col.name);
const visibleColumns: Ref<string[]> = ref([]);
// reset visible columns if permissions change
watchEffect(() => {
  visibleColumns.value = columns
    .filter((col) => toValue(col.visible))
    .map((col) => col.name);
});
const menuColonnesOpen: Ref<boolean> = ref(false);
const tooltipMenuColonnes: Ref<boolean> = ref(false);

// Filtre recherche
const search: Ref<string> = ref("");
const clearSearch = () => {
  search.value = "";
};
const filterObj = computed(() => ({
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly RowIntervenant[],
  terms: typeof filterObj.value,
): readonly RowIntervenant[] =>
  rows.filter((row) =>
    terms.searchColumns.some((col) =>
      normalizeForSearch(String(col.field(row))).includes(terms.search),
    ),
  );
</script>

<template>
  <QTable
    v-model:selected="selected"
    :columns
    :visible-columns
    :rows
    :loading="queryIntervenants.fetching.value"
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    row-key="uid"
    flat
    square
    dense
    virtual-scroll
    @row-click="select"
  >
    <template #top>
      <div class="q-table__title">Intervenants</div>
      <QSpace />
      <div class="row q-gutter-md">
        <QInput
          v-model="search"
          color="primary"
          placeholder="Rechercher"
          clearable
          clear-icon="sym_s_close"
          square
          dense
          style="width: 150px"
          @clear="clearSearch"
        >
        </QInput>
        <QBtn
          icon="sym_s_view_column"
          :color="menuColonnesOpen ? 'primary' : 'grey'"
          flat
          square
          dense
        >
          <QTooltip v-model="tooltipMenuColonnes">Colonnes visibles</QTooltip>
          <QMenu
            v-model="menuColonnesOpen"
            auto-close
            square
            dense
            @show="tooltipMenuColonnes = false"
          >
            <QList dense>
              <QItem v-for="col in columns" :key="col.name" dense>
                <QToggle
                  v-model="visibleColumns"
                  :val="col.name"
                  :label="col.label"
                  color="primary"
                  dense
                />
                <QTooltip
                  v-if="col.tooltip"
                  anchor="center right"
                  self="center left"
                >
                  {{ col.tooltip }}
                </QTooltip>
              </QItem>
            </QList>
          </QMenu>
        </QBtn>
      </div>
    </template>
    <template #header-cell="scope">
      <QTh :props="scope">
        {{ scope.col.label }}
        <QTooltip
          v-if="scope.col.tooltip"
          :delay="tooltipDelay"
          anchor="top middle"
          self="center middle"
        >
          {{ scope.col.tooltip }}
        </QTooltip>
      </QTh>
    </template>
  </QTable>
</template>

<style scoped lang="scss"></style>
