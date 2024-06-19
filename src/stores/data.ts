/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { RowEnseignement, RowIntervenant } from "@/helpers/types.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { ComputedRef, Ref, computed, readonly, ref } from "vue";

const intervenants: Ref<RowIntervenant[]> = ref([]);
const enseignements: Ref<RowEnseignement[]> = ref([]);

const setIntervenants = (rows: RowIntervenant[]) => {
  intervenants.value = rows;
};
const setEnseignements = (rows: RowEnseignement[]) => {
  enseignements.value = rows;
};

const myRow: Ref<RowIntervenant | null> = ref(null);
const setMyRow = (row: RowIntervenant | null) => {
  myRow.value = row;
};

export const selectedIntervenants: Ref<RowIntervenant[]> = ref([]);
export const selectedEnseignements: Ref<RowEnseignement[]> = ref([]);

const selectMe = () => {
  selectedIntervenants.value = myRow.value ? [myRow.value] : [];
};
const deselectIntervenant = () => {
  selectedIntervenants.value = [];
};
const deselectEnseignement = () => {
  selectedEnseignements.value = [];
};

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
    setIntervenants,
    setEnseignements,
    myRow: readonly(myRow),
    setMyRow,
    deselectIntervenant,
    deselectEnseignement,
    selectMe,
    toggleMonService,
  };
};
