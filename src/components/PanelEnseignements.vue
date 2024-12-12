<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { ComputedRef, Ref } from "vue";
import { computed, ref, toValue, watchEffect } from "vue";

import { TOOLTIP_DELAY } from "@/constants/ui/interactions.ts";
import { demandeValue } from "@/helpers/enseignement.ts";
import {
  formatFormation,
  formatIntervenant,
  nf,
  normalizeForSearch,
} from "@/helpers/format.ts";
import { compare, uniqueValue } from "@/helpers/utils.ts";
import { selectedEnseignement as selected, useData } from "@/stores/data.ts";
import { usePermissions } from "@/stores/permissions.ts";
import type { Column } from "@/types/columns.ts";
import { isAbbreviable } from "@/types/columns.ts";
import type { Option } from "@/types/common.ts";
import type { RowEnseignement } from "@/types/rows.ts";

const perm = usePermissions();
const {
  enseignement,
  enseignements,
  fetchingEnseignements,
  intervenant,
  selectEnseignement,
  selectIntervenant,
} = useData();

const select = (_: Event, row: RowEnseignement) => {
  if (selected.value[0]?.id === row.id) {
    selectEnseignement();
  } else {
    selectEnseignement(row.id);
  }
};

// Titre de la table
const title: ComputedRef<string> = computed(() =>
  intervenant.value ? formatIntervenant(intervenant.value) : "Enseignements",
);

// Colonnes
const columns: Column<RowEnseignement>[] = [
  {
    name: "formation",
    label: "Formation",
    field: (row) => ({
      long: formatFormation(row.mention.cursus.nom, row.mention.nom),
      short:
        row.mention.cursus.nomCourt !== null || row.mention.nomCourt !== null
          ? formatFormation(
              row.mention.cursus.nomCourt ?? row.mention.cursus.nom,
              row.mention.nomCourt ?? row.mention.nom,
            )
          : null,
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "parcours",
    label: "Parcours",
    field: (row) => ({
      long: row.parcours?.nom ?? "",
      short: row.parcours?.nomCourt,
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "nom",
    label: "Nom",
    field: (row) => ({
      long: row.nom,
      short: row.nomCourt,
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "type",
    label: "Type",
    field: (row) =>
      row.typeEnseignement.labelCourt ?? row.typeEnseignement.label,
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "semestre",
    label: "S.",
    tooltip: "Semestre",
    field: (row) => row.semestre,
    format: (val: number) => "S" + val.toString(),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "heures",
    label: "H.",
    tooltip: "Nombre d'heures par groupe",
    field: (row) => row.heures,
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "groupes",
    label: "G.",
    tooltip: "Nombre de groupes ouverts",
    field: (row) => row.groupes ?? 0,
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "attributions",
    label: "A.",
    tooltip: "Nombre d'heures attribuées",
    field: (row) => demandeValue(row, intervenant.value, "attribution"),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: () => perm.deVoirLesAttributions,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_attributions",
    label: "\u0394A",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures attribuées",
    field: (row) =>
      (row.heures ?? 0) * (row.groupes ?? 0) -
      (row.totalAttributions.aggregate?.sum?.heures ?? 0),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "principales",
    label: "V1",
    tooltip: "Nombre d'heures demandées en vœux principaux",
    field: (row) => demandeValue(row, intervenant.value, "principale"),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_principales",
    label: "\u0394V1",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux",
    field: (row) =>
      (row.heures ?? 0) * (row.groupes ?? 0) -
      (row.totalPrincipales.aggregate?.sum?.heures ?? 0),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_principales_prio",
    label: "\u0394V1 Prio",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux prioritaires",
    field: (row) =>
      (row.heures ?? 0) * (row.groupes ?? 0) -
      (row.totalPrioritaire.aggregate?.sum?.heures ?? 0),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "secondaires",
    label: "V2",
    tooltip: "Nombre d'heures demandées en vœux secondaires",
    field: (row) => demandeValue(row, intervenant.value, "secondaire"),
    format: (val: number) => nf.format(val),
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

// Filtres
// Formation
const formations: Ref<number[]> = ref([]);
const formationOptions: ComputedRef<Option<number>[]> = computed(() =>
  enseignements.value
    .map((enseignement) => ({
      value: enseignement.mention.id,
      label: formatFormation(
        enseignement.mention.cursus.nomCourt ?? enseignement.mention.cursus.nom,
        enseignement.mention.nomCourt ?? enseignement.mention.nom,
      ),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Type
const typesEnseignement: Ref<string[]> = ref([]);
const typeEnseignementOptions: ComputedRef<Option<string>[]> = computed(() =>
  enseignements.value
    .map((enseignement) => ({
      value: enseignement.typeEnseignement.label,
      label:
        enseignement.typeEnseignement.labelCourt ??
        enseignement.typeEnseignement.label,
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Semestre
const semestres: Ref<number[]> = ref([]);
const semestreOptions: ComputedRef<Option<number>[]> = computed(() =>
  enseignements.value
    .map((enseignement) => ({
      value: enseignement.semestre,
      label: "S" + enseignement.semestre.toString(),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Recherche
const search: Ref<string> = ref("");
const clearSearch = () => {
  search.value = "";
};
// Attributs du filtre
const filterObj = computed(() => ({
  demandesIntervenant: intervenant.value ? intervenant.value.demandes : null,
  formations: formations.value,
  typesEnseignement: typesEnseignement.value,
  semestres: semestres.value,
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly RowEnseignement[],
  terms: typeof filterObj.value,
): readonly RowEnseignement[] =>
  rows.filter((row) =>
    terms.demandesIntervenant
      ? terms.demandesIntervenant.some((demande) => demande.ensId === row.id)
      : (terms.formations.length === 0 ||
          terms.formations.some((formation) => formation === row.mention.id)) &&
        (terms.typesEnseignement.length === 0 ||
          terms.typesEnseignement.some(
            (typeEns) => typeEns === row.typeEnseignement.label,
          )) &&
        (terms.semestres.length === 0 ||
          terms.semestres.includes(row.semestre)) &&
        terms.searchColumns.some((col) =>
          normalizeForSearch(
            String(
              isAbbreviable(col)
                ? col.field(row).long + (col.field(row).short ?? "")
                : col.field(row),
            ),
          ).includes(terms.search),
        ),
  );

const stickyHeader: Ref<boolean> = ref(false);

// check whether an enseignement is assigned to the selected intervenant
const estAttribue = (row: RowEnseignement) =>
  intervenant.value?.demandes.some(
    (demande) =>
      demande.ensId === row.id && demande.typeDemande === "attribution",
  ) ?? false;

// check whether an enseignement is visible
const estVisible = (row: RowEnseignement): boolean =>
  !intervenant.value &&
  row.visible &&
  row.mention.visible &&
  (row.parcours?.visible ?? true);
</script>

<template>
  <QTable
    v-model:selected="selected"
    :title
    :columns
    :visible-columns
    :rows="enseignements"
    :loading="fetchingEnseignements"
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    row-key="id"
    flat
    square
    dense
    virtual-scroll
    :class="{ 'sticky-header-table': stickyHeader }"
    @row-click="select"
  >
    <template #top>
      <div class="q-table__title">
        {{ title }}
        <QBtn
          v-if="intervenant"
          icon="sym_s_visibility"
          :color="!enseignement ? 'primary' : 'grey'"
          size="sm"
          flat
          square
          dense
          @click="selectEnseignement()"
        />
        <QBtn
          v-if="intervenant"
          icon="sym_s_close"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="selectIntervenant()"
        />
      </div>
      <QSpace />
      <div class="row q-gutter-md">
        <QSelect
          v-model="formations"
          :options="formationOptions"
          :disable="intervenant !== null"
          color="primary"
          label="Formation"
          emit-value
          map-options
          multiple
          use-chips
          square
          dense
          options-dense
        >
          <!--slot pour utiliser QChip avec l'attribut dense-->
          <template #selected-item="scope">
            <QChip
              :tabindex="scope.tabindex"
              class="q-ma-none"
              color="grey3"
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
            >
              {{ scope.opt.label }}
            </QChip>
          </template>
        </QSelect>
        <QSelect
          v-model="typesEnseignement"
          :options="typeEnseignementOptions"
          :disable="intervenant !== null"
          color="primary"
          label="Type"
          emit-value
          map-options
          multiple
          square
          dense
          options-dense
        >
          <!--slot pour utiliser QChip avec l'attribut dense-->
          <template #selected-item="scope">
            <QChip
              :tabindex="scope.tabindex"
              class="q-ma-none"
              color="grey3"
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
            >
              {{ scope.opt.label }}
            </QChip>
          </template>
        </QSelect>
        <QSelect
          v-model="semestres"
          :options="semestreOptions"
          :disable="intervenant !== null"
          color="primary"
          label="Semestre"
          emit-value
          map-options
          multiple
          square
          dense
          options-dense
        >
          <!--slot pour utiliser QChip avec l'attribut dense-->
          <template #selected-item="scope">
            <QChip
              :tabindex="scope.tabindex"
              class="q-ma-none"
              color="grey3"
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
            >
              {{ scope.opt.label }}
            </QChip>
          </template>
        </QSelect>
        <QInput
          v-model="search"
          :disable="intervenant !== null"
          color="primary"
          placeholder="Recherche"
          clear-icon="sym_s_close"
          clearable
          square
          dense
          @clear="clearSearch"
        >
        </QInput>
        <QToggle
          v-model="stickyHeader"
          icon="sym_s_scrollable_header"
          color="primary"
          dense
        >
          <QTooltip>En-tête fixe</QTooltip>
        </QToggle>
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
                  anchor="center left"
                  self="center right"
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
          :delay="TOOLTIP_DELAY"
          anchor="top middle"
          self="center middle"
        >
          {{ scope.col.tooltip }}
        </QTooltip>
      </QTh>
    </template>
    <template #body-cell="scope">
      <QTd
        :props="scope"
        :class="{
          'non-visible': !estVisible(scope.row),
          attribue: estAttribue(scope.row),
        }"
      >
        {{ scope.value?.short ?? scope.value?.long ?? scope.value }}
        <QTooltip v-if="scope.value?.short" :delay="TOOLTIP_DELAY">
          {{ scope.value.long }}
        </QTooltip>
      </QTd>
    </template>
  </QTable>
</template>

<style scoped lang="scss">
.q-select {
  min-width: $select-filter-min-width;
}
.q-input {
  width: $search-input-width;
}
.non-visible {
  background-color: rgba($negative, 0.1);
}
.attribue {
  background-color: rgba($positive, 0.1);
}
</style>
