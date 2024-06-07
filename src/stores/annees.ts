/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { UPDATE_ANNEE_EN_COURS } from "@/graphql/annees.ts";
import { useMutation } from "@urql/vue";
import { ComputedRef, Ref, computed, readonly, ref } from "vue";

export const annees: Ref<number[]> = ref([]);
export const enCours: Ref<number | null> = ref(null);
export const active: Ref<number | null> = ref(null);

const enCoursActive: ComputedRef<boolean> = computed(
  () => active.value === enCours.value,
);

export const useAnnees = () => {
  const update = useMutation(UPDATE_ANNEE_EN_COURS);
  const setEnCours = async (annee: number | null): Promise<void> => {
    if (!annee) {
      return;
    }
    await update.executeMutation({
      value: annee,
    });
  };
  return {
    annees: readonly(annees),
    enCours: readonly(enCours),
    active: readonly(active),
    enCoursActive,
    setEnCours,
  };
};
