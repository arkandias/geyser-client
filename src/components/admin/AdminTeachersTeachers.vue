<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminTeacherFragment,
  AdminTeacherFragmentDoc,
  AdminTeacherPositionFragmentDoc,
  DeleteTeacherDocument,
  InsertTeacherDocument,
  InsertTeachersDocument,
  TeacherUpdateColumn,
  UpdateTeacherDocument,
} from "@/gql/graphql.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import type { ParsedObject } from "@/utils/csv-import.ts";
import {
  getField,
  getValueFromLabel,
  normalizeForSearch,
} from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import AdminButtons from "@/components/admin/AdminButtons.vue";
import AdminImport from "@/components/admin/AdminImport.vue";

const { teacherFragments, positionFragments } = defineProps<{
  teacherFragments: FragmentType<typeof AdminTeacherFragmentDoc>[];
  positionFragments: FragmentType<typeof AdminTeacherPositionFragmentDoc>[];
}>();

graphql(`
  fragment AdminTeacher on Teacher {
    uid
    firstname
    lastname
    alias
    position: positionByPosition {
      value
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

  mutation InsertTeacher(
    $uid: String!
    $firstname: String!
    $lastname: String!
    $alias: String
    $position: String
    $baseServiceHours: Float
    $visible: Boolean!
    $active: Boolean!
  ) {
    insertTeacherOne(
      object: {
        uid: $uid
        firstname: $firstname
        lastname: $lastname
        alias: $alias
        position: $position
        baseServiceHours: $baseServiceHours
        visible: $visible
        active: $active
      }
    ) {
      uid
    }
  }

  mutation UpdateTeacher(
    $currentUid: String!
    $uid: String!
    $firstname: String!
    $lastname: String!
    $alias: String
    $position: String
    $baseServiceHours: Float
    $visible: Boolean!
    $active: Boolean!
  ) {
    updateTeacherByPk(
      pkColumns: { uid: $currentUid }
      _set: {
        uid: $uid
        firstname: $firstname
        lastname: $lastname
        alias: $alias
        position: $position
        baseServiceHours: $baseServiceHours
        visible: $visible
        active: $active
      }
    ) {
      uid
    }
  }

  mutation DeleteTeacher($uid: String!) {
    deleteTeacherByPk(uid: $uid) {
      uid
    }
  }

  mutation InsertTeachers(
    $objects: [TeacherInsertInput!]!
    $updateColumns: [TeacherUpdateColumn!]!
  ) {
    insertTeacher(
      objects: $objects
      onConflict: { constraint: teacher_pkey, updateColumns: $updateColumns }
    ) {
      returning {
        uid
      }
    }
  }
`);

const { t } = useI18n();

const insertTeacher = useMutation(InsertTeacherDocument);
const updateTeacher = useMutation(UpdateTeacherDocument);
const deleteTeacher = useMutation(DeleteTeacherDocument);
const insertTeachers = useMutation(InsertTeachersDocument);

const teacherInsert = ref(false);
const teacherUpdate = ref(false);
const teacherEdit = computed({
  get: () => teacherInsert.value || teacherUpdate.value,
  set: (newValue) => {
    if (!newValue) {
      teacherInsert.value = false;
      teacherUpdate.value = false;
    }
  },
});

const selectedUid = ref("");
const teacher = reactive<{
  uid: string;
  firstname: string;
  lastname: string;
  alias: string | null;
  position: string | null;
  baseServiceHours: number | null;
  visible: boolean;
  active: boolean;
}>({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  position: null,
  baseServiceHours: null,
  visible: true,
  active: true,
});

const validateTeacher = () => {
  if (!teacher.uid) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t("admin.teachers.teachers.form.invalid.caption.uid_empty"),
    });
    return false;
  }
  if (!teacher.firstname) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t(
        "admin.teachers.teachers.form.invalid.caption.firstname_empty",
      ),
    });
    return false;
  }
  if (!teacher.lastname) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t("admin.teachers.teachers.form.invalid.caption.lastname_empty"),
    });
    return false;
  }
  if (teacher.baseServiceHours !== null && teacher.baseServiceHours < 0) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t(
        "admin.teachers.teachers.form.invalid.caption.base_service_hours_negative",
      ),
    });
    return false;
  }
  return true;
};

const insertTeacherHandle = async () => {
  if (!validateTeacher()) {
    return;
  }
  const { data, error } = await insertTeacher.executeMutation(teacher);
  teacherEdit.value = false;
  if (data?.insertTeacherOne?.uid && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.teachers.teachers.form.valid.insert", {
        uid: String(data.insertTeacherOne.uid),
      }),
    });
  }
};

const updateTeacherHandle = async () => {
  if (!validateTeacher()) {
    return;
  }
  const { data, error } = await updateTeacher.executeMutation({
    currentUid: selectedUid.value,
    uid: teacher.uid,
    firstname: teacher.firstname,
    lastname: teacher.lastname,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    alias: teacher.alias || null,
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    position: teacher.position || null,
    baseServiceHours: teacher.baseServiceHours,
    visible: teacher.visible,
    active: teacher.active,
  });
  teacherEdit.value = false;
  if (data?.updateTeacherByPk?.uid && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.teachers.teachers.form.valid.update", {
        uid: String(data.updateTeacherByPk.uid),
      }),
    });
  }
};

const deleteTeacherHandle = async () => {
  if (
    confirm(
      t("admin.teachers.teachers.form.confirm.delete", {
        uid: selectedUid.value,
      }),
    )
  ) {
    const { data, error } = await deleteTeacher.executeMutation({
      uid: selectedUid.value,
    });
    if (data?.deleteTeacherByPk?.uid && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("admin.teachers.teachers.form.valid.delete", {
          uid: String(data.deleteTeacherByPk.uid),
        }),
      });
    }
    teacherEdit.value = false;
  }
};

const onCreateClick = () => {
  Object.assign(teacher, {
    uid: "",
    firstname: "",
    lastname: "",
    alias: null,
    position: null,
    baseServiceHours: null,
    visible: true,
    active: true,
  });
  teacherInsert.value = true;
};

const onRowClick = (_: Event, row: AdminTeacherFragment) => {
  selectedUid.value = row.uid;
  Object.assign(teacher, {
    uid: row.uid,
    firstname: row.firstname,
    lastname: row.lastname,
    alias: row.alias,
    position: row.position?.label,
    baseServiceHours: row.baseServiceHours,
    visible: row.visible,
    active: row.active,
  });
  teacherUpdate.value = true;
};

const teachers = computed(() =>
  teacherFragments.map((f) => useFragment(AdminTeacherFragmentDoc, f)),
);

const positions = computed(() =>
  positionFragments.map((f) => useFragment(AdminTeacherPositionFragmentDoc, f)),
);

const columns: ColumnNonAbbreviable<AdminTeacherFragment>[] = [
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
    field: (row) => row.position?.label ?? null,
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

// Search filter
const search = ref<string | null>(null);
const searchableColumns = columns
  .filter((col) => col.searchable)
  .map((col) => col.name);
const filterObj = computed(() => ({
  search: normalizeForSearch(search.value ?? ""),
  searchColumns: columns.filter((col) => searchableColumns.includes(col.name)),
}));
const filterMethod = (
  rows: readonly AdminTeacherFragment[],
  terms: typeof filterObj.value,
): readonly AdminTeacherFragment[] =>
  rows.filter((row) =>
    terms.searchColumns.some((col) =>
      normalizeForSearch(String(getField(row, col.field))).includes(
        terms.search,
      ),
    ),
  );

// Import
const teachersImport = ref(false);
const onImportClick = () => {
  teachersImport.value = true;
};

const descriptorObj = {
  uid: { type: "string" },
  firstname: { type: "string" },
  lastname: { type: "string" },
  alias: { type: "string", nullable: true },
  position: { type: "string", nullable: true },
  baseServiceHours: { type: "number", nullable: true },
  visible: { type: "boolean" },
  active: { type: "boolean" },
} as const;

const insertObjects = async (
  objects: ParsedObject<typeof descriptorObj>[],
  overwrite: boolean,
) => {
  const { data, error } = await insertTeachers.executeMutation({
    // replace position label with corresponding value
    objects: objects.map((obj) => ({
      ...obj,
      position: getValueFromLabel(obj.position, positions.value, false),
    })),
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
  });
  if (data?.insertTeacher?.returning && !error) {
    notify(NotifyType.SUCCESS, {
      message: t(
        "admin.teachers.teachers.import.valid.message",
        data.insertTeacher.returning.length,
      ),
    });
  }
};

// Export
const headers = [
  "uid",
  "firstname",
  "lastname",
  "alias",
  { key: "position.label", label: "position" },
  "baseServiceHours",
  "visible",
  "active",
];
const onExportClick = () => {
  downloadCSV(`teachers_${Date.now().toString()}`, teachers.value, headers, {
    success: t(
      "admin.teachers.teachers.export.valid.message",
      teachers.value.length,
    ),
    error: t("admin.export.invalid.message"),
  });
};
</script>

<template>
  <AdminButtons :on-create-click :on-import-click :on-export-click />

  <QTable
    :rows="teachers"
    :columns
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    row-key="uid"
    bordered
    flat
    dense
    @row-click="onRowClick"
  >
    <template #top>
      <QInput
        v-model="search"
        color="primary"
        placeholder="Recherche"
        clearable
        clear-icon="sym_s_close"
        square
        dense
        style="width: 100%"
      />
    </template>
  </QTable>

  <QDialog v-model="teacherEdit" square>
    <QCard flat square class="admin-form">
      <QCardSection v-if="teacherUpdate" class="text-h6">
        {{ selectedUid }}
      </QCardSection>
      <QCardSection>
        <div class="q-gutter-md">
          <QInput
            v-model="teacher.uid"
            :label="t('admin.teachers.teachers.form.uid')"
            square
            dense
          />
          <QInput
            v-model="teacher.firstname"
            :label="t('admin.teachers.teachers.form.firstname')"
            square
            dense
          />
          <QInput
            v-model="teacher.lastname"
            :label="t('admin.teachers.teachers.form.lastname')"
            square
            dense
          />
          <QInput
            v-model="teacher.alias"
            :label="t('admin.teachers.teachers.form.alias')"
            clearable
            clear-icon="sym_s_close"
            square
            dense
          />
          <QSelect
            v-model="teacher.position"
            :options="positions"
            :label="t('admin.teachers.teachers.form.position')"
            clearable
            clear-icon="sym_s_close"
            emit-value
            map-options
            square
            dense
            options-dense
          />
          <div class="row">
            <div class="q-mr-md">
              <QInput
                v-model.number="teacher.baseServiceHours"
                type="number"
                :label="t('admin.teachers.teachers.form.base_service_hours')"
                clearable
                clear-icon="sym_s_close"
                square
                dense
                style="width: 150px"
              />
            </div>
            <QToggle
              v-model="teacher.visible"
              :label="t('admin.teachers.teachers.form.visible')"
              left-label
            />
            <QToggle
              v-model="teacher.active"
              :label="t('admin.teachers.teachers.form.active')"
              left-label
            />
          </div>
        </div>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          v-if="teacherUpdate"
          :label="t('admin.teachers.teachers.form.delete')"
          color="negative"
          flat
          square
          @click="deleteTeacherHandle"
        />
        <QBtn
          :label="
            teacherInsert
              ? t('admin.teachers.teachers.form.insert')
              : t('admin.teachers.teachers.form.update')
          "
          color="positive"
          flat
          square
          @click="teacherInsert ? insertTeacherHandle() : updateTeacherHandle()"
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <AdminImport v-model="teachersImport" :descriptor-obj :insert-objects />
</template>

<style scoped lang="scss"></style>
