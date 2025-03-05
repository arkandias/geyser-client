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
      downloadFailed: "Le téléchargement a échoué",
    },
  },
  unit: {
    hours: "h",
    weightedHours: "htd",
  },
  editor: {
    button: {
      save: "Enregistrer",
      cancel: "Annuler",
    },
    save: {
      noChanges: "Pas de changement à enregistrer",
      success: {
        updated: "Texte mis à jour",
        deleted: "Texte supprimé",
      },
      error: {
        update: "Échec de la mise à jour",
        delete: "Échec de la suppression",
      },
    },
  },
  requestCard: {
    group: "groupe | groupes",
    hour: "heure | heures",
    tooltip: {
      assign: "Attribuer la demande",
      remove: "Supprimer la demande",
    },
  },
  requestForm: {
    invalid: {
      message: "Formulaire non valide",
      caption: {
        noTeacher: "Sélectionnez un intervenant",
        negativeHours: "Sélectionnez un nombre d'heures positif ou nul",
        noType: "Sélectionnez un type de demande",
      },
    },
    tooltip: {
      submit: "Valider la demande",
    },
  },
  request: {
    type: {
      assignment: "Attribution",
      primary: "Demande principale",
      secondary: "Demande secondaire",
    },
    error: {
      courseNotFound: "Erreur lors de la récupération du cours",
      serviceNotFound: {
        title: "Pas de service trouvé",
        caption: "Veuillez d'abord créer un service",
      },
      fetch: "Erreur lors de la récupération de la demande actuelle",
      invalidType: "Type de requête invalide",
      create: "Échec de la création",
      update: "Échec de la mise à jour",
      delete: "Échec de la suppression",
    },
    success: {
      alreadyRecorded: "{type} déjà enregistrée",
      created: "{type} créée",
      updated: "{type} mise à jour",
      deleted: "{type} supprimée",
    },
  },
} as const;
