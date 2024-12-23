<script setup lang="ts">
import { type Ref, computed, ref, toValue, watchEffect } from "vue";
import { useRouter } from "vue-router";

import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { nf } from "@/helpers/format.ts";
import { modifiedService, totalWH } from "@/helpers/hours.ts";
import { normalizeForSearch } from "@/helpers/misc.ts";
import { toggleQueryParam } from "@/helpers/query-params.ts";
import { useData } from "@/stores/data.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import type { TeacherRow } from "@/types/teacher.ts";

const router = useRouter();

const perm = usePermissions();
const { teachers, fetchingTeachers, selectedTeacher } = useData();

const selectTeacher = async (_: Event, row: TeacherRow) => {
  await toggleQueryParam(router, "uid", row.uid);
};

// Columns definition
const columns: ColumnNonAbbreviable<TeacherRow>[] = [
  {
    name: "firstname",
    label: "Prénom",
    align: "left",
    field: (row) => row.firstname,
    sortable: true,
    visible: true,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "lastname",
    label: "Nom",
    align: "left",
    field: (row) => row.lastname,
    sortable: true,
    visible: true,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "alias",
    label: "Alias",
    align: "left",
    field: (row) => row.alias,
    sortable: true,
    visible: false,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "messages",
    label: "M.",
    tooltip: "Messages",
    align: "left",
    field: (row) => (row.messageCount.aggregate?.count ? "✓" : "✗"),
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "service",
    label: "S.",
    tooltip: "Service à réaliser (en heures EQTD)",
    field: (row) => modifiedService(row.services[0]),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "attributions",
    label: "A.",
    tooltip: "Nombre d'heures EQTD attribuées",
    field: (row) => totalWH(row.totalAssigned),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: () => perm.toViewAssignments,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_attribution",
    label: "\u0394A",
    tooltip:
      "Différence entre le service et le nombre d'heures EQTD attribuées",
    field: (row) =>
      modifiedService(row.services[0]) - totalWH(row.totalAssigned),
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
    tooltip: "Nombre d'heures EQTD demandées en vœux principaux",
    field: (row) => totalWH(row.totalPrimary),
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
      "Différence entre le service et le nombre d'heures EQTD demandées en vœux principaux",
    field: (row) =>
      modifiedService(row.services[0]) - totalWH(row.totalPrimary),
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
    tooltip: "Nombre d'heures EQTD demandées en vœux secondaires",
    field: (row) => totalWH(row.totalSecondary),
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

// Search filter
const search: Ref<string> = ref("");
const clearSearch = () => {
  search.value = "";
};
const filterObj = computed(() => ({
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly TeacherRow[],
  terms: typeof filterObj.value,
): readonly TeacherRow[] =>
  rows.filter((row) =>
    terms.searchColumns.some((col) =>
      normalizeForSearch(String(col.field(row))).includes(terms.search),
    ),
  );

const stickyHeader: Ref<boolean> = ref(false);
</script>

<template>
  <QTable
    v-model:selected="selectedTeacher"
    :columns
    :visible-columns
    :rows="teachers"
    :loading="fetchingTeachers"
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    row-key="uid"
    flat
    square
    dense
    virtual-scroll
    :class="{ 'sticky-header-table': stickyHeader }"
    @row-click="selectTeacher"
  >
    <template #top>
      <div class="q-table__title">Intervenants</div>
      <QSpace />
      <div class="row q-gutter-md">
        <QInput
          v-model="search"
          color="primary"
          placeholder="Recherche"
          clearable
          clear-icon="sym_s_close"
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
          :delay="TOOLTIP_DELAY"
          anchor="top middle"
          self="center middle"
        >
          {{ scope.col.tooltip }}
        </QTooltip>
      </QTh>
    </template>
    <template #body-cell="scope">
      <QTd :props="scope" :class="{ 'non-visible': !scope.row.visible }">
        {{ scope.value }}
      </QTd>
    </template>
  </QTable>
</template>

<style scoped lang="scss">
.q-input {
  width: $table-filter-search-input-width;
}
.non-visible {
  background-color: rgba($negative, 0.1);
}
</style>
