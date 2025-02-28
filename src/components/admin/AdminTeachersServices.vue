<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminServiceFragmentDoc,
  AdminServiceTeacherFragmentDoc,
  DeleteServicesDocument,
  InsertServicesDocument,
  ServiceConstraint,
  ServiceUpdateColumn,
  UpdateServicesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";
import type { ParsedRow } from "@/types/admin-data.ts";
import type { ColumnNonAbbreviable } from "@/types/columns.ts";
import { initForm } from "@/utils/admin-data.ts";
import { formatUser } from "@/utils/format.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { teacherFragments, serviceFragments } = defineProps<{
  serviceFragments: FragmentType<typeof AdminServiceFragmentDoc>[];
  teacherFragments: FragmentType<typeof AdminServiceTeacherFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const rowDescriptor = {
  id: { type: "number" },
  year: { type: "number" },
  uid: { type: "string" },
  hours: { type: "number" },
  message: { type: "string", nullable: true },
} as const;

const exportFields = ["year", "uid", "hours", "message"];

type Row = ParsedRow<typeof rowDescriptor>;
type IdKey = "id";
type Id = Row[IdKey];
type DataObj = {
  year: number;
  uid: string;
  hours: number;
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

  mutation InsertServices(
    $objects: [ServiceInsertInput!]!
    $onConflict: ServiceOnConflict
  ) {
    insertService(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateServices($ids: [Int!]!, $changes: ServiceSetInput!) {
    updateService(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteServices($ids: [Int!]!) {
    deleteService(where: { id: { _in: $ids } }) {
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
const updateServices = useMutation(UpdateServicesDocument);
const deleteServices = useMutation(DeleteServicesDocument);

const rows = computed<Row[]>(() =>
  services.value.map((s) => ({
    id: s.id,
    year: s.year,
    uid: s.uid,
    hours: s.hours,
    message: s.message ?? null,
  })),
);

const formValues = ref<Row>(initForm(rowDescriptor));
const selectedFields = ref<string[]>([]);

const getUser = (uid: string): string => {
  const teacher = teachers.value.find((t) => t.uid === uid);
  if (teacher) {
    return formatUser(teacher);
  }
  return uid;
};

const columns: ColumnNonAbbreviable<Row>[] = [
  {
    name: "year",
    label: t("admin.teachers.services.table.year"),
    align: "left",
    field: "year",
    sortable: true,
    searchable: true,
  },
  {
    name: "uid",
    label: t("admin.teachers.services.table.uid"),
    align: "left",
    field: (row) => row.uid,
    format: (val: string) => getUser(val),
    sortable: true,
    searchable: true,
  },
  {
    name: "hours",
    label: t("admin.teachers.services.table.hours"),
    field: (row) => row.hours,
    format: (val: number | null) =>
      val === null ? "" : String(val) + " " + t("unit.weighted_hours"),
    sortable: true,
    searchable: false,
  },
  {
    name: "message",
    label: t("admin.teachers.services.table.message"),
    align: "left",
    field: (row) => row.message,
    format: (val: string | null) =>
      val === null ? "" : val.length <= 40 ? val : val.slice(0, 37) + "...",
    sortable: true,
    searchable: false,
  },
];

const getLabel = (row: Row): string =>
  `(${getUser(row.uid)},${row.year.toString()})`;

function getData(row: Row): DataObj;
function getData(row: Row, fields: string[]): Partial<DataObj>;
function getData(row: Row, fields?: string[]): DataObj | Partial<DataObj> {
  if (!row.year) {
    throw new Error(t("admin.teachers.services.form.error.year_empty"));
  }
  if (!row.uid) {
    throw new Error(t("admin.teachers.services.form.error.year_empty"));
  }

  const dataObj: DataObj = {
    year: row.year,
    uid: row.uid,
    hours: row.hours,
  };

  if (fields) {
    return Object.fromEntries(
      Object.entries(dataObj).filter(([key]) => fields.includes(key)),
    ) as Partial<DataObj>;
  }

  return dataObj;
}

const insertData = (objects: DataObj[], overwrite?: boolean) =>
  insertServices
    .executeMutation({
      objects,
      onConflict: {
        constraint: ServiceConstraint.ServiceYearUidKey,
        updateColumns: overwrite ? [ServiceUpdateColumn.Hours] : [],
      },
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.insertService?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const updateData = (ids: Id[], changes: Partial<DataObj>) =>
  updateServices
    .executeMutation({
      ids,
      changes,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.updateService?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));

const deleteData = (ids: Id[]) =>
  deleteServices
    .executeMutation({
      ids,
    })
    .then((result) => ({
      data: result.data
        ? {
            returning: result.data.deleteService?.returning ?? null,
          }
        : null,
      error: result.error ?? null,
    }));
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="services"
    message-prefix="admin.teachers.services"
    id-key="id"
    :row-descriptor
    :rows
    :columns
    :get-label
    :get-data
    :insert-data
    :update-data
    :delete-data
    :export-fields
  >
    <template #form="{ multipleSelection }">
      <QSelect
        v-model="formValues.year"
        :options="years.map((y) => y.value)"
        :label="t('admin.teachers.services.form.year')"
        :disable="multipleSelection && !selectedFields.includes('year')"
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="year" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.uid"
        :options="teachers.map((t) => ({ value: t.uid, label: formatUser(t) }))"
        :label="t('admin.teachers.services.form.uid')"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="uid" />
        </template>
      </QSelect>
      <QInput
        v-model.number="formValues.hours"
        type="number"
        :label="t('admin.teachers.services.form.hours')"
        :disable="multipleSelection && !selectedFields.includes('hours')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="hours" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.message"
        :label="t('admin.teachers.services.form.message')"
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
