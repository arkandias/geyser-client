export const PHASES = {
  REQUESTS: "voeux",
  ASSIGNMENTS: "commission",
  RESULTS: "consultation",
  SHUTDOWN: "fermeture",
} as const;

export const PHASE_OPTIONS = [
  { value: PHASES.REQUESTS, label: "Vœux" },
  { value: PHASES.ASSIGNMENTS, label: "Commission" },
  { value: PHASES.RESULTS, label: "Consultation" },
  { value: PHASES.SHUTDOWN, label: "Fermeture" },
] as const;

export type Phase = (typeof PHASES)[keyof typeof PHASES];

export const isPhase = (phase: unknown): phase is Phase =>
  Object.values(PHASES).includes(phase as Phase);
