import { useQuery } from "@urql/vue";
import { computed, reactive } from "vue";

import { graphql } from "@/gql";
import { GetServiceFromTeacherDocument } from "@/gql/graphql.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

graphql(`
  query GetServiceFromTeacher($year: Int!, $uid: String!) {
    teacher: teacherByPk(uid: $uid) {
      services(
        where: { year: { _eq: $year } }
        limit: 1 # unique
      ) {
        id
      }
    }
  }
`);

export const useService = () => {
  const { uid } = useProfileStore();
  const { activeYear } = useYearsStore();
  const serviceQueryResult = useQuery({
    query: GetServiceFromTeacherDocument,
    variables: reactive({
      year: computed(() => activeYear.value ?? NaN),
      uid,
    }),
    pause: () => activeYear.value === null,
  });
  const serviceId = computed(
    () => serviceQueryResult.data.value?.teacher?.services[0]?.id ?? null,
  );
  const hasService = computed(() => serviceId.value !== null);
  return { serviceId, hasService };
};
