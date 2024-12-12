/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { ComputedRef } from "vue";
import { computed, readonly } from "vue";

import { usePermissions } from "@/stores/permissions.ts";
import { TypeDemande } from "@/types/demandes.ts";

const types = (
  ["attribution", "principale", "secondaire"] as TypeDemande[]
).sort((a, b) => TypeDemande[a].order - TypeDemande[b].order);

export const useDemandes = () => {
  const perm = usePermissions();
  const typesAffiches: ComputedRef<TypeDemande[]> = computed(() =>
    types.filter((a) => perm.deVoirLesAttributions || a != "attribution"),
  );
  return {
    typesAffiches: readonly(typesAffiches),
  };
};
