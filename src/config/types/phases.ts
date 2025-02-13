export const PHASES = {
  REQUESTS: "requests",
  ASSIGNMENTS: "assignments",
  RESULTS: "results",
  SHUTDOWN: "shutdown",
} as const;

export type Phase = (typeof PHASES)[keyof typeof PHASES];

export const isPhase = (phase: unknown): phase is Phase =>
  Object.values(PHASES).includes(phase as Phase);
