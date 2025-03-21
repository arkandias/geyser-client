export default {
  editableText: {
    button: {
      save: "Enregistrer",
      cancel: "Annuler",
    },
    save: {
      noChanges: "Pas de changement",
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
    success: "Demande enregistrée",
    error: "Échec de l'enregistrement",
    tooltip: {
      submit: "Enregistrer la demande",
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
    success: "Priorité enregistrée",
    error: "Échec de l'enregistrement",
    tooltip: {
      submit: "Enregistrer la priorité",
    },
  },
  selectService: {
    label: "Service",
  },
} as const;
