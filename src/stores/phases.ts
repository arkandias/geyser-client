import { useMutation } from "@urql/vue";
import { type Ref, readonly, ref } from "vue";

import type { Phase } from "@/config/types/phases.ts";
import { SET_CURRENT_PHASE } from "@/graphql/phases.ts";

export const current: Ref<Phase | null> = ref(null);

export const usePhases = () => {
  const update = useMutation(SET_CURRENT_PHASE);
  const setCurrent = async (phase: string | null): Promise<void> => {
    if (phase === null) {
      return;
    }
    await update.executeMutation({
      value: phase,
    });
  };
  return {
    current: readonly(current),
    setCurrent,
  };
};
