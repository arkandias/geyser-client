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
  type TrackInsertInput,
  TrackUpdateColumn,
  UpdateTracksDocument,
  UpsertTracksDocument,
} from "@/gql/graphql.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { booleanOptions, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminTrackFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = TrackInsertInput;

const { degreeFragments, trackFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminTracksDegreeFragmentDoc>[];
  trackFragments: FragmentType<typeof AdminTrackFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "id";
const rowDescriptor = {
  degree: { type: "string", field: (row) => row.program.degree.name },
  program: { type: "string", field: (row) => row.program.name },
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  visible: { type: "boolean" },
} as const satisfies RowDescriptorExtra<Row>;

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

const importConstraint = TrackConstraint.TrackProgramIdNameKey;
const importUpdateColumns = [
  TrackUpdateColumn.ProgramId,
  TrackUpdateColumn.Name,
  TrackUpdateColumn.NameShort,
  TrackUpdateColumn.Visible,
];

const formatRow = (row: Row) =>
  `${row.nameDisplay} (${row.program.degree.nameDisplay} — ${row.program.nameDisplay})`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  // programId
  if (flatRow.degree !== undefined || flatRow.program !== undefined) {
    if (flatRow.program === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.updateDegreeWithoutProgram"),
      );
    }
    if (flatRow.degree === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.updateProgramWithoutDegree"),
      );
    }
    const degree = degrees.value.find((d) => d.name === flatRow.degree);
    if (degree === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.degreeNotFound", flatRow),
      );
    }
    const program = degree.programs.find((p) => p.name === flatRow.program);
    if (program === undefined) {
      throw new Error(
        t("admin.courses.tracks.form.error.programNotFound", flatRow),
      );
    }
    object.programId = program.id;
  }

  if (flatRow.name !== undefined) {
    object.name = flatRow.name;
  }

  if (flatRow.nameShort !== undefined) {
    object.nameShort = flatRow.nameShort;
  }

  if (flatRow.visible !== undefined) {
    object.visible = flatRow.visible;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
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
  () => (row: Row) =>
    (!selectedDegrees.value.length ||
      selectedDegrees.value.includes(row.program.degree.name)) &&
    (!selectedPrograms.value.length ||
      selectedPrograms.value.some(
        (p) =>
          p.degree === row.program.degree.name &&
          p.program === row.program.name,
      )) &&
    (selectedVisible.value === null || row.visible === selectedVisible.value),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="courses"
    name="tracks"
    :id-key
    :row-descriptor
    :rows="tracks"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertTracks"
    :upsert-data="upsertTracks"
    :update-data="updateTracks"
    :delete-data="deleteTracks"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedDegrees"
        :options="degreeOptions"
        :label="t('admin.courses.tracks.column.degree.label')"
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
        :label="t('admin.courses.tracks.column.program.label')"
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
        :label="t('admin.courses.tracks.column.visible.label')"
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
        :label="t('admin.courses.tracks.column.degree.label')"
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
        :label="t('admin.courses.tracks.column.program.label')"
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
        :label="t('admin.courses.tracks.column.name.label')"
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
        :label="t('admin.courses.tracks.column.nameShort')"
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
          :label="t('admin.courses.tracks.column.visible.label')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
