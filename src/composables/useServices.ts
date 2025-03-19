import { useQuery } from "villus";
import { computed, reactive } from "vue";

import { graphql } from "@/gql";
import { GetServicesDocument } from "@/gql/graphql.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

graphql(`
  query GetServices($year: Int!) {
    services: service(
      where: { year: { _eq: $year } }
      orderBy: [{ teacher: { displayname: ASC } }]
    ) {
      id
      teacher {
        uid
        displayname
      }
    }
  }
`);

export const useServices = () => {
  const { activeYear } = useYearsStore();
  const { uid: myUid } = useProfileStore();

  const { data, isFetching: fetchingServices } = useQuery({
    query: GetServicesDocument,
    variables: reactive({ year: computed(() => activeYear.value ?? -1) }),
    paused: () => activeYear.value === null,
    tags: ["all"],
  });

  const services = computed(() => data.value?.services ?? []);
  const myServiceId = computed(
    () => services.value.find((s) => s.teacher.uid === myUid.value)?.id ?? null,
  );
  const hasService = computed(() => myServiceId.value !== null);

  return { fetchingServices, services, myServiceId, hasService };
};
