import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { GET_COURSES_TABLE_ROWS } from "@/graphql/courses.ts";
import { GET_TEACHERS_TABLE_ROWS } from "@/graphql/teachers.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { useYears } from "@/stores/years.ts";

export const useDataSync = () => {
  const { active: activeYear } = useYears();
  const { uid: moi } = useAuthentication();
  const perm = usePermissions();
  const { setCourses, setServices, setFetchingCourses, setFetchingServices } =
    useData();

  const queryCourses = useQuery({
    query: GET_COURSES_TABLE_ROWS,
    variables: reactive({
      year: computed(() => activeYear.value ?? 0),
    }),
    pause: () => activeYear.value === null,
    context: { additionalTypenames: ["demande"] },
  });
  const queryServices = useQuery({
    query: GET_TEACHERS_TABLE_ROWS,
    variables: reactive({
      year: computed(() => activeYear.value ?? 0),
      where: computed(() =>
        perm.deVoirLeServiceDAutrui ? {} : { uid: { _eq: moi } },
      ),
    }),
    pause: () => activeYear.value === null,
    context: {
      additionalTypenames: ["demande", "message", "modification_service"],
    },
  });

  // store the fetching status and query result and update on change
  watch(queryCourses.fetching, setFetchingCourses, {
    immediate: true,
  });
  watch(() => queryServices.fetching.value, setFetchingServices, {
    immediate: true,
  });
  watch(() => queryCourses.data.value?.courses ?? [], setCourses, {
    immediate: true,
  });
  watch(() => queryServices.data.value?.services ?? [], setServices, {
    immediate: true,
  });
};
