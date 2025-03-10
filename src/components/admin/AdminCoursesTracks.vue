<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminTrackDegreeFragmentDoc,
  type AdminTrackFragment,
  AdminTrackFragmentDoc,
  DeleteTracksDocument,
  InsertTracksDocument,
  TrackConstraint,
  TrackUpdateColumn,
  UpdateTracksDocument,
  UpsertTracksDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { nullRow, yesNoOptions } from "@/utils/admin-data.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { degreeFragments, trackFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminTrackDegreeFragmentDoc>[];
  trackFragments: FragmentType<typeof AdminTrackFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey = "id";
const rowDescriptor = {
  degree: { type: "string" },
  program: { type: "string" },
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  visible: { type: "boolean" },
} as const;

type Row = AdminTrackFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  programId: number;
  name: string;
  nameShort?: string | null;
  visible: boolean;
};

graphql(`
  fragment AdminTrack on Track {
    id
    program {
      id
      name
      degree {
        name
      }
    }
    name
    nameShort
    visible
  }

  fragment AdminTrackDegree on Degree {
    id
    name
    programs {
      id
      name
    }
  }

  mutation InsertTracks($objects: [TrackInsertInput!]!) {
    insertData: insertTrack(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertTracks(
    $objects: [TrackInsertInput!]!
    $onConflict: TrackOnConflict
  ) {
    upsertData: insertTrack(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateTracks($ids: [Int!]!, $changes: TrackSetInput!) {
    updateData: updateTrack(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteTracks($ids: [Int!]!) {
    deleteData: deleteTrack(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const degrees = computed(() =>
  degreeFragments.map((f) => useFragment(AdminTrackDegreeFragmentDoc, f)),
);
const tracks = computed(() =>
  trackFragments.map((f) => useFragment(AdminTrackFragmentDoc, f)),
);
const insertTracks = useMutation(InsertTracksDocument);
const upsertTracks = useMutation(UpsertTracksDocument);
const updateTracks = useMutation(UpdateTracksDocument);
const deleteTracks = useMutation(DeleteTracksDocument);

const constraint = TrackConstraint.TrackProgramIdNameKey;
const updateColumns = [TrackUpdateColumn.NameShort, TrackUpdateColumn.Visible];

const formValues = ref<FormValues>(nullRow(rowDescriptor));
const selectedFields = ref<string[]>([]);

const programOptions = computed(() =>
  degrees.value
    .find((d) => d.name === formValues.value.degree)
    ?.programs.map((p) => p.name),
);

const columns: Column<Row>[] = [
  {
    name: "degree",
    label: t("admin.courses.tracks.table.columns.degree"),
    align: "left",
    field: (row) => row.program.degree.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "program",
    label: t("admin.courses.tracks.table.columns.program"),
    align: "left",
    field: (row) => row.program.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "name",
    label: t("admin.courses.tracks.table.columns.name"),
    align: "left",
    field: "name",
    sortable: true,
    searchable: true,
  },
  {
    name: "nameShort",
    label: t("admin.courses.tracks.table.columns.nameShort"),
    align: "left",
    field: "nameShort",
    sortable: true,
    searchable: true,
  },
  {
    name: "visible",
    label: t("admin.courses.tracks.table.columns.visible"),
    align: "center",
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) => row.name;

const initForm = (rows: Row[]): FormValues =>
  rows.length === 1
    ? {
        ...rows[0],
        degree: rows[0]?.program.degree.name,
        program: rows[0]?.program.name,
      }
    : nullRow(rowDescriptor);

function validateImportRow(
  importRow: ImportRow,
  checkConflicts: boolean,
): InsertInput;
function validateImportRow(
  importRow: Partial<ImportRow>,
  checkConflicts: boolean,
): Partial<InsertInput>;
function validateImportRow(
  importRow: Partial<ImportRow>,
  checkConflicts: boolean,
): Partial<InsertInput> {
  const object: Partial<InsertInput> = {};

  if (importRow.degree !== undefined || importRow.program !== undefined) {
    if (importRow.program === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.updateDegreeWithoutProgram"),
      );
    }

    if (importRow.degree === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.updateProgramWithoutDegree"),
      );
    }

    const degree = degrees.value.find((d) => d.name === importRow.degree);
    if (degree === undefined) {
      throw new Error(t("admin.courses.tracks.form.error.degreeNotFound"));
    }

    object.programId = degree.programs.find(
      (p) => p.name === importRow.program,
    )?.id;

    if (object.programId === undefined) {
      throw new Error(t("admin.courses.tracks.form.error.programNotFound"));
    }
  }

  if (importRow.name !== undefined) {
    object.name = importRow.name;
    if (
      checkConflicts &&
      tracks.value.find(
        (t) => t.program.id === object.programId && t.name === object.name,
      )
    ) {
      throw new Error(t("admin.courses.tracks.form.error.conflictProgramName"));
    }
  }

  if (importRow.nameShort !== undefined) {
    object.nameShort = importRow.nameShort;
  }

  if (importRow.visible !== undefined) {
    object.visible = importRow.visible;
  }

  return object;
}

// Filters
const selectedDegrees = ref<string[]>([]);
const selectProgramOptions = computed(() =>
  degrees.value
    .filter(
      (d) =>
        !selectedDegrees.value.length || selectedDegrees.value.includes(d.name),
    )
    .flatMap((d) =>
      d.programs.map((p) => ({
        value: { degree: d.name, program: p.name },
        label: `${d.name} — ${p.name}`,
      })),
    ),
);
const selectedPrograms = ref<{ degree: string; program: string }[]>([]);
const selectedVisible = ref<boolean | null>(null);
const filteredTracks = computed(() =>
  tracks.value.filter(
    (t) =>
      (!selectedDegrees.value.length ||
        selectedDegrees.value.includes(t.program.degree.name)) &&
      (!selectedPrograms.value.length ||
        selectedPrograms.value.some(
          (p) =>
            p.degree === t.program.degree.name && p.program === t.program.name,
        )) &&
      (selectedVisible.value === null || t.visible === selectedVisible.value),
  ),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="tracks"
    message-prefix="admin.courses.tracks"
    :id-key
    :row-descriptor
    :columns
    :rows="filteredTracks"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertTracks"
    :upsert-data="upsertTracks"
    :update-data="updateTracks"
    :delete-data="deleteTracks"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedDegrees"
        :options="degrees.map((d) => d.name)"
        color="primary"
        :label="t('admin.courses.tracks.table.columns.degree')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      >
        <!-- this slot to use dense QChip -->
        <template #selected-item="scope">
          <QChip
            :tabindex="scope.tabindex"
            class="q-ma-none"
            color="grey3"
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
          >
            {{ scope.opt.label ?? scope.opt }}
          </QChip>
        </template>
      </QSelect>
      <QSelect
        v-model="selectedPrograms"
        :options="selectProgramOptions"
        color="primary"
        :label="t('admin.courses.tracks.table.columns.program')"
        emit-value
        map-options
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      >
        <!-- this slot to use dense QChip -->
        <template #selected-item="scope">
          <QChip
            :tabindex="scope.tabindex"
            class="q-ma-none"
            color="grey3"
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
          >
            {{ scope.opt.label ?? scope.opt }}
          </QChip>
        </template>
      </QSelect>
      <QSelect
        v-model="selectedVisible"
        :options="yesNoOptions"
        color="primary"
        :label="t('admin.courses.tracks.table.columns.visible')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
        style="width: 100%"
      />
    </template>
    <template #form="{ multipleSelection }">
      <QSelect
        v-model="formValues.degree"
        :options="degrees.map((d) => d.name)"
        :label="t('admin.courses.tracks.form.fields.degree')"
        :disable="multipleSelection && !selectedFields.includes('degree')"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="degree" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.program"
        :options="programOptions"
        :label="t('admin.courses.tracks.form.fields.program')"
        :disable="
          !formValues.degree ||
          (multipleSelection && !selectedFields.includes('program'))
        "
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="program" />
        </template>
      </QSelect>
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.name"
        :label="t('admin.courses.tracks.form.fields.name')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.nameShort"
        :label="t('admin.courses.tracks.form.fields.nameShort')"
        square
        dense
      />
      <div class="q-mr-md">
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="active"
        />
        <QToggle
          v-model="formValues.visible"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          :label="t('admin.courses.tracks.form.fields.visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
