import { useMutation } from "@urql/vue";
import type { Ref } from "vue";
import { readonly, ref } from "vue";

import { UPDATE_PHASE_EN_COURS } from "@/graphql/phases.ts";
import type { Phase } from "@/types/phases.ts";

export const phases: Ref<Phase[]> = ref([]);
export const enCours: Ref<Phase | null> = ref(null);

export const usePhases = () => {
  const update = useMutation(UPDATE_PHASE_EN_COURS);
  const setEnCours = async (phase: string | null): Promise<void> => {
    if (phase === null) {
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
