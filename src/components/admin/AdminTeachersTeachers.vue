<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminTeacherFragment,
  AdminTeacherFragmentDoc,
  AdminTeacherPositionFragmentDoc,
  DeleteTeachersDocument,
  InsertTeachersDocument,
  TeacherConstraint,
  TeacherUpdateColumn,
  UpdateTeachersDocument,
  UpsertTeachersDocument,
} from "@/gql/graphql.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { inputToNumber, nullRow } from "@/utils/admin-data.ts";
import { nf } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { teacherFragments, positionFragments } = defineProps<{
  teacherFragments: FragmentType<typeof AdminTeacherFragmentDoc>[];
  positionFragments: FragmentType<typeof AdminTeacherPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

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

  fragment AdminTeacherPosition on Position {
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
  positionFragments.map((f) => useFragment(AdminTeacherPositionFragmentDoc, f)),
);
const insertTeachers = useMutation(InsertTeachersDocument);
const upsertTeachers = useMutation(UpsertTeachersDocument);
const updateTeachers = useMutation(UpdateTeachersDocument);
const deleteTeachers = useMutation(DeleteTeachersDocument);

const constraint = TeacherConstraint.TeacherPkey;
const updateColumns = [
  TeacherUpdateColumn.Firstname,
  TeacherUpdateColumn.Lastname,
  TeacherUpdateColumn.Alias,
  TeacherUpdateColumn.PositionId,
  TeacherUpdateColumn.BaseServiceHours,
  TeacherUpdateColumn.Visible,
  TeacherUpdateColumn.Active,
];

const formValues = ref<FormValues>(nullRow(rowDescriptor));
const selectedFields = ref<string[]>([]);

const updateBaseServiceHours = (value: string | number | null) => {
  formValues.value.baseServiceHours = inputToNumber(value);
};

const columns: ColumnNonAbbreviable<Row>[] = [
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
    format: (val: number | null) => (val === null ? null : nf.format(val)),
    sortable: true,
    searchable: false,
  },
  {
    name: "visible",
    label: t("admin.teachers.teachers.table.columns.visible"),
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "active",
    label: t("admin.teachers.teachers.table.columns.active"),
    field: "active",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) => row.uid;

const initForm = (rows: Row[]): FormValues =>
  rows.length === 1
    ? { ...rows[0], position: rows[0]?.position?.label ?? null }
    : nullRow(rowDescriptor);

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

  if (importRow.uid !== undefined) {
    object.uid = importRow.uid;
    if (checkConflicts && teachers.value.find((t) => t.uid === object.uid)) {
      throw new Error(t("admin.teachers.teachers.form.error.conflictEmail"));
    }
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
      throw new Error(t("admin.teachers.teachers.form.error.positionNotFound"));
    }
  }

  if (importRow.baseServiceHours !== undefined) {
    object.baseServiceHours = importRow.baseServiceHours;
    if (object.baseServiceHours !== null && object.baseServiceHours < 0) {
      throw new Error(
        t("admin.teachers.teachers.form.error.baseServiceHoursNegative"),
      );
    }
  }

  if (importRow.visible !== undefined) {
    object.visible = importRow.visible;
  }

  if (importRow.active !== undefined) {
    object.active = importRow.active;
  }

  return object;
}

const selectedPositions = ref<string[]>([]);
const filteredTeachers = computed(() =>
  selectedPositions.value.length
    ? teachers.value.filter((t) =>
        selectedPositions.value.includes(t.position?.label ?? ""),
      )
    : teachers.value,
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
    :rows="filteredTeachers"
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
        :options="positions.map((p) => p.label)"
        color="primary"
        :label="t('admin.teachers.teachers.table.columns.position')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      >
        <!-- this slot to use dense QChip -->
        <template #selected-item="scope">
          <QChip
            :tabindex="scope.tabindex"
            class="q-ma-none"
            color="grey3"
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
          >
            {{ scope.opt }}
          </QChip>
        </template>
      </QSelect>
    </template>
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.uid"
        :label="t('admin.teachers.teachers.form.fields.uid')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.firstname"
        :label="t('admin.teachers.teachers.form.fields.firstname')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.lastname"
        :label="t('admin.teachers.teachers.form.fields.lastname')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.alias"
        :label="t('admin.teachers.teachers.form.fields.alias')"
        square
        dense
      />
      <QSelect
        v-model="formValues.position"
        :options="positions.map((p) => p.label)"
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
      <div class="row">
        <div class="q-mr-md">
          <QInput
            :model-value="formValues.baseServiceHours"
            type="number"
            :label="t('admin.teachers.teachers.form.fields.baseServiceHours')"
            :disable="
              multipleSelection && !selectedFields.includes('baseServiceHours')
            "
            :suffix="t('unit.weightedHours')"
            square
            dense
            style="width: 150px"
            @update:model-value="updateBaseServiceHours"
          >
            <template v-if="multipleSelection" #before>
              <QCheckbox v-model="selectedFields" val="baseServiceHours" />
            </template>
          </QInput>
        </div>
        <div class="q-mr-md">
          <QCheckbox
            v-if="multipleSelection"
            v-model="selectedFields"
            val="visible"
          />
          <QToggle
            v-model="formValues.visible"
            :disable="multipleSelection && !selectedFields.includes('visible')"
            :label="t('admin.teachers.teachers.form.fields.visible')"
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
            :disable="multipleSelection && !selectedFields.includes('active')"
            :label="t('admin.teachers.teachers.form.fields.active')"
            left-label
          />
        </div>
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
