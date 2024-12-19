<script setup lang="ts">
import {
  type ComputedRef,
  type Ref,
  computed,
  ref,
  toValue,
  watchEffect,
} from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { demandeValue } from "@/helpers/enseignement.ts";
import {
  formatProgram,
  formatUser,
  nf,
  normalizeForSearch,
} from "@/helpers/format.ts";
import { compare, uniqueValue } from "@/helpers/utils.ts";
import { selectedCourse as selected, useData } from "@/stores/data.ts";
import { type Column, isAbbreviable } from "@/types/columns.ts";
import type { Option } from "@/types/common.ts";
import type { CourseRow } from "@/types/courses.ts";

const perm = usePermissions();
const {
  enseignement,
  courses,
  fetchingCourses,
  service,
  selectCourse,
  selectService,
} = useData();

const select = (_: Event, row: CourseRow) => {
  if (selected.value[0]?.id === row.id) {
    selectCourse(null);
  } else {
    selectCourse(row.id);
  }
};

const title: ComputedRef<string> = computed(() =>
  service.value ? formatUser(service.value.teacher) : "Enseignements",
);

const columns: Column<CourseRow>[] = [
  {
    name: "program",
    label: "Formation",
    field: (row) => ({
      long: formatProgram(row.program.degree.name, row.program.name),
      short:
        row.program.degree.shortName !== null || row.program.shortName !== null
          ? formatProgram(
              row.program.degree.shortName ?? row.program.degree.name,
              row.program.shortName ?? row.program.name,
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
    name: "track",
    label: "Parcours",
    field: (row) => ({
      long: row.track?.name ?? "",
      short: row.track?.shortName,
    }),
    align: "left",
    sortable: true,
    sort: compare("long"),
    visible: true,
    searchable: true,
    abbreviable: true,
  },
  {
    name: "name",
    label: "Nom",
    field: (row) => ({
      long: row.name,
      short: row.shortName,
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
    field: (row) => row.courseType.shortLabel ?? row.courseType.label,
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "semester",
    label: "S.",
    tooltip: "Semestre",
    field: (row) => row.semester,
    format: (val: number) => "S" + val.toString(),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "hours",
    label: "H.",
    tooltip: "Nombre d'heures par groupe",
    field: (row) => row.hoursPerGroup,
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "groups",
    label: "G.",
    tooltip: "Nombre de groupes ouverts",
    field: (row) => row.numberOfGroups ?? 0,
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "assigned",
    label: "A.",
    tooltip: "Nombre d'heures attribuées",
    field: (row) => demandeValue(row, service.value, "attribution"),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: () => perm.deVoirLesAttributions,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_assigned",
    label: "\u0394A",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures attribuées",
    field: (row) =>
      (row.hoursPerGroup ?? 0) * (row.numberOfGroups ?? 0) -
      (row.totalAssigned.aggregate?.sum?.hours ?? 0),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "primary",
    label: "V1",
    tooltip: "Nombre d'heures demandées en vœux principaux",
    field: (row) => demandeValue(row, service.value, "principale"),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: true,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_primary",
    label: "\u0394V1",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux",
    field: (row) =>
      (row.hoursPerGroup ?? 0) * (row.numberOfGroups ?? 0) -
      (row.totalPrimary.aggregate?.sum?.hours ?? 0),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "diff_primary_priority",
    label: "\u0394V1 Prio",
    tooltip:
      "Différence entre le nombre d'heures total et le nombre d'heures demandées en vœux principaux prioritaires",
    field: (row) =>
      (row.hoursPerGroup ?? 0) * (row.numberOfGroups ?? 0) -
      (row.totalPriority.aggregate?.sum?.hours ?? 0),
    format: (val: number) => nf.format(val),
    align: "left",
    sortable: true,
    visible: false,
    searchable: false,
    abbreviable: false,
  },
  {
    name: "secondary",
    label: "V2",
    tooltip: "Nombre d'heures demandées en vœux secondaires",
    field: (row) => demandeValue(row, service.value, "secondaire"),
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

// Filters
// Program
const formations: Ref<number[]> = ref([]);
const formationOptions: ComputedRef<Option<number>[]> = computed(() =>
  courses.value
    .map((course) => ({
      value: course.program.id,
      label: formatProgram(
        course.program.degree.shortName ?? course.program.degree.name,
        course.program.shortName ?? course.program.name,
      ),
    }))
    .filter(uniqueValue)
    .sort(compare("label")),
);
// Type
const typesEnseignement: Ref<string[]> = ref([]);
const typeEnseignementOptions: ComputedRef<Option<string>[]> = computed(() =>
  courses.value
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
  courses.value
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
  demandesIntervenant: service.value ? service.value.requests : null,
  formations: formations.value,
  typesEnseignement: typesEnseignement.value,
  semestres: semestres.value,
  search: normalizeForSearch(search.value),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly CourseRow[],
  terms: typeof filterObj.value,
): readonly CourseRow[] =>
  rows.filter((row) =>
    terms.demandesIntervenant
      ? terms.demandesIntervenant.some((demande) => demande.courseId === row.id)
      : (terms.formations.length === 0 ||
          terms.formations.some((formation) => formation === row.program.id)) &&
        (terms.typesEnseignement.length === 0 ||
          terms.typesEnseignement.some(
            (typeEns) => typeEns === row.courseType.label,
          )) &&
        (terms.semestres.length === 0 ||
          terms.semestres.includes(row.semester)) &&
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
const estAttribue = (row: CourseRow) =>
  service.value?.requests.some(
    (demande) =>
      demande.courseId === row.id && demande.requestType === "attribution",
  ) ?? false;

// check whether an enseignement is visible
const estVisible = (row: CourseRow): boolean =>
  !service.value &&
  row.visible &&
  row.program.visible &&
  (row.track?.visible ?? true);
</script>

<template>
  <QTable
    v-model:selected="selected"
    :title
    :columns
    :visible-columns
    :rows="courses"
    :loading="fetchingCourses"
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
          v-if="service"
          icon="sym_s_visibility"
          :color="!enseignement ? 'primary' : 'grey'"
          size="sm"
          flat
          square
          dense
          @click="selectCourse(null)"
        />
        <QBtn
          v-if="service"
          icon="sym_s_close"
          color="primary"
          size="sm"
          flat
          square
          dense
          @click="selectService(null)"
        />
      </div>
      <QSpace />
      <div class="row q-gutter-md">
        <QSelect
          v-model="formations"
          :options="formationOptions"
          :disable="service !== null"
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
          :disable="service !== null"
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
          :disable="service !== null"
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
          :disable="service !== null"
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
