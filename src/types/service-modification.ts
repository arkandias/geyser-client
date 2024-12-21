import type { ModificationType } from "@/types/modification-type.ts";

export type ServiceModification = {
  id: number;
  modificationType: ModificationType;
  weightedHours: number;
};
