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
  type ServiceModificationInsertInput,
  ServiceModificationUpdateColumn,
  UpdateServiceModificationsDocument,
  UpsertServiceModificationsDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { NullableParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { inputToNumber, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminServiceModificationFragment;
type FlatRow = NullableParsedRow<typeof rowDescriptor>;
type InsertInput = ServiceModificationInsertInput;

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

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey: keyof Row = "id";
const rowDescriptor = {
  year: { type: "number", field: (row) => row.service.year },
  uid: { type: "string" },
  type: { type: "string", field: (row) => row.type.label },
  hours: { type: "number", numberFormat: "decimalFixed" },
} as const satisfies RowDescriptorExtra<Row>;

graphql(`
  fragment AdminServiceModification on ServiceModification {
    id
    service {
      year
      uid
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

const importConstraint = ServiceModificationConstraint.ServiceModificationPkey;
const importUpdateColumns = [
  ServiceModificationUpdateColumn.ServiceId,
  ServiceModificationUpdateColumn.TypeId,
  ServiceModificationUpdateColumn.Hours,
];

const formatRow = (row: Row): string =>
  `${row.service.year} — ${row.service.uid} — ${row.type.label}`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  // serviceId
  if (flatRow.year !== undefined || flatRow.uid !== undefined) {
    if (flatRow.uid === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.updateYearWithoutTeacher",
        ),
      );
    }
    if (flatRow.year === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.updateTeacherWithoutYear",
        ),
      );
    }
    object.serviceId = services.value.find(
      (s) => s.year === flatRow.year && s.uid === flatRow.uid,
    )?.id;
    if (object.serviceId === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.serviceNotFound",
          flatRow,
        ),
      );
    }
  }

  // typeId
  if (flatRow.type !== undefined) {
    object.typeId = serviceModificationTypes.value.find(
      (smt) => smt.label === flatRow.type,
    )?.id;
    if (object.typeId === undefined) {
      throw new Error(
        t(
          "admin.teachers.serviceModifications.form.error.typeNotFound",
          flatRow,
        ),
      );
    }
  }

  if (flatRow.hours !== undefined) {
    if (flatRow.hours === null || flatRow.hours < 0) {
      throw new Error(
        t("admin.teachers.serviceModifications.form.error.hoursNegative"),
      );
    }
    object.hours = flatRow.hours;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

// Options
const yearOptions = computed(() => years.value.map((y) => y.value));
const teacherOptions = computed(() =>
  teachers.value.map((t) => ({ value: t.uid, label: t.displayname })),
);
const typeOptions = computed(() =>
  serviceModificationTypes.value.map((smt) => smt.label),
);

// Filters
const selectedYears = ref<number[]>([]);
const selectedUids = ref<string[]>([]);
const selectedTypes = ref<string[]>([]);
const filterFn = computed(
  () => (row: Row) =>
    (!selectedYears.value.length ||
      selectedYears.value.includes(row.service.year)) &&
    (!selectedUids.value.length ||
      selectedUids.value.includes(row.service.uid)) &&
    (!selectedTypes.value.length ||
      selectedTypes.value.includes(row.type.label)),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="teachers"
    name="serviceModifications"
    :id-key
    :row-descriptor
    :rows="serviceModifications"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertServiceModifications"
    :upsert-data="upsertServiceModifications"
    :update-data="updateServiceModifications"
    :delete-data="deleteServiceModifications"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="yearOptions"
        :label="t('admin.teachers.serviceModifications.column.year.label')"
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
        :label="t('admin.teachers.serviceModifications.column.teacher.label')"
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
        :options="typeOptions"
        :label="t('admin.teachers.serviceModifications.column.type.label')"
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
        :label="t('admin.teachers.serviceModifications.column.year.label')"
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
        :label="t('admin.teachers.serviceModifications.column.uid.label')"
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
        :options="typeOptions"
        :label="t('admin.teachers.serviceModifications.column.type.label')"
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
        :label="t('admin.teachers.serviceModifications.column.hours.label')"
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
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
