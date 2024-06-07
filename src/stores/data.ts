/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { RowEnseignement, RowIntervenant } from "@/helpers/types.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { ComputedRef, Ref, computed, ref } from "vue";

export const selectedIntervenants: Ref<RowIntervenant[]> = ref([]);
export const selectedEnseignements: Ref<RowEnseignement[]> = ref([]);
const myRow: Ref<RowIntervenant | null> = ref(null);

const intervenant: ComputedRef<RowIntervenant | null> = computed(
  () => selectedIntervenants.value[0] ?? null,
);
const enseignement: ComputedRef<RowEnseignement | null> = computed(
  () => selectedEnseignements.value[0] ?? null,
);

export const useData = () => {
  const { uid: moi } = useAuthentication();
  const selectedMe: ComputedRef<boolean> = computed(
    () => intervenant.value?.uid === moi.value,
  );
  const setMyRow = (row: RowIntervenant | null) => {
    myRow.value = row;
  };
  const toggleMonService = () => {
    if (selectedMe.value) {
      selectedIntervenants.value = [];
    } else if (myRow.value) {
      selectedIntervenants.value = [myRow.value];
    }
  };
  return {
    intervenant,
    enseignement,
    selectedMe,
    setMyRow,
    toggleMonService,
  };
};
