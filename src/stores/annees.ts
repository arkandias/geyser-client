/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { useMutation } from "@urql/vue";
import type { ComputedRef, Ref } from "vue";
import { computed, readonly, ref } from "vue";

import { UPDATE_ANNEE_EN_COURS } from "@/graphql/annees.ts";

export const annees: Ref<number[]> = ref([]);
export const enCours: Ref<number | null> = ref(null);
export const selected: Ref<number | null> = ref(null);

const active: ComputedRef<number | null> = computed(() =>
  selected.value !== null && annees.value.includes(selected.value)
    ? selected.value
    : enCours.value,
);
const enCoursActive: ComputedRef<boolean> = computed(
  () => active.value === enCours.value,
);

const select = (annee?: number | null): void => {
  selected.value = annee ?? null;
};

export const useAnnees = () => {
  const update = useMutation(UPDATE_ANNEE_EN_COURS);
  const setEnCours = async (annee: number | null): Promise<void> => {
    if (annee === null) {
      return;
    }
    await update.executeMutation({
      value: annee,
    });
  };
  return {
    annees: readonly(annees),
    enCours: readonly(enCours),
    selected: readonly(selected),
    active,
    enCoursActive,
    setEnCours,
    select,
  };
};
