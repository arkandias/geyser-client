/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { GET_ENSEIGNEMENTS_TABLE_ROWS } from "@/graphql/enseignements.ts";
import { GET_INTERVENANTS_TABLE_ROWS } from "@/graphql/intervenants.ts";
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
    setIntervenants,
    setFetchingEnseignements,
    setFetchingIntervenants,
  } = useData();

  const queryEnseignements = useQuery({
    query: GET_ENSEIGNEMENTS_TABLE_ROWS,
    variables: reactive({
      annee: computed(() => anneeActive.value ?? 0),
    }),
    pause: () => anneeActive.value === null,
    context: { additionalTypenames: ["demande"] },
  });
  const queryIntervenants = useQuery({
    query: GET_INTERVENANTS_TABLE_ROWS,
    variables: reactive({
      annee: computed(() => anneeActive.value ?? 0),
      where: computed(() =>
        perm.deVoirLeServiceDAutrui ? null : { uid: { _eq: moi } },
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
  watch(() => queryIntervenants.fetching.value, setFetchingIntervenants, {
    immediate: true,
  });
  watch(
    () => queryEnseignements.data.value?.enseignements ?? [],
    setEnseignements,
    { immediate: true },
  );
  watch(
    () => queryIntervenants.data.value?.intervenants ?? [],
    setIntervenants,
    {
      immediate: true,
    },
  );
};
