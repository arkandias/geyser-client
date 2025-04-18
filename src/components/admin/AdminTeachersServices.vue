<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminServiceFragment,
  AdminServiceFragmentDoc,
  AdminServicesTeacherFragmentDoc,
  DeleteServicesDocument,
  InsertServicesDocument,
  ServiceConstraint,
  type ServiceInsertInput,
  ServiceUpdateColumn,
  UpdateServicesDocument,
  UpsertServicesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { inputToNumber, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminServiceFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = ServiceInsertInput;

const { serviceFragments, teacherFragments } = defineProps<{
  serviceFragments: FragmentType<typeof AdminServiceFragmentDoc>[];
  teacherFragments: FragmentType<typeof AdminServicesTeacherFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey: keyof Row = "id";
const rowDescriptor = {
  year: { type: "number" },
  uid: { type: "string" },
  hours: { type: "number", numberFormat: "decimalFixed" },
  message: {
    type: "string",
    nullable: true,
    format: (val: string) => (val ? "✓" : "✗"),
  },
} as const satisfies RowDescriptorExtra<Row>;

graphql(`
  fragment AdminService on Service {
    id
    year
    uid
    hours
    message
  }

  fragment AdminServicesTeacher on Teacher {
    uid
    displayname
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
  teacherFragments.map((f) => useFragment(AdminServicesTeacherFragmentDoc, f)),
);
const insertServices = useMutation(InsertServicesDocument);
const upsertServices = useMutation(UpsertServicesDocument);
const updateServices = useMutation(UpdateServicesDocument);
const deleteServices = useMutation(DeleteServicesDocument);

const importConstraint = ServiceConstraint.ServiceYearUidKey;
const importUpdateColumns = [
  ServiceUpdateColumn.Year,
  ServiceUpdateColumn.Uid,
  ServiceUpdateColumn.Hours,
  ServiceUpdateColumn.Message,
];

const formatRow = (row: Row): string => `${row.year} — ${row.uid}`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.year !== undefined) {
    object.year = flatRow.year;
  }

  if (flatRow.uid !== undefined) {
    object.uid = flatRow.uid;
  }

  if (flatRow.hours !== undefined) {
    if (flatRow.hours === null || flatRow.hours < 0) {
      throw new Error(t("admin.teachers.services.form.error.hoursNegative"));
    }
    object.hours = flatRow.hours;
  }

  if (flatRow.message !== undefined) {
    object.message = flatRow.message;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

// Options
const yearOptions = computed(() => years.value.map((y) => y.value));
const uidOptions = computed(() =>
  teachers.value.map((t) => ({ value: t.uid, label: t.displayname })),
);

// Filters
const yearFilter = ref<number[]>([]);
const uidFilter = ref<string[]>([]);
const filterFn = computed(
  () => (row: Row) =>
    (!yearFilter.value.length || yearFilter.value.includes(row.year)) &&
    (!uidFilter.value.length || uidFilter.value.includes(row.uid)),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="teachers"
    name="services"
    :id-key
    :row-descriptor
    :rows="services"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertServices"
    :upsert-data="upsertServices"
    :update-data="updateServices"
    :delete-data="deleteServices"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="yearFilter"
        :options="yearOptions"
        :label="t('admin.teachers.services.column.year.label')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="uidFilter"
        :options="uidOptions"
        :label="t('admin.teachers.services.column.uid.label')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
    </template>
    <template #form="{ multipleSelection }">
      <QSelect
        v-model="formValues.year"
        :options="yearOptions"
        :label="t('admin.teachers.services.column.year.label')"
        :disable="multipleSelection && !selectedFields.includes('year')"
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
        :options="uidOptions"
        :label="t('admin.teachers.services.column.uid.label')"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="uid" />
        </template>
      </QSelect>
      <QInput
        :model-value="formValues.hours"
        type="number"
        :label="t('admin.teachers.services.column.hours.label')"
        :disable="multipleSelection && !selectedFields.includes('hours')"
        square
        dense
        @update:model-value="
          (value) => (formValues.hours = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="hours" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.message"
        :label="t('admin.teachers.services.column.message.label')"
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
