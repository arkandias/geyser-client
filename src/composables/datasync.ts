import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { GET_ENSEIGNEMENTS_TABLE_ROWS } from "@/graphql/enseignements.ts";
import { GET_SERVICES_TABLE_ROWS } from "@/graphql/services.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { useYears } from "@/stores/years.ts";

export const useDataSync = () => {
  const { active: activeYear } = useYears();
  const { uid: moi } = useAuthentication();
  const perm = usePermissions();
  const {
    setEnseignements,
    setServices,
    setFetchingEnseignements,
    setFetchingServices,
  } = useData();

  const queryEnseignements = useQuery({
    query: GET_ENSEIGNEMENTS_TABLE_ROWS,
    variables: reactive({
      year: computed(() => activeYear.value ?? 0),
    }),
    pause: () => activeYear.value === null,
    context: { additionalTypenames: ["demande"] },
  });
  const queryServices = useQuery({
    query: GET_SERVICES_TABLE_ROWS,
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
  watch(queryEnseignements.fetching, setFetchingEnseignements, {
    immediate: true,
  });
  watch(() => queryServices.fetching.value, setFetchingServices, {
    immediate: true,
  });
  watch(
    () => queryEnseignements.data.value?.enseignements ?? [],
    setEnseignements,
    { immediate: true },
  );
  watch(() => queryServices.data.value?.services ?? [], setServices, {
    immediate: true,
  });
};
