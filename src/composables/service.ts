import { useQuery } from "@urql/vue";
import { computed, reactive } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { graphql } from "@/gql";
import { GetServiceDocument } from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/years.ts";

graphql(`
  query GetService($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      services(
        where: { annee: { _eq: $year } }
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
    query: GetServiceDocument,
    variables: reactive({
      year: computed(() => activeYear.value ?? -1),
      uid: computed(() => profile.uid),
    }),
    pause: () => activeYear.value === null,
  });
  const hasService = computed(
    () => !!serviceQueryResult.data.value?.teacher?.services.length,
  );
  return { hasService };
};
