<script setup lang="ts">
import { useMutation } from "villus";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminRequestFragment,
  AdminRequestFragmentDoc,
  AdminRequestsCourseFragmentDoc,
  AdminRequestsServiceFragmentDoc,
  DeleteRequestsDocument,
  InsertRequestsDocument,
  RequestConstraint,
  RequestUpdateColumn,
  UpdateRequestsDocument,
  UpsertRequestsDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { Column } from "@/types/column.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/data.ts";
import { compare, inputToNumber, unique, uniqueValue } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { requestFragments, serviceFragments, courseFragments } = defineProps<{
  requestFragments: FragmentType<typeof AdminRequestFragmentDoc>[];
  serviceFragments: FragmentType<typeof AdminRequestsServiceFragmentDoc>[];
  courseFragments: FragmentType<typeof AdminRequestsCourseFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();
const { years } = useYearsStore();

const idKey = "id";
const rowDescriptor = {
  year: { type: "number" },
  type: { type: "string" },
  hours: { type: "number" },
  uid: { type: "string" },
  degree: { type: "string" },
  program: { type: "string" },
  track: { type: "string", nullable: true },
  course: { type: "string" },
  semester: { type: "number" },
  courseType: { type: "string" },
} as const;

type Row = AdminRequestFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  year: number;
  serviceId: number;
  courseId: number;
  type: string;
  hours: number;
};

graphql(`
  fragment AdminRequest on Request {
    id
    year
    service {
      id
      uid
    }
    course {
      id
      program {
        id
        name
        nameDisplay
        degree {
          id
          name
          nameDisplay
        }
      }
      track {
        id
        name
      }
      name
      semester
      type {
        id
        label
      }
    }
    type
    hours
  }

  fragment AdminRequestsService on Service {
    id
    year
    uid
  }

  fragment AdminRequestsCourse on Course {
    id
    year
    program {
      name
      degree {
        name
      }
    }
    track {
      name
      program {
        name
        degree {
          name
        }
      }
    }
    name
    semester
    type {
      label
    }
  }

  mutation InsertRequests($objects: [RequestInsertInput!]!) {
    insertData: insertRequest(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertRequests(
    $objects: [RequestInsertInput!]!
    $onConflict: RequestOnConflict
  ) {
    upsertData: insertRequest(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateRequests($ids: [Int!]!, $changes: RequestSetInput!) {
    updateData: updateRequest(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteRequests($ids: [Int!]!) {
    deleteData: deleteRequest(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const requests = computed(() =>
  requestFragments.map((f) => useFragment(AdminRequestFragmentDoc, f)),
);
const services = computed(() =>
  serviceFragments.map((f) => useFragment(AdminRequestsServiceFragmentDoc, f)),
);
const courses = computed(() =>
  courseFragments.map((f) => useFragment(AdminRequestsCourseFragmentDoc, f)),
);
const insertRequests = useMutation(InsertRequestsDocument, {
  refetchTags: ["all"],
});
const upsertRequests = useMutation(UpsertRequestsDocument, {
  refetchTags: ["all"],
});
const updateRequests = useMutation(UpdateRequestsDocument, {
  refetchTags: ["all"],
});
const deleteRequests = useMutation(DeleteRequestsDocument, {
  refetchTags: ["all"],
});

const constraint = RequestConstraint.RequestServiceIdCourseIdTypeKey;
const updateColumns = [
  RequestUpdateColumn.ServiceId,
  RequestUpdateColumn.CourseId,
  RequestUpdateColumn.Type,
  RequestUpdateColumn.Hours,
];

const columns: Column<Row>[] = [
  {
    name: "year",
    label: t("admin.requests.requests.table.columns.year"),
    align: "left",
    field: "year",
    sortable: true,
    searchable: false,
  },
  {
    name: "type",
    label: t("admin.requests.requests.table.columns.type"),
    align: "left",
    field: "type",
    format: (val: string) => t(`requestType.${val}`),
    sortable: true,
    searchable: false,
  },
  {
    name: "hours",
    label: t("admin.requests.requests.table.columns.hours"),
    field: "hours",
    format: (val: number) => n(val, "decimal"),
    sortable: true,
    searchable: false,
  },
  {
    name: "uid",
    label: t("admin.requests.requests.table.columns.uid"),
    align: "left",
    field: (row) => row.service.uid,
    sortable: true,
    searchable: true,
  },
  {
    name: "degree",
    label: t("admin.requests.requests.table.columns.degree"),
    align: "left",
    field: (row) => row.course.program.degree.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "program",
    label: t("admin.requests.requests.table.columns.program"),
    align: "left",
    field: (row) => row.course.program.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "track",
    label: t("admin.requests.requests.table.columns.track"),
    align: "left",
    field: (row) => row.course.track?.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "course",
    label: t("admin.requests.requests.table.columns.course"),
    align: "left",
    field: (row) => row.course.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "semester",
    label: t("admin.requests.requests.table.columns.semester"),
    align: "left",
    field: (row) => row.course.semester,
    format: (val: number) => t("semester", { semester: val }),
    sortable: true,
    searchable: false,
  },
  {
    name: "courseType",
    label: t("admin.requests.requests.table.columns.courseType"),
    align: "left",
    field: (row) => row.course.type.label,
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) =>
  `${t(`requestType.${row.type}`)} — ${row.year} — ${row.service.uid} — ${row.course.name}`;

const initForm = (rows: Row[]): FormValues => ({
  year: rows[0]?.year ?? null,
  type: rows[0]?.type ?? null,
  hours: rows[0]?.hours ?? null,
  uid: rows[0]?.service.uid ?? null,
  degree: rows[0]?.course.program.degree.name ?? null,
  program: rows[0]?.course.program.name ?? null,
  track: rows[0]?.course.track?.name ?? null,
  course: rows[0]?.course.name ?? null,
  semester: rows[0]?.course.semester ?? null,
  courseType: rows[0]?.course.type.label ?? null,
});

function validateImportRow(importRow: ImportRow): InsertInput;
function validateImportRow(importRow: Partial<ImportRow>): Partial<InsertInput>;
function validateImportRow(
  importRow: Partial<ImportRow>,
): Partial<InsertInput> {
  const object: Partial<InsertInput> = {};

  if (importRow.year !== undefined) {
    object.year = importRow.year;
  }

  // serviceId
  if (importRow.uid !== undefined) {
    if (importRow.year === undefined) {
      throw new Error(
        t("admin.requests.requests.form.error.updateUidWithoutYear"),
      );
    }

    const service = services.value.find(
      (s) => s.year === importRow.year && s.uid === importRow.uid,
    );

    if (service === undefined) {
      throw new Error(
        t("admin.requests.requests.form.error.serviceNotFound", importRow),
      );
    }

    object.serviceId = service.id;
  }

  // courseId
  if (
    importRow.degree !== undefined ||
    importRow.program !== undefined ||
    importRow.track !== undefined ||
    importRow.course !== undefined ||
    importRow.semester !== undefined ||
    importRow.courseType !== undefined
  ) {
    if (
      importRow.year === undefined ||
      importRow.degree === undefined ||
      importRow.program === undefined ||
      importRow.track === undefined ||
      importRow.course === undefined ||
      importRow.semester === undefined ||
      importRow.courseType === undefined
    ) {
      throw new Error(
        t(
          "admin.requests.requests.form.error.updateCourseMissingFields",
          importRow,
        ),
      );
    }

    const course = courses.value.find(
      (c) =>
        c.year === importRow.year &&
        c.program.degree.name === importRow.degree &&
        c.program.name === importRow.program &&
        (c.track?.name ?? null) === importRow.track &&
        c.name === importRow.course &&
        c.semester === importRow.semester &&
        c.type.label === importRow.courseType,
    );

    if (course === undefined) {
      throw new Error(
        t("admin.requests.requests.form.error.courseNotFound", importRow),
      );
    }

    object.courseId = course.id;
  }

  if (importRow.type !== undefined) {
    object.type = importRow.type;
  }

  if (importRow.hours !== undefined) {
    object.hours = importRow.hours;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

const typeOptions = Object.values(REQUEST_TYPES).map((rt) => ({
  value: rt,
  label: t(`requestType.${rt}`),
}));
const uidOptions = computed(() =>
  services.value
    .filter((s) => s.year === formValues.value.year)
    .map((s) => s.uid),
);
const coursesFiltered = computed(() =>
  courses.value.filter(
    (c) =>
      (formValues.value.year === null || c.year === formValues.value.year) &&
      (formValues.value.degree === null ||
        c.program.degree.name === formValues.value.degree) &&
      (formValues.value.program === null ||
        c.program.name === formValues.value.program) &&
      (formValues.value.track === null ||
        c.track?.name === formValues.value.track) &&
      (formValues.value.course === null ||
        c.name === formValues.value.course) &&
      (formValues.value.semester === null ||
        c.semester === formValues.value.semester) &&
      (formValues.value.courseType === null ||
        c.type.label === formValues.value.courseType),
  ),
);
const degreeOptions = computed(() =>
  coursesFiltered.value.map((c) => c.program.degree.name).filter(unique),
);
const programOptions = computed(() =>
  coursesFiltered.value.map((c) => c.program.name).filter(unique),
);
const trackOptions = computed(() =>
  coursesFiltered.value.map((c) => c.track?.name ?? null).filter(unique),
);
const courseOptions = computed(() =>
  coursesFiltered.value.map((c) => c.name).filter(unique),
);
const semesterOptions = computed(() =>
  coursesFiltered.value.map((c) => c.semester).filter(unique),
);
const courseTypeOptions = computed(() =>
  coursesFiltered.value.map((c) => c.type.label).filter(unique),
);

// Filters
const selectedYears = ref<number[]>([]);
const selectedTypes = ref<string[]>([]);
const selectedUids = ref<string[]>([]);
const selectedPrograms = ref<number[]>([]);
const selectedYearsOptions = computed(() => years.value.map((y) => y.value));
const selectedTypesOptions = Object.values(REQUEST_TYPES).map((rt) => ({
  value: rt,
  label: t(`requestType.${rt}`),
}));
const selectedUidsOptions = computed(() =>
  requests.value.map((r) => r.service.uid).filter(unique),
);
const selectedProgramsOptions = computed(() =>
  requests.value
    .map((r) => ({
      value: r.course.program.id,
      label: `${r.course.program.degree.nameDisplay} ${r.course.program.nameDisplay}`,
    }))
    .filter(uniqueValue("value"))
    .sort(compare("label")),
);
const filterFn = computed(
  () => (r: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(r.year)) &&
    (!selectedTypes.value.length || selectedTypes.value.includes(r.type)) &&
    (!selectedUids.value.length ||
      selectedUids.value.includes(r.service.uid)) &&
    (!selectedPrograms.value.length ||
      selectedPrograms.value.includes(r.course.program.id)),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="tracks"
    message-prefix="admin.requests.requests"
    :id-key
    :row-descriptor
    :columns
    :rows="requests"
    :filter-fn
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertRequests"
    :upsert-data="upsertRequests"
    :update-data="updateRequests"
    :delete-data="deleteRequests"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="selectedYearsOptions"
        :label="t('admin.requests.requests.table.columns.year')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedTypes"
        :options="selectedTypesOptions"
        :label="t('admin.requests.requests.table.columns.type')"
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
        v-model="selectedUids"
        :options="selectedUidsOptions"
        :label="t('admin.requests.requests.table.columns.uid')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedPrograms"
        :options="selectedProgramsOptions"
        :label="t('admin.requests.requests.table.columns.program')"
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
        :label="t('admin.requests.requests.form.fields.year')"
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
        v-model="formValues.type"
        :options="typeOptions"
        :label="t('admin.requests.requests.form.fields.type')"
        :disable="multipleSelection && !selectedFields.includes('type')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
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
        :label="t('admin.requests.requests.form.fields.hours')"
        :disable="multipleSelection && !selectedFields.includes('hours')"
        clearable
        clear-icon="sym_s_close"
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
      <QSelect
        v-model="formValues.uid"
        :options="uidOptions"
        :label="t('admin.requests.requests.form.fields.uid')"
        :disable="
          formValues.year === null ||
          (multipleSelection && !selectedFields.includes('uid'))
        "
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
      <QSelect
        v-model="formValues.degree"
        :options="degreeOptions"
        :label="t('admin.requests.requests.form.fields.degree')"
        :disable="
          !formValues.year ||
          (multipleSelection && !selectedFields.includes('degree'))
        "
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="degree" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.program"
        :options="programOptions"
        :label="t('admin.requests.requests.form.fields.program')"
        :disable="
          !formValues.degree ||
          (multipleSelection && !selectedFields.includes('program'))
        "
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="program" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.track"
        :options="trackOptions"
        :label="t('admin.requests.requests.form.fields.track')"
        :disable="
          !formValues.program ||
          (multipleSelection && !selectedFields.includes('track'))
        "
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="track" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.course"
        :options="courseOptions"
        :label="t('admin.requests.requests.form.fields.course')"
        :disable="
          formValues.year === null ||
          !formValues.program ||
          (multipleSelection && !selectedFields.includes('course'))
        "
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="course" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.semester"
        :options="semesterOptions"
        :label="t('admin.requests.requests.form.fields.semester')"
        :disable="
          !formValues.course ||
          (multipleSelection && !selectedFields.includes('semester'))
        "
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="semester" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.courseType"
        :options="courseTypeOptions"
        :label="t('admin.requests.requests.form.fields.courseType')"
        :disable="
          !formValues.course ||
          (multipleSelection && !selectedFields.includes('courseType'))
        "
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="courseType" />
        </template>
      </QSelect>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
