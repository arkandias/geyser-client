export default {
  phase: {
    requests: "Requests",
    assignments: "Assignment",
    results: "Results",
    shutdown: "Closed",
  },
  requestType: {
    assignment: "Assignment | Assignments",
    primary: "Primary | Primary",
    secondary: "Secondary | Secondary",
  },
  role: {
    admin: "Administrator | Administrators",
    commissioner: "Commissioner | Commissioners",
    teacher: "Teacher | Teachers",
  },
  unit: {
    hours: "h",
    weightedHours: "wh",
  },
  yes: "Yes",
  no: "No",
} as const;
