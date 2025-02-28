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
} from "@/gql/graphql.ts";
import type { ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm } from "@/utils/admin-data.ts";
import { toSlug } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { positionFragments } = defineProps<{
  positionFragments: FragmentType<typeof AdminPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const rowDescriptor = {
  value: { type: "string" },
  label: { type: "string" },
  description: { type: "string", nullable: true },
  baseServiceHours: { type: "number", nullable: true },
} as const;

const exportFields = ["value", "label", "description", "baseServiceHours"];

type Row = ParsedRow<typeof rowDescriptor>;
type Id = string;
type DataObj = {
  value: string;
  label: string;
  description: string | null;
  baseServiceHours: number | null;
};

graphql(`
  fragment AdminPosition on Position {
    value
    label
    description
    baseServiceHours
  }

  mutation InsertPositions(
    $objects: [PositionInsertInput!]!
    $onConflict: PositionOnConflict
  ) {
    insertPosition(objects: $objects, onConflict: $onConflict) {
      returning {
        value
      }
    }
  }

  mutation UpdatePositions($values: [String!]!, $changes: PositionSetInput!) {
    updatePosition(where: { value: { _in: $values } }, _set: $changes) {
      returning {
        value
      }
    }
  }

  mutation DeletePositions($values: [String!]!) {
    deletePosition(where: { value: { _in: $values } }) {
      returning {
        value
      }
    }
  }
`);

const positions = computed(() =>
  positionFragments.map((f) => useFragment(AdminPositionFragmentDoc, f)),
);
const insertPositions = useMutation(InsertPositionsDocument);
const updatePositions = useMutation(UpdatePositionsDocument);
const deletePositions = useMutation(DeletePositionsDocument);

const rows = computed<Row[]>(() =>
  positions.value.map((p) => ({
    value: p.value,
    label: p.label,
    description: p.description ?? null,
    baseServiceHours: p.baseServiceHours ?? null,
  })),
);

const formValues = ref<Row>(initForm(rowDescriptor));
const selectedFields = ref<string[]>([]);

const updateValue = (value: unknown) => {
  formValues.value.value = toSlug(String(value));
};

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "value",
    label: t("admin.teachers.positions.table.label"),
    align: "left",
    field: "label",
    sortable: true,
    searchable: true,
  },
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

const getLabel = (row: Row): string => row.label;

function getData(row: Row): DataObj;
function getData(row: Row, fields: string[]): Partial<DataObj>;
function getData(row: Row, fields?: string[]): DataObj | Partial<DataObj> {
  if (!row.label) {
    throw new Error(t("admin.teachers.positions.form.error.uid_empty"));
  }

  const dataObj: DataObj = {
    value: row.value,
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

const insertData = (objects: DataObj[], overwrite?: boolean) =>
  insertPositions
    .executeMutation({
      objects,
      onConflict: {
        constraint: PositionConstraint.PositionPkey,
        updateColumns: overwrite
          ? [
              PositionUpdateColumn.Value,
              PositionUpdateColumn.Label,
              PositionUpdateColumn.Description,
              PositionUpdateColumn.BaseServiceHours,
            ]
          : [],
      },
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.insertPosition?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const updateData = (values: Id[], changes: Partial<DataObj>) =>
  updatePositions
    .executeMutation({
      values,
      changes,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.updatePosition?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const deleteData = (values: Id[]) =>
  deletePositions
    .executeMutation({
      values,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.deletePosition?.returning ?? null,
          }
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
    id-key="value"
    :row-descriptor
    :columns
    :rows
    :get-label
    :get-data
    :insert-data
    :update-data
    :delete-data
    :export-fields
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.value"
        :label="t('admin.teachers.positions.form.value')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.teachers.positions.form.label')"
        square
        dense
        @update:model-value="updateValue"
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
        v-model.number="formValues.baseServiceHours"
        type="number"
        :label="t('admin.teachers.positions.form.base_service_hours')"
        :disable="
          multipleSelection && !selectedFields.includes('baseServiceHours')
        "
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="baseServiceHours" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
