<script setup lang="ts">
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { useQueryParam } from "@/composables/useQueryParam.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type ServiceRowFragment,
  ServiceRowFragmentDoc,
} from "@/gql/graphql.ts";
import { type Column, getField } from "@/types/column.ts";
import { normalizeForSearch } from "@/utils/misc.ts";

const { serviceRowFragments } = defineProps<{
  serviceRowFragments: FragmentType<typeof ServiceRowFragmentDoc>[];
  fetching?: boolean;
}>();

graphql(`
  fragment ServiceRow on Service {
    id
    teacher {
      uid
      displayname
      visible
    }
    hours
    modifications {
      hours
    }
    requests {
      type
      hoursWeighted
    }
    message
  }
`);

const { t, n } = useCustomI18n();
const perm = usePermissions();

type ServiceRow = Omit<
  ServiceRowFragment,
  "hours" | "modifications" | "requests"
> & {
  modifiedService: number;
  totalAssigned: number;
  totalPrimary: number;
  totalSecondary: number;
  diffAssignment: number;
  diffPrimary: number;
  diffSecondary: number;
};

const services = computed<ServiceRow[]>(() =>
  serviceRowFragments.map((f) => {
    const { hours, modifications, requests, ...rest } = useFragment(
      ServiceRowFragmentDoc,
      f,
    );
    const totalModifications = modifications.reduce((t, m) => t + m.hours, 0);
    const { totalAssigned, totalPrimary, totalSecondary } = requests.reduce(
      (t, r) => ({
        totalAssigned:
          t.totalAssigned +
          (r.type === REQUEST_TYPES.ASSIGNMENT ? (r.hoursWeighted ?? 0) : 0),
        totalPrimary:
          t.totalAssigned +
          (r.type === REQUEST_TYPES.PRIMARY ? (r.hoursWeighted ?? 0) : 0),
        totalSecondary:
          t.totalAssigned +
          (r.type === REQUEST_TYPES.SECONDARY ? (r.hoursWeighted ?? 0) : 0),
      }),
      {
        totalAssigned: 0,
        totalPrimary: 0,
        totalSecondary: 0,
      },
    );
    const modifiedService = hours - totalModifications;
    return {
      ...rest,
      modifiedService,
      totalAssigned,
      totalPrimary,
      totalSecondary,
      diffAssignment: modifiedService - totalAssigned,
      diffPrimary: modifiedService - totalPrimary,
      diffSecondary: modifiedService - totalSecondary,
    };
  }),
);

// Row selection
const { getValue: selectedService, toggleValue: toggleService } = useQueryParam(
  "serviceId",
  true,
);
const selectedRow = computed(() => [{ id: selectedService.value }]);
const selectRow = async (_: Event, row: ServiceRowFragment) => {
  await toggleService(row.id);
};

// Columns definition
const columns: Column<ServiceRow>[] = [
  {
    name: "teacher",
    label: "Intervenant",
    align: "left",
    field: (row) => row.teacher.displayname,
    sortable: true,
    visible: true,
    searchable: true,
  },
  {
    name: "message",
    label: "M.",
    tooltip: "Message",
    align: "center",
    field: (row) => !!row.message,
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "modifiedService",
    label: "S.",
    tooltip: "Service à réaliser (en heures EQTD)",
    field: "modifiedService",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "totalAssigned",
    label: "A.",
    tooltip: "Nombre d'heures EQTD attribuées",
    field: "totalAssigned",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: perm.toViewAssignments,
    searchable: false,
  },
  {
    name: "diffAssignment",
    label: "\u0394A",
    tooltip:
      "Différence entre le service et le nombre d'heures EQTD attribuées",
    field: "diffAssignment",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "primary",
    label: "V1",
    tooltip: "Nombre d'heures EQTD demandées en vœux principaux",
    field: "totalPrimary",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: true,
    searchable: false,
  },
  {
    name: "diffPrimary",
    label: "\u0394V1",
    tooltip:
      "Différence entre le service et le nombre d'heures EQTD demandées en vœux principaux",
    field: "diffPrimary",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: false,
    searchable: false,
  },
  {
    name: "secondary",
    label: "V2",
    tooltip: "Nombre d'heures EQTD demandées en vœux secondaires",
    field: "totalSecondary",
    format: (val: number) => n(val, "decimalFixed"),
    sortable: true,
    visible: true,
    searchable: false,
  },
];
const searchableColumns = columns
  .filter((col) => col.searchable)
  .map((col) => col.name);
const visibleColumns = ref(
  columns.filter((col) => col.visible).map((col) => col.name),
);
const isMenuColumnsOpen = ref(false);
const isMenuColumnsTooltipVisible = ref(false);

// Search filter
const search = ref<string | null>(null);
const filterObj = computed(() => ({
  search: normalizeForSearch(search.value ?? ""),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly ServiceRow[],
  terms: typeof filterObj.value,
): readonly ServiceRow[] =>
  rows.filter((row) =>
    terms.searchColumns.some((col) =>
      normalizeForSearch(String(getField(row, col.field))).includes(
        terms.search,
      ),
    ),
  );

// Options
const stickyHeader = ref(false);

// Row styling
const tableRowClassFn = (row: ServiceRowFragment) =>
  row.teacher.visible ? "" : "non-visible";
</script>

<template>
  <QTable
    :columns
    :visible-columns
    :rows="services"
    :selected="selectedRow"
    :loading="fetching"
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    :table-row-class-fn
    flat
    square
    dense
    virtual-scroll
    :class="{ 'sticky-header-table': stickyHeader }"
    @row-click="selectRow"
  >
    <template #top>
      <div class="q-table__title">{{ t("services.label", 2) }}</div>
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
        />
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
  </QTable>
</template>

<style scoped lang="scss">
.q-input {
  width: 120px;
}
:deep(.non-visible) {
  background-color: rgba($negative, 0.1);
}
</style>
