export const PHASES = {
  REQUESTS: "requests",
  ASSIGNMENTS: "assignments",
  RESULTS: "results",
  SHUTDOWN: "shutdown",
} as const;

export type Phase = (typeof PHASES)[keyof typeof PHASES];

export const isPhase = (phase: unknown): phase is Phase =>
  Object.values(PHASES).includes(phase as Phase);

export type CapPhase = Capitalize<Phase>;

export const capPhase = (phase: Phase) =>
  (phase.charAt(0).toUpperCase() + phase.slice(1)) as CapPhase;
