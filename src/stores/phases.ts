import { type Ref, readonly, ref } from "vue";

import type { Phase } from "@/config/types/phases.ts";

const currentPhase: Ref<Phase | null> = ref(null);

const setCurrentPhase = (phase: Phase | null) => {
  currentPhase.value = phase;
};

export const usePhases = () => ({
  currentPhase: readonly(currentPhase),
  setCurrentPhase,
});
