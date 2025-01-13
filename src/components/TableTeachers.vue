<script setup lang="ts">
import { computed, ref, toValue, watchEffect } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useQueryParam } from "@/composables/query-param.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type TeacherRowFragment,
  TeacherRowFragmentDoc,
} from "@/gql/graphql.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import { nf } from "@/utils/format.ts";
import { modifiedService, totalWH } from "@/utils/hours.ts";
import { normalizeForSearch } from "@/utils/misc.ts";

const { teacherRowFragments } = defineProps<{
  teacherRowFragments: FragmentType<typeof TeacherRowFragmentDoc>[];
  fetching?: boolean;
}>();

graphql(`
  fragment TeacherRow on service {
    teacher: intervenant {
      uid
      firstname: prenom
      lastname: nom
      alias
      visible
    }
    base: heures_eqtd
    totalModifications: modifications_aggregate {
      aggregate {
        sum {
          hours: heures_eqtd
        }
      }
    }
    totalAssigned: demandes_aggregate(
      where: { _and: [{ type: { _eq: "attribution" } }] }
    ) {
      aggregate {
        sum {
          weightedHours: heures_eqtd
        }
      }
    }
    totalPrimary: demandes_aggregate(
      where: { _and: [{ type: { _eq: "principale" } }] }
    ) {
      aggregate {
        sum {
          weightedHours: heures_eqtd
        }
      }
    }
    totalSecondary: demandes_aggregate(
      where: { _and: [{ type: { _eq: "secondaire" } }] }
    ) {
      aggregate {
        sum {
          weightedHours: heures_eqtd
        }
      }
    }
    message
  }
`);

const perm = usePermissions();

const teachers = computed(() =>
  teacherRowFragments.map((fragment) =>
    useFragment(TeacherRowFragmentDoc, fragment),
  ),
);

// Row selection
const { getValue: selectedTeacher, toggleValue: toggleTeacher } =
  useQueryParam("uid");
const selectedRow = computed(() => [{ uid: selectedTeacher.value }]);
const onRowClick = async (_: Event, row: TeacherRowFragment) => {
  await toggleTeacher(row.teacher.uid);
};

// Columns definition
const columns: ColumnNonAbbreviable<TeacherRowFragment>[] = [
  {
    name: "firstname",
    label: "Prénom",
    align: "left",
    field: (row) => row.teacher.firstname,
    sortable: true,
    visible: true,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "lastname",
    label: "Nom",
    align: "left",
    field: (row) => row.teacher.lastname,
    sortable: true,
    visible: true,
    searchable: true,
    abbreviable: false,
  },
  {
    name: "alias",
    label: "Alias",
    align: "left",
    field: (row) => row.teacher.alias,
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
    field: (row) => (row.message ? "✓" : "✗"),
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "service",
    label: "S.",
    tooltip: "Service à réaliser (en heures EQTD)",
    field: (row) => modifiedService(row),
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
    field: (row) => modifiedService(row) - totalWH(row.totalAssigned),
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
    field: (row) => modifiedService(row) - totalWH(row.totalPrimary),
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
const visibleColumns = ref<string[]>([]);
// reset visible columns if permissions change
watchEffect(() => {
  visibleColumns.value = columns
    .filter((col) => toValue(col.visible))
    .map((col) => col.name);
});
const isMenuColumnsOpen = ref(false);
const isMenuColumnsTooltipVisible = ref(false);

// Search filter
const search = ref("");
const clearSearch = () => {
  search.value = "";
};
const filterObj = computed(() => ({
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly TeacherRowFragment[],
  terms: typeof filterObj.value,
): readonly TeacherRowFragment[] =>
  rows.filter((row) =>
    terms.searchColumns.some((col) =>
      normalizeForSearch(String(col.field(row))).includes(terms.search),
    ),
  );

// Styling options controllers
const stickyHeader = ref(false);
</script>

<template>
  <QTable
    v-model:selected="selectedRow"
    :columns
    :visible-columns
    :rows="teachers"
    :loading="fetching"
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
    @row-click="onRowClick"
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
          :color="isMenuColumnsOpen ? 'primary' : 'grey'"
          flat
          square
          dense
        >
          <QTooltip v-model="isMenuColumnsTooltipVisible">
            Colonnes visibles
          </QTooltip>
          <QMenu
            v-model="isMenuColumnsOpen"
            auto-close
            square
            dense
            @show="isMenuColumnsTooltipVisible = false"
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
      <QTd
        :props="scope"
        :class="{ 'non-visible': !scope.row.teacher.visible }"
      >
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
