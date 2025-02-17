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
import { NotifyType, notify } from "@/utils/notify.ts";

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
      firstname
      lastname
      alias
      position
      baseServiceHours
      visible
      active
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
      firstname
      lastname
      alias
      position
      baseServiceHours
      visible
      active
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
      message: "Formulaire non valide",
      caption: "Entrez un UID (email)",
    });
    return false;
  }
  if (!teacher.firstname) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Entrez un prénom",
    });
    return false;
  }
  if (!teacher.lastname) {
    notify(NotifyType.ERROR, {
      message: "Formulaire non valide",
      caption: "Entrez un nom",
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
      message: `Intervenant ${String(data.insertTeacherOne.uid)} créé`,
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
      message: `Intervenant ${String(data.updateTeacherByPk.uid)} mis à jour`,
    });
  }
};

const deleteTeacherHandle = async () => {
  if (
    confirm(
      `Are you sure to delete teacher '${selectedUid.value}'?
If services, coordinations, or roles are associated to this teacher, you won't be able to delete it.`,
    )
  ) {
    const { data, error } = await deleteTeacher.executeMutation({
      uid: selectedUid.value,
    });
    if (data?.deleteTeacherByPk?.uid && !error) {
      notify(NotifyType.SUCCESS, {
        message: `Intervenant ${String(data.deleteTeacherByPk.uid)} supprimé`,
      });
    }
    teacherEdit.value = false;
  }
};

const onInsertClick = () => {
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

const onRowClick = (_: unknown, row: AdminTeacherFragment) => {
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
    label: "UID",
    align: "left",
    field: "uid",
    sortable: true,
    searchable: true,
  },
  {
    name: "firstname",
    label: "Prénom",
    align: "left",
    field: "firstname",
    sortable: true,
    searchable: true,
  },
  {
    name: "lastname",
    label: "Nom",
    align: "left",
    field: "lastname",
    sortable: true,
    searchable: true,
  },
  {
    name: "alias",
    label: "Alias",
    align: "left",
    field: (row) => row.alias ?? null,
    sortable: true,
    searchable: true,
  },
  {
    name: "position",
    label: "Fonction",
    align: "left",
    field: (row) => row.position ?? null,
    sortable: true,
    searchable: false,
  },
  {
    name: "base_service_hours",
    label: "S. base",
    field: (row) => row.baseServiceHours ?? null,
    format: (val: number | null) =>
      val === null ? "" : String(val) + " " + t("unit.weighted_hours"),
    sortable: true,
    searchable: false,
  },
  {
    name: "visible",
    label: "V.",
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "active",
    label: "A.",
    field: "active",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];
</script>

<template>
  <div class="q-mb-md">
    <QBtn
      label="Nouvel intervenant"
      color="primary"
      no-caps
      outline
      @click="onInsertClick"
    />
  </div>

  <QTable
    :rows="teachers"
    :columns
    :pagination="{ rowsPerPage: 100 }"
    :rows-per-page-options="[0, 10, 20, 50, 100]"
    row-key="uid"
    bordered
    flat
    dense
    @row-click="onRowClick"
  >
  </QTable>

  <QDialog v-model="teacherEdit" square>
    <QCard flat square>
      <QCardSection>
        <div class="q-gutter-md">
          <QInput v-model="teacher.uid" label="UID (email)" square dense />
          <QInput v-model="teacher.lastname" label="Nom" square dense />
          <QInput v-model="teacher.firstname" label="Prénom" square dense />
          <QInput
            v-model="teacher.alias"
            label="Alias"
            clearable
            clear-icon="sym_s_close"
            square
            dense
          />
          <QSelect
            v-model="teacher.position"
            :options="positions"
            label="Fonction"
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
                label="Service de base (htd)"
                clearable
                clear-icon="sym_s_close"
                square
                dense
              />
            </div>
            <QToggle v-model="teacher.visible" label="Visible" left-label />
            <QToggle v-model="teacher.active" label="Actif" left-label />
          </div>
        </div>
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn
          v-if="teacherUpdate"
          label="Supprimer"
          color="negative"
          flat
          square
          @click="deleteTeacherHandle"
        />
        <QBtn
          :label="teacherInsert ? 'Créer un intervenant' : 'Mettre à jour'"
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
