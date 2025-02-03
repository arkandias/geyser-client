import { readonly, ref } from "vue";

import { PHASES, type Phase } from "@/config/types/phases.ts";

const currentPhase = ref<Phase>(PHASES.SHUTDOWN);

const setCurrentPhase = (phase: Phase) => {
  currentPhase.value = phase;
};

export const usePhaseStore = () => ({
  currentPhase: readonly(currentPhase),
  setCurrentPhase,
});
