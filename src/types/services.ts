import type { TotalWeightedHours } from "@/types/common.ts";
import type { Profile } from "@/types/profile.ts";
import type { ServiceModification } from "@/types/service-modifications.ts";

export type Service = {
  id: number;
  teacher: Profile;
  weightedHours: number;
};

export type ServiceDetails = Service & {
  modifications: ServiceModification[];
  totalModifications: TotalWeightedHours;
};
