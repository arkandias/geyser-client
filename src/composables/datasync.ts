/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { GET_ENSEIGNEMENTS_TABLE_ROWS } from "@/graphql/enseignements.ts";
import { GET_SERVICES_TABLE_ROWS } from "@/graphql/services.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useData } from "@/stores/data.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { useQuery } from "@urql/vue";
import { computed, reactive, watch } from "vue";

export const useDataSync = () => {
  const { active: anneeActive } = useAnnees();
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
      annee: computed(() => anneeActive.value ?? 0),
    }),
    pause: () => anneeActive.value === null,
    context: { additionalTypenames: ["demande"] },
  });
  const queryServices = useQuery({
    query: GET_SERVICES_TABLE_ROWS,
    variables: reactive({
      annee: computed(() => anneeActive.value ?? 0),
      where: computed(() =>
        perm.deVoirLeServiceDAutrui ? {} : { uid: { _eq: moi } },
      ),
    }),
    pause: () => anneeActive.value === null,
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
