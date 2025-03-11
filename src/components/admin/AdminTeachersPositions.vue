<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
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
import type { Column } from "@/types/column.ts";
import { inputToNumber } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { positionFragments } = defineProps<{
  positionFragments: FragmentType<typeof AdminPositionFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();

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

const columns: Column<Row>[] = [
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
    format: (val: number | null) =>
      val === null ? null : n(val, "decimalFixed"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) => row.label;

const initForm = (rows: Row[]): FormValues => ({
  label: rows[0]?.label ?? null,
  description: rows[0]?.description ?? null,
  baseServiceHours: rows[0]?.baseServiceHours ?? null,
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
      positions.value.find((p) => p.label === object.label)
    ) {
      throw new Error(
        t("admin.teachers.positions.form.error.conflictLabel", importRow),
      );
    }
  }

  if (importRow.description !== undefined) {
    object.description = importRow.description;
  }

  if (importRow.baseServiceHours !== undefined) {
    if (importRow.baseServiceHours !== null && importRow.baseServiceHours < 0) {
      throw new Error(
        t("admin.teachers.positions.form.error.baseServiceHoursNegative"),
      );
    }
    object.baseServiceHours = importRow.baseServiceHours;
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
        v-if="!multipleSelection"
        v-model="formValues.description"
        :label="t('admin.teachers.positions.form.fields.description')"
        square
        dense
      />
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
        @update:model-value="
          (value) => (formValues.baseServiceHours = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="baseServiceHours" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
