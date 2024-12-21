import type { TotalWeightedHours } from "@/types/row.ts";
import type { ServiceModification } from "@/types/service-modification.ts";

export type Service = {
  year: number;
  uid: string;
  base: number;
  totalModifications: TotalWeightedHours;
};

export type ServiceDetails = Service & {
  modifications: ServiceModification[];
};
