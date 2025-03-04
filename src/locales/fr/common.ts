export default {
  phase: {
    requests: "Vœux",
    assignments: "Commission",
    results: "Consultation",
    shutdown: "Fermeture",
  },
  requestType: {
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
      notFound: "Profil non trouvé",
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
    weightedHours: "htd",
  },
} as const;
