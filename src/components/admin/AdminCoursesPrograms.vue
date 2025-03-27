<script setup lang="ts">
import { useMutation } from "villus";
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
  ProgramUpdateColumn,
  UpdateProgramsDocument,
  UpsertProgramsDocument,
} from "@/gql/graphql.ts";
import type { Column } from "@/types/column.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/data.ts";
import { booleanOptions } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { degreeFragments, programFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminProgramsDegreeFragmentDoc>[];
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
  nameShort: string | null;
  visible: boolean;
};

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
const insertPrograms = useMutation(InsertProgramsDocument, {
  refetchTags: ["all"],
});
const upsertPrograms = useMutation(UpsertProgramsDocument, {
  refetchTags: ["all"],
});
const updatePrograms = useMutation(UpdateProgramsDocument, {
  refetchTags: ["all"],
});
const deletePrograms = useMutation(DeleteProgramsDocument, {
  refetchTags: ["all"],
});

const constraint = ProgramConstraint.ProgramDegreeIdNameKey;
const updateColumns = [
  ProgramUpdateColumn.DegreeId,
  ProgramUpdateColumn.Name,
  ProgramUpdateColumn.NameShort,
  ProgramUpdateColumn.Visible,
];

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

const formatRow = (row: Row) => `${row.degree.nameDisplay} ${row.nameDisplay}`;

const initForm = (rows: Row[]): FormValues => ({
  degree: rows[0]?.degree.name ?? null,
  name: rows[0]?.name ?? null,
  nameShort: rows[0]?.nameShort ?? null,
  visible: rows[0]?.visible ?? null,
});

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
    const degree = degrees.value.find((d) => d.name === importRow.degree);
    if (degree === undefined) {
      throw new Error(
        t("admin.courses.programs.form.error.degreeNotFound", importRow),
      );
    }

    object.degreeId = degree.id;
  }

  if (importRow.name !== undefined) {
    object.name = importRow.name;
    if (
      checkConflicts &&
      programs.value.find(
        (p) => p.degree.id === object.degreeId && p.name === object.name,
      )
    ) {
      throw new Error(
        t("admin.courses.programs.form.error.conflictDegreeName", importRow),
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

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

// Filters
const selectedDegrees = ref<string[]>([]);
const selectedVisible = ref<boolean | null>(null);
const filterFn = computed(
  () => (r: Row) =>
    (!selectedDegrees.value.length ||
      selectedDegrees.value.includes(r.degree.name)) &&
    (selectedVisible.value === null || r.visible === selectedVisible.value),
);
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
    :filter-fn
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
    <template #filters>
      <QSelect
        v-model="selectedDegrees"
        :options="degrees.map((d) => d.name)"
        :label="t('admin.courses.programs.table.columns.degree')"
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
        :label="t('admin.courses.programs.table.columns.visible')"
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
        v-model="formValues.name"
        :label="t('admin.courses.programs.form.fields.name')"
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
        :label="t('admin.courses.programs.form.fields.nameShort')"
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
          :label="t('admin.courses.programs.form.fields.visible')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
