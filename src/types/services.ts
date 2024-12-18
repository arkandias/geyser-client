import type { Profile } from "@/types/profile.ts";

export type Service = {
  id: number;
  teacher: Profile;
  weightedHours: number;
};

export type ModificationType = {
  label: string;
  description: string | null;
};

export type Modification = {
  id: number;
  modificationType: string;
  heuresEQTD: number;
};
