export const PHASES = {
  REQUESTS: "voeux",
  ASSIGNMENTS: "commission",
  RESULTS: "consultation",
  SHUTDOWN: "fermeture",
} as const;

export const PHASE_METADATA = {
  [PHASES.REQUESTS]: { order: 1, label: "Vœux" },
  [PHASES.ASSIGNMENTS]: { order: 2, label: "Commission" },
  [PHASES.RESULTS]: { order: 3, label: "Consultation" },
  [PHASES.SHUTDOWN]: { order: 4, label: "Fermeture" },
} as const;

export type Phase = (typeof PHASES)[keyof typeof PHASES];

export const isPhase = (phase: unknown): phase is Phase =>
  Object.values(PHASES).includes(phase as Phase);

export const getPhase = (phase: Phase): keyof typeof PHASES => {
  const entry = Object.entries(PHASES).find(([_, value]) => value === phase);
  if (!entry) {
    throw new Error(`Invalid phase '${phase}'`);
  }
  return entry[0] as keyof typeof PHASES;
};

export const labelPhase = (phase: Phase): string => PHASE_METADATA[phase].label;

export const orderPhase = (phase: Phase): number => PHASE_METADATA[phase].order;
