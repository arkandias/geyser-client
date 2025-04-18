<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminProgramFragment,
  AdminProgramFragmentDoc,
  AdminProgramsDegreeFragmentDoc,
  DeleteProgramsDocument,
  InsertProgramsDocument,
  ProgramConstraint,
  type ProgramInsertInput,
  ProgramUpdateColumn,
  UpdateProgramsDocument,
  UpsertProgramsDocument,
} from "@/gql/graphql.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { booleanOptions, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminProgramFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = ProgramInsertInput;

const { degreeFragments, programFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminProgramsDegreeFragmentDoc>[];
  programFragments: FragmentType<typeof AdminProgramFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "id";
const rowDescriptor = {
  degree: { type: "string", field: (row) => row.degree.name },
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  visible: { type: "boolean" },
} as const satisfies RowDescriptorExtra<Row>;

graphql(`
  fragment AdminProgram on Program {
    id
    degree {
      id
      name
      nameDisplay
    }
    name
    nameShort
    nameDisplay
    visible
  }

  fragment AdminProgramsDegree on Degree {
    id
    name
  }

  mutation InsertPrograms($objects: [ProgramInsertInput!]!) {
    insertData: insertProgram(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertPrograms(
    $objects: [ProgramInsertInput!]!
    $onConflict: ProgramOnConflict
  ) {
    upsertData: insertProgram(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdatePrograms($ids: [Int!]!, $changes: ProgramSetInput!) {
    updateData: updateProgram(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeletePrograms($ids: [Int!]!) {
    deleteData: deleteProgram(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const degrees = computed(() =>
  degreeFragments.map((f) => useFragment(AdminProgramsDegreeFragmentDoc, f)),
);
const programs = computed(() =>
  programFragments.map((f) => useFragment(AdminProgramFragmentDoc, f)),
);
const insertPrograms = useMutation(InsertProgramsDocument);
const upsertPrograms = useMutation(UpsertProgramsDocument);
const updatePrograms = useMutation(UpdateProgramsDocument);
const deletePrograms = useMutation(DeleteProgramsDocument);

const importConstraint = ProgramConstraint.ProgramDegreeIdNameKey;
const importUpdateColumns = [
  ProgramUpdateColumn.DegreeId,
  ProgramUpdateColumn.Name,
  ProgramUpdateColumn.NameShort,
  ProgramUpdateColumn.Visible,
];

const formatRow = (row: Row) => `${row.degree.nameDisplay} ${row.nameDisplay}`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  // degreeId
  if (flatRow.degree !== undefined) {
    const degree = degrees.value.find((d) => d.name === flatRow.degree);
    if (degree === undefined) {
      throw new Error(
        t("admin.courses.programs.form.error.degreeNotFound", flatRow),
      );
    }
    object.degreeId = degree.id;
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

// Filters
const selectedDegrees = ref<string[]>([]);
const selectedVisible = ref<boolean | null>(null);
const filterFn = computed(
  () => (row: Row) =>
    (!selectedDegrees.value.length ||
      selectedDegrees.value.includes(row.degree.name)) &&
    (selectedVisible.value === null || row.visible === selectedVisible.value),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="courses"
    name="programs"
    :id-key
    :row-descriptor
    :rows="programs"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertPrograms"
    :upsert-data="upsertPrograms"
    :update-data="updatePrograms"
    :delete-data="deletePrograms"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedDegrees"
        :options="degreeOptions"
        :label="t('admin.courses.programs.column.degree.label')"
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
        :label="t('admin.courses.programs.column.visible.label')"
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
        :label="t('admin.courses.programs.column.degree.label')"
        :disable="multipleSelection && !selectedFields.includes('degree')"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="degree" />
        </template>
      </QSelect>
      <QInput
        v-model="formValues.name"
        :label="t('admin.courses.programs.column.name.label')"
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
        :label="t('admin.courses.programs.column.nameShort')"
        :disable="multipleSelection && !selectedFields.includes('nameShort')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="nameShort" />
        </template>
      </QInput>
      <div>
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="visible"
        />
        <QToggle
          v-model="formValues.visible"
          :label="t('admin.courses.programs.column.visible.label')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
