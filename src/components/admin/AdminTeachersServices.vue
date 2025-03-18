<script setup lang="ts">
import { useMutation } from "villus";
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
  ServiceUpdateColumn,
  UpdateServicesDocument,
  UpsertServicesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { inputToNumber } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { teacherFragments, serviceFragments } = defineProps<{
  serviceFragments: FragmentType<typeof AdminServiceFragmentDoc>[];
  teacherFragments: FragmentType<typeof AdminServicesTeacherFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();
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
  serviceId?: number | null;
  hours?: number | null;
  message?: string | null;
};

graphql(`
  fragment AdminService on Service {
    id
    year
    uid
    teacher {
      displayname
    }
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
const insertServices = useMutation(InsertServicesDocument, {
  refetchTags: ["Service"],
});
const upsertServices = useMutation(UpsertServicesDocument, {
  refetchTags: ["Service"],
});
const updateServices = useMutation(UpdateServicesDocument, {
  refetchTags: ["Service"],
});
const deleteServices = useMutation(DeleteServicesDocument, {
  refetchTags: ["Service"],
});

const constraint = ServiceConstraint.ServiceYearUidKey;
const updateColumns = [
  ServiceUpdateColumn.Year,
  ServiceUpdateColumn.Uid,
  ServiceUpdateColumn.Hours,
  ServiceUpdateColumn.Message,
];

const columns: Column<Row>[] = [
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
    sortable: true,
    searchable: true,
  },
  {
    name: "hours",
    label: t("admin.teachers.services.table.columns.hours"),
    field: "hours",
    format: (val: number | null) =>
      val === null ? null : n(val, "decimalFixed"),
    sortable: true,
    searchable: false,
  },
  {
    name: "message",
    label: t("admin.teachers.services.table.columns.message"),
    align: "center",
    field: "message",
    format: (val: string) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row): string =>
  `${row.year} — ${row.teacher.displayname}`;

const initForm = (rows: Row[]): FormValues => ({
  year: rows[0]?.year ?? null,
  uid: rows[0]?.uid ?? null,
  hours: rows[0]?.hours ?? null,
  message: rows[0]?.message ?? null,
});

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

  if (importRow.year !== undefined || importRow.uid !== undefined) {
    if (importRow.uid === undefined) {
      throw new Error(
        t("admin.teachers.service.form.error.updateYearWithoutUid"),
      );
    }

    if (importRow.year === undefined) {
      throw new Error(
        t("admin.teachers.service.form.error.updateUidWithoutYear"),
      );
    }

    object.serviceId = services.value.find(
      (s) => s.year === importRow.year && s.uid === importRow.uid,
    )?.id;

    if (object.serviceId === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.serviceNotFound",
          importRow,
        ),
      );
    }

    if (checkConflicts) {
      throw new Error(
        t("admin.teachers.services.form.error.conflictYearUid", importRow),
      );
    }
  }

  if (importRow.hours !== undefined) {
    if (importRow.hours < 0) {
      throw new Error(t("admin.teachers.positions.form.error.hoursNegative"));
    }
    object.hours = importRow.hours;
  }

  if (importRow.message !== undefined) {
    object.message = importRow.message;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

const teacherOptions = computed(() =>
  teachers.value.map((t) => ({ value: t.uid, label: t.displayname })),
);

// Filters
const selectedYears = ref<number[]>([]);
const selectedUids = ref<string[]>([]);
const filterFn = computed(
  () => (r: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(r.year)) &&
    (!selectedUids.value.length || selectedUids.value.includes(r.uid)),
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
    :rows="services"
    :filter-fn
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
        :label="t('admin.teachers.services.table.columns.year')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedUids"
        :options="teacherOptions"
        :label="t('admin.teachers.services.table.columns.uid')"
        emit-value
        map-options
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
        :options="years.map((y) => y.value)"
        :label="t('admin.teachers.services.form.fields.year')"
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
        :options="teacherOptions"
        :label="t('admin.teachers.services.form.fields.uid')"
        :disable="multipleSelection && !selectedFields.includes('uid')"
        emit-value
        map-options
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
        :label="t('admin.teachers.services.form.fields.hours')"
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
