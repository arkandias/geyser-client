import type { Option } from "@/types/common.ts";
import type { Coordinator } from "@/types/coordinators.ts";
import type { Priority } from "@/types/priorities.ts";
import type { RequestDetails } from "@/types/requests.ts";
import type { TotalHours } from "@/types/rows.ts";

type Identifier = {
  id: number;
  name: string;
  shortName: string | null;
  visible: boolean;
};

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
  name: string;
  courseType: Option<string>;
  semester: number;
  coordinators: Coordinator[];
  program: {
    degree: {
      name: string;
    };
    name: string;
    coordinators: Coordinator[];
  };
  track: {
    name: string;
    coordinators: Coordinator[];
  } | null;
  description: string | null;
  requests: RequestDetails[];
  priorities: Priority[];
  parent: NestedArchives | null;
};

export type CourseRow = Identifier & {
  program: Identifier & {
    degree: Identifier;
  };
  track: Identifier | null;
  courseType: Option<string>;
  semester: number;
  hoursPerGroup: number | null;
  numberOfGroups: number | null;
  totalAssigned: TotalHours;
  totalPrimary: TotalHours;
  totalSecondary: TotalHours;
  totalPriority: TotalHours;
};
