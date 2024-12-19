import type { Coordinator } from "@/types/coordinators.ts";
import type { Priority } from "@/types/priorities.ts";
import type { RequestDetails } from "@/types/requests.ts";
import type { Identifier, TotalHours } from "@/types/rows.ts";

export type Archive = {
  courseId: number;
  year: number;
  requests: RequestDetails[];
};

export type NestedArchives = Archive & {
  parent?: NestedArchives | null;
};

export type CourseDetails = {
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
  requests: RequestDetails[];
  priorities: Priority[];
  parent: NestedArchives | null;
};

export type CourseRow = Identifier & {
  semester: number;
  hoursPerGroup: number | null;
  numberOfGroups: number | null;
  program: Identifier & {
    degree: Identifier & { visible: boolean };
    visible: boolean;
  };
  track: (Identifier & { visible: boolean }) | null;
  courseType: {
    label: string;
    shortLabel: string | null;
  };
  totalAssigned: TotalHours;
  totalPrimary: TotalHours;
  totalSecondary: TotalHours;
  totalPriority: TotalHours;
  visible: boolean;
};
