<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminDegreeFragment,
  AdminDegreeFragmentDoc,
  DegreeConstraint,
  type DegreeInsertInput,
  DegreeUpdateColumn,
  DeleteDegreesDocument,
  InsertDegreesDocument,
  UpdateDegreesDocument,
  UpsertDegreesDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { booleanOptions, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminDegreeFragment;
type FlatRow = NullableParsedRow<typeof rowDescriptor>;
type InsertInput = DegreeInsertInput;

const { degreeFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminDegreeFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "id";
const rowDescriptor = {
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  visible: { type: "boolean" },
} as const satisfies RowDescriptorExtra<Row>;

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
const insertDegrees = useMutation(InsertDegreesDocument);
const upsertDegrees = useMutation(UpsertDegreesDocument);
const updateDegrees = useMutation(UpdateDegreesDocument);
const deleteDegrees = useMutation(DeleteDegreesDocument);

const importConstraint = DegreeConstraint.DegreeNameKey;
const importUpdateColumns = [
  DegreeUpdateColumn.Name,
  DegreeUpdateColumn.NameShort,
  DegreeUpdateColumn.Visible,
];

const formatRow = (row: Row) => row.name;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.name !== undefined) {
    object.name = flatRow.name;
  }

  if (flatRow.nameShort !== undefined) {
    object.nameShort = flatRow.nameShort;
  }

  if (flatRow.visible !== undefined) {
    object.visible = flatRow.visible;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

// Filters
const selectedVisible = ref<boolean | null>(null);
const filterFn = computed(
  () => (row: Row) =>
    selectedVisible.value === null || row.visible === selectedVisible.value,
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="courses"
    name="degrees"
    :id-key
    :row-descriptor
    :rows="degrees"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertDegrees"
    :upsert-data="upsertDegrees"
    :update-data="updateDegrees"
    :delete-data="deleteDegrees"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedVisible"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.courses.programs.column.visible.label')"
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
        :label="t('admin.courses.degrees.column.name.label')"
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
        :label="t('admin.courses.degrees.column.nameShort')"
        :disable="multipleSelection && !selectedFields.includes('nameShort')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="nameShort" />
        </template>
      </QInput>
      <div>
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="visible"
        />
        <QToggle
          v-model="formValues.visible"
          :label="t('admin.courses.degrees.column.visible.label')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
