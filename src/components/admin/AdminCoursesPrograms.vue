<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminProgramDegreeFragmentDoc,
  type AdminProgramFragment,
  AdminProgramFragmentDoc,
  DeleteProgramsDocument,
  InsertProgramsDocument,
  ProgramConstraint,
  ProgramUpdateColumn,
  UpdateProgramsDocument,
  UpsertProgramsDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { nullRow } from "@/utils/admin-data.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { degreeFragments, programFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminProgramDegreeFragmentDoc>[];
  programFragments: FragmentType<typeof AdminProgramFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey = "id";
const rowDescriptor = {
  degree: { type: "string" },
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  visible: { type: "boolean" },
} as const;

type Row = AdminProgramFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  degreeId: number;
  name: string;
  nameShort?: string | null;
  visible: boolean;
};

graphql(`
  fragment AdminProgram on Program {
    id
    degree {
      id
      name
      nameShort
    }
    name: nameDisplay
    visible
  }

  fragment AdminProgramDegree on Degree {
    id
    nameDisplay
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
  degreeFragments.map((f) => useFragment(AdminProgramDegreeFragmentDoc, f)),
);
const programs = computed(() =>
  programFragments.map((f) => useFragment(AdminProgramFragmentDoc, f)),
);
const insertPrograms = useMutation(InsertProgramsDocument);
const upsertPrograms = useMutation(UpsertProgramsDocument);
const updatePrograms = useMutation(UpdateProgramsDocument);
const deletePrograms = useMutation(DeleteProgramsDocument);

const constraint = ProgramConstraint.ProgramDegreeIdNameKey;
const updateColumns = [
  ProgramUpdateColumn.NameShort,
  ProgramUpdateColumn.Visible,
];

const formValues = ref<FormValues>(nullRow(rowDescriptor));
const selectedFields = ref<string[]>([]);

const columns: Column<Row>[] = [
  {
    name: "degree",
    label: t("admin.courses.programs.table.columns.degree"),
    align: "left",
    field: (row) => row.degree.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "name",
    label: t("admin.courses.programs.table.columns.name"),
    align: "left",
    field: "name",
    sortable: true,
    searchable: true,
  },
  {
    name: "nameShort",
    label: t("admin.courses.programs.table.columns.nameShort"),
    align: "left",
    field: "nameShort",
    sortable: true,
    searchable: true,
  },
  {
    name: "visible",
    label: t("admin.courses.programs.table.columns.visible"),
    align: "center",
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) => row.name ?? "";

const initForm = (rows: Row[]): FormValues =>
  rows.length === 1
    ? { ...rows[0], degree: rows[0]?.degree.name }
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

  if (importRow.degree !== undefined) {
    object.degreeId = degrees.value.find(
      (d) => d.nameDisplay === importRow.degree,
    )?.id;
    if (object.degreeId === undefined) {
      throw new Error(t("admin.courses.programs.form.error.degreeNotFound"));
    }
  }

  if (importRow.name !== undefined) {
    object.name = importRow.name;
    if (
      checkConflicts &&
      programs.value.find(
        (m) => m.degree.id === object.degreeId && m.name === object.name,
      )
    ) {
      throw new Error(
        t("admin.courses.programs.form.error.conflictDegreeName"),
      );
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
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="programs"
    message-prefix="admin.courses.programs"
    :id-key
    :row-descriptor
    :columns
    :rows="programs"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertPrograms"
    :upsert-data="upsertPrograms"
    :update-data="updatePrograms"
    :delete-data="deletePrograms"
    :constraint
    :update-columns
  >
    <template #form="{ multipleSelection }">
      <QSelect
        v-model="formValues.degree"
        :options="degrees.map((d) => d.nameDisplay)"
        :label="t('admin.courses.programs.form.fields.degree')"
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
        v-if="!multipleSelection"
        v-model="formValues.name"
        :label="t('admin.courses.programs.form.fields.name')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.nameShort"
        :label="t('admin.courses.programs.form.fields.nameShort')"
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
          :label="t('admin.courses.programs.form.fields.visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
