<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminRequestFragment,
  AdminRequestFragmentDoc,
  AdminRequestsCourseFragmentDoc,
  AdminRequestsServiceFragmentDoc,
  DeleteRequestsDocument,
  InsertRequestsDocument,
  RequestConstraint,
  type RequestInsertInput,
  RequestTypeEnum,
  RequestUpdateColumn,
  UpdateRequestsDocument,
  UpsertRequestsDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { ParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { isRequestType } from "@/utils/enum-guards.ts";
import {
  compare,
  inputToNumber,
  nullObj,
  unique,
  uniqueValue,
} from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminRequestFragment;
type FlatRow = ParsedRow<typeof rowDescriptor>;
type InsertInput = RequestInsertInput;

const { requestFragments, serviceFragments, courseFragments } = defineProps<{
  requestFragments: FragmentType<typeof AdminRequestFragmentDoc>[];
  serviceFragments: FragmentType<typeof AdminRequestsServiceFragmentDoc>[];
  courseFragments: FragmentType<typeof AdminRequestsCourseFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey: keyof Row = "id";
const rowDescriptor = {
  year: { type: "number" },
  type: {
    type: "string",
    info: `${RequestTypeEnum.Assignment} | ${RequestTypeEnum.Primary} | ${RequestTypeEnum.Secondary}`,
    format: (val: string) => t(`requestType.${val}`),
  },
  hours: { type: "number", numberFormat: "decimal" },
  uid: {
    type: "string",
    field: (row) => row.service.uid,
  },
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
    teacher {
      uid
      displayname
    }
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
const insertRequests = useMutation(InsertRequestsDocument);
const upsertRequests = useMutation(UpsertRequestsDocument);
const updateRequests = useMutation(UpdateRequestsDocument);
const deleteRequests = useMutation(DeleteRequestsDocument);

const importConstraint = RequestConstraint.RequestServiceIdCourseIdTypeKey;
const importUpdateColumns = [
  RequestUpdateColumn.ServiceId,
  RequestUpdateColumn.CourseId,
  RequestUpdateColumn.Type,
  RequestUpdateColumn.Hours,
];

const formatRow = (row: Row) =>
  `${t(`requestType.${row.type}`)} — ${row.year} — ${row.service.uid} — ${row.course.name}`;

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.year !== undefined) {
    object.year = flatRow.year;
  }

  // serviceId
  if (flatRow.uid !== undefined) {
    if (flatRow.year === undefined) {
      throw new Error(
        t("admin.requests.requests.form.error.updateUidWithoutYear"),
      );
    }

    const service = services.value.find(
      (s) => s.year === flatRow.year && s.teacher.uid === flatRow.uid,
    );

    if (service === undefined) {
      throw new Error(
        t("admin.requests.requests.form.error.serviceNotFound", flatRow),
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
        t("admin.requests.requests.form.error.updateCourseMissingFields"),
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
        t("admin.requests.requests.form.error.courseNotFound", flatRow),
      );
    }

    object.courseId = course.id;
  }

  if (flatRow.type !== undefined) {
    if (!isRequestType(flatRow.type)) {
      throw new Error(t("admin.requests.requests.form.error.invalidType"));
    }
    object.type = flatRow.type;
  }

  if (flatRow.hours !== undefined) {
    if (flatRow.hours === null || flatRow.hours < 0) {
      throw new Error(t("admin.requests.requests.form.error.hoursNegative"));
    }
    object.hours = flatRow.hours;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

const yearOptions = computed(() => years.value.map((y) => y.value));
const typeOptions = computed(() =>
  Object.values(RequestTypeEnum).map((type) => ({
    value: type,
    label: t(`requestType.${type}`),
  })),
);
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
const selectedTypes = ref<string[]>([]);
const selectedTeachers = ref<string[]>([]);
const selectedPrograms = ref<number[]>([]);
const selectedYearsOptions = computed(() => years.value.map((y) => y.value));
const selectedTypesOptions = Object.values(RequestTypeEnum).map((type) => ({
  value: type,
  label: t(`requestType.${type}`),
}));
const selectedUidOptions = computed(() =>
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
  () => (row: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(row.year)) &&
    (!selectedTypes.value.length || selectedTypes.value.includes(row.type)) &&
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
    name="requests"
    :id-key
    :row-descriptor
    :rows="requests"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertRequests"
    :upsert-data="upsertRequests"
    :update-data="updateRequests"
    :delete-data="deleteRequests"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="selectedYearsOptions"
        :label="t('admin.requests.requests.column.year.label')"
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
        :label="t('admin.requests.requests.column.type.label')"
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
        :options="selectedUidOptions"
        :label="t('admin.requests.requests.column.teacher.label')"
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
        :label="t('admin.requests.requests.column.program.label')"
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
        :label="t('admin.requests.requests.column.year.label')"
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
        :label="t('admin.requests.requests.column.type.label')"
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
        :label="t('admin.requests.requests.column.hours.label')"
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
        :options="teacherOptions"
        :label="t('admin.requests.requests.column.uid.label')"
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
        :label="t('admin.requests.requests.column.degree.label')"
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
        :label="t('admin.requests.requests.column.program.label')"
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
        :label="t('admin.requests.requests.column.track.label')"
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
        :label="t('admin.requests.requests.column.course.label')"
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
        :label="t('admin.requests.requests.column.semester.label')"
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
        :label="t('admin.requests.requests.column.courseType')"
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
