<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminServiceModificationFragment,
  AdminServiceModificationFragmentDoc,
  AdminServiceModificationServiceFragmentDoc,
  AdminServiceModificationServiceModificationTypeFragmentDoc,
  AdminServiceTeacherFragmentDoc,
  DeleteServiceModificationsDocument,
  InsertServiceModificationsDocument,
  ServiceModificationConstraint,
  ServiceModificationUpdateColumn,
  UpdateServiceModificationsDocument,
  UpsertServiceModificationsDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { inputToNumber, nullRow } from "@/utils/admin-data.ts";
import { formatUser, nf } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const {
  serviceFragments,
  serviceModificationFragments,
  serviceModificationTypeFragments,
  teacherFragments,
} = defineProps<{
  serviceFragments: FragmentType<
    typeof AdminServiceModificationServiceFragmentDoc
  >[];
  serviceModificationFragments: FragmentType<
    typeof AdminServiceModificationFragmentDoc
  >[];
  serviceModificationTypeFragments: FragmentType<
    typeof AdminServiceModificationServiceModificationTypeFragmentDoc
  >[];
  teacherFragments: FragmentType<typeof AdminServiceTeacherFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey = "id";
const rowDescriptor = {
  year: { type: "number" },
  uid: { type: "string" },
  type: { type: "string" },
  hours: { type: "number" },
} as const;

type Row = AdminServiceModificationFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  serviceId?: number | null;
  typeId?: number | null;
  hours?: number | null;
};

graphql(`
  fragment AdminServiceModification on ServiceModification {
    id
    service {
      id
      year
      uid
    }
    type {
      id
      label
    }
    hours
  }

  fragment AdminServiceModificationServiceModificationType on ServiceModificationType {
    id
    label
  }

  fragment AdminServiceModificationService on Service {
    id
    year
    uid
  }

  fragment AdminServiceModificationTeacher on Teacher {
    uid
    firstname
    lastname
    alias
  }

  mutation InsertServiceModifications(
    $objects: [ServiceModificationInsertInput!]!
  ) {
    insertData: insertServiceModification(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertServiceModifications(
    $objects: [ServiceModificationInsertInput!]!
    $onConflict: ServiceModificationOnConflict
  ) {
    upsertData: insertServiceModification(
      objects: $objects
      onConflict: $onConflict
    ) {
      returning {
        id
      }
    }
  }

  mutation UpdateServiceModifications(
    $ids: [Int!]!
    $changes: ServiceModificationSetInput!
  ) {
    updateData: updateServiceModification(
      where: { id: { _in: $ids } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }

  mutation DeleteServiceModifications($ids: [Int!]!) {
    deleteData: deleteServiceModification(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const services = computed(() =>
  serviceFragments.map((f) =>
    useFragment(AdminServiceModificationServiceFragmentDoc, f),
  ),
);
const serviceModifications = computed(() =>
  serviceModificationFragments.map((f) =>
    useFragment(AdminServiceModificationFragmentDoc, f),
  ),
);
const serviceModificationTypes = computed(() =>
  serviceModificationTypeFragments.map((f) =>
    useFragment(AdminServiceModificationServiceModificationTypeFragmentDoc, f),
  ),
);
const teachers = computed(() =>
  teacherFragments.map((f) => useFragment(AdminServiceTeacherFragmentDoc, f)),
);
const insertServiceModifications = useMutation(
  InsertServiceModificationsDocument,
);
const upsertServiceModifications = useMutation(
  UpsertServiceModificationsDocument,
);
const updateServiceModifications = useMutation(
  UpdateServiceModificationsDocument,
);
const deleteServiceModifications = useMutation(
  DeleteServiceModificationsDocument,
);

const constraint = ServiceModificationConstraint.ServiceModificationPkey;
const updateColumns = [
  ServiceModificationUpdateColumn.TypeId,
  ServiceModificationUpdateColumn.Hours,
];

const formValues = ref<FormValues>(nullRow(rowDescriptor));
const selectedFields = ref<string[]>([]);

const getUser = (uid: string) => {
  const teacher = teachers.value.find((t) => t.uid === uid);
  if (teacher) {
    return formatUser(teacher);
  }
  return uid;
};

const updateHours = (value: string | number | null) => {
  formValues.value.hours = inputToNumber(value);
};

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "year",
    label: t("admin.teachers.serviceModifications.table.columns.year"),
    align: "left",
    field: (row) => row.service.year,
    sortable: true,
    searchable: true,
  },
  {
    name: "uid",
    label: t("admin.teachers.serviceModifications.table.columns.uid"),
    align: "left",
    field: (row) => row.service.uid,
    format: (val: string) => getUser(val),
    sortable: true,
    searchable: true,
  },
  {
    name: "type",
    label: t("admin.teachers.serviceModifications.table.columns.type"),
    align: "left",
    field: (row) => row.type.label,
    format: (val: string) => getUser(val),
    sortable: true,
    searchable: true,
  },
  {
    name: "hours",
    label: t("admin.teachers.services.table.columns.hours"),
    field: "hours",
    format: (val: number | null) => (val === null ? null : nf.format(val)),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row): string =>
  `${row.service.year.toString()} — ${getUser(row.service.uid)} — ${row.type.label}`;

const initForm = (rows: Row[]): FormValues =>
  rows.length === 1
    ? {
        year: rows[0]?.service.year,
        uid: rows[0]?.service.uid,
        type: rows[0]?.type.label,
        hours: rows[0]?.hours,
      }
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
): Partial<InsertInput> {
  const object: Partial<InsertInput> = {};

  if (importRow.year !== undefined || importRow.uid !== undefined) {
    if (importRow.uid === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.updateYearWithoutUid",
        ),
      );
    }
    if (importRow.year === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.updateUidWithoutYear",
        ),
      );
    }
    object.serviceId = services.value.find(
      (s) => s.year === importRow.year && s.uid === importRow.uid,
    )?.id;
    if (object.serviceId === undefined) {
      throw new Error(
        t("admin.teachers.serviceModifications.form.error.serviceNotFound"),
      );
    }
  }

  if (importRow.type !== undefined) {
    object.typeId = serviceModificationTypes.value.find(
      (smt) => smt.label === importRow.type,
    )?.id;
    if (object.typeId === undefined) {
      throw new Error(
        t("admin.teachers.serviceModifications.form.error.typeNotFound"),
      );
    }
  }

  if (importRow.hours !== undefined) {
    object.hours = importRow.hours;
  }

  return object;
}

const selectedYears = ref<number[]>([]);
const selectedUids = ref<string[]>([]);
const selectedTypes = ref<string[]>([]);
const filteredServiceModifications = computed(() =>
  serviceModifications.value.filter(
    (sm) =>
      (!selectedYears.value.length ||
        selectedYears.value.includes(sm.service.year)) &&
      (!selectedUids.value.length ||
        selectedUids.value.includes(sm.service.uid)) &&
      (!selectedTypes.value.length ||
        selectedTypes.value.includes(sm.type.label)),
  ),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="serviceModifications"
    message-prefix="admin.teachers.serviceModifications"
    :id-key
    :row-descriptor
    :columns
    :rows="filteredServiceModifications"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertServiceModifications"
    :upsert-data="upsertServiceModifications"
    :update-data="updateServiceModifications"
    :delete-data="deleteServiceModifications"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="years.map((y) => y.value)"
        color="primary"
        :label="t('admin.teachers.serviceModifications.table.columns.year')"
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
      <QSelect
        v-model="selectedUids"
        :options="teachers.map((t) => ({ value: t.uid, label: formatUser(t) }))"
        color="primary"
        :label="t('admin.teachers.serviceModifications.table.columns.uid')"
        emit-value
        map-options
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
            {{ scope.opt.label }}
          </QChip>
        </template>
      </QSelect>
      <QSelect
        v-model="selectedTypes"
        :options="serviceModificationTypes.map((smt) => smt.label)"
        color="primary"
        :label="t('admin.teachers.serviceModifications.table.columns.type')"
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
      <QSelect
        v-if="!multipleSelection"
        v-model="formValues.year"
        :options="years.map((y) => y.value)"
        :label="t('admin.teachers.serviceModifications.form.fields.year')"
        :disable="multipleSelection && !selectedFields.includes('year')"
        square
        dense
        options-dense
      />
      <QSelect
        v-if="!multipleSelection"
        v-model="formValues.uid"
        :options="teachers.map((t) => ({ value: t.uid, label: formatUser(t) }))"
        :label="t('admin.teachers.serviceModifications.form.fields.uid')"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        emit-value
        map-options
        square
        dense
        options-dense
      />
      <QSelect
        v-model="formValues.type"
        :options="serviceModificationTypes.map((smt) => smt.label)"
        :label="t('admin.teachers.serviceModifications.form.fields.type')"
        :disable="multipleSelection && !selectedFields.includes('type')"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="type" />
        </template>
      </QSelect>
      <QInput
        :model-value="formValues.hours"
        type="number"
        :label="t('admin.teachers.serviceModifications.form.fields.hours')"
        :disable="multipleSelection && !selectedFields.includes('hours')"
        :suffix="t('unit.weightedHours')"
        square
        dense
        @update:model-value="updateHours"
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="hours" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
