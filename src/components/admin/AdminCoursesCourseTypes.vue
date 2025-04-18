<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminCourseTypeFragment,
  AdminCourseTypeFragmentDoc,
  CourseTypeConstraint,
  type CourseTypeInsertInput,
  CourseTypeUpdateColumn,
  DeleteCourseTypesDocument,
  InsertCourseTypesDocument,
  UpdateCourseTypesDocument,
  UpsertCourseTypesDocument,
} from "@/gql/graphql.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { inputToNumber, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminCourseTypeFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = CourseTypeInsertInput;

const { courseTypeFragments } = defineProps<{
  courseTypeFragments: FragmentType<typeof AdminCourseTypeFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "id";
const rowDescriptor = {
  label: { type: "string" },
  coefficient: { type: "number", numberFormat: "decimal" },
  description: { type: "string", nullable: true },
} as const satisfies RowDescriptorExtra<Row>;

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

const importConstraint = CourseTypeConstraint.CourseTypeLabelKey;
const importUpdateColumns = [
  CourseTypeUpdateColumn.Label,
  CourseTypeUpdateColumn.Coefficient,
  CourseTypeUpdateColumn.Description,
];

const formatRow = (row: Row) => row.label;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.label !== undefined) {
    object.label = flatRow.label;
  }

  if (flatRow.coefficient !== undefined) {
    object.coefficient = flatRow.coefficient;
  }

  if (flatRow.description !== undefined) {
    object.description = flatRow.description;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="courses"
    name="types"
    :id-key
    :row-descriptor
    :rows="courseTypes"
    :format-row
    :validate-flat-row
    :insert-data="insertCourseTypes"
    :upsert-data="upsertCourseTypes"
    :update-data="updateCourseTypes"
    :delete-data="deleteCourseTypes"
    :import-constraint
    :import-update-columns
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-model="formValues.label"
        :label="t('admin.courses.types.column.label.label')"
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
        :label="t('admin.courses.types.column.coefficient.label')"
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
        :label="t('admin.courses.types.column.description.label')"
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
