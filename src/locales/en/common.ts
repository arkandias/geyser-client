import { RequestTypeEnum, RoleTypeEnum } from "@/gql/graphql.ts";

export default {
  phase: {
    requests: "Requests",
    assignments: "Assignment",
    results: "Results",
    shutdown: "Closed",
  },
  requestType: {
    [RequestTypeEnum.Assignment]: "Assignment | Assignments",
    [RequestTypeEnum.Primary]: "Primary | Primary",
    [RequestTypeEnum.Secondary]: "Secondary | Secondary",
  },
  role: {
    [RoleTypeEnum.Admin]: "Administrator | Administrators",
    [RoleTypeEnum.Commissioner]: "Commissioner | Commissioners",
    [RoleTypeEnum.Teacher]: "Teacher | Teachers",
  },
  semester: "S{semester}",
  unit: {
    hours: "h",
    weightedHours: "wh",
  },
  yes: "Yes",
  no: "No",
} as const;
