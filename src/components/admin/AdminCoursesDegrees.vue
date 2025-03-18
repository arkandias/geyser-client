<script setup lang="ts">
import { useMutation } from "villus";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminDegreeFragment,
  AdminDegreeFragmentDoc,
  DegreeConstraint,
  DegreeUpdateColumn,
  DeleteDegreesDocument,
  InsertDegreesDocument,
  UpdateDegreesDocument,
  UpsertDegreesDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { booleanOptions } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { degreeFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminDegreeFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey = "id";
const rowDescriptor = {
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  visible: { type: "boolean" },
} as const;

type Row = AdminDegreeFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  name?: string | null;
  nameShort: string | null;
  visible?: boolean | null;
};

graphql(`
  fragment AdminDegree on Degree {
    id
    name
    nameShort
    visible
  }

  mutation InsertDegrees($objects: [DegreeInsertInput!]!) {
    insertData: insertDegree(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertDegrees(
    $objects: [DegreeInsertInput!]!
    $onConflict: DegreeOnConflict
  ) {
    upsertData: insertDegree(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateDegrees($ids: [Int!]!, $changes: DegreeSetInput!) {
    updateData: updateDegree(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteDegrees($ids: [Int!]!) {
    deleteData: deleteDegree(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const degrees = computed(() =>
  degreeFragments.map((f) => useFragment(AdminDegreeFragmentDoc, f)),
);
const insertDegrees = useMutation(InsertDegreesDocument, {
  refetchTags: ["Degree"],
});
const upsertDegrees = useMutation(UpsertDegreesDocument, {
  refetchTags: ["Degree"],
});
const updateDegrees = useMutation(UpdateDegreesDocument, {
  refetchTags: ["Degree"],
});
const deleteDegrees = useMutation(DeleteDegreesDocument, {
  refetchTags: ["Degree"],
});

const constraint = DegreeConstraint.DegreeNameKey;
const updateColumns = [
  DegreeUpdateColumn.Name,
  DegreeUpdateColumn.NameShort,
  DegreeUpdateColumn.Visible,
];

const columns: Column<Row>[] = [
  {
    name: "name",
    label: t("admin.courses.degrees.table.columns.name"),
    align: "left",
    field: "name",
    sortable: true,
    searchable: true,
  },
  {
    name: "nameShort",
    label: t("admin.courses.degrees.table.columns.nameShort"),
    align: "left",
    field: "nameShort",
    sortable: true,
    searchable: true,
  },
  {
    name: "visible",
    label: t("admin.courses.degrees.table.columns.visible"),
    align: "center",
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) => row.name;

const initForm = (rows: Row[]): FormValues => ({
  name: rows[0]?.name ?? null,
  nameShort: rows[0]?.nameShort ?? null,
  visible: rows[0]?.visible ?? null,
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

  if (importRow.name !== undefined) {
    object.name = importRow.name;
    if (checkConflicts && degrees.value.find((d) => d.name === object.name)) {
      throw new Error(
        t("admin.courses.degrees.form.error.conflictName", importRow),
      );
    }
  }

  if (importRow.nameShort !== undefined) {
    object.nameShort = importRow.nameShort;
  }

  if (importRow.visible !== undefined) {
    object.visible = importRow.visible;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

// Filters
const selectedVisible = ref<boolean | null>(null);
const filterFn = computed(
  () => (r: Row) =>
    selectedVisible.value === null || r.visible === selectedVisible.value,
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="degrees"
    message-prefix="admin.courses.degrees"
    :id-key
    :row-descriptor
    :columns
    :rows="degrees"
    :filter-fn
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertDegrees"
    :upsert-data="upsertDegrees"
    :update-data="updateDegrees"
    :delete-data="deleteDegrees"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedVisible"
        :options="booleanOptions(t('yes'), t('no'))"
        color="primary"
        :label="t('admin.courses.programs.table.columns.visible')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
        style="width: 100%"
      />
    </template>
    <template #form="{ multipleSelection }">
      <QInput
        v-model="formValues.name"
        :label="t('admin.courses.degrees.form.fields.name')"
        :disable="multipleSelection && !selectedFields.includes('name')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="name" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.nameShort"
        :label="t('admin.courses.degrees.form.fields.nameShort')"
        :disable="multipleSelection && !selectedFields.includes('nameShort')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="nameShort" />
        </template>
      </QInput>
      <div class="q-mr-md">
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="visible"
        />
        <QToggle
          v-model="formValues.visible"
          :label="t('admin.courses.degrees.form.fields.visible')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
