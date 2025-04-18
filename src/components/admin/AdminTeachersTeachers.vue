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
  type TeacherInsertInput,
  TeacherUpdateColumn,
  UpdateTeachersDocument,
  UpsertTeachersDocument,
} from "@/gql/graphql.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { booleanOptions, inputToNumber, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminTeacherFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = TeacherInsertInput;

const { teacherFragments, positionFragments } = defineProps<{
  teacherFragments: FragmentType<typeof AdminTeacherFragmentDoc>[];
  positionFragments: FragmentType<typeof AdminTeachersPositionFragmentDoc>[];
}>();

const { t } = useCustomI18n();

const idKey: keyof Row = "uid";
const rowDescriptor = {
  uid: { type: "string" },
  firstname: { type: "string" },
  lastname: { type: "string" },
  alias: { type: "string", nullable: true },
  position: {
    type: "string",
    nullable: true,
    field: (row) => row.position?.label,
  },
  baseServiceHours: {
    type: "number",
    nullable: true,
    numberFormat: "decimalFixed",
  },
  visible: { type: "boolean" },
  active: { type: "boolean" },
} as const satisfies RowDescriptorExtra<Row>;

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

const importConstraint = TeacherConstraint.TeacherPkey;
const importUpdateColumns = [
  TeacherUpdateColumn.Uid,
  TeacherUpdateColumn.Firstname,
  TeacherUpdateColumn.Lastname,
  TeacherUpdateColumn.Alias,
  TeacherUpdateColumn.PositionId,
  TeacherUpdateColumn.BaseServiceHours,
  TeacherUpdateColumn.Visible,
  TeacherUpdateColumn.Active,
];

const formatRow = (row: Row) => row.uid;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.uid !== undefined) {
    object.uid = flatRow.uid;
  }

  if (flatRow.firstname !== undefined) {
    object.firstname = flatRow.firstname;
  }

  if (flatRow.lastname !== undefined) {
    object.lastname = flatRow.lastname;
  }

  if (flatRow.alias !== undefined) {
    object.alias = flatRow.alias;
  }

  if (flatRow.position !== undefined) {
    object.positionId = flatRow.position
      ? positions.value.find((p) => p.label === flatRow.position)?.id
      : null;
    if (object.positionId === undefined) {
      throw new Error(
        t("admin.teachers.teachers.form.error.positionNotFound", flatRow),
      );
    }
  }

  if (flatRow.baseServiceHours !== undefined) {
    if (flatRow.baseServiceHours !== null && flatRow.baseServiceHours < 0) {
      throw new Error(
        t("admin.teachers.teachers.form.error.baseServiceHoursNegative"),
      );
    }
    object.baseServiceHours = flatRow.baseServiceHours;
  }

  if (flatRow.visible !== undefined) {
    object.visible = flatRow.visible;
  }

  if (flatRow.active !== undefined) {
    object.active = flatRow.active;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

// Options
const positionOptions = computed(() => positions.value.map((p) => p.label));

// Filters
const positionFilter = ref<string[]>([]);
const visibleFilter = ref<boolean | null>(null);
const activeFilter = ref<boolean | null>(null);
const filterFn = computed(
  () => (row: Row) =>
    (!positionFilter.value.length ||
      positionFilter.value.includes(row.position?.label ?? "")) &&
    (visibleFilter.value === null || row.visible === visibleFilter.value) &&
    (activeFilter.value === null || row.active === activeFilter.value),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="teachers"
    name="teachers"
    :id-key
    :row-descriptor
    :rows="teachers"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertTeachers"
    :upsert-data="upsertTeachers"
    :update-data="updateTeachers"
    :delete-data="deleteTeachers"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="positionFilter"
        :options="positionOptions"
        :label="t('admin.teachers.teachers.column.position.label')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="visibleFilter"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.teachers.teachers.column.visible.label')"
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
        v-model="activeFilter"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.teachers.teachers.column.active.label')"
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
        :label="t('admin.teachers.teachers.column.uid.label')"
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
        :label="t('admin.teachers.teachers.column.firstname.label')"
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
        :label="t('admin.teachers.teachers.column.lastname.label')"
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
        :label="t('admin.teachers.teachers.column.alias.label')"
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
        :label="t('admin.teachers.teachers.column.position.label')"
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
        :label="t('admin.teachers.teachers.column.baseServiceHours.label')"
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
            :label="t('admin.teachers.teachers.column.visible.label')"
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
            :label="t('admin.teachers.teachers.column.active.label')"
            :disable="multipleSelection && !selectedFields.includes('active')"
            left-label
          />
        </div>
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
