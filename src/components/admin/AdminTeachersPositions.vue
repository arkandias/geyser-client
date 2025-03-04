<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminPositionFragmentDoc,
  DeletePositionsDocument,
  InsertPositionsDocument,
  PositionConstraint,
  PositionUpdateColumn,
  UpdatePositionsDocument,
  UpsertPositionsDocument,
} from "@/gql/graphql.ts";
import type { ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm, inputToNumber } from "@/utils/admin-data.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { positionFragments } = defineProps<{
  positionFragments: FragmentType<typeof AdminPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const rowDescriptor = {
  id: "number",
  label: "string",
  description: "string",
  baseServiceHours: "number",
} as const;
const exportFields = ["label", "description", "baseServiceHours"];
const nullableFields = ["description", "baseServiceHours"];

type Row = ParsedRow<typeof rowDescriptor>;
type Id = number;
type DataObj = Pick<Row, "label" | "description" | "baseServiceHours">;

graphql(`
  fragment AdminPosition on Position {
    id
    label
    description
    baseServiceHours
  }

  mutation InsertPositions($objects: [PositionInsertInput!]!) {
    insertPosition(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertPositions(
    $objects: [PositionInsertInput!]!
    $onConflict: PositionOnConflict!
  ) {
    insertPosition(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdatePositions($ids: [Int!]!, $changes: PositionSetInput!) {
    updatePosition(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeletePositions($ids: [Int!]!) {
    deletePosition(where: { id: { _in: $ids } }) {
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

const rows = computed<Row[]>(() =>
  positions.value.map((p) => ({
    id: p.id,
    label: p.label,
    description: p.description ?? null,
    baseServiceHours: p.baseServiceHours ?? null,
  })),
);

const formValues = ref<Row>(initForm(rowDescriptor));
const selectedFields = ref<string[]>([]);

const updateBaseServiceHours = (value: string | number | null) => {
  formValues.value.baseServiceHours = inputToNumber(value);
};

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "label",
    label: t("admin.teachers.positions.table.label"),
    align: "left",
    field: "label",
    sortable: true,
    searchable: true,
  },
  {
    name: "description",
    label: t("admin.teachers.positions.table.description"),
    align: "left",
    field: (row) => row.description ?? null,
    sortable: true,
    searchable: true,
  },
  {
    name: "base_service_hours",
    label: t("admin.teachers.positions.table.base_service_hours"),
    field: (row) => row.baseServiceHours ?? null,
    format: (val: number | null) =>
      val === null ? "" : String(val) + " " + t("unit.weighted_hours"),
    sortable: true,
    searchable: false,
  },
];

function getData(row: Row, checkConflicts: boolean): DataObj;
function getData(
  row: Row,
  checkConflicts: boolean,
  fields: string[],
): Partial<DataObj>;
function getData(
  row: Row,
  checkConflicts: boolean,
  fields?: string[],
): DataObj | Partial<DataObj> {
  if (!row.label) {
    throw new Error(t("admin.teachers.positions.form.error.label_empty"));
  }
  if (row.description === "") {
    row.description = null;
  }
  if (row.baseServiceHours !== null) {
    if (!Number.isFinite(row.baseServiceHours)) {
      throw new Error(
        t("admin.teachers.positions.form.error.base_service_hours_nan"),
      );
    }
    if (row.baseServiceHours < 0) {
      throw new Error(
        t("admin.teachers.positions.form.error.base_service_hours_negative"),
      );
    }
  }

  if (checkConflicts) {
    if (positions.value.find((p) => p.label === row.label)) {
      throw new Error(t("admin.teachers.positions.form.error.conflict_label"));
    }
  }

  const dataObj: DataObj = {
    label: row.label,
    description: row.description,
    baseServiceHours: row.baseServiceHours,
  };

  if (fields) {
    return Object.fromEntries(
      Object.entries(dataObj).filter(([key]) => fields.includes(key)),
    ) as Partial<DataObj>;
  }

  return dataObj;
}

const insertData = (objects: DataObj[]) =>
  insertPositions.executeMutation({ objects }).then((result) => ({
    data: result.data
      ? { returning: result.data.insertPosition?.returning ?? null }
      : null,
    error: result.error ?? null,
  }));

const upsertData = (objects: DataObj[], overwrite: boolean) =>
  upsertPositions
    .executeMutation({
      objects,
      onConflict: {
        constraint: PositionConstraint.PositionLabelKey,
        updateColumns: overwrite
          ? [
              PositionUpdateColumn.Description,
              PositionUpdateColumn.BaseServiceHours,
            ]
          : [],
      },
    })
    .then((result) => ({
      data: result.data
        ? { returning: result.data.insertPosition?.returning ?? null }
        : null,
      error: result.error ?? null,
    }));

const updateData = (ids: Id[], changes: Partial<DataObj>) =>
  updatePositions
    .executeMutation({
      ids,
      changes,
    })
    .then((result) => ({
      data: result.data
        ? { returning: result.data.updatePosition?.returning ?? null }
        : null,
      error: result.error ?? null,
    }));

const deleteData = (ids: Id[]) =>
  deletePositions
    .executeMutation({
      ids,
    })
    .then((result) => ({
      data: result.data
        ? { returning: result.data.deletePosition?.returning ?? null }
        : null,
      error: result.error ?? null,
    }));
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="positions"
    message-prefix="admin.teachers.positions"
    id-key="id"
    :row-descriptor
    :columns
    :rows
    :get-data
    :insert-data
    :upsert-data
    :update-data
    :delete-data
    :export-fields
    :nullable-fields
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.teachers.positions.form.label')"
        square
        dense
      />
      <QInput
        v-model="formValues.description"
        :label="t('admin.teachers.positions.form.description')"
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
        :label="t('admin.teachers.positions.form.base_service_hours')"
        :disable="
          multipleSelection && !selectedFields.includes('baseServiceHours')
        "
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
