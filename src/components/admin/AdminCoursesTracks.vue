<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminTrackFragment,
  AdminTrackFragmentDoc,
  AdminTracksDegreeFragmentDoc,
  DeleteTracksDocument,
  InsertTracksDocument,
  TrackConstraint,
  TrackUpdateColumn,
  UpdateTracksDocument,
  UpsertTracksDocument,
} from "@/gql/graphql.ts";
import type { Column } from "@/types/column.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/data.ts";
import { booleanOptions } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { degreeFragments, trackFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminTracksDegreeFragmentDoc>[];
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
  programId?: number | null;
  name?: string | null;
  nameShort?: string | null;
  visible?: boolean | null;
};

graphql(`
  fragment AdminTrack on Track {
    id
    program {
      id
      name
      nameDisplay
      degree {
        name
        nameDisplay
      }
    }
    name
    nameShort
    nameDisplay
    visible
  }

  fragment AdminTracksDegree on Degree {
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
  degreeFragments.map((f) => useFragment(AdminTracksDegreeFragmentDoc, f)),
);
const tracks = computed(() =>
  trackFragments.map((f) => useFragment(AdminTrackFragmentDoc, f)),
);
const insertTracks = useMutation(InsertTracksDocument);
const upsertTracks = useMutation(UpsertTracksDocument);
const updateTracks = useMutation(UpdateTracksDocument);
const deleteTracks = useMutation(DeleteTracksDocument);

const constraint = TrackConstraint.TrackProgramIdNameKey;
const updateColumns = [
  TrackUpdateColumn.ProgramId,
  TrackUpdateColumn.Name,
  TrackUpdateColumn.NameShort,
  TrackUpdateColumn.Visible,
];

const columns = computed<Column<Row>[]>(() => [
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
]);

const formatRow = (row: Row) =>
  `${row.nameDisplay} (${row.program.degree.nameDisplay} — ${row.program.nameDisplay})`;

const initForm = (rows: Row[]): FormValues => ({
  degree: rows[0]?.program.degree.name ?? null,
  program: rows[0]?.program.name ?? null,
  name: rows[0]?.name ?? null,
  nameShort: rows[0]?.nameShort ?? null,
  visible: rows[0]?.visible ?? null,
});

function validateImportRow(importRow: ImportRow): InsertInput;
function validateImportRow(importRow: Partial<ImportRow>): Partial<InsertInput>;
function validateImportRow(
  importRow: Partial<ImportRow>,
): Partial<InsertInput> {
  const object: Partial<InsertInput> = {};

  // programId
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
      throw new Error(
        t("admin.courses.tracks.form.error.degreeNotFound", importRow),
      );
    }
    const program = degree.programs.find((p) => p.name === importRow.program);
    if (program === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.programNotFound", importRow),
      );
    }
    object.programId = program.id;
  }

  if (importRow.name !== undefined) {
    object.name = importRow.name;
  }

  if (importRow.nameShort !== undefined) {
    object.nameShort = importRow.nameShort;
  }

  if (importRow.visible !== undefined) {
    object.visible = importRow.visible;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

const degreeOptions = computed(() => degrees.value.map((d) => d.name));
const programOptions = computed(
  () =>
    degrees.value
      .find((d) => d.name === formValues.value.degree)
      ?.programs.map((p) => p.name) ?? [],
);

// Filters
const selectedDegrees = ref<string[]>([]);
const selectedPrograms = ref<{ degree: string; program: string }[]>([]);
const selectedVisible = ref<boolean | null>(null);
const selectedProgramOptions = computed(() =>
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
const filterFn = computed(
  () => (r: Row) =>
    (!selectedDegrees.value.length ||
      selectedDegrees.value.includes(r.program.degree.name)) &&
    (!selectedPrograms.value.length ||
      selectedPrograms.value.some(
        (p) =>
          p.degree === r.program.degree.name && p.program === r.program.name,
      )) &&
    (selectedVisible.value === null || r.visible === selectedVisible.value),
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
    :rows="tracks"
    :filter-fn
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
        :options="degreeOptions"
        :label="t('admin.courses.tracks.table.columns.degree')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedPrograms"
        :options="selectedProgramOptions"
        :label="t('admin.courses.tracks.table.columns.program')"
        emit-value
        map-options
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedVisible"
        :options="booleanOptions(t('yes'), t('no'))"
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
        :options="degreeOptions"
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
        :disable="multipleSelection && !selectedFields.includes('program')"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="program" />
        </template>
      </QSelect>
      <QInput
        v-model="formValues.name"
        :label="t('admin.courses.tracks.form.fields.name')"
        :disable="multipleSelection && !selectedFields.includes('name')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="name" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.nameShort"
        :label="t('admin.courses.tracks.form.fields.nameShort')"
        :disable="multipleSelection && !selectedFields.includes('nameShort')"
        square
        dense
      />
      <div>
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="visible"
        />
        <QToggle
          v-model="formValues.visible"
          :label="t('admin.courses.tracks.form.fields.visible')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
