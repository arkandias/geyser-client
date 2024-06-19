/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { errorNotify } from "@/helpers/notify.ts";
import { RowEnseignement, RowIntervenant } from "@/helpers/types.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { ComputedRef, Ref, computed, ref } from "vue";

const intervenants: Ref<RowIntervenant[]> = ref([]);
const enseignements: Ref<RowEnseignement[]> = ref([]);

const setIntervenants = (rows: RowIntervenant[]) => {
  intervenants.value = rows;
};
const setEnseignements = (rows: RowEnseignement[]) => {
  enseignements.value = rows;
};

export const selectedIntervenants: Ref<RowIntervenant[]> = ref([]);
export const selectedEnseignements: Ref<RowEnseignement[]> = ref([]);

const deselectEnseignement = () => {
  selectedEnseignements.value = [];
};
const deselectIntervenant = () => {
  selectedIntervenants.value = [];
};

const intervenant: ComputedRef<RowIntervenant | null> = computed(
  () => selectedIntervenants.value[0] ?? null,
);
const enseignement: ComputedRef<RowEnseignement | null> = computed(
  () => selectedEnseignements.value[0] ?? null,
);

export const useData = () => {
  const { uid: moi } = useAuthentication();
  const myRow: ComputedRef<RowIntervenant | null> = computed(
    () => intervenants.value.find((row) => row.uid === moi.value) ?? null,
  );
  const selectedMe: ComputedRef<boolean> = computed(
    () => intervenant.value?.uid === moi.value,
  );
  const selectMe = () => {
    selectedIntervenants.value = myRow.value ? [myRow.value] : [];
  };
  const toggleMonService = () => {
    if (selectedMe.value) {
      selectedIntervenants.value = [];
    } else if (myRow.value) {
      selectedIntervenants.value = [myRow.value];
    } else {
      // todo!
      console.error(`User '${moi.value}' is not an active user`);
      errorNotify(
        "Vous n'êtes pas un intervenant actif",
        "Vous ne pouvez pas voir votre service'",
      );
    }
  };
  return {
    intervenant,
    enseignement,
    setIntervenants,
    setEnseignements,
    deselectIntervenant,
    deselectEnseignement,
    selectedMe,
    selectMe,
    toggleMonService,
  };
};
