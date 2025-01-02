import { readonly, ref } from "vue";

import type { Phase } from "@/config/types/phases.ts";

const currentPhase = ref<Phase | null>(null);

const setCurrentPhase = (phase: Phase | null) => {
  currentPhase.value = phase;
};

export const usePhaseStore = () => ({
  currentPhase: readonly(currentPhase),
  setCurrentPhase,
});
