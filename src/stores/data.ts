import { type Ref, readonly, ref } from "vue";

import type { CourseRow } from "@/types/course.ts";
import type { TeacherRow } from "@/types/teacher.ts";

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

const selectedCourse: Ref<CourseRow[]> = ref([]);
const selectedTeacher: Ref<TeacherRow[]> = ref([]);
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

export const useData = () => ({
  courses: readonly(courses),
  teachers: readonly(teachers),
  fetchingCourses: readonly(fetchingCourses),
  fetchingTeachers: readonly(fetchingTeachers),
  selectedCourse, // TODO: readonly?
  selectedTeacher, // TODO: readonly?
  setCourses,
  setTeachers,
  setFetchingCourses,
  setFetchingTeachers,
  selectCourse,
  selectTeacher,
});
