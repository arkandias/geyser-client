/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { UPDATE_PHASE_EN_COURS } from "@/graphql/phases.ts";
import { useMutation } from "@urql/vue";
import { Ref, readonly, ref } from "vue";

export const phases: Ref<string[]> = ref([]);
export const enCours: Ref<string | null> = ref(null);

export const usePhases = () => {
  const update = useMutation(UPDATE_PHASE_EN_COURS);
  const setEnCours = async (phase: string | null): Promise<void> => {
    if (!phase) {
      return;
    }
    await update.executeMutation({
      value: phase,
    });
  };
  return {
    phases: readonly(phases),
    enCours: readonly(enCours),
    setEnCours,
  };
};
