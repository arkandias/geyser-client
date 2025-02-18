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
  UpdateTeacherDocument,
} from "@/gql/graphql.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import type { ColumnNonAbbreviable } from "@/types/column.ts";
import { getField, normalizeForSearch } from "@/utils/misc.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

import AdminButtons from "@/components/admin/AdminButtons.vue";

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
    position
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
`);

const { t } = useI18n<I18nOptions>();

const insertTeacher = useMutation(InsertTeacherDocument);
const updateTeacher = useMutation(UpdateTeacherDocument);
const deleteTeacher = useMutation(DeleteTeacherDocument);

const teacherInsert = ref(false);
const teacherUpdate = ref(false);
const teacherEdit = computed({
  get: () => teacherInsert.value || teacherUpdate.value,
  set: (val) => {
    if (!val) {
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

const onImportClick = () => {
  void 0;
};

const onExportClick = () => {
  void 0;
};

const onRowClick = (_: Event, row: AdminTeacherFragment) => {
  selectedUid.value = row.uid;
  Object.assign(teacher, {
    uid: row.uid,
    firstname: row.firstname,
    lastname: row.lastname,
    alias: row.alias,
    position: row.position,
    baseServiceHours: row.baseServiceHours,
    visible: row.visible,
    active: row.active,
  });
  teacherUpdate.value = true;
};

const teachers = computed(() =>
  teacherFragments.map((fragment) =>
    useFragment(AdminTeacherFragmentDoc, fragment),
  ),
);

const positions = computed(() =>
  positionFragments.map((fragment) =>
    useFragment(AdminTeacherPositionFragmentDoc, fragment),
  ),
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
</template>

<style scoped lang="scss"></style>
