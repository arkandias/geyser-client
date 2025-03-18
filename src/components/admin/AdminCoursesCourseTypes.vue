<script setup lang="ts">
import { useMutation } from "villus";
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
import { inputToNumber } from "@/utils/misc.ts";

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
const insertCourseTypes = useMutation(InsertCourseTypesDocument, {
  refetchTags: ["All"],
});
const upsertCourseTypes = useMutation(UpsertCourseTypesDocument, {
  refetchTags: ["All"],
});
const updateCourseTypes = useMutation(UpdateCourseTypesDocument, {
  refetchTags: ["All"],
});
const deleteCourseTypes = useMutation(DeleteCourseTypesDocument, {
  refetchTags: ["All"],
});

const constraint = CourseTypeConstraint.CourseTypeLabelKey;
const updateColumns = [
  CourseTypeUpdateColumn.Label,
  CourseTypeUpdateColumn.Coefficient,
  CourseTypeUpdateColumn.Description,
];

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
    field: (row) => n(row.coefficient, "decimal"),
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

const initForm = (rows: Row[]): FormValues => ({
  label: rows[0]?.label ?? null,
  coefficient: rows[0]?.coefficient ?? null,
  description: rows[0]?.description ?? null,
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

  if (importRow.label !== undefined) {
    object.label = importRow.label;
    if (
      checkConflicts &&
      courseTypes.value.find((p) => p.label === object.label)
    ) {
      throw new Error(
        t("admin.courses.types.form.error.conflictLabel", importRow),
      );
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

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);
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
        v-model="formValues.label"
        :label="t('admin.courses.types.form.fields.label')"
        :disable="multipleSelection && !selectedFields.includes('label')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="label" />
        </template>
      </QInput>
      <QInput
        :model-value="formValues.coefficient"
        type="number"
        :label="t('admin.courses.types.form.fields.coefficient')"
        :disable="multipleSelection && !selectedFields.includes('coefficient')"
        square
        dense
        @update:model-value="
          (value) => (formValues.coefficient = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="coefficient" />
        </template>
      </QInput>
      <QInput
        v-if="!multipleSelection"
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
