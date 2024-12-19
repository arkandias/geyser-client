import { type ComputedRef, type Ref, computed, readonly, ref } from "vue";

import { useAuthentication } from "@/stores/authentication.ts";
import type { CourseRow } from "@/types/courses.ts";
import type { TeacherRow } from "@/types/teachers.ts";

const courses: Ref<CourseRow[]> = ref([]);
const services: Ref<TeacherRow[]> = ref([]);
const setCourses = (rows: CourseRow[]) => {
  courses.value = rows;
};
const setServices = (rows: TeacherRow[]) => {
  services.value = rows;
};

const fetchingCourses: Ref<boolean> = ref(false);
const fetchingServices: Ref<boolean> = ref(false);
const setFetchingCourses = (value: boolean) => {
  fetchingCourses.value = value;
};
const setFetchingServices = (value: boolean) => {
  fetchingServices.value = value;
};

export const selectedCourse: Ref<CourseRow[]> = ref([]);
export const selectedService: Ref<TeacherRow[]> = ref([]);
const selectCourse = (course?: CourseRow | null) => {
  selectedCourse.value = course ? [course] : [];
};
const selectService = (service?: TeacherRow | null) => {
  selectedService.value = service ? [service] : [];
};

export const useData = () => {
  const { uid: myId } = useAuthentication();
  const myService: ComputedRef<TeacherRow | null> = computed(
    () => services.value.find((row) => row.teacher.uid === myId.value) ?? null,
  );
  const isMyServiceSelected: ComputedRef<boolean> = computed(
    () => selectedService.value[0]?.teacher.uid === myId.value,
  );
  const toggleMyService = () => {
    if (isMyServiceSelected.value) {
      selectService(null);
    } else if (myService.value) {
      selectService(myService.value);
      selectCourse(null);
    }
  };
  return {
    services: readonly(services),
    courses: readonly(courses),
    fetchingServices: readonly(fetchingServices),
    fetchingCourses: readonly(fetchingCourses),
    selectedService: readonly(selectedService),
    selectedCourse: readonly(selectedCourse),
    myService,
    isMyServiceSelected,
    setServices,
    setCourses,
    setFetchingServices,
    setFetchingCourses,
    selectService,
    selectCourse,
    toggleMyService,
  };
};
