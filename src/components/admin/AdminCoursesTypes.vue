<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminCourseTypeFragment,
  AdminCourseTypeFragmentDoc,
  CourseTypeConstraint,
  CourseTypeUpdateColumn,
  DeleteCourseTypesDocument,
  InsertCourseTypesDocument,
  UpdateCourseTypesDocument,
  UpsertCourseTypesDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { nullRow } from "@/utils/admin-data.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { courseTypeFragments } = defineProps<{
  courseTypeFragments: FragmentType<typeof AdminCourseTypeFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();

const idKey = "id";
const rowDescriptor = {
  label: { type: "string" },
  coefficient: { type: "number" },
  description: { type: "string", nullable: true },
} as const;

type Row = AdminCourseTypeFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  label?: string | null;
  coefficient?: number | null;
  description?: string | null;
};

graphql(`
  fragment AdminCourseType on CourseType {
    id
    label
    coefficient
    description
  }

  mutation InsertCourseTypes($objects: [CourseTypeInsertInput!]!) {
    insertData: insertCourseType(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertCourseTypes(
    $objects: [CourseTypeInsertInput!]!
    $onConflict: CourseTypeOnConflict
  ) {
    upsertData: insertCourseType(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateCourseTypes($ids: [Int!]!, $changes: CourseTypeSetInput!) {
    updateData: updateCourseType(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteCourseTypes($ids: [Int!]!) {
    deleteData: deleteCourseType(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const courseTypes = computed(() =>
  courseTypeFragments.map((f) => useFragment(AdminCourseTypeFragmentDoc, f)),
);
const insertCourseTypes = useMutation(InsertCourseTypesDocument);
const upsertCourseTypes = useMutation(UpsertCourseTypesDocument);
const updateCourseTypes = useMutation(UpdateCourseTypesDocument);
const deleteCourseTypes = useMutation(DeleteCourseTypesDocument);

const constraint = CourseTypeConstraint.CourseTypeLabelKey;
const updateColumns = [CourseTypeUpdateColumn.Description];

const formValues = ref<FormValues>(nullRow(rowDescriptor));
const selectedFields = ref<string[]>([]);

const columns: Column<Row>[] = [
  {
    name: "label",
    label: t("admin.courses.types.table.columns.label"),
    align: "left",
    field: "label",
    sortable: true,
    searchable: true,
  },
  {
    name: "coefficient",
    label: t("admin.courses.types.table.columns.coefficient"),
    field: (row) => n(row.coefficient),
    sortable: true,
    searchable: false,
  },
  {
    name: "description",
    label: t("admin.courses.types.table.columns.description"),
    align: "left",
    field: "description",
    sortable: true,
    searchable: true,
  },
];

const formatRow = (row: Row) => row.label;

const initForm = (rows: Row[]): FormValues =>
  rows.length === 1 ? { ...rows[0] } : nullRow(rowDescriptor);

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

  if (importRow.label !== undefined) {
    object.label = importRow.label;
    if (
      checkConflicts &&
      courseTypes.value.find((p) => p.label === object.label)
    ) {
      throw new Error(t("admin.courses.types.form.error.conflictLabel"));
    }
  }

  if (importRow.coefficient !== undefined) {
    object.coefficient = importRow.coefficient;
  }

  if (importRow.description !== undefined) {
    object.description = importRow.description;
  }

  return object;
}
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="types"
    message-prefix="admin.courses.types"
    :id-key
    :row-descriptor
    :columns
    :rows="courseTypes"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertCourseTypes"
    :upsert-data="upsertCourseTypes"
    :update-data="updateCourseTypes"
    :delete-data="deleteCourseTypes"
    :constraint
    :update-columns
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.courses.types.form.fields.label')"
        square
        dense
      />
      <QInput
        v-model="formValues.description"
        :label="t('admin.courses.types.form.fields.description')"
        :disable="multipleSelection && !selectedFields.includes('description')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="description" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
