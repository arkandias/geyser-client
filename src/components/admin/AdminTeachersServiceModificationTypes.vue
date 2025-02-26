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
import type { ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { toSlug } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { serviceModificationTypeFragments } = defineProps<{
  serviceModificationTypeFragments: FragmentType<
    typeof AdminServiceModificationTypeFragmentDoc
  >[];
}>();

const { t } = useCustomI18n();

const rowDescriptor = {
  label: { type: "string" },
  description: { type: "string", nullable: true },
} as const;

type Row = ParsedRow<typeof rowDescriptor>;
type Id = string;
type DataObj = {
  value: string;
  label: string;
  description: string | null;
};

graphql(`
  fragment AdminServiceModificationType on ServiceModificationType {
    value
    label
    description
  }

  mutation InsertServiceModificationTypes(
    $objects: [ServiceModificationTypeInsertInput!]!
    $onConflict: ServiceModificationTypeOnConflict
  ) {
    insertServiceModificationType(objects: $objects, onConflict: $onConflict) {
      returning {
        value
      }
    }
  }

  mutation UpdateServiceModificationTypes(
    $values: [String!]!
    $changes: ServiceModificationTypeSetInput!
  ) {
    updateServiceModificationType(
      where: { value: { _in: $values } }
      _set: $changes
    ) {
      returning {
        value
      }
    }
  }

  mutation DeleteServiceModificationTypes($values: [String!]!) {
    deleteServiceModificationType(where: { value: { _in: $values } }) {
      returning {
        value
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
  serviceModificationTypes.value.map((p) => ({
    label: p.label,
    description: p.description ?? null,
  })),
);

const initForm = (selectedRows?: Row[]): Row => ({
  label: selectedRows?.[0]?.label ?? "",
  description: selectedRows?.[0]?.description ?? "",
});
const formValues = ref(initForm());
const selectedFields = ref<string[]>([]);

const columns: ColumnNonAbbreviable<Row>[] = [
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

const getId = (row: Row): Id => {
  const value =
    serviceModificationTypes.value.find((p) => p.label === row.label)?.value ??
    null;
  if (value !== null) {
    return value;
  }

  let slug = toSlug(row.label) || "default_slug"; // do not allow empty value
  if (serviceModificationTypes.value.find((p) => p.value === slug)) {
    return slug;
  }

  let counter = 1;
  while (serviceModificationTypes.value.find((p) => p.value === slug)) {
    counter += 1;
    slug = slug + counter.toString();
  }
  return slug;
};
const getLabel = (row: Row): string => row.label;

function getObject(row: Row): DataObj;
function getObject(row: Row, fields: string[]): Partial<DataObj>;
function getObject(row: Row, fields?: string[]): DataObj | Partial<DataObj> {
  if (!row.label) {
    throw new Error(
      t("admin.teachers.service_modification_types.form.error.uid_empty"),
    );
  }

  const dataObj: DataObj = {
    value: getId(row),
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
    :row-descriptor
    :columns
    :rows
    :get-id
    :get-label
    :get-object
    :init-form
    :insert-data
    :update-data
    :delete-data
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.teachers.service_modification_types.form.label')"
        square
        dense
      />
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
