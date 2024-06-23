/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { useMutation } from "@urql/vue";

import { DUMMY_MUTATION } from "@/graphql/demandes.ts";

export const useRefresh = () => {
  // this is an ugly hack to invalidate cache (using urql's Document Caching):
  // we use a dummy mutation and add all the typenames we wish to invalidate
  const dummyMutation = useMutation(DUMMY_MUTATION);
  const refresh = async (): Promise<void> => {
    await dummyMutation.executeMutation(
      {},
      {
        additionalTypenames: [
          "ec_demande",
          "ec_message",
          "ec_modification_service",
          "ec_priorite",
        ],
      },
    );
  };
  return { refresh };
};
