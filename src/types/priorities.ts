import type { Profile } from "@/types/profile.ts";

export type Priority = {
  id: number;
  teacher: Profile;
  courseId: number;
  seniority: number | null;
  isPriority: boolean | null;
};
