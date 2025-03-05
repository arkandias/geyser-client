<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminServiceFragment,
  AdminServiceFragmentDoc,
  AdminServiceTeacherFragmentDoc,
  DeleteServicesDocument,
  InsertServicesDocument,
  ServiceConstraint,
  ServiceUpdateColumn,
  UpdateServicesDocument,
  UpsertServicesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { inputToNumber, nullRow } from "@/utils/admin-data.ts";
import { formatUser, nf } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { teacherFragments, serviceFragments } = defineProps<{
  serviceFragments: FragmentType<typeof AdminServiceFragmentDoc>[];
  teacherFragments: FragmentType<typeof AdminServiceTeacherFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey = "id";
const rowDescriptor = {
  year: { type: "number" },
  uid: { type: "string" },
  hours: { type: "number" },
  message: { type: "string", nullable: true },
} as const;

type Row = AdminServiceFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  year?: number | null;
  uid?: string | null;
  hours?: number | null;
  message?: string | null;
};

graphql(`
  fragment AdminService on Service {
    id
    year
    uid
    hours
    message
  }

  fragment AdminServiceTeacher on Teacher {
    uid
    firstname
    lastname
    alias
  }

  mutation InsertServices($objects: [ServiceInsertInput!]!) {
    insertData: insertService(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertServices(
    $objects: [ServiceInsertInput!]!
    $onConflict: ServiceOnConflict
  ) {
    upsertData: insertService(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateServices($ids: [Int!]!, $changes: ServiceSetInput!) {
    updateData: updateService(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteServices($ids: [Int!]!) {
    deleteData: deleteService(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const services = computed(() =>
  serviceFragments.map((f) => useFragment(AdminServiceFragmentDoc, f)),
);
const teachers = computed(() =>
  teacherFragments.map((f) => useFragment(AdminServiceTeacherFragmentDoc, f)),
);
const insertServices = useMutation(InsertServicesDocument);
const upsertServices = useMutation(UpsertServicesDocument);
const updateServices = useMutation(UpdateServicesDocument);
const deleteServices = useMutation(DeleteServicesDocument);

const constraint = ServiceConstraint.ServiceYearUidKey;
const updateColumns = [ServiceUpdateColumn.Hours, ServiceUpdateColumn.Message];

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
    label: t("admin.teachers.services.table.columns.year"),
    align: "left",
    field: "year",
    sortable: true,
    searchable: true,
  },
  {
    name: "uid",
    label: t("admin.teachers.services.table.columns.uid"),
    align: "left",
    field: "uid",
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
  {
    name: "message",
    label: t("admin.teachers.services.table.columns.message"),
    align: "left",
    field: "message",
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row): string =>
  `${row.year.toString()} — ${getUser(row.uid)}`;

const initForm = (rows: Row[]): FormValues =>
  rows.length === 1 ? { ...rows[0] } : nullRow(rowDescriptor);

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
  checkConflicts: boolean,
): Partial<InsertInput> {
  const object: Partial<InsertInput> = {};

  if (importRow.year !== undefined) {
    object.year = importRow.year;
  }

  if (importRow.uid !== undefined) {
    object.uid = importRow.uid;
  }

  if (
    checkConflicts &&
    services.value.find((s) => s.year === object.year && s.uid === object.uid)
  ) {
    throw new Error(t("admin.teachers.services.form.error.conflictYearUid"));
  }

  if (importRow.hours !== undefined) {
    object.hours = importRow.hours;
    if (object.hours < 0) {
      throw new Error(
        t("admin.teachers.positions.form.error.baseServiceHoursNegative"),
      );
    }
  }

  if (importRow.message !== undefined) {
    object.message = importRow.message;
  }

  return object;
}

const selectedYears = ref<number[]>([]);
const selectedUids = ref<string[]>([]);
const filteredServices = computed(() =>
  services.value.filter(
    (s) =>
      (!selectedYears.value.length || selectedYears.value.includes(s.year)) &&
      (!selectedUids.value.length || selectedUids.value.includes(s.uid)),
  ),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="services"
    message-prefix="admin.teachers.services"
    :id-key
    :row-descriptor
    :columns
    :rows="filteredServices"
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertServices"
    :upsert-data="upsertServices"
    :update-data="updateServices"
    :delete-data="deleteServices"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="years.map((y) => y.value)"
        color="primary"
        :label="t('admin.teachers.services.table.columns.year')"
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
        :label="t('admin.teachers.services.table.columns.uid')"
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
    </template>
    <template #form="{ multipleSelection }">
      <QSelect
        v-if="!multipleSelection"
        v-model="formValues.year"
        :options="years.map((y) => y.value)"
        :label="t('admin.teachers.services.form.fields.year')"
        :disable="multipleSelection && !selectedFields.includes('year')"
        square
        dense
        options-dense
      />
      <QSelect
        v-if="!multipleSelection"
        v-model="formValues.uid"
        :options="teachers.map((t) => ({ value: t.uid, label: formatUser(t) }))"
        :label="t('admin.teachers.services.form.fields.uid')"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        emit-value
        map-options
        square
        dense
        options-dense
      />
      <QInput
        :model-value="formValues.hours"
        type="number"
        :label="t('admin.teachers.services.form.fields.hours')"
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
      <QInput
        v-model="formValues.message"
        :label="t('admin.teachers.services.form.fields.message')"
        :disable="multipleSelection && !selectedFields.includes('message')"
        autogrow
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="message" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
