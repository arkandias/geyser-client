<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminCourseFragment,
  AdminCourseFragmentDoc,
  AdminCoursesCourseTypeFragmentDoc,
  AdminCoursesDegreeFragmentDoc,
  CourseConstraint,
  type CourseInsertInput,
  CourseUpdateColumn,
  DeleteCoursesDocument,
  InsertCoursesDocument,
  UpdateCoursesDocument,
  UpsertCoursesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { NullableParsedRow, RowDescriptorExtra } from "@/types/data.ts";
import { booleanOptions, inputToNumber, nullObj } from "@/utils/misc.ts";

import AdminData from "@/components/admin/core/AdminData.vue";

type Row = AdminCourseFragment;
type FlatRow = NullableParsedRow<typeof rowDescriptor>;
type InsertInput = CourseInsertInput;

const { degreeFragments, courseFragments, courseTypeFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminCoursesDegreeFragmentDoc>[];
  courseFragments: FragmentType<typeof AdminCourseFragmentDoc>[];
  courseTypeFragments: FragmentType<typeof AdminCoursesCourseTypeFragmentDoc>[];
}>();

const { t } = useCustomI18n();
const { years } = useYearsStore();

const idKey: keyof Row = "id";
const rowDescriptor = {
  year: { type: "number" },
  degree: { type: "string", field: (row) => row.program.degree.name },
  program: { type: "string", field: (row) => row.program.name },
  track: { type: "string", nullable: true, field: (row) => row.track?.name },
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  semester: {
    type: "number",
    format: (val: number) => t("semester", { semester: val }),
  },
  type: { type: "string", field: (row) => row.type.label },
  hours: { type: "number", numberFormat: "decimal" },
  hoursAdjusted: { type: "number", nullable: true, numberFormat: "decimal" },
  groups: { type: "number", numberFormat: "decimal" },
  groupsAdjusted: { type: "number", nullable: true, numberFormat: "decimal" },
  description: {
    type: "string",
    nullable: true,
    format: (val: string) => (val ? "✓" : "✗"),
  },
  priorityRule: { type: "number", nullable: true },
  visible: { type: "boolean" },
} as const satisfies RowDescriptorExtra<Row>;

graphql(`
  fragment AdminCourse on Course {
    id
    year
    program {
      id
      name
      nameDisplay
      degree {
        name
        nameDisplay
      }
    }
    track {
      id
      name
      nameDisplay
    }
    name
    nameShort
    nameDisplay
    semester
    type {
      id
      label
    }
    hours
    hoursAdjusted
    groups
    groupsAdjusted
    description
    priorityRule
    visible
  }

  fragment AdminCoursesDegree on Degree {
    id
    name
    programs {
      id
      name
      tracks {
        id
        name
      }
    }
  }

  fragment AdminCoursesCourseType on CourseType {
    id
    label
  }

  mutation InsertCourses($objects: [CourseInsertInput!]!) {
    insertData: insertCourse(objects: $objects) {
      returning {
        id
      }
    }
  }

  mutation UpsertCourses(
    $objects: [CourseInsertInput!]!
    $onConflict: CourseOnConflict
  ) {
    upsertData: insertCourse(objects: $objects, onConflict: $onConflict) {
      returning {
        id
      }
    }
  }

  mutation UpdateCourses($ids: [Int!]!, $changes: CourseSetInput!) {
    updateData: updateCourse(where: { id: { _in: $ids } }, _set: $changes) {
      returning {
        id
      }
    }
  }

  mutation DeleteCourses($ids: [Int!]!) {
    deleteData: deleteCourse(where: { id: { _in: $ids } }) {
      returning {
        id
      }
    }
  }
`);

const degrees = computed(() =>
  degreeFragments.map((f) => useFragment(AdminCoursesDegreeFragmentDoc, f)),
);
const courses = computed(() =>
  courseFragments.map((f) => useFragment(AdminCourseFragmentDoc, f)),
);
const courseTypes = computed(() =>
  courseTypeFragments.map((f) =>
    useFragment(AdminCoursesCourseTypeFragmentDoc, f),
  ),
);
const insertCourses = useMutation(InsertCoursesDocument);
const upsertCourses = useMutation(UpsertCoursesDocument);
const updateCourses = useMutation(UpdateCoursesDocument);
const deleteCourses = useMutation(DeleteCoursesDocument);

const importConstraint =
  CourseConstraint.CourseYearProgramIdTrackIdNameSemesterTypeIdKey;
const importUpdateColumns = [
  CourseUpdateColumn.Year,
  CourseUpdateColumn.ProgramId,
  CourseUpdateColumn.TrackId,
  CourseUpdateColumn.Name,
  CourseUpdateColumn.NameShort,
  CourseUpdateColumn.Semester,
  CourseUpdateColumn.TypeId,
  CourseUpdateColumn.Hours,
  CourseUpdateColumn.HoursAdjusted,
  CourseUpdateColumn.Groups,
  CourseUpdateColumn.GroupsAdjusted,
  CourseUpdateColumn.Description,
  CourseUpdateColumn.PriorityRule,
  CourseUpdateColumn.Visible,
];

const formatRow = (row: Row) =>
  `${row.nameDisplay} (${row.program.degree.nameDisplay}` +
  ` — ${row.program.nameDisplay}` +
  (row.track ? ` — ${row.track.nameDisplay})` : `)`);

const validateFlatRow = (flatRow: FlatRow): InsertInput => {
  const object: InsertInput = {};

  if (flatRow.year !== undefined) {
    object.year = flatRow.year;
  }

  // programId
  if (
    flatRow.degree !== undefined ||
    flatRow.program !== undefined ||
    flatRow.track !== undefined
  ) {
    if (flatRow.degree !== undefined && flatRow.program === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.updateDegreeWithoutProgram"),
      );
    }
    if (flatRow.program !== undefined && flatRow.degree === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.updateProgramWithoutDegree"),
      );
    }
    const degree = degrees.value.find((d) => d.name === flatRow.degree);
    if (degree === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.degreeNotFound", flatRow),
      );
    }
    const program = degree.programs.find((p) => p.name === flatRow.program);
    if (program === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.programNotFound", flatRow),
      );
    }
    object.programId = program.id;

    // trackId
    if (flatRow.track !== undefined) {
      if (flatRow.degree === undefined) {
        throw new Error(
          t("admin.courses.courses.form.error.updateTrackWithoutDegree"),
        );
      }
      if (flatRow.program === undefined) {
        throw new Error(
          t("admin.courses.courses.form.error.updateTrackWithoutProgram"),
        );
      }
      if (flatRow.track === null) {
        object.trackId = null;
      } else {
        const track = program.tracks.find((t) => t.name === flatRow.track);
        if (track === undefined) {
          throw new Error(
            t("admin.courses.courses.form.error.trackNotFound", flatRow),
          );
        }
        object.trackId = track.id;
      }
    }
  }

  if (flatRow.nameShort !== undefined) {
    object.nameShort = flatRow.nameShort;
  }

  if (flatRow.semester !== undefined) {
    object.semester = flatRow.semester;
  }

  // typeId
  if (flatRow.type !== undefined) {
    const type = courseTypes.value.find((ct) => ct.label === flatRow.type);
    if (type === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.courseTypeNotFound", flatRow),
      );
    }
    object.typeId = type.id;
  }

  if (flatRow.name !== undefined) {
    object.name = flatRow.name;
  }

  if (flatRow.hours !== undefined) {
    if (flatRow.hours === null || flatRow.hours < 0) {
      throw new Error(t("admin.courses.courses.form.error.hoursNegative"));
    }
    object.hours = flatRow.hours;
  }

  if (flatRow.hoursAdjusted !== undefined) {
    if (flatRow.hoursAdjusted !== null && flatRow.hoursAdjusted < 0) {
      throw new Error(
        t("admin.courses.courses.form.error.hoursAdjustedNegative"),
      );
    }
    object.hoursAdjusted = flatRow.hoursAdjusted;
  }

  if (flatRow.groups !== undefined) {
    if (flatRow.groups === null || flatRow.groups < 0) {
      throw new Error(t("admin.courses.courses.form.error.groupsNegative"));
    }
    object.groups = flatRow.groups;
  }

  if (flatRow.groupsAdjusted !== undefined) {
    if (flatRow.groupsAdjusted !== null && flatRow.groupsAdjusted < 0) {
      throw new Error(
        t("admin.courses.courses.form.error.groupsAdjustedNegative"),
      );
    }
    object.groupsAdjusted = flatRow.groupsAdjusted;
  }

  if (flatRow.description !== undefined) {
    object.description = flatRow.description;
  }

  if (flatRow.priorityRule !== undefined) {
    if (
      flatRow.priorityRule !== null &&
      (flatRow.priorityRule < 0 || !Number.isInteger(flatRow.priorityRule))
    ) {
      throw new Error(t("admin.courses.courses.form.error.priorityRule"));
    }
    object.priorityRule = flatRow.priorityRule;
  }

  if (flatRow.visible !== undefined) {
    object.visible = flatRow.visible;
  }

  return object;
};

const formValues = ref<FlatRow>(nullObj(rowDescriptor));
const selectedFields = ref<string[]>([]);

const yearOptions = computed(() => years.value.map((y) => y.value));
const degreeOptions = computed(() => degrees.value.map((d) => d.name));
const programOptions = computed(
  () =>
    degrees.value
      .find((d) => d.name === formValues.value.degree)
      ?.programs.map((p) => p.name) ?? [],
);
const trackOptions = computed(
  () =>
    degrees.value
      .find((d) => d.name === formValues.value.degree)
      ?.programs.find((p) => p.name === formValues.value.program)
      ?.tracks.map((t) => t.name) ?? [],
);
const semesterOptions = [1, 2, 3, 4, 5, 6].map((s) => ({
  value: s,
  label: t("semester", { semester: s }),
}));
const typeOptions = computed(() => courseTypes.value.map((ct) => ct.label));

// Filters
const selectedYears = ref<number[]>([]);
const selectedDegrees = ref<string[]>([]);
const selectedPrograms = ref<{ degree: string; program: string }[]>([]);
const selectedTracks = ref<
  { degree: string; program: string; track: string }[]
>([]);
const selectedSemesters = ref<number[]>([]);
const selectedTypes = ref<string[]>([]);
const selectedVisible = ref<boolean | null>(null);
const selectedProgramOptions = computed(() =>
  degrees.value
    .filter(
      (d) =>
        !selectedDegrees.value.length || selectedDegrees.value.includes(d.name),
    )
    .flatMap((d) =>
      d.programs.map((p) => ({
        value: { degree: d.name, program: p.name },
        label: `${d.name} — ${p.name}`,
      })),
    ),
);
const selectedTrackOptions = computed(() =>
  degrees.value
    .filter(
      (d) =>
        !selectedDegrees.value.length || selectedDegrees.value.includes(d.name),
    )
    .flatMap((d) =>
      d.programs
        .filter(
          (p) =>
            !selectedPrograms.value.length ||
            selectedPrograms.value.some((sp) => sp.program === p.name),
        )
        .map((p) => ({ ...p, degree: d.name })),
    )
    .flatMap((p) =>
      p.tracks.flatMap((t) => ({
        value: { degree: p.degree, program: p.name, track: t.name },
        label: `${p.degree} — ${p.name} — ${t.name}`,
      })),
    ),
);
const filterFn = computed(
  () => (row: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(row.year)) &&
    (!selectedDegrees.value.length ||
      selectedDegrees.value.includes(row.program.degree.name)) &&
    (!selectedPrograms.value.length ||
      selectedPrograms.value.some(
        (p) =>
          p.degree === row.program.degree.name &&
          p.program === row.program.name,
      )) &&
    (!selectedTracks.value.length ||
      selectedTracks.value.some(
        (t) =>
          t.degree === row.program.degree.name &&
          t.program === row.program.name &&
          t.track === row.track?.name,
      )) &&
    (!selectedSemesters.value.length ||
      selectedSemesters.value.includes(row.semester)) &&
    (!selectedTypes.value.length ||
      selectedTypes.value.includes(row.type.label)) &&
    (selectedVisible.value === null || row.visible === selectedVisible.value),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    section="courses"
    name="courses"
    :id-key
    :row-descriptor
    :rows="courses"
    :filter-fn
    :format-row
    :validate-flat-row
    :insert-data="insertCourses"
    :upsert-data="upsertCourses"
    :update-data="updateCourses"
    :delete-data="deleteCourses"
    :import-constraint
    :import-update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="yearOptions"
        :label="t('admin.courses.courses.column.year.label')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedDegrees"
        :options="degreeOptions"
        :label="t('admin.courses.courses.column.degree.label')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedPrograms"
        :options="selectedProgramOptions"
        :label="t('admin.courses.courses.column.program.label')"
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
        v-model="selectedTracks"
        :options="selectedTrackOptions"
        :label="t('admin.courses.courses.column.track.label')"
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
        v-model="selectedSemesters"
        :options="semesterOptions"
        :label="t('admin.courses.courses.column.semester.label')"
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
        :label="t('admin.courses.courses.column.type.label')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedVisible"
        :options="booleanOptions(t('yes'), t('no'))"
        :label="t('admin.courses.courses.column.visible.label')"
        emit-value
        map-options
        clearable
        clear-icon="sym_s_close"
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
        :label="t('admin.courses.courses.column.year.label')"
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
        v-model="formValues.degree"
        :options="degreeOptions"
        :label="t('admin.courses.courses.column.degree.label')"
        :disable="multipleSelection && !selectedFields.includes('degree')"
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
        :label="t('admin.courses.courses.column.program.label')"
        :disable="
          !formValues.degree ||
          (multipleSelection && !selectedFields.includes('program'))
        "
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
        :label="t('admin.courses.courses.column.track.label')"
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
      <QInput
        v-model="formValues.name"
        :label="t('admin.courses.courses.column.name.label')"
        :disable="multipleSelection && !selectedFields.includes('name')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="name" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.nameShort"
        :label="t('admin.courses.courses.column.nameShort')"
        :disable="multipleSelection && !selectedFields.includes('nameShort')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="nameShort" />
        </template>
      </QInput>
      <QSelect
        v-model="formValues.semester"
        :options="semesterOptions"
        :label="t('admin.courses.courses.column.semester.label')"
        :disable="multipleSelection && !selectedFields.includes('semester')"
        emit-value
        map-options
        square
        dense
        options-dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="semester" />
        </template>
      </QSelect>
      <QSelect
        v-model="formValues.type"
        :options="typeOptions"
        :label="t('admin.courses.courses.column.type.label')"
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
        :label="t('admin.courses.courses.column.hours.label')"
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
        :model-value="formValues.hoursAdjusted"
        type="number"
        :label="t('admin.courses.courses.column.hoursAdjusted')"
        :disable="
          multipleSelection && !selectedFields.includes('hoursAdjusted')
        "
        square
        dense
        @update:model-value="
          (value) => (formValues.hoursAdjusted = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="hoursAdjusted" />
        </template>
      </QInput>
      <QInput
        :model-value="formValues.groups"
        type="number"
        :label="t('admin.courses.courses.column.groups.label')"
        :disable="multipleSelection && !selectedFields.includes('groups')"
        square
        dense
        @update:model-value="
          (value) => (formValues.groups = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="groups" />
        </template>
      </QInput>
      <QInput
        :model-value="formValues.groupsAdjusted"
        type="number"
        :label="t('admin.courses.courses.column.groupsAdjusted')"
        :disable="
          multipleSelection && !selectedFields.includes('groupsAdjusted')
        "
        square
        dense
        @update:model-value="
          (value) => (formValues.groupsAdjusted = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="groupsAdjusted" />
        </template>
      </QInput>
      <QInput
        v-model="formValues.description"
        :label="t('admin.courses.courses.column.description.label')"
        :disable="multipleSelection && !selectedFields.includes('description')"
        square
        dense
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="description" />
        </template>
      </QInput>
      <QInput
        :model-value="formValues.priorityRule"
        type="number"
        :label="t('admin.courses.courses.column.priorityRule')"
        :disable="multipleSelection && !selectedFields.includes('priorityRule')"
        clearable
        clear-icon="sym_s_close"
        square
        dense
        @update:model-value="
          (value) => (formValues.priorityRule = inputToNumber(value))
        "
      >
        <template v-if="multipleSelection" #before>
          <QCheckbox v-model="selectedFields" val="priorityRule" />
        </template>
      </QInput>
      <div>
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="active"
        />
        <QToggle
          v-model="formValues.visible"
          :label="t('admin.courses.courses.column.visible.label')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
