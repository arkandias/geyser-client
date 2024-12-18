import type { Service } from "@/gql/graphql.ts";
import type { Message } from "@/types/messages.ts";

type Identifier = {
  id: number;
  name: string;
  shortName: string | null;
};

type TotalHours = {
  aggregate: {
    sum: {
      hours: number | null;
    } | null;
  } | null;
};

type TotalWeightedHours = {
  aggregate: {
    sum: {
      weightedHours: number | null;
    } | null;
  } | null;
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

export type ServiceRow = Service & {
  modifications: {
    id: number;
    modificationType: string;
    weightedHours: number;
  }[];
  totalModifications: TotalWeightedHours;
  teacher: {
    visible: boolean;
  };
  requests: {
    id: number;
    courseId: number;
    requestType: string;
    hours: number;
    weightedHours: number | null;
  }[];
  totalAssigned: TotalHours & TotalWeightedHours;
  totalPrimary: TotalHours & TotalWeightedHours;
  totalSecondary: TotalHours & TotalWeightedHours;
  messages: Message[];
};
