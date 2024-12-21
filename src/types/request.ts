import type { Profile } from "@/types/profile.ts";

export type RequestDetails = {
  id: number;
  teacher: Profile;
  course: {
    id: number;
    hoursPerGroup: number | null;
  };
  type: string;
  hours: number;
  weightedHours: number | null;
  isPriority: boolean | null;
};
