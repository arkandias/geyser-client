import type { Profile } from "@/types/profile.ts";

export type Coordinator = {
  id: number;
  profile: Profile;
  comment: string | null;
};
