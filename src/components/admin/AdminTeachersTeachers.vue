<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, reactive, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminTeacherFragment,
  AdminTeacherFragmentDoc,
  AdminTeacherPositionFragmentDoc,
  DeleteTeachersDocument,
  InsertTeachersDocument,
  TeacherUpdateColumn,
  UpdateTeachersDocument,
} from "@/gql/graphql.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import type { ParsedObject } from "@/utils/csv-import.ts";
import {
  getField,
  getValueFromLabel,
  normalizeForSearch,
} from "@/utils/misc.ts";
import { NotifyType, notify, notifyOperationResult } from "@/utils/notify.ts";

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

  mutation UpdateTeachers($uids: [String!]!, $changes: TeacherSetInput!) {
    updateTeacher(where: { uid: { _in: $uids } }, _set: $changes) {
      affectedRows
      returning {
        uid
      }
    }
  }

  mutation DeleteTeachers($uids: [String!]!) {
    deleteTeacher(where: { uid: { _in: $uids } }) {
      affectedRows
      returning {
        uid
      }
    }
  }
`);

const { t } = useCustomI18n();

const insertTeachers = useMutation(InsertTeachersDocument);
const updateTeachers = useMutation(UpdateTeachersDocument);
const deleteTeachers = useMutation(DeleteTeachersDocument);

const teachers = computed(() =>
  teacherFragments.map((f) => useFragment(AdminTeacherFragmentDoc, f)),
);
const positions = computed(() =>
  positionFragments.map((f) => useFragment(AdminTeacherPositionFragmentDoc, f)),
);

const selectedTeachers = ref<AdminTeacherFragment[]>([]);
const selection = computed<boolean>(() => !!selectedTeachers.value.length);
const singleSelection = computed<boolean>(
  () => selectedTeachers.value.length === 1,
);
const multipleSelection = computed<boolean>(
  () => selectedTeachers.value.length > 1,
);

const isFormOpen = ref(false);
const formTitle = computed(() => {
  switch (selectedTeachers.value.length) {
    case 0:
      return t("admin.teachers.teachers.form.title.new_teacher");
    case 1:
      return selectedTeachers.value[0]?.uid ?? "";
    default:
      return t("admin.teachers.teachers.form.title.teachers_selected", {
        count: selectedTeachers.value.length,
      });
  }
});

const formValues = reactive<{
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

const formValidated = computed<typeof formValues>(() => ({
  ...formValues,
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  alias: formValues.alias || null,
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  position: formValues.position || null,
}));

const selectedFields = ref<string[]>([]);
const selectedFormValidated = computed<Partial<typeof formValidated.value>>(
  () =>
    Object.fromEntries(
      Object.entries(formValidated.value).filter(([key]) =>
        selectedFields.value.includes(key),
      ),
    ),
);

watch(isFormOpen, (value) => {
  if (value) {
    const row = selectedTeachers.value[0];
    formValues.uid = row?.uid ?? "";
    formValues.firstname = row?.firstname ?? "";
    formValues.lastname = row?.lastname ?? "";
    formValues.alias = row?.alias ?? null;
    formValues.position = row?.position?.label ?? null;
    formValues.baseServiceHours = row?.baseServiceHours ?? null;
    formValues.visible = row?.visible ?? true;
    formValues.active = row?.active ?? true;
    selectedFields.value = [];
  }
});

const openForm = (rows?: AdminTeacherFragment[]) => {
  if (rows) {
    selectedTeachers.value = rows;
  }
  isFormOpen.value = true;
};

const validateForm = () => {
  if (!formValues.uid) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t("admin.teachers.teachers.form.invalid.caption.uid_empty"),
    });
    return false;
  }
  if (
    !selection.value &&
    teachers.value.some((t) => t.uid === formValues.uid)
  ) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t("admin.teachers.teachers.form.invalid.caption.uid_conflict"),
    });
    return false;
  }
  if (!formValues.firstname) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t(
        "admin.teachers.teachers.form.invalid.caption.firstname_empty",
      ),
    });
    return false;
  }
  if (!formValues.lastname) {
    notify(NotifyType.ERROR, {
      message: t("admin.teachers.teachers.form.invalid.message"),
      caption: t("admin.teachers.teachers.form.invalid.caption.lastname_empty"),
    });
    return false;
  }
  return true;
};

const insertTeachersHandle = async () => {
  if (!validateForm()) {
    return;
  }

  const { data, error } = await insertTeachers.executeMutation({
    objects: [formValues],
    updateColumns: [],
  });

  if (data?.insertTeacher?.returning[0]?.uid && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("admin.teachers.teachers.form.valid.insert.single", {
        uid: data.insertTeacher.returning[0].uid,
      }),
    });
  }

  if (error) {
    return;
  }

  notifyOperationResult(data?.insertTeacher?.affectedRows, {
    error: t("notify.error.unknown_error"),
    none: t("admin.teachers.teachers.form.valid.insert.none"),
    single: t("admin.teachers.teachers.form.valid.insert.single", {
      uid: data?.insertTeacher?.returning[0]?.uid ?? "",
    }),
    multiple: t("admin.teachers.teachers.form.valid.insert.multiple", {
      count: data?.insertTeacher?.affectedRows,
    }),
  });

  isFormOpen.value = false;
};

const updateTeachersHandle = async () => {
  if (!validateForm()) {
    return;
  }

  const { data, error } = await updateTeachers.executeMutation({
    uids: selectedTeachers.value.map((t) => t.uid),
    changes: singleSelection.value
      ? formValidated.value
      : selectedFormValidated.value,
  });

  if (error) {
    return;
  }

  notifyOperationResult(data?.updateTeacher?.affectedRows, {
    error: t("notify.error.unknown_error"),
    none: t("admin.teachers.teachers.form.valid.update.none"),
    single: t("admin.teachers.teachers.form.valid.update.single", {
      uid: data?.updateTeacher?.returning[0]?.uid ?? "",
    }),
    multiple: t("admin.teachers.teachers.form.valid.update.multiple", {
      count: data?.updateTeacher?.affectedRows,
    }),
  });

  isFormOpen.value = false;
};

const deleteTeachersHandle = async () => {
  if (
    !selection.value ||
    !confirm(
      singleSelection.value
        ? t("admin.teachers.teachers.form.confirm.delete.single", {
            uid: selectedTeachers.value[0]?.uid ?? "",
          })
        : t("admin.teachers.teachers.form.confirm.delete.multiple", {
            count: selectedTeachers.value.length,
          }),
    )
  ) {
    return;
  }

  const { data, error } = await deleteTeachers.executeMutation({
    uids: selectedTeachers.value.map((t) => t.uid),
  });

  if (error) {
    return;
  }

  notifyOperationResult(data?.deleteTeacher?.affectedRows, {
    error: t("notify.error.unknown_error"),
    none: t("admin.teachers.teachers.form.valid.delete.none"),
    single: t("admin.teachers.teachers.form.valid.delete.single", {
      uid: data?.deleteTeacher?.returning[0]?.uid ?? "",
    }),
    multiple: t("admin.teachers.teachers.form.valid.delete.multiple", {
      count: data?.deleteTeacher?.affectedRows,
    }),
  });

  selectedTeachers.value = [];
  isFormOpen.value = false;
};

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
const isImportFormOpen = ref(false);
const importTeachersHandle = () => {
  isImportFormOpen.value = true;
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
const exportTeachersHandle = () => {
  const data = selectedTeachers.value.length
    ? selectedTeachers.value
    : teachers.value;
  downloadCSV(`teachers_${Date.now().toString()}`, data, headers, {
    success: t("admin.teachers.teachers.export.valid.message", data.length),
    error: t("admin.export.invalid.message"),
  });
};
</script>

<template>
  <AdminButtons
    :on-create-click="() => openForm([])"
    :on-edit-click="() => openForm()"
    :on-delete-click="deleteTeachersHandle"
    :on-import-click="importTeachersHandle"
    :on-export-click="exportTeachersHandle"
    :selection
  />

  <QTable
    v-model:selected="selectedTeachers"
    :rows="teachers"
    :columns
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    :filter="filterObj"
    :filter-method
    row-key="uid"
    selection="multiple"
    bordered
    flat
    dense
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

  <QDialog v-model="isFormOpen" square>
    <QCard flat square class="admin-form">
      <QCardSection v-if="isFormOpen" class="text-h6">
        {{ formTitle }}
      </QCardSection>
      <QCardSection>
        <QForm
          id="teacher-form"
          class="q-gutter-md"
          @submit="selection ? updateTeachersHandle() : insertTeachersHandle()"
        >
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
            :options="positions"
            :label="t('admin.teachers.teachers.form.position')"
            :disable="multipleSelection && !selectedFields.includes('position')"
            clearable
            clear-icon="sym_s_close"
            emit-value
            map-options
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
                  multipleSelection &&
                  !selectedFields.includes('baseServiceHours')
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
                :disable="
                  multipleSelection && !selectedFields.includes('visible')
                "
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
                :disable="
                  multipleSelection && !selectedFields.includes('active')
                "
                :label="t('admin.teachers.teachers.form.active')"
                left-label
              />
            </div>
          </div>
        </QForm>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          form="teacher-form"
          type="submit"
          :label="
            selection ? t('admin.buttons.update') : t('admin.buttons.create')
          "
          color="primary"
          flat
          square
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <AdminImport v-model="isImportFormOpen" :descriptor-obj :insert-objects />
</template>

<style scoped lang="scss"></style>
