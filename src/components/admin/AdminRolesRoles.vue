<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminRoleFragment,
  AdminRoleFragmentDoc,
  AdminRolesTeacherFragmentDoc,
  DeleteRolesDocument,
  InsertRolesDocument,
  RoleConstraint,
  type RoleInsertInput,
  type RoleTypeEnum,
  RoleUpdateColumn,
  UpdateRolesDocument,
  UpsertRolesDocument,
} from "@/gql/graphql.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminRoleFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = RoleInsertInput;

const { roleType, roleFragments, teacherFragments } = defineProps<{
  roleType: RoleTypeEnum;
  roleFragments: FragmentType<typeof AdminRoleFragmentDoc>[];
  teacherFragments: FragmentType<typeof AdminRolesTeacherFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "id";
const rowDescriptor = {
  uid: { type: "string" },
  comment: { type: "string", nullable: true },
} as const satisfies RowDescriptorExtra<Row>;

graphql(`
  fragment AdminRole on Role {
    id
    uid
    type
    comment
  }

  fragment AdminRolesTeacher on Teacher {
    uid
    displayname
  }

  mutation InsertRoles($objects: [RoleInsertInput!]!) {
    insertData: insertRole(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertRoles(
    $objects: [RoleInsertInput!]!
    $onConflict: RoleOnConflict
  ) {
    upsertData: insertRole(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateRoles($ids: [Int!]!, $changes: RoleSetInput!) {
    updateData: updateRole(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteRoles($ids: [Int!]!) {
    deleteData: deleteRole(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const roles = computed(() =>
  roleFragments
    .map((f) => useFragment(AdminRoleFragmentDoc, f))
    .filter((role) => role.type === roleType),
);
const teachers = computed(() =>
  teacherFragments.map((f) => useFragment(AdminRolesTeacherFragmentDoc, f)),
);
const insertServices = useMutation(InsertRolesDocument);
const upsertServices = useMutation(UpsertRolesDocument);
const updateServices = useMutation(UpdateRolesDocument);
const deleteServices = useMutation(DeleteRolesDocument);

const importConstraint = RoleConstraint.RoleUidTypeKey;
const importUpdateColumns = [
  RoleUpdateColumn.Uid,
  RoleUpdateColumn.Type,
  RoleUpdateColumn.Comment,
];

const formatRow = (row: Row) => `${t(`role.${roleType}`)} — ${row.uid}`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = { type: roleType };

  if (flatRow.uid !== undefined) {
    object.uid = flatRow.uid;
  }

  if (flatRow.comment !== undefined) {
    object.comment = flatRow.comment;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

const teacherOptions = computed(() =>
  teachers.value.map((t) => ({ value: t.uid, label: t.displayname })),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="roles"
    :name="roleType.toLowerCase()"
    :id-key
    :row-descriptor
    :rows="roles"
    :format-row
    :validate-flat-row
    :insert-data="insertServices"
    :upsert-data="upsertServices"
    :update-data="updateServices"
    :delete-data="deleteServices"
    :import-constraint
    :import-update-columns
  >
    <template #form="{ multipleSelection }">
      <QSelect
        v-model="formValues.uid"
        :options="teacherOptions"
        :label="t(`admin.roles.${roleType.toLowerCase()}.column.uid`)"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        clearable
        clear-icon="sym_s_close"
        emit-value
        map-options
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="uid" />
        </template>
      </QSelect>
      <QInput
        :model-value="formValues.comment"
        :label="t(`admin.roles.${roleType.toLowerCase()}.column.comment`)"
        :disable="multipleSelection && !selectedFields.includes('comment')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="comment" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
