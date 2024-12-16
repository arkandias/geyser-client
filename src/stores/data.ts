/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { ComputedRef, Ref } from "vue";
import { computed, readonly, ref } from "vue";

import { useAuthentication } from "@/stores/authentication.ts";
import type { RowEnseignement, RowIntervenant } from "@/types/rows.ts";

const intervenants: Ref<RowIntervenant[]> = ref([]);
const enseignements: Ref<RowEnseignement[]> = ref([]);
const setIntervenants = (rows: RowIntervenant[]) => {
  intervenants.value = rows;
};
const setEnseignements = (rows: RowEnseignement[]) => {
  enseignements.value = rows;
};

const fetchingIntervenants: Ref<boolean> = ref(false);
const fetchingEnseignements: Ref<boolean> = ref(false);
const setFetchingIntervenants = (value: boolean) => {
  fetchingIntervenants.value = value;
};
const setFetchingEnseignements = (value: boolean) => {
  fetchingEnseignements.value = value;
};

export const selectedIntervenant: Ref<{ uid: string }[]> = ref([]);
export const selectedEnseignement: Ref<{ id: number }[]> = ref([]);
const selectIntervenant = (uid?: string | null) => {
  selectedIntervenant.value = uid != null ? [{ uid }] : [];
};
const selectEnseignement = (id?: number | null) => {
  selectedEnseignement.value = id != null ? [{ id }] : [];
};

const intervenant: ComputedRef<RowIntervenant | null> = computed(
  () =>
    intervenants.value.find(
      (row) => row.uid === selectedIntervenant.value[0]?.uid,
    ) ?? null,
);
const enseignement: ComputedRef<RowEnseignement | null> = computed(
  () =>
    enseignements.value.find(
      (row) => row.id === selectedEnseignement.value[0]?.id,
    ) ?? null,
);

export const useData = () => {
  const { uid: moi } = useAuthentication();
  const myRow: ComputedRef<RowIntervenant | null> = computed(
    () => intervenants.value.find((row) => row.uid === moi.value) ?? null,
  );
  const meSelected: ComputedRef<boolean> = computed(
    () => intervenant.value?.uid === moi.value,
  );
  const toggleMonService = () => {
    if (meSelected.value) {
      selectIntervenant(null);
    } else if (myRow.value) {
      selectIntervenant(moi.value);
      selectEnseignement(null);
    }
  };
  return {
    intervenants: readonly(intervenants),
    enseignements: readonly(enseignements),
    fetchingIntervenants: readonly(fetchingIntervenants),
    fetchingEnseignements: readonly(fetchingEnseignements),
    selectedIntervenant: readonly(selectedIntervenant),
    selectedEnseignement: readonly(selectedEnseignement),
    intervenant,
    enseignement,
    setIntervenants,
    setEnseignements,
    setFetchingIntervenants,
    setFetchingEnseignements,
    selectIntervenant,
    selectEnseignement,
    myRow,
    meSelected,
    toggleMonService,
  };
};
