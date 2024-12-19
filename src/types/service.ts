import type { Profile } from "@/types/profile.ts";
import type { TotalWeightedHours } from "@/types/row.ts";
import type { ServiceModification } from "@/types/service-modification.ts";

export type Service = {
  id: number;
  teacher: Profile;
  weightedHours: number;
  totalModifications: TotalWeightedHours;
};

export type ServiceDetails = Service & {
  modifications: ServiceModification[];
};
