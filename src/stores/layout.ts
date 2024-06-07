/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { readonly, Ref, ref } from "vue";

const filtreIntervenants: Ref<boolean> = ref(false);
export const hSplitterRatio: Ref<number> = ref(50);
export const vSplitterRatio: Ref<number> = ref(0);
const vSplitterRatioSaved: Ref<number> = ref(30);

const openFilter = (): void => {
  if (!filtreIntervenants.value) {
    filtreIntervenants.value = true;
    vSplitterRatio.value = vSplitterRatioSaved.value;
  }
};
const closeFilter = (): void => {
  if (filtreIntervenants.value) {
    filtreIntervenants.value = false;
    vSplitterRatioSaved.value = vSplitterRatio.value;
    vSplitterRatio.value = 0;
  }
};
const toggleFilter = (): void => {
  if (filtreIntervenants.value) {
    closeFilter();
  } else {
    openFilter();
  }
};

export const useLayout = () => ({
  filtreIntervenants: readonly(filtreIntervenants),
  openFilter,
  closeFilter,
  toggleFilter,
});
