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
  TeacherUpdateColumn,
  UpdateTeachersDocument,
} from "@/gql/graphql.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import type { ParsedRow } from "@/types/csv-data.ts";

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

type Row = ParsedRow<typeof rowDescriptor>;
type Id = string;
type DataObj = {
  uid: string;
  firstname: string;
  lastname: string;
  alias: string | null;
  position: string | null;
  baseServiceHours: number | null;
  visible: boolean;
  active: boolean;
};

graphql(`
  fragment AdminTeacher on Teacher {
    uid
    firstname
    lastname
    alias
    position: positionByPosition {
      label
    }
    baseServiceHours
    visible
    active
  }

  fragment AdminTeacherPosition on Position {
    value
    label
  }

  mutation InsertTeachers(
    $objects: [TeacherInsertInput!]!
    $updateColumns: [TeacherUpdateColumn!]!
  ) {
    insertTeacher(
      objects: $objects
      onConflict: { constraint: teacher_pkey, updateColumns: $updateColumns }
    ) {
      affectedRows
      returning {
        uid
      }
    }
  }

  mutation UpdateTeachers($ids: [String!]!, $changes: TeacherSetInput!) {
    updateTeacher(where: { uid: { _in: $ids } }, _set: $changes) {
      affectedRows
      returning {
        uid
      }
    }
  }

  mutation DeleteTeachers($ids: [String!]!) {
    deleteTeacher(where: { uid: { _in: $ids } }) {
      affectedRows
      returning {
        uid
      }
    }
  }
`);

const insertTeachers = useMutation(InsertTeachersDocument);
const updateTeachers = useMutation(UpdateTeachersDocument);
const deleteTeachers = useMutation(DeleteTeachersDocument);

const teachers = computed(() =>
  teacherFragments.map((f) => {
    const fragment = useFragment(AdminTeacherFragmentDoc, f);
    return {
      uid: fragment.uid,
      firstname: fragment.firstname,
      lastname: fragment.lastname,
      alias: fragment.alias ?? null,
      position: fragment.position?.label ?? null,
      baseServiceHours: fragment.baseServiceHours ?? null,
      visible: fragment.visible,
      active: fragment.active,
    };
  }),
);

const positions = computed(() =>
  positionFragments.map((f) => useFragment(AdminTeacherPositionFragmentDoc, f)),
);

const initForm = (selectedRows?: Row[]): Row => ({
  uid: selectedRows?.[0]?.uid ?? "",
  firstname: selectedRows?.[0]?.firstname ?? "",
  lastname: selectedRows?.[0]?.lastname ?? "",
  alias: selectedRows?.[0]?.alias ?? null,
  position: selectedRows?.[0]?.position ?? null,
  baseServiceHours: selectedRows?.[0]?.baseServiceHours ?? null,
  visible: selectedRows?.[0]?.visible ?? true,
  active: selectedRows?.[0]?.active ?? true,
});
const formValues = ref(initForm());
const selectedFields = ref<string[]>([]);

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "uid",
    label: t("admin.teachers.teachers.table.uid"),
    align: "left",
    field: "uid",
    sortable: true,
    searchable: true,
  },
  {
    name: "firstname",
    label: t("admin.teachers.teachers.table.firstname"),
    align: "left",
    field: "firstname",
    sortable: true,
    searchable: true,
  },
  {
    name: "lastname",
    label: t("admin.teachers.teachers.table.lastname"),
    align: "left",
    field: "lastname",
    sortable: true,
    searchable: true,
  },
  {
    name: "alias",
    label: t("admin.teachers.teachers.table.alias"),
    align: "left",
    field: (row) => row.alias ?? null,
    sortable: true,
    searchable: true,
  },
  {
    name: "position",
    label: t("admin.teachers.teachers.table.position"),
    align: "left",
    field: (row) => row.position ?? null,
    sortable: true,
    searchable: false,
  },
  {
    name: "base_service_hours",
    label: t("admin.teachers.teachers.table.base_service_hours"),
    field: (row) => row.baseServiceHours ?? null,
    format: (val: number | null) =>
      val === null ? "" : String(val) + " " + t("unit.weighted_hours"),
    sortable: true,
    searchable: false,
  },
  {
    name: "visible",
    label: t("admin.teachers.teachers.table.visible"),
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "active",
    label: t("admin.teachers.teachers.table.active"),
    field: "active",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const getId = (row: Row): Id => row.uid;
const getLabel = (row: Row): string => row.uid;
function getObject(row: Row): DataObj;
function getObject(row: Row, fields: string[]): Partial<DataObj>;
function getObject(row: Row, fields?: string[]): DataObj | Partial<DataObj> {
  const dataObj: DataObj = {
    uid: row.uid,
    firstname: row.firstname,
    lastname: row.lastname,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    alias: row.alias || null,
    position:
      positions.value.find((p) => p.label === row.position)?.value ?? null,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    baseServiceHours: row.baseServiceHours || null,
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
    })
    .then((result) => result.data?.insertTeacher?.affectedRows ?? null);

const updateData = (ids: Id[], changes: Partial<DataObj>) =>
  updateTeachers
    .executeMutation({
      ids,
      changes,
    })
    .then((result) => result.data?.updateTeacher?.affectedRows ?? null);

const deleteData = (ids: Id[]) =>
  deleteTeachers
    .executeMutation({
      ids,
    })
    .then((result) => result.data?.deleteTeacher?.affectedRows ?? null);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="teachers"
    message-prefix="admin.teachers.teachers"
    :row-descriptor
    :columns
    :rows="teachers"
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
            :label="t('admin.teachers.teachers.form.base_service_hours')"
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
