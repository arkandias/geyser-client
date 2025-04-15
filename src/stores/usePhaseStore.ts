import { readonly, ref } from "vue";

import { PHASES, type Phase, isPhase } from "@/config/phases.ts";

const currentPhase = ref<Phase>(PHASES.SHUTDOWN);

const setCurrentPhase = (phase: string) => {
  if (isPhase(phase)) {
    currentPhase.value = phase;
  } else {
    console.error(`Invalid phase: ${phase}`);
  }
};

export const usePhaseStore = () => ({
  currentPhase: readonly(currentPhase),
  setCurrentPhase,
});
