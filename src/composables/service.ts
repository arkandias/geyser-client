import { useQuery } from "@urql/vue";
import { computed, reactive } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { graphql } from "@/gql";
import { GetServiceFromTeacherDocument } from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";

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
  const { profile } = useAuthentication();
  const { activeYear } = useYearsStore();
  const serviceQueryResult = useQuery({
    query: GetServiceFromTeacherDocument,
    variables: reactive({
      year: computed(() => activeYear.value ?? NaN),
      uid: computed(() => profile.uid),
    }),
    pause: () => activeYear.value === null,
  });
  const hasService = computed(
    () => !!serviceQueryResult.data.value?.teacher?.services.length,
  );
  return { hasService };
};
