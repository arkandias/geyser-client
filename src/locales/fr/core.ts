export default {
  editableText: {
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
    assign: {
      identical: "Demande déjà attribuée",
      created: "Attribution créée",
      updated: "Attribution mise à jour",
      error: "Échec de l'attribution",
    },
    delete: {
      success: "Demande supprimée",
      error: "Échec de la suppression",
    },
  },
  priorityChip: {
    group: "groupe | groupes",
    hour: "heure | heures",
    tooltip: {
      assign: "Attribuer la demande",
      remove: "Supprimer la demande",
    },
    delete: {
      success: "Priorité supprimée",
      error: "Échec de la suppression",
    },
    deleteComputed: {
      success: {
        message: "Priorité calculée supprimée",
        caption:
          "Une priorité neutre a été créée pour empêcher que la priorité supprimée ne soit pas recréée au prochain calcul",
      },
      error: "Échec de la suppression",
    },
  },
  requestForm: {
    field: {
      groups: "Groupes",
      hours: "Heures",
      requestType: {
        assignment: "Attribution",
        primary: "Principale",
        secondary: "Secondaire",
      },
    },
    requestType: {
      assignment: "Attribution",
      primary: "Demande principale",
      secondary: "Demande secondaire",
    },
    invalid: {
      message: "Formulaire non valide",
      caption: {
        service: "Sélectionnez un service",
        hours: "Sélectionnez un nombre d'heures positif ou nul",
        type: "Sélectionnez un type de demande",
      },
    },
    identical: "{type} déjà enregistrée",
    success: {
      created: "{type} créée",
      updated: "{type} mise à jour",
      deleted: "{type} supprimée",
    },
    error: {
      fetch: "Erreur lors de la récupération de la demande actuelle",
      create: "Échec de la création",
      update: "Échec de la mise à jour",
      delete: "Échec de la suppression",
    },
    tooltip: {
      submit: "Valider la demande",
    },
  },
  priorityForm: {
    field: {
      seniority: "Années",
      isPriority: {
        null: "Neutre",
        true: "Positive",
        false: "Négative",
      },
    },
    invalid: {
      message: "Formulaire non valide",
      caption: {
        service: "Sélectionnez un service",
        seniority: "Sélectionnez un nombre d'années entier positif ou nul",
      },
    },
    identical: "Priorité déjà enregistrée",
    success: {
      created: "Priorité créée",
      updated: "Priorité mise à jour",
    },
    error: {
      fetch: "Erreur lors de la récupération de la priorité actuelle",
      create: "Échec de la création",
      update: "Échec de la mise à jour",
    },
    tooltip: {
      submit: "Valider la priorité",
    },
  },
  selectService: {
    label: "Service",
  },
} as const;
