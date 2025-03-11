<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminServiceModificationTypeFragment,
  AdminServiceModificationTypeFragmentDoc,
  DeleteServiceModificationTypesDocument,
  InsertServiceModificationTypesDocument,
  ServiceModificationTypeConstraint,
  ServiceModificationTypeUpdateColumn,
  UpdateServiceModificationTypesDocument,
  UpsertServiceModificationTypesDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { serviceModificationTypeFragments } = defineProps<{
  serviceModificationTypeFragments: FragmentType<
    typeof AdminServiceModificationTypeFragmentDoc
  >[];
}>();

const { t } = useCustomI18n();

const idKey = "id";
const rowDescriptor = {
  label: { type: "string" },
  description: { type: "string", nullable: true },
} as const;

type Row = AdminServiceModificationTypeFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  label?: string | null;
  description?: string | null;
};

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
const insertServiceModificationTypes = useMutation(
  InsertServiceModificationTypesDocument,
);
const upsertServiceModificationTypes = useMutation(
  UpsertServiceModificationTypesDocument,
);
const updateServiceModificationTypes = useMutation(
  UpdateServiceModificationTypesDocument,
);
const deleteServiceModificationTypes = useMutation(
  DeleteServiceModificationTypesDocument,
);

const constraint =
  ServiceModificationTypeConstraint.ServiceModificationTypeLabelKey;
const updateColumns = [ServiceModificationTypeUpdateColumn.Description];

const columns: Column<Row>[] = [
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

const initForm = (rows: Row[]): FormValues => ({
  label: rows[0]?.label,
  description: rows[0]?.description,
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
      serviceModificationTypes.value.find((p) => p.label === object.label)
    ) {
      throw new Error(
        t(
          "admin.teachers.serviceModificationTypes.form.error.conflictLabel",
          importRow,
        ),
      );
    }
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
    name="serviceModificationTypes"
    message-prefix="admin.teachers.serviceModificationTypes"
    :id-key
    :row-descriptor
    :columns
    :rows="serviceModificationTypes"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertServiceModificationTypes"
    :upsert-data="upsertServiceModificationTypes"
    :update-data="updateServiceModificationTypes"
    :delete-data="deleteServiceModificationTypes"
    :constraint
    :update-columns
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.label"
        :label="t('admin.teachers.serviceModificationTypes.form.fields.label')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.description"
        :label="
          t('admin.teachers.serviceModificationTypes.form.fields.description')
        "
        square
        dense
      />
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
