<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminTeacherFragmentDoc,
  AdminTeacherPositionFragmentDoc,
  DeleteTeachersDocument,
  InsertTeachersDocument,
  TeacherConstraint,
  TeacherUpdateColumn,
  UpdateTeachersDocument,
  UpsertTeachersDocument,
} from "@/gql/graphql.ts";
import type {
  NullableParsedRow,
  ParsedRow,
  VisibleParsedRow,
} from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm, inputToNumber } from "@/utils/admin-data.ts";
import { nf } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { teacherFragments, positionFragments } = defineProps<{
  teacherFragments: FragmentType<typeof AdminTeacherFragmentDoc>[];
  positionFragments: FragmentType<typeof AdminTeacherPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

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
const idKey = "uid";

type T = typeof rowDescriptor;
type Row = ParsedRow<T>;
type FormData = NullableParsedRow<T>;
type OperationData = VisibleParsedRow<T>;

graphql(`
  fragment AdminTeacher on Teacher {
    uid
    firstname
    lastname
    alias
    position {
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

  mutation UpdateTeachers($uids: [String!]!, $changes: TeacherSetInput!) {
    updateData: updateTeacher(where: { uid: { _in: $uids } }, _set: $changes) {
      returning {
        uid
      }
    }
  }

  mutation DeleteTeachers($uids: [String!]!) {
    deleteData: deleteTeacher(where: { uid: { _in: $uids } }) {
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

const rows = computed<Row[]>(() =>
  teachers.value.map((t) => ({
    uid: t.uid,
    firstname: t.firstname,
    lastname: t.lastname,
    alias: t.alias ?? null,
    position: t.position?.label ?? null,
    baseServiceHours: t.baseServiceHours ?? null,
    visible: t.visible,
    active: t.active,
  })),
);

const formValues = ref<FormData>(initForm(rowDescriptor));
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
    field: "position",
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

const getLabel = (row: Row): string => row.uid;

function getObject(row: Row): DataObj;
function getObject(row: Row, fields: string[]): Partial<DataObj>;
function getObject(row: Row, fields?: string[]): DataObj | Partial<DataObj> {
  if (!row.uid) {
    throw new Error(t("admin.teachers.teachers.form.error.uidEmpty"));
  }
  if (!row.firstname) {
    throw new Error(t("admin.teachers.teachers.form.error.firstnameEmpty"));
  }
  if (!row.lastname) {
    throw new Error(t("admin.teachers.teachers.form.error.lastnameEmpty"));
  }

  const dataObj: DataObj = {
    uid: row.uid,
    firstname: row.firstname,
    lastname: row.lastname,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    alias: row.alias || null,
    position:
      positions.value.find((p) => p.label === row.position)?.value ?? null,
    baseServiceHours: row.baseServiceHours,
    visible: row.visible,
    active: row.active,
  };

  if (fields) {
    return Object.fromEntries(
      Object.entries(dataObj).filter(([key]) => fields.includes(key)),
    ) as Partial<DataObj>;
  }

  return dataObj;
}

const insertData = (objects: DataObj[], overwrite?: boolean) =>
  insertTeachers
    .executeMutation({
      objects,
      onConflict: {
        constraint: TeacherConstraint.TeacherPkey,
        updateColumns: overwrite
          ? [
              TeacherUpdateColumn.Firstname,
              TeacherUpdateColumn.Lastname,
              TeacherUpdateColumn.Alias,
              TeacherUpdateColumn.Position,
              TeacherUpdateColumn.BaseServiceHours,
              TeacherUpdateColumn.Visible,
              TeacherUpdateColumn.Active,
            ]
          : [],
      },
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.insertTeacher?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const updateData = (uids: Id[], changes: Partial<DataObj>) =>
  updateTeachers
    .executeMutation({
      uids,
      changes,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.updateTeacher?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const deleteData = (uids: Id[]) =>
  deleteTeachers
    .executeMutation({
      uids,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.deleteTeacher?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="teachers"
    message-prefix="admin.teachers.teachers"
    id-key="uid"
    :row-descriptor
    :rows
    :columns
    :init-values
    :get-label
    :get-object
    :insert-data
    :update-data
    :delete-data
  >
    <template #form="{ multipleSelection }">
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.uid"
        :label="t('admin.teachers.teachers.form.uid')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.firstname"
        :label="t('admin.teachers.teachers.form.firstname')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.lastname"
        :label="t('admin.teachers.teachers.form.lastname')"
        square
        dense
      />
      <QInput
        v-if="!multipleSelection"
        v-model="formValues.alias"
        :label="t('admin.teachers.teachers.form.alias')"
        square
        dense
      />
      <QSelect
        v-model="formValues.position"
        :options="positions.map((p) => p.label)"
        :label="t('admin.teachers.teachers.form.position')"
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
            v-model.number="formValues.baseServiceHours"
            type="number"
            :label="t('admin.teachers.teachers.form.baseServiceHours')"
            :disable="
              multipleSelection && !selectedFields.includes('baseServiceHours')
            "
            square
            dense
            style="width: 150px"
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
            :label="t('admin.teachers.teachers.form.visible')"
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
            :label="t('admin.teachers.teachers.form.active')"
            left-label
          />
        </div>
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
