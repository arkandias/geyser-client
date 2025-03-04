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
  UpsertServiceModificationTypesDocument,
} from "@/gql/graphql.ts";
import type {
  NullableParsedRow,
  ParsedRow,
  VisibleParsedRow,
} from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm } from "@/utils/admin-data.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { serviceModificationTypeFragments } = defineProps<{
  serviceModificationTypeFragments: FragmentType<
    typeof AdminServiceModificationTypeFragmentDoc
  >[];
}>();

const { t } = useCustomI18n();

const rowDescriptor = {
  id: { type: "number", hidden: true },
  label: { type: "string" },
  description: { type: "string", nullable: true },
} as const;
const idKey = "id";

type T = typeof rowDescriptor;
type Row = ParsedRow<T>;
type FormData = NullableParsedRow<T>;
type OperationData = VisibleParsedRow<T>;

graphql(`
  fragment AdminServiceModificationType on ServiceModificationType {
    id
    label
    description
  }

  mutation InsertServiceModificationTypes(
    $objects: [ServiceModificationTypeInsertInput!]!
  ) {
    insertData: insertServiceModificationType(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertServiceModificationTypes(
    $objects: [ServiceModificationTypeInsertInput!]!
    $onConflict: ServiceModificationTypeOnConflict
  ) {
    upsertData: insertServiceModificationType(
      objects: $objects
      onConflict: $onConflict
    ) {
      returning {
        id
      }
    }
  }

  mutation UpdateServiceModificationTypes(
    $ids: [Int!]!
    $changes: ServiceModificationTypeSetInput!
  ) {
    updateData: updateServiceModificationType(
      where: { id: { _in: $ids } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }

  mutation DeleteServiceModificationTypes($ids: [Int!]!) {
    deleteData: deleteServiceModificationType(where: { id: { _in: $ids } }) {
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
const insertData = useMutation(InsertServiceModificationTypesDocument);
const upsertData = useMutation(UpsertServiceModificationTypesDocument);
const updateData = useMutation(UpdateServiceModificationTypesDocument);
const deleteData = useMutation(DeleteServiceModificationTypesDocument);

const constraint =
  ServiceModificationTypeConstraint.ServiceModificationTypeLabelKey;
const updateColumns = [
  ServiceModificationTypeUpdateColumn.Label,
  ServiceModificationTypeUpdateColumn.Description,
];

const rows = computed<Row[]>(() =>
  serviceModificationTypes.value.map((smt) => ({
    id: smt.id,
    label: smt.label,
    description: smt.description ?? null,
  })),
);

const formValues = ref<FormData>(initForm(rowDescriptor));
const selectedFields = ref<string[]>([]);

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "label",
    label: t("admin.teachers.serviceModificationTypes.table.columns.label"),
    align: "left",
    field: "label",
    sortable: true,
    searchable: true,
  },
  {
    name: "description",
    label: t(
      "admin.teachers.serviceModificationTypes.table.columns.description",
    ),
    align: "left",
    field: "description",
    sortable: true,
    searchable: true,
  },
];

const formatRow = (row: Row) => row.label;

const validateOperationData = (
  operationData: Partial<OperationData>,
  checkConflicts: boolean,
) => {
  if (checkConflicts) {
    if (
      serviceModificationTypes.value.find(
        (smt) => smt.label === operationData.label,
      )
    ) {
      throw new Error(
        t("admin.teachers.serviceModificationTypes.form.error.conflictLabel"),
      );
    }
  }
};
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="serviceModificationTypes"
    message-prefix="admin.teachers.serviceModificationTypes"
    :id-key
    :row-descriptor
    :columns
    :rows
    :format-row
    :validate-operation-data
    :insert-data
    :upsert-data
    :update-data
    :delete-data
    :constraint
    :update-columns
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.teachers.serviceModificationTypes.form.label')"
        square
        dense
      />
      <QInput
        v-model="formValues.description"
        :label="t('admin.teachers.serviceModificationTypes.form.description')"
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
