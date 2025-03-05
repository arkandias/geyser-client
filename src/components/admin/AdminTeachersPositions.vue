<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminPositionFragment,
  AdminPositionFragmentDoc,
  DeletePositionsDocument,
  InsertPositionsDocument,
  PositionConstraint,
  PositionUpdateColumn,
  UpdatePositionsDocument,
  UpsertPositionsDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { inputToNumber, nullRow } from "@/utils/admin-data.ts";
import { nf } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { positionFragments } = defineProps<{
  positionFragments: FragmentType<typeof AdminPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey = "id";
const rowDescriptor = {
  label: { type: "string" },
  description: { type: "string", nullable: true },
  baseServiceHours: { type: "number", nullable: true },
} as const;

type Row = AdminPositionFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  label?: string | null;
  description?: string | null;
  baseServiceHours?: number | null;
};

graphql(`
  fragment AdminPosition on Position {
    id
    label
    description
    baseServiceHours
  }

  mutation InsertPositions($objects: [PositionInsertInput!]!) {
    insertData: insertPosition(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertPositions(
    $objects: [PositionInsertInput!]!
    $onConflict: PositionOnConflict!
  ) {
    upsertData: insertPosition(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdatePositions($ids: [Int!]!, $changes: PositionSetInput!) {
    updateData: updatePosition(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeletePositions($ids: [Int!]!) {
    deleteData: deletePosition(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const positions = computed(() =>
  positionFragments.map((f) => useFragment(AdminPositionFragmentDoc, f)),
);
const insertPositions = useMutation(InsertPositionsDocument);
const upsertPositions = useMutation(UpsertPositionsDocument);
const updatePositions = useMutation(UpdatePositionsDocument);
const deletePositions = useMutation(DeletePositionsDocument);

const constraint = PositionConstraint.PositionLabelKey;
const updateColumns = [
  PositionUpdateColumn.Description,
  PositionUpdateColumn.BaseServiceHours,
];

const formValues = ref<FormValues>(nullRow(rowDescriptor));
const selectedFields = ref<string[]>([]);

const updateBaseServiceHours = (value: string | number | null) => {
  formValues.value.baseServiceHours = inputToNumber(value);
};

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "label",
    label: t("admin.teachers.positions.table.columns.label"),
    align: "left",
    field: "label",
    sortable: true,
    searchable: true,
  },
  {
    name: "description",
    label: t("admin.teachers.positions.table.columns.description"),
    align: "left",
    field: "description",
    sortable: true,
    searchable: true,
  },
  {
    name: "baseServiceHours",
    label: t("admin.teachers.positions.table.columns.baseServiceHours"),
    field: "baseServiceHours",
    format: (val: number | null) => (val === null ? null : nf.format(val)),
    sortable: true,
    searchable: false,
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
      positions.value.find((p) => p.label === importRow.label)
    ) {
      throw new Error(t("admin.teachers.positions.form.error.conflictLabel"));
    }
  }

  if (importRow.description !== undefined) {
    object.description = importRow.description;
  }

  if (importRow.baseServiceHours !== undefined) {
    object.baseServiceHours = importRow.baseServiceHours;
    if (object.baseServiceHours !== null && object.baseServiceHours < 0) {
      throw new Error(
        t("admin.teachers.positions.form.error.baseServiceHoursNegative"),
      );
    }
  }

  return importRow;
}
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="positions"
    message-prefix="admin.teachers.positions"
    :id-key
    :row-descriptor
    :columns
    :rows="positions"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertPositions"
    :upsert-data="upsertPositions"
    :update-data="updatePositions"
    :delete-data="deletePositions"
    :constraint
    :update-columns
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.teachers.positions.form.fields.label')"
        square
        dense
      />
      <QInput
        v-model="formValues.description"
        :label="t('admin.teachers.positions.form.fields.description')"
        :disable="multipleSelection && !selectedFields.includes('description')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="description" />
        </template>
      </QInput>
      <QInput
        :model-value="formValues.baseServiceHours"
        type="number"
        :label="t('admin.teachers.positions.form.fields.baseServiceHours')"
        :disable="
          multipleSelection && !selectedFields.includes('baseServiceHours')
        "
        :suffix="t('unit.weightedHours')"
        square
        dense
        @update:model-value="updateBaseServiceHours"
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="baseServiceHours" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
