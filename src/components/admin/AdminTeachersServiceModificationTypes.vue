<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminServiceModificationTypeFragmentDoc,
  DeleteServiceModificationTypesDocument,
  InsertServiceModificationTypesDocument,
  ServiceModificationTypeConstraint,
  ServiceModificationTypeUpdateColumn,
  UpdateServiceModificationTypesDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm } from "@/utils/admin-data.ts";
import { toSlug } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { serviceModificationTypeFragments } = defineProps<{
  serviceModificationTypeFragments: FragmentType<
    typeof AdminServiceModificationTypeFragmentDoc
  >[];
}>();

const { t } = useCustomI18n();

const rowDescriptor = {
  value: { type: "string" },
  label: { type: "string" },
  description: { type: "string", nullable: true },
} as const;

const exportFields = ["value", "label", "description"];

type Row = NullableParsedRow<typeof rowDescriptor>;
type IdKey = "value";
type Id = Row[IdKey];
type DataObj = {
  value: string;
  label: string;
  description: string | null;
};

graphql(`
  fragment AdminServiceModificationType on ServiceModificationType {
    id
    label
    description
  }

  mutation InsertServiceModificationTypes(
    $objects: [ServiceModificationTypeInsertInput!]!
    $onConflict: ServiceModificationTypeOnConflict
  ) {
    insertServiceModificationType(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateServiceModificationTypes(
    $ids: [Int!]!
    $changes: ServiceModificationTypeSetInput!
  ) {
    updateServiceModificationType(
      where: { id: { _in: $ids } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }

  mutation DeleteServiceModificationTypes($ids: [Int!]!) {
    deleteServiceModificationType(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const serviceModificationTypes = computed(() =>
  serviceModificationTypeFragments.map((f) =>
    useFragment(AdminServiceModificationTypeFragmentDoc, f),
  ),
);
const insertServiceModificationTypes = useMutation(
  InsertServiceModificationTypesDocument,
);
const updateServiceModificationTypes = useMutation(
  UpdateServiceModificationTypesDocument,
);
const deleteServiceModificationTypes = useMutation(
  DeleteServiceModificationTypesDocument,
);

const rows = computed<Row[]>(() =>
  serviceModificationTypes.value.map((smt) => ({
    id: smt.id,
    label: smt.label,
    description: smt.description ?? null,
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
    label: t("admin.teachers.service_modification_types.table.label"),
    align: "left",
    field: "label",
    sortable: true,
    searchable: true,
  },
  {
    name: "description",
    label: t("admin.teachers.service_modification_types.table.description"),
    align: "left",
    field: (row) => row.description ?? null,
    sortable: true,
    searchable: true,
  },
];

const getLabel = (row: Row): string => row.label;

function getData(row: Row): DataObj;
function getData(row: Row, fields: string[]): Partial<DataObj>;
function getData(row: Row, fields?: string[]): DataObj | Partial<DataObj> {
  if (!row.label) {
    throw new Error(
      t("admin.teachers.service_modification_types.form.error.uid_empty"),
    );
  }

  const dataObj: DataObj = {
    value: row.value,
    label: row.label,
    description: row.description,
  };

  if (fields) {
    return Object.fromEntries(
      Object.entries(dataObj).filter(([key]) => fields.includes(key)),
    ) as Partial<DataObj>;
  }

  return dataObj;
}

const insertData = (objects: DataObj[], overwrite?: boolean) =>
  insertServiceModificationTypes
    .executeMutation({
      objects,
      onConflict: {
        constraint:
          ServiceModificationTypeConstraint.ServiceModificationTypePkey,
        updateColumns: overwrite
          ? [
              ServiceModificationTypeUpdateColumn.Value,
              ServiceModificationTypeUpdateColumn.Label,
              ServiceModificationTypeUpdateColumn.Description,
            ]
          : [],
      },
    })
    .then((result) => ({
      data: result.data
        ? {
            returning:
              result.data.insertServiceModificationType?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const updateData = (values: Id[], changes: Partial<DataObj>) =>
  updateServiceModificationTypes
    .executeMutation({
      values,
      changes,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning:
              result.data.updateServiceModificationType?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const deleteData = (values: Id[]) =>
  deleteServiceModificationTypes
    .executeMutation({
      values,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning:
              result.data.deleteServiceModificationType?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="service_modification_types"
    message-prefix="admin.teachers.service_modification_types"
    id-key="value"
    :row-descriptor
    :rows
    :columns
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
        :label="t('admin.teachers.service_modification_types.form.label')"
        square
        dense
        @update:model-value="updateValue"
      />
      <QInput
        v-model="formValues.description"
        :label="t('admin.teachers.positions.form.description')"
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
