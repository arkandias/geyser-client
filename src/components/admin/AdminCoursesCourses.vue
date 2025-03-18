<script setup lang="ts">
import { useMutation } from "villus";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type AdminCourseFragment,
  AdminCourseFragmentDoc,
  AdminCoursesCourseTypeFragmentDoc,
  AdminCoursesDegreeFragmentDoc,
  CourseConstraint,
  CourseUpdateColumn,
  DeleteCoursesDocument,
  InsertCoursesDocument,
  UpdateCoursesDocument,
  UpsertCoursesDocument,
} from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import type { NullableParsedRow, ParsedRow } from "@/types/admin-data.ts";
import type { Column } from "@/types/column.ts";
import { booleanOptions, inputToNumber } from "@/utils/misc.ts";

import AdminData from "@/components/admin/AdminData.vue";

const { degreeFragments, courseFragments, courseTypeFragments } = defineProps<{
  degreeFragments: FragmentType<typeof AdminCoursesDegreeFragmentDoc>[];
  courseFragments: FragmentType<typeof AdminCourseFragmentDoc>[];
  courseTypeFragments: FragmentType<typeof AdminCoursesCourseTypeFragmentDoc>[];
}>();

const { t, n } = useCustomI18n();
const { years } = useYearsStore();

const idKey = "id";
const rowDescriptor = {
  year: { type: "number" },
  degree: { type: "string" },
  program: { type: "string" },
  track: { type: "string", nullable: true },
  name: { type: "string" },
  nameShort: { type: "string", nullable: true },
  semester: { type: "number" },
  type: { type: "string" },
  hours: { type: "number" },
  hoursAdjusted: { type: "number", nullable: true },
  groups: { type: "number" },
  groupsAdjusted: { type: "number", nullable: true },
  description: { type: "string", nullable: true },
  priorityRule: { type: "number", nullable: true },
  visible: { type: "boolean" },
} as const;

type Row = AdminCourseFragment;
type T = typeof rowDescriptor;
type FormValues = NullableParsedRow<T>;
type ImportRow = ParsedRow<T>;
type InsertInput = {
  year: number;
  programId: number;
  trackId: number | null;
  name: string;
  nameShort: string | null;
  semester: number;
  typeId: number;
  hours: number;
  hoursAdjusted: number | null;
  groups: number;
  groupsAdjusted: number | null;
  description: string | null;
  priorityRule: number | null;
  visible: boolean;
};

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
    nameDisplay
    programs {
      id
      name
      nameDisplay
      tracks {
        id
        name
        nameDisplay
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
const insertCourses = useMutation(InsertCoursesDocument, {
  refetchTags: ["Course"],
});
const upsertCourses = useMutation(UpsertCoursesDocument, {
  refetchTags: ["Course"],
});
const updateCourses = useMutation(UpdateCoursesDocument, {
  refetchTags: ["Course"],
});
const deleteCourses = useMutation(DeleteCoursesDocument, {
  refetchTags: ["Course"],
});

const constraint =
  CourseConstraint.CourseYearProgramIdTrackIdNameSemesterTypeIdKey;
const updateColumns = [
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

const columns: Column<Row>[] = [
  {
    name: "year",
    label: t("admin.courses.courses.table.columns.year"),
    align: "left",
    field: "year",
    sortable: true,
    searchable: false,
  },
  {
    name: "degree",
    label: t("admin.courses.courses.table.columns.degree"),
    align: "left",
    field: (row) => row.program.degree.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "program",
    label: t("admin.courses.courses.table.columns.program"),
    align: "left",
    field: (row) => row.program.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "track",
    label: t("admin.courses.courses.table.columns.track"),
    align: "left",
    field: (row) => row.track?.name,
    sortable: true,
    searchable: true,
  },
  {
    name: "name",
    label: t("admin.courses.courses.table.columns.name"),
    align: "left",
    field: "name",
    sortable: true,
    searchable: true,
  },
  {
    name: "nameShort",
    label: t("admin.courses.courses.table.columns.nameShort"),
    align: "left",
    field: "nameShort",
    sortable: true,
    searchable: true,
  },
  {
    name: "semester",
    label: t("admin.courses.courses.table.columns.semester"),
    align: "left",
    field: "semester",
    format: (val: number) => `S${val}`,
    sortable: true,
    searchable: false,
  },
  {
    name: "type",
    label: t("admin.courses.courses.table.columns.semester"),
    align: "left",
    field: (row) => row.type.label,
    sortable: true,
    searchable: false,
  },
  {
    name: "hours",
    label: t("admin.courses.courses.table.columns.hours"),
    field: "hours",
    format: (val: number | null) => (val === null ? null : n(val, "decimal")),
    sortable: true,
    searchable: false,
  },
  {
    name: "hoursAdjusted",
    label: t("admin.courses.courses.table.columns.hoursAdjusted"),
    field: "hoursAdjusted",
    format: (val: number | null) => (val === null ? null : n(val, "decimal")),
    sortable: true,
    searchable: false,
  },
  {
    name: "groups",
    label: t("admin.courses.courses.table.columns.groups"),
    field: "groups",
    format: (val: number | null) => (val === null ? null : n(val, "decimal")),
    sortable: true,
    searchable: false,
  },
  {
    name: "groupsAdjusted",
    label: t("admin.courses.courses.table.columns.groupsAdjusted"),
    field: "groupsAdjusted",
    format: (val: number | null) => (val === null ? null : n(val, "decimal")),
    sortable: true,
    searchable: false,
  },
  {
    name: "description",
    label: t("admin.courses.courses.table.columns.description"),
    align: "center",
    field: "description",
    format: (val: string) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
  {
    name: "priorityRule",
    label: t("admin.courses.courses.table.columns.priorityRule"),
    field: "priorityRule",
    sortable: true,
    searchable: false,
  },
  {
    name: "visible",
    label: t("admin.courses.courses.table.columns.visible"),
    align: "center",
    field: "visible",
    format: (val: boolean) => (val ? "✓" : "✗"),
    sortable: true,
    searchable: false,
  },
];

const formatRow = (row: Row) =>
  `${row.nameDisplay} (${row.program.degree.nameDisplay}` +
  ` — ${row.program.nameDisplay}` +
  (row.track ? ` — ${row.track.nameDisplay})` : `)`);

const initForm = (rows: Row[]): FormValues => ({
  year: rows[0]?.year ?? null,
  degree: rows[0]?.program.degree.name ?? null,
  program: rows[0]?.program.name ?? null,
  track: rows[0]?.track?.name ?? null,
  name: rows[0]?.name ?? null,
  nameShort: rows[0]?.nameShort ?? null,
  semester: rows[0]?.semester ?? null,
  type: rows[0]?.type.label ?? null,
  hours: rows[0]?.hours ?? null,
  hoursAdjusted: rows[0]?.hoursAdjusted ?? null,
  groups: rows[0]?.groups ?? null,
  groupsAdjusted: rows[0]?.groupsAdjusted ?? null,
  description: rows[0]?.description ?? null,
  priorityRule: rows[0]?.priorityRule ?? null,
  visible: rows[0]?.visible ?? null,
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

  if (importRow.year !== undefined) {
    object.year = importRow.year;
  }

  if (
    importRow.degree !== undefined ||
    importRow.program !== undefined ||
    importRow.track !== undefined
  ) {
    if (importRow.degree !== undefined && importRow.program === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.updateDegreeWithoutProgram"),
      );
    }

    if (importRow.program !== undefined && importRow.degree === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.updateProgramWithoutDegree"),
      );
    }

    const degree = degrees.value.find((d) => d.name === importRow.degree);
    if (degree === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.degreeNotFound", importRow),
      );
    }

    const program = degree.programs.find((p) => p.name === importRow.program);
    if (program === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.programNotFound", importRow),
      );
    }

    object.programId = program.id;

    if (importRow.track !== undefined) {
      if (importRow.degree === undefined) {
        throw new Error(
          t("admin.courses.courses.form.error.updateTrackWithoutDegree"),
        );
      }

      if (importRow.program === undefined) {
        throw new Error(
          t("admin.courses.courses.form.error.updateTrackWithoutProgram"),
        );
      }

      if (importRow.track === null) {
        object.trackId = null;
      } else {
        const track = program.tracks.find((t) => t.name === importRow.track);
        if (track === undefined) {
          throw new Error(
            t("admin.courses.courses.form.error.trackNotFound", importRow),
          );
        }
        object.trackId = track.id;
      }
    }
  }

  if (importRow.nameShort !== undefined) {
    object.nameShort = importRow.nameShort;
  }

  if (importRow.semester !== undefined) {
    object.semester = importRow.semester;
  }

  if (importRow.type !== undefined) {
    const type = courseTypes.value.find((ct) => ct.label === importRow.type);
    if (type === undefined) {
      throw new Error(
        t("admin.courses.courses.form.error.courseTypeNotFound", importRow),
      );
    }
    object.typeId = type.id;
  }

  if (importRow.name !== undefined) {
    object.name = importRow.name;
    if (
      checkConflicts &&
      courses.value.find(
        (t) =>
          t.year === object.year &&
          t.program.id === object.programId &&
          t.track?.id == object.trackId &&
          t.name === object.name &&
          t.semester === object.semester &&
          t.type.id === object.typeId,
      )
    ) {
      throw new Error(
        t(
          "admin.courses.courses.form.error.conflictYearProgramTrackNameSemesterType",
          importRow,
        ),
      );
    }
  }

  if (importRow.hours !== undefined) {
    if (importRow.hours < 0) {
      throw new Error(t("admin.courses.courses.form.error.hoursNegative"));
    }
    object.hours = importRow.hours;
  }

  if (importRow.hoursAdjusted !== undefined) {
    if (importRow.hoursAdjusted !== null && importRow.hoursAdjusted < 0) {
      throw new Error(
        t("admin.courses.courses.form.error.hoursAdjustedNegative"),
      );
    }
    object.hoursAdjusted = importRow.hoursAdjusted;
  }

  if (importRow.groups !== undefined) {
    if (importRow.groups < 0) {
      throw new Error(t("admin.courses.courses.form.error.groupsNegative"));
    }
    object.groups = importRow.groups;
  }

  if (importRow.groupsAdjusted !== undefined) {
    if (importRow.groupsAdjusted !== null && importRow.groupsAdjusted < 0) {
      throw new Error(
        t("admin.courses.courses.form.error.groupsAdjustedNegative"),
      );
    }
    object.groupsAdjusted = importRow.groupsAdjusted;
  }

  if (importRow.description !== undefined) {
    object.description = importRow.description;
  }

  if (importRow.priorityRule !== undefined) {
    if (
      importRow.priorityRule !== null &&
      (importRow.priorityRule < 0 || !Number.isInteger(importRow.priorityRule))
    ) {
      throw new Error(
        t("admin.courses.courses.form.error.priorityRuleNegative"),
      );
    }
    object.priorityRule = importRow.priorityRule;
  }

  if (importRow.visible !== undefined) {
    object.visible = importRow.visible;
  }

  return object;
}

const formValues = ref<FormValues>(initForm([]));
const selectedFields = ref<string[]>([]);

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
const semesterOptions = [1, 2, 3, 4, 5, 6].map((n) => ({
  value: n,
  label: `S${n}`,
}));

watch(
  [
    () => formValues.value.degree,
    () => formValues.value.program,
    () => formValues.value.track,
  ],
  ([degree, program, track]) => {
    const degreeProgram = degrees.value
      .find((d) => d.name === degree)
      ?.programs.find((p) => p.name === program);
    if (!degreeProgram) {
      formValues.value.program = null;
      formValues.value.track = null;
    } else if (!degreeProgram.tracks.some((t) => t.name === track)) {
      formValues.value.track = null;
    }
  },
);

// Filters
const selectedYears = ref<number[]>([]);
const selectedDegrees = ref<string[]>([]);
const selectProgramOptions = computed(() =>
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
const selectedPrograms = ref<{ degree: string; program: string }[]>([]);
const selectTrackOptions = computed(() =>
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
const selectedTracks = ref<
  { degree: string; program: string; track: string }[]
>([]);
const selectedSemesters = ref<number[]>([]);
const selectedTypes = ref<string[]>([]);
const selectedVisible = ref<boolean | null>(null);
const filterFn = computed(
  () => (r: Row) =>
    (!selectedYears.value.length || selectedYears.value.includes(r.year)) &&
    (!selectedDegrees.value.length ||
      selectedDegrees.value.includes(r.program.degree.name)) &&
    (!selectedPrograms.value.length ||
      selectedPrograms.value.some(
        (p) =>
          p.degree === r.program.degree.name && p.program === r.program.name,
      )) &&
    (!selectedTracks.value.length ||
      selectedTracks.value.some(
        (t) =>
          t.degree === r.program.degree.name &&
          t.program === r.program.name &&
          t.track === r.track?.name,
      )) &&
    (!selectedSemesters.value.length ||
      selectedSemesters.value.includes(r.semester)) &&
    (!selectedTypes.value.length ||
      selectedTypes.value.includes(r.type.label)) &&
    (selectedVisible.value === null || r.visible === selectedVisible.value),
);
</script>

<template>
  <AdminData
    v-model:form-values="formValues"
    v-model:selected-fields="selectedFields"
    name="tracks"
    message-prefix="admin.courses.courses"
    :id-key
    :row-descriptor
    :columns
    :rows="courses"
    :filter-fn
    :format-row
    :init-form
    :validate-import-row
    :insert-data="insertCourses"
    :upsert-data="upsertCourses"
    :update-data="updateCourses"
    :delete-data="deleteCourses"
    :constraint
    :update-columns
  >
    <template #filters>
      <QSelect
        v-model="selectedYears"
        :options="years.map((y) => y.value)"
        :label="t('admin.courses.courses.table.columns.year')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedDegrees"
        :options="degrees.map((d) => d.name)"
        :label="t('admin.courses.courses.table.columns.degree')"
        multiple
        use-chips
        square
        dense
        options-dense
        style="width: 100%"
      />
      <QSelect
        v-model="selectedPrograms"
        :options="selectProgramOptions"
        :label="t('admin.courses.courses.table.columns.program')"
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
        :options="selectTrackOptions"
        :label="t('admin.courses.courses.table.columns.track')"
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
        :label="t('admin.courses.courses.table.columns.year')"
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
        :options="courseTypes.map((ct) => ct.label)"
        :label="t('admin.courses.courses.table.columns.type')"
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
        color="primary"
        :label="t('admin.courses.courses.table.columns.visible')"
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
        :options="years.map((y) => y.value)"
        :label="t('admin.courses.courses.form.fields.year')"
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
        :options="degrees.map((d) => d.name)"
        :label="t('admin.courses.courses.form.fields.degree')"
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
        :label="t('admin.courses.courses.form.fields.program')"
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
        :label="t('admin.courses.courses.form.fields.track')"
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
        :label="t('admin.courses.courses.form.fields.name')"
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
        :label="t('admin.courses.courses.form.fields.nameShort')"
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
        :label="t('admin.courses.courses.form.fields.semester')"
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
        :options="courseTypes.map((ct) => ct.label)"
        :label="t('admin.courses.courses.form.fields.type')"
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
        :label="t('admin.courses.courses.form.fields.hours')"
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
        :label="t('admin.courses.courses.form.fields.hoursAdjusted')"
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
        :label="t('admin.courses.courses.form.fields.groups')"
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
        :label="t('admin.courses.courses.form.fields.groupsAdjusted')"
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
        :label="t('admin.courses.courses.form.fields.description')"
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
        :label="t('admin.courses.courses.form.fields.priorityRule')"
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
      <div class="q-mr-md">
        <QCheckbox
          v-if="multipleSelection"
          v-model="selectedFields"
          val="active"
        />
        <QToggle
          v-model="formValues.visible"
          :label="t('admin.courses.courses.form.fields.visible')"
          :disable="multipleSelection && !selectedFields.includes('visible')"
          left-label
        />
      </div>
    </template>
  </AdminData>
</template>

<style scoped lang="scss"></style>
