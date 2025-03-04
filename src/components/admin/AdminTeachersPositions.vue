<script setup lang="ts">
import { type CombinedError, useMutation } from "@urql/vue";
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
import type {
  NullableParsedRow,
  ParsedRow,
  Scalar,
  SimpleObject,
  VisibleParsedRow,
} from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm, inputToNumber } from "@/utils/admin-data.ts";
import { nf } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { positionFragments } = defineProps<{
  positionFragments: FragmentType<typeof AdminPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const rowDescriptor = {
  id: { type: "number", hidden: true },
  label: { type: "string" },
  description: { type: "string", nullable: true },
  baseServiceHours: { type: "number", nullable: true },
} as const;
const idKey = "id";

type T = typeof rowDescriptor;
type IdKey = typeof idKey;
type Row = ParsedRow<T>;
type Id = Row[IdKey];
type FormData = NullableParsedRow<T>;
type OperationData = VisibleParsedRow<T>;
type OperationResult = {
  data: {
    returning: SimpleObject<Scalar>[] | null;
  } | null;
  error: CombinedError | null;
};

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

const formValues = ref<FormData>(initForm(rowDescriptor));
const selectedFields = ref<string[]>([]);

const updateBaseServiceHours = (value: string | number | null) => {
  formValues.value.baseServiceHours = inputToNumber(value);
};

const columns: ColumnNonAbbreviable<FormData>[] = [
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
    name: "base_service_hours",
    label: t("admin.teachers.positions.table.columns.baseServiceHours"),
    field: "baseServiceHours",
    format: (val: number | null) => (val === null ? null : nf.format(val)),
    sortable: true,
    searchable: false,
  },
];

const validateOperationData = (
  operationData: Partial<OperationData>,
  checkConflicts: boolean,
) => {
  if (
    operationData.baseServiceHours != null &&
    operationData.baseServiceHours < 0
  ) {
    throw new Error(
      t("admin.teachers.positions.form.error.baseServiceHoursNegative"),
    );
  }

  if (checkConflicts) {
    if (positions.value.find((p) => p.label === operationData.label)) {
      throw new Error(t("admin.teachers.positions.form.error.conflictLabel"));
    }
  }
};

const insertData = (objects: OperationData[]): Promise<OperationResult> =>
  insertPositions.executeMutation({ objects }).then((result) => ({
    data: result.data
      ? { returning: result.data.insertPosition?.returning ?? null }
      : null,
    error: result.error ?? null,
  }));

const upsertData = (
  objects: OperationData[],
  overwrite: boolean,
): Promise<OperationResult> =>
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

const updateData = (
  ids: Id[],
  changes: Partial<OperationData>,
): Promise<OperationResult> =>
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

const deleteData = (ids: Id[]): Promise<OperationResult> =>
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
    :id-key
    :row-descriptor
    :columns
    :rows
    :validate-operation-data
    :insert-data
    :upsert-data
    :update-data
    :delete-data
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
        :suffix="t('unit.weighted_hours')"
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
