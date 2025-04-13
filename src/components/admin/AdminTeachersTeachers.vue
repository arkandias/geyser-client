<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminTeacherFragment,
  AdminTeacherFragmentDoc,
  AdminTeachersPositionFragmentDoc,
  DeleteTeachersDocument,
  InsertTeachersDocument,
  TeacherConstraint,
  TeacherUpdateColumn,
  UpdateTeachersDocument,
  UpsertTeachersDocument,
} from "@/gql/graphql.ts";
import type { Column } from "@/types/column.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/data.ts";
import { booleanOptions, inputToNumber } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { teacherFragments, positionFragments } = defineProps<{
  teacherFragments: FragmentType<typeof AdminTeacherFragmentDoc>[];
  positionFragments: FragmentType<typeof AdminTeachersPositionFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();

const idKey = "uid";
const rowDescriptor = {
  uid: { type: "string" },
  firstname: { type: "string" },
  lastname: { type: "string" },
  alias: { type: "string", nullable: true },
  position: { type: "string", nullable: true },
  baseServiceHours: { type: "number", nullable: true },
  visible: { type: "boolean" },
  active: { type: "boolean" },
} as const;

type Row = AdminTeacherFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  uid?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  alias?: string | null;
  positionId?: number | null;
  baseServiceHours?: number | null;
  visible?: boolean | null;
  active?: boolean | null;
};

graphql(`
  fragment AdminTeacher on Teacher {
    uid
    firstname
    lastname
    alias
    position {
      id
      label
    }
    baseServiceHours
    visible
    active
  }

  fragment AdminTeachersPosition on Position {
    id
    label
  }

  mutation InsertTeachers($objects: [TeacherInsertInput!]!) {
    insertData: insertTeacher(objects: $objects) {
      returning {
        uid
      }
    }
  }

  mutation UpsertTeachers(
    $objects: [TeacherInsertInput!]!
    $onConflict: TeacherOnConflict
  ) {
    upsertData: insertTeacher(objects: $objects, onConflict: $onConflict) {
      returning {
        uid
      }
    }
  }

  mutation UpdateTeachers($ids: [String!]!, $changes: TeacherSetInput!) {
    updateData: updateTeacher(where: { uid: { _in: $ids } }, _set: $changes) {
      returning {
        uid
      }
    }
  }

  mutation DeleteTeachers($ids: [String!]!) {
    deleteData: deleteTeacher(where: { uid: { _in: $ids } }) {
      returning {
        uid
      }
    }
  }
`);

const teachers = computed(() =>
  teacherFragments.map((f) => useFragment(AdminTeacherFragmentDoc, f)),
);
const positions = computed(() =>
  positionFragments.map((f) =>
    useFragment(AdminTeachersPositionFragmentDoc, f),
  ),
);
const insertTeachers = useMutation(InsertTeachersDocument);
const upsertTeachers = useMutation(UpsertTeachersDocument);
const updateTeachers = useMutation(UpdateTeachersDocument);
const deleteTeachers = useMutation(DeleteTeachersDocument);

const constraint = TeacherConstraint.TeacherPkey;
const updateColumns = [
  TeacherUpdateColumn.Uid,
  TeacherUpdateColumn.Firstname,
  TeacherUpdateColumn.Lastname,
  TeacherUpdateColumn.Alias,
  TeacherUpdateColumn.PositionId,
  TeacherUpdateColumn.BaseServiceHours,
  TeacherUpdateColumn.Visible,
  TeacherUpdateColumn.Active,
];

const columns = computed<Column<Row>[]>(() => [
  {
    name: "uid",
    label: t("admin.teachers.teachers.table.columns.uid"),
    align: "left",
    field: "uid",
    sortable: true,
    searchable: true,
  },
  {
    name: "firstname",
    label: t("admin.teachers.teachers.table.columns.firstname"),
    align: "left",
    field: "firstname",
    sortable: true,
    searchable: true,
  },
  {
    name: "lastname",
    label: t("admin.teachers.teachers.table.columns.lastname"),
    align: "left",
    field: "lastname",
    sortable: true,
    searchable: true,
  },
  {
    name: "alias",
    label: t("admin.teachers.teachers.table.columns.alias"),
    align: "left",
    field: "alias",
    sortable: true,
    searchable: true,
  },
  {
    name: "position",
    label: t("admin.teachers.teachers.table.columns.position"),
    align: "left",
    field: (row) => row.position?.label,
    sortable: true,
    searchable: false,
  },
  {
    name: "baseServiceHours",
    label: t("admin.teachers.teachers.table.columns.baseServiceHours"),
    field: "baseServiceHours",
    format: (val: number | null) =>
      val === null ? null : n(val, "decimalFixed"),
    sortable: true,
    searchable: false,
  },
  {
    name: "visible",
    label: t("admin.teachers.teachers.table.columns.visible"),
    align: "center",
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "active",
    label: t("admin.teachers.teachers.table.columns.active"),
    align: "center",
    field: "active",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
]);

const formatRow = (row: Row) => row.uid;

const initForm = (rows: Row[]): FormValues => ({
  uid: rows[0]?.uid ?? null,
  firstname: rows[0]?.firstname ?? null,
  lastname: rows[0]?.lastname ?? null,
  alias: rows[0]?.alias ?? null,
  position: rows[0]?.position?.label ?? null,
  baseServiceHours: rows[0]?.baseServiceHours ?? null,
  visible: rows[0]?.visible ?? null,
  active: rows[0]?.active ?? null,
});

function validateImportRow(importRow: ImportRow): InsertInput;
function validateImportRow(importRow: Partial<ImportRow>): Partial<InsertInput>;
function validateImportRow(
  importRow: Partial<ImportRow>,
): Partial<InsertInput> {
  const object: Partial<InsertInput> = {};

  if (importRow.uid !== undefined) {
    object.uid = importRow.uid;
  }

  if (importRow.firstname !== undefined) {
    object.firstname = importRow.firstname;
  }

  if (importRow.lastname !== undefined) {
    object.lastname = importRow.lastname;
  }

  if (importRow.alias !== undefined) {
    object.alias = importRow.alias;
  }

  if (importRow.position !== undefined) {
    object.positionId = importRow.position
      ? positions.value.find((p) => p.label === importRow.position)?.id
      : null;
    if (object.positionId === undefined) {
      throw new Error(
        t("admin.teachers.teachers.form.error.positionNotFound", importRow),
      );
    }
  }

  if (importRow.baseServiceHours !== undefined) {
    if (importRow.baseServiceHours !== null && importRow.baseServiceHours < 0) {
      throw new Error(
        t("admin.teachers.teachers.form.error.baseServiceHoursNegative"),
      );
    }
    object.baseServiceHours = importRow.baseServiceHours;
  }

  if (importRow.visible !== undefined) {
    object.visible = importRow.visible;
  }

  if (importRow.active !== undefined) {
    object.active = importRow.active;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

const positionOptions = computed(() => positions.value.map((p) => p.label));

// Filters
const selectedPositions = ref<string[]>([]);
const selectedVisible = ref<boolean | null>(null);
const selectedActive = ref<boolean | null>(null);
const filterFn = computed(
  () => (r: Row) =>
    (!selectedPositions.value.length ||
      selectedPositions.value.includes(r.position?.label ?? "")) &&
    (selectedVisible.value === null || r.visible === selectedVisible.value) &&
    (selectedActive.value === null || r.active === selectedActive.value),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="teachers"
    message-prefix="admin.teachers.teachers"
    :id-key
    :row-descriptor
    :columns
    :rows="teachers"
    :filter-fn
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertTeachers"
    :upsert-data="upsertTeachers"
    :update-data="updateTeachers"
    :delete-data="deleteTeachers"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedPositions"
        :options="positionOptions"
        :label="t('admin.teachers.teachers.table.columns.position')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedVisible"
        :options="booleanOptions(t('yes'), t('no'))"
        color="primary"
        :label="t('admin.teachers.teachers.table.columns.visible')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedActive"
        :options="booleanOptions(t('yes'), t('no'))"
        color="primary"
        :label="t('admin.teachers.teachers.table.columns.active')"
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
        v-model="formValues.uid"
        :label="t('admin.teachers.teachers.form.fields.uid')"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="uid" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.firstname"
        :label="t('admin.teachers.teachers.form.fields.firstname')"
        :disable="multipleSelection && !selectedFields.includes('firstname')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="firstname" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.lastname"
        :label="t('admin.teachers.teachers.form.fields.lastname')"
        :disable="multipleSelection && !selectedFields.includes('lastname')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="lastname" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.alias"
        :label="t('admin.teachers.teachers.form.fields.alias')"
        :disable="multipleSelection && !selectedFields.includes('alias')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="alias" />
        </template>
      </QInput>
      <QSelect
        v-model="formValues.position"
        :options="positionOptions"
        :label="t('admin.teachers.teachers.form.fields.position')"
        :disable="multipleSelection && !selectedFields.includes('position')"
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="position" />
        </template>
      </QSelect>
      <QInput
        :model-value="formValues.baseServiceHours"
        type="number"
        :label="t('admin.teachers.teachers.form.fields.baseServiceHours')"
        :disable="
          multipleSelection && !selectedFields.includes('baseServiceHours')
        "
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
      <div class="row">
        <div class="q-mr-md">
          <QCheckbox
            v-if="multipleSelection"
            v-model="selectedFields"
            val="visible"
          />
          <QToggle
            v-model="formValues.visible"
            :label="t('admin.teachers.teachers.form.fields.visible')"
            :disable="multipleSelection && !selectedFields.includes('visible')"
            left-label
          />
        </div>
        <div class="q-mr-md">
          <QCheckbox
            v-if="multipleSelection"
            v-model="selectedFields"
            val="active"
          />
          <QToggle
            v-model="formValues.active"
            :label="t('admin.teachers.teachers.form.fields.active')"
            :disable="multipleSelection && !selectedFields.includes('active')"
            left-label
          />
        </div>
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
