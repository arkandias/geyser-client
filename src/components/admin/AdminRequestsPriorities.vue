<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  AdminPrioritiesCourseFragmentDoc,
  AdminPrioritiesServiceFragmentDoc,
  type AdminPriorityFragment,
  AdminPriorityFragmentDoc,
  DeletePrioritiesDocument,
  InsertPrioritiesDocument,
  PriorityConstraint,
  PriorityUpdateColumn,
  UpdatePrioritiesDocument,
  UpsertPrioritiesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { Column } from "@/types/column.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/data.ts";
import {
  booleanOptions,
  compare,
  inputToNumber,
  unique,
  uniqueValue,
} from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { priorityFragments, serviceFragments, courseFragments } = defineProps<{
  priorityFragments: FragmentType<typeof AdminPriorityFragmentDoc>[];
  serviceFragments: FragmentType<typeof AdminPrioritiesServiceFragmentDoc>[];
  courseFragments: FragmentType<typeof AdminPrioritiesCourseFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();
const { years } = useYearsStore();

const idKey = "id";
const rowDescriptor = {
  year: { type: "number" },
  seniority: { type: "number" },
  isPriority: { type: "boolean", nullable: true },
  computed: { type: "boolean" },
  uid: { type: "string" },
  degree: { type: "string" },
  program: { type: "string" },
  track: { type: "string", nullable: true },
  course: { type: "string" },
  semester: { type: "number" },
  courseType: { type: "string" },
} as const;

type Row = AdminPriorityFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  year?: number | null;
  serviceId?: number | null;
  courseId?: number | null;
  seniority?: number | null;
  isPriority?: boolean | null;
  computed?: boolean | null;
};

graphql(`
  fragment AdminPriority on Priority {
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
    seniority
    isPriority
    computed
  }

  fragment AdminPrioritiesService on Service {
    id
    year
    uid
  }

  fragment AdminPrioritiesCourse on Course {
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

  mutation InsertPriorities($objects: [PriorityInsertInput!]!) {
    insertData: insertPriority(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertPriorities(
    $objects: [PriorityInsertInput!]!
    $onConflict: PriorityOnConflict
  ) {
    upsertData: insertPriority(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdatePriorities($ids: [Int!]!, $changes: PrioritySetInput!) {
    updateData: updatePriority(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeletePriorities($ids: [Int!]!) {
    deleteData: deletePriority(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const priorities = computed(() =>
  priorityFragments.map((f) => useFragment(AdminPriorityFragmentDoc, f)),
);
const services = computed(() =>
  serviceFragments.map((f) =>
    useFragment(AdminPrioritiesServiceFragmentDoc, f),
  ),
);
const courses = computed(() =>
  courseFragments.map((f) => useFragment(AdminPrioritiesCourseFragmentDoc, f)),
);
const insertPriorities = useMutation(InsertPrioritiesDocument);
const upsertPriorities = useMutation(UpsertPrioritiesDocument);
const updatePriorities = useMutation(UpdatePrioritiesDocument);
const deletePriorities = useMutation(DeletePrioritiesDocument);

const constraint = PriorityConstraint.PriorityServiceIdCourseIdKey;
const updateColumns = [
  PriorityUpdateColumn.ServiceId,
  PriorityUpdateColumn.CourseId,
  PriorityUpdateColumn.Seniority,
  PriorityUpdateColumn.IsPriority,
  PriorityUpdateColumn.Computed,
];

const columns = computed<Column<Row>[]>(() => [
  {
    name: "year",
    label: t("admin.requests.priorities.table.columns.year"),
    align: "left",
    field: "year",
    sortable: true,
    searchable: false,
  },
  {
    name: "seniority",
    label: t("admin.requests.priorities.table.columns.seniority"),
    field: "seniority",
    format: (val: number) => n(val, "decimal"),
    sortable: true,
    searchable: false,
  },
  {
    name: "isPriority",
    label: t("admin.requests.priorities.table.columns.isPriority"),
    align: "center",
    field: "isPriority",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "computed",
    label: t("admin.requests.priorities.table.columns.computed"),
    align: "center",
    field: "computed",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "uid",
    label: t("admin.requests.priorities.table.columns.uid"),
    align: "left",
    field: (row) => row.service.uid,
    sortable: true,
    searchable: true,
  },
  {
    name: "degree",
    label: t("admin.requests.priorities.table.columns.degree"),
    align: "left",
    field: (row) => row.course.program.degree.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "program",
    label: t("admin.requests.priorities.table.columns.program"),
    align: "left",
    field: (row) => row.course.program.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "track",
    label: t("admin.requests.priorities.table.columns.track"),
    align: "left",
    field: (row) => row.course.track?.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "course",
    label: t("admin.requests.priorities.table.columns.course"),
    align: "left",
    field: (row) => row.course.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "semester",
    label: t("admin.requests.priorities.table.columns.semester"),
    align: "left",
    field: (row) => row.course.semester,
    format: (val: number) => t("semester", { semester: val }),
    sortable: true,
    searchable: false,
  },
  {
    name: "courseType",
    label: t("admin.requests.priorities.table.columns.courseType"),
    align: "left",
    field: (row) => row.course.type.label,
    sortable: true,
    searchable: false,
  },
]);

const formatRow = (row: Row) =>
  `${row.year} — ${row.service.uid} — ${row.course.name}`;

const initForm = (rows: Row[]): FormValues => ({
  year: rows[0]?.year ?? null,
  seniority: rows[0]?.seniority ?? null,
  isPriority: rows[0]?.isPriority ?? null,
  computed: rows[0]?.computed ?? null,
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
        t("admin.requests.priorities.form.error.updateUidWithoutYear"),
      );
    }

    const service = services.value.find(
      (s) => s.year === importRow.year && s.uid === importRow.uid,
    );

    if (service === undefined) {
      throw new Error(
        t("admin.requests.priorities.form.error.serviceNotFound", importRow),
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
          "admin.requests.priorities.form.error.updateCourseMissingFields",
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
        t("admin.requests.priorities.form.error.courseNotFound", importRow),
      );
    }

    object.courseId = course.id;
  }

  if (importRow.seniority !== undefined) {
    object.seniority = importRow.seniority;
  }

  if (importRow.isPriority !== undefined) {
    object.isPriority = importRow.isPriority;
  }

  if (importRow.computed !== undefined) {
    object.computed = importRow.computed;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

const yearOptions = computed(() => years.value.map((y) => y.value));
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
const selectedIsPriority = ref<boolean | null>(null);
const selectedComputed = ref<boolean | null>(null);
const selectedUids = ref<string[]>([]);
const selectedPrograms = ref<number[]>([]);
const selectedYearsOptions = computed(() => years.value.map((y) => y.value));
const selectedUidsOptions = computed(() =>
  priorities.value.map((p) => p.service.uid).filter(unique),
);
const selectedProgramsOptions = computed(() =>
  priorities.value
    .map((p) => ({
      value: p.course.program.id,
      label: `${p.course.program.degree.nameDisplay} ${p.course.program.nameDisplay}`,
    }))
    .filter(uniqueValue("value"))
    .sort(compare("label")),
);
const filterFn = computed(
  () => (r: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(r.year)) &&
    (selectedIsPriority.value === null ||
      r.isPriority === selectedIsPriority.value) &&
    (selectedComputed.value === null ||
      r.computed === selectedComputed.value) &&
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
    message-prefix="admin.requests.priorities"
    :id-key
    :row-descriptor
    :columns
    :rows="priorities"
    :filter-fn
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertPriorities"
    :upsert-data="upsertPriorities"
    :update-data="updatePriorities"
    :delete-data="deletePriorities"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="selectedYearsOptions"
        :label="t('admin.requests.priorities.table.columns.year')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedIsPriority"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.requests.priorities.table.columns.isPriority')"
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
        v-model="selectedComputed"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.requests.priorities.table.columns.computed')"
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
        :label="t('admin.requests.priorities.table.columns.uid')"
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
        :label="t('admin.requests.priorities.table.columns.program')"
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
        :label="t('admin.requests.priorities.form.fields.year')"
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
      <QInput
        :model-value="formValues.seniority"
        type="number"
        :label="t('admin.requests.priorities.form.fields.seniority')"
        :disable="multipleSelection && !selectedFields.includes('seniority')"
        clearable
        clear-icon="sym_s_close"
        square
        dense
        @update:model-value="
          (value) => (formValues.seniority = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="seniority" />
        </template>
      </QInput>
      <QSelect
        v-model="formValues.isPriority"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.requests.priorities.form.fields.isPriority')"
        :disable="multipleSelection && !selectedFields.includes('isPriority')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="isPriority" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.computed"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.requests.priorities.form.fields.computed')"
        :disable="multipleSelection && !selectedFields.includes('computed')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="computed" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.uid"
        :options="uidOptions"
        :label="t('admin.requests.priorities.form.fields.uid')"
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
        :label="t('admin.requests.priorities.form.fields.degree')"
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
        :label="t('admin.requests.priorities.form.fields.program')"
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
        :label="t('admin.requests.priorities.form.fields.track')"
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
        :label="t('admin.requests.priorities.form.fields.course')"
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
        :label="t('admin.requests.priorities.form.fields.semester')"
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
        :label="t('admin.requests.priorities.form.fields.courseType')"
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
