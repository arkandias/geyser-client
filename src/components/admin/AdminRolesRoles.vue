<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed } from "vue";

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
import type { NullableParsedRow, RowDescriptorExtra } from "@/types/data.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminRoleFragment;
type FlatRow = NullableParsedRow<typeof rowDescriptor>;
type InsertInput = RoleInsertInput;

const { roleType, roleFragments, teacherFragments } = defineProps<{
  roleType: RoleTypeEnum;
  roleFragments: FragmentType<typeof AdminRoleFragmentDoc>[];
  teacherFragments: FragmentType<typeof AdminRolesTeacherFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "id";
const rowDescriptor = {
  uid: {
    type: "string",
    format: (val: string) =>
      teachers.value.find((t) => t.uid === val)?.displayname,
    formType: "select",
  },
  comment: {
    type: "string",
    nullable: true,
    formType: "input",
  },
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

const formOptions = computed(() => ({
  uid: teachers.value.map((t) => ({ value: t.uid, label: t.displayname })),
}));
</script>

<template>
  <AdminData
    section="roles"
    :name="roleType.toLowerCase()"
    :id-key
    :row-descriptor
    :rows="roles"
    :format-row
    :validate-flat-row
    :form-options
    :insert-data="insertServices"
    :upsert-data="upsertServices"
    :update-data="updateServices"
    :delete-data="deleteServices"
    :import-constraint
    :import-update-columns
  />
</template>

<style scoped lang="scss"></style>
