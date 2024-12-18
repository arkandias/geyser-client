import type { NestedArchives, Priority, Request } from "@/types/demandes.ts";
import type { Profile } from "@/types/profile.ts";

export type Coordinator = {
  profile: Profile;
  comment: string | null;
};

export type Resume = {
  courseId: number;
  hoursPerGroup: number | null;
  coordinators: Coordinator[];
  program: {
    coordinators: Coordinator[];
  };
  track: {
    coordinators: Coordinator[];
  } | null;
  description: string | null;
};

export type Details = Resume & {
  requests: Request[];
  priorities: Priority[];
  parent: NestedArchives | null;
};
