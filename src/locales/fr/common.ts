export default {
  phase: {
    requests: "Vœux",
    assignments: "Commission",
    results: "Consultation",
    shutdown: "Fermeture",
  },
  request_type: {
    primary: "Principale",
    secondary: "Secondaire",
    assignment: "Attribution",
  },
  role: {
    admin: "Administrateur",
    commissioner: "Commissaire",
    teacher: "Intervenant",
  },
  notification: {
    profile: {
      found: "Profil trouvé",
      not_found: "Profil non trouvé",
    },
    error: {
      unknown: "Erreur inconnue",
      caption: {
        default:
          "Si le problème persiste, merci de contacter un administrateur",
      },
    },
  },
  unit: {
    hours: "h",
    weighted_hours: "htd",
  },
} as const;
