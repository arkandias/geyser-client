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
  type PriorityInsertInput,
  PriorityUpdateColumn,
  UpdatePrioritiesDocument,
  UpsertPrioritiesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import {
  booleanOptions,
  compare,
  inputToNumber,
  nullObj,
  unique,
  uniqueValue,
} from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminPriorityFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = PriorityInsertInput;

const { priorityFragments, serviceFragments, courseFragments } = defineProps<{
  priorityFragments: FragmentType<typeof AdminPriorityFragmentDoc>[];
  serviceFragments: FragmentType<typeof AdminPrioritiesServiceFragmentDoc>[];
  courseFragments: FragmentType<typeof AdminPrioritiesCourseFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey: keyof Row = "id";
const rowDescriptor = {
  year: { type: "number" },
  seniority: { type: "number", numberFormat: "decimal" },
  isPriority: { type: "boolean", nullable: true },
  computed: { type: "boolean" },
  uid: { type: "string" },
  degree: { type: "string", field: (row) => row.course.program.degree.name },
  program: { type: "string", field: (row) => row.course.program.name },
  track: {
    type: "string",
    nullable: true,
    field: (row) => row.course.track?.name,
  },
  course: { type: "string", field: (row) => row.course.name },
  semester: {
    type: "number",
    field: (row) => row.course.semester,
    format: (val: number) => t("semester", { semester: val }),
  },
  courseType: { type: "string", field: (row) => row.course.type.label },
} as const satisfies RowDescriptorExtra<Row>;

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
    teacher {
      uid
      displayname
    }
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

const importConstraint = PriorityConstraint.PriorityServiceIdCourseIdKey;
const importUpdateColumns = [
  PriorityUpdateColumn.ServiceId,
  PriorityUpdateColumn.CourseId,
  PriorityUpdateColumn.Seniority,
  PriorityUpdateColumn.IsPriority,
  PriorityUpdateColumn.Computed,
];

const formatRow = (row: Row) =>
  `${row.year} — ${row.service.uid} — ${row.course.name}`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.year !== undefined) {
    object.year = flatRow.year;
  }

  // serviceId
  if (flatRow.uid !== undefined) {
    if (flatRow.year === undefined) {
      throw new Error(
        t("admin.requests.priorities.form.error.updateUidWithoutYear"),
      );
    }

    const service = services.value.find(
      (s) => s.year === flatRow.year && s.teacher.uid === flatRow.uid,
    );

    if (service === undefined) {
      throw new Error(
        t("admin.requests.priorities.form.error.serviceNotFound", flatRow),
      );
    }

    object.serviceId = service.id;
  }

  // courseId
  if (
    flatRow.degree !== undefined ||
    flatRow.program !== undefined ||
    flatRow.track !== undefined ||
    flatRow.course !== undefined ||
    flatRow.semester !== undefined ||
    flatRow.courseType !== undefined
  ) {
    if (
      flatRow.year === undefined ||
      flatRow.degree === undefined ||
      flatRow.program === undefined ||
      flatRow.track === undefined ||
      flatRow.course === undefined ||
      flatRow.semester === undefined ||
      flatRow.courseType === undefined
    ) {
      throw new Error(
        t("admin.requests.priorities.form.error.updateCourseMissingFields"),
      );
    }

    const course = courses.value.find(
      (c) =>
        c.year === flatRow.year &&
        c.program.degree.name === flatRow.degree &&
        c.program.name === flatRow.program &&
        (c.track?.name ?? null) === flatRow.track &&
        c.name === flatRow.course &&
        c.semester === flatRow.semester &&
        c.type.label === flatRow.courseType,
    );

    if (course === undefined) {
      throw new Error(
        t("admin.requests.priorities.form.error.courseNotFound", flatRow),
      );
    }

    object.courseId = course.id;
  }

  if (flatRow.seniority !== undefined) {
    object.seniority = flatRow.seniority;
  }

  if (flatRow.isPriority !== undefined) {
    object.isPriority = flatRow.isPriority;
  }

  if (flatRow.computed !== undefined) {
    object.computed = flatRow.computed;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

const yearOptions = computed(() => years.value.map((y) => y.value));
const teacherOptions = computed(() =>
  services.value
    .filter((s) => s.year === formValues.value.year)
    .map((s) => ({ value: s.teacher.uid, label: s.teacher.displayname })),
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
const selectedTeachers = ref<string[]>([]);
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
  () => (row: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(row.year)) &&
    (selectedIsPriority.value === null ||
      row.isPriority === selectedIsPriority.value) &&
    (selectedComputed.value === null ||
      row.computed === selectedComputed.value) &&
    (!selectedTeachers.value.length ||
      selectedTeachers.value.includes(row.service.uid)) &&
    (!selectedPrograms.value.length ||
      selectedPrograms.value.includes(row.course.program.id)),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="requests"
    name="priorities"
    :id-key
    :row-descriptor
    :rows="priorities"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertPriorities"
    :upsert-data="upsertPriorities"
    :update-data="updatePriorities"
    :delete-data="deletePriorities"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="selectedYearsOptions"
        :label="t('admin.requests.priorities.column.year.label')"
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
        :label="t('admin.requests.priorities.column.isPriority')"
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
        :label="t('admin.requests.priorities.column.computed.label')"
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
        v-model="selectedTeachers"
        :options="selectedUidsOptions"
        :label="t('admin.requests.priorities.column.teacher.label')"
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
        v-model="selectedPrograms"
        :options="selectedProgramsOptions"
        :label="t('admin.requests.priorities.column.program.label')"
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
        :label="t('admin.requests.priorities.column.year.label')"
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
        :label="t('admin.requests.priorities.column.seniority.label')"
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
        :label="t('admin.requests.priorities.column.isPriority')"
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
        :label="t('admin.requests.priorities.column.computed.label')"
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
        :options="teacherOptions"
        :label="t('admin.requests.priorities.column.uid.label')"
        :disable="
          formValues.year === null ||
          (multipleSelection && !selectedFields.includes('uid'))
        "
        clearable
        clear-icon="sym_s_close"
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
        v-model="formValues.degree"
        :options="degreeOptions"
        :label="t('admin.requests.priorities.column.degree.label')"
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
        :label="t('admin.requests.priorities.column.program.label')"
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
        :label="t('admin.requests.priorities.column.track.label')"
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
        :label="t('admin.requests.priorities.column.course.label')"
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
        :label="t('admin.requests.priorities.column.semester.label')"
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
        :label="t('admin.requests.priorities.column.courseType')"
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
