import { type ComputedRef, type Ref, computed, readonly, ref } from "vue";

import { useAuthentication } from "@/stores/authentication.ts";
import type { CourseRow } from "@/types/courses.ts";
import type { TeacherRow } from "@/types/teachers.ts";

const courses: Ref<CourseRow[]> = ref([]);
const teachers: Ref<TeacherRow[]> = ref([]);
const setCourses = (rows: CourseRow[]) => {
  courses.value = rows;
};
const setTeachers = (rows: TeacherRow[]) => {
  teachers.value = rows;
};

const fetchingCourses: Ref<boolean> = ref(false);
const fetchingTeachers: Ref<boolean> = ref(false);
const setFetchingCourses = (value: boolean) => {
  fetchingCourses.value = value;
};
const setFetchingTeachers = (value: boolean) => {
  fetchingTeachers.value = value;
};

export const selectedCourse: Ref<CourseRow[]> = ref([]);
export const selectedTeacher: Ref<TeacherRow[]> = ref([]);
const selectCourse = (courseId?: number | null) => {
  selectedCourse.value = courses.value.filter(
    (course) => course.id === courseId,
  );
};
const selectTeacher = (uid?: string | null) => {
  selectedTeacher.value = teachers.value.filter(
    (teacher) => teacher.uid === uid,
  );
};

export const useData = () => {
  const { uid: myUid } = useAuthentication();
  const myRow: ComputedRef<TeacherRow | null> = computed(
    () => teachers.value.find((row) => row.uid === myUid.value) ?? null,
  );
  const isMyRowSelected: ComputedRef<boolean> = computed(
    () => selectedTeacher.value[0]?.uid === myUid.value,
  );
  const toggleMyRow = () => {
    if (isMyRowSelected.value) {
      selectTeacher(null);
    } else if (myRow.value) {
      selectTeacher(myUid.value);
      selectCourse(null);
    }
  };
  return {
    courses: readonly(courses),
    teachers: readonly(teachers),
    fetchingCourses: readonly(fetchingCourses),
    fetchingTeachers: readonly(fetchingTeachers),
    selectedCourse,
    selectedTeacher,
    myRow,
    isMyRowSelected,
    setCourses,
    setTeachers,
    setFetchingCourses,
    setFetchingTeachers,
    selectCourse,
    selectTeacher,
    toggleMyRow,
  };
};
