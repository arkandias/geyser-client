<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminServiceModificationFragment,
  AdminServiceModificationFragmentDoc,
  AdminServiceModificationsServiceFragmentDoc,
  AdminServiceModificationsServiceModificationTypeFragmentDoc,
  AdminServiceModificationsTeacherFragmentDoc,
  DeleteServiceModificationsDocument,
  InsertServiceModificationsDocument,
  ServiceModificationConstraint,
  ServiceModificationUpdateColumn,
  UpdateServiceModificationsDocument,
  UpsertServiceModificationsDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { inputToNumber } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const {
  serviceFragments,
  serviceModificationFragments,
  serviceModificationTypeFragments,
  teacherFragments,
} = defineProps<{
  serviceFragments: FragmentType<
    typeof AdminServiceModificationsServiceFragmentDoc
  >[];
  serviceModificationFragments: FragmentType<
    typeof AdminServiceModificationFragmentDoc
  >[];
  serviceModificationTypeFragments: FragmentType<
    typeof AdminServiceModificationsServiceModificationTypeFragmentDoc
  >[];
  teacherFragments: FragmentType<
    typeof AdminServiceModificationsTeacherFragmentDoc
  >[];
}>();

const { t, n } = useCustomI18n();
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
      teacher {
        displayname
      }
    }
    type {
      id
      label
    }
    hours
  }

  fragment AdminServiceModificationsServiceModificationType on ServiceModificationType {
    id
    label
  }

  fragment AdminServiceModificationsService on Service {
    id
    year
    uid
  }

  fragment AdminServiceModificationsTeacher on Teacher {
    uid
    displayname
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
    useFragment(AdminServiceModificationsServiceFragmentDoc, f),
  ),
);
const serviceModifications = computed(() =>
  serviceModificationFragments.map((f) =>
    useFragment(AdminServiceModificationFragmentDoc, f),
  ),
);
const serviceModificationTypes = computed(() =>
  serviceModificationTypeFragments.map((f) =>
    useFragment(AdminServiceModificationsServiceModificationTypeFragmentDoc, f),
  ),
);
const teachers = computed(() =>
  teacherFragments.map((f) =>
    useFragment(AdminServiceModificationsTeacherFragmentDoc, f),
  ),
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
  ServiceModificationUpdateColumn.ServiceId,
  ServiceModificationUpdateColumn.TypeId,
  ServiceModificationUpdateColumn.Hours,
];

const columns: Column<Row>[] = [
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
    sortable: true,
    searchable: true,
  },
  {
    name: "type",
    label: t("admin.teachers.serviceModifications.table.columns.type"),
    align: "left",
    field: (row) => row.type.label,
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
];

const formatRow = (row: Row): string =>
  `${row.service.year} — ${row.service.teacher.displayname} — ${row.type.label}`;

const initForm = (rows: Row[]): FormValues => ({
  year: rows[0]?.service.year ?? null,
  uid: rows[0]?.service.uid ?? null,
  type: rows[0]?.type.label ?? null,
  hours: rows[0]?.hours ?? null,
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
        t(
          "admin.teachers.serviceModifications.form.error.serviceNotFound",
          importRow,
        ),
      );
    }
  }

  if (importRow.type !== undefined) {
    object.typeId = serviceModificationTypes.value.find(
      (smt) => smt.label === importRow.type,
    )?.id;
    if (object.typeId === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.typeNotFound",
          importRow,
        ),
      );
    }
  }

  if (importRow.hours !== undefined) {
    object.hours = importRow.hours;
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
        :label="t('admin.teachers.serviceModifications.table.columns.year')"
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
        :label="t('admin.teachers.serviceModifications.table.columns.uid')"
        emit-value
        map-options
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedTypes"
        :options="serviceModificationTypes.map((smt) => smt.label)"
        :label="t('admin.teachers.serviceModifications.table.columns.type')"
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
        :label="t('admin.teachers.serviceModifications.form.fields.year')"
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
        :label="t('admin.teachers.serviceModifications.form.fields.uid')"
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
        @update:model-value="
          (value) => (formValues.hours = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="hours" />
        </template>
      </QInput>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
