import { RequestTypeEnum, RoleTypeEnum } from "@/gql/graphql.ts";

export default {
  phase: {
    requests: "Vœux",
    assignments: "Commission",
    results: "Consultation",
    shutdown: "Fermeture",
  },
  requestType: {
    [RequestTypeEnum.Assignment]: "Attribution | Attributions",
    [RequestTypeEnum.Primary]: "Principale | Principales",
    [RequestTypeEnum.Secondary]: "Secondaire | Secondaires",
  },
  role: {
    [RoleTypeEnum.Admin]: "Administrateur | Administrateurs",
    [RoleTypeEnum.Commissioner]: "Commissaire | Commissaires",
    [RoleTypeEnum.Teacher]: "Intervenant | Intervenants",
  },
  semester: "S{semester}",
  unit: {
    hours: "h",
    weightedHours: "htd",
  },
  yes: "Oui",
  no: "Non",
} as const;
