import admin from "@/locales/fr/admin.ts";
import common from "@/locales/fr/common.ts";
import courses from "@/locales/fr/courses.ts";
import custom_text_default from "@/locales/fr/custom-text-default.ts";
import header from "@/locales/fr/header.ts";
import home from "@/locales/fr/home.ts";
import teacher from "@/locales/fr/teacher.ts";

export default {
  ...common,
  ...custom_text_default,
  ...header,
  ...home,
  ...courses,
  ...teacher,
  ...admin,
  editor: {
    button: {
      save: "Enregistrer",
      cancel: "Annuler",
    },
    save: {
      no_changes: "Pas de changement à enregistrer",
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
  request_card: {
    group: "groupe | groupes",
    hour: "heure | heures",
    tooltip: {
      assign: "Attribuer la demande",
      remove: "Supprimer la demande",
    },
  },
  request_form: {
    invalid: {
      message: "Formulaire non valide",
      caption: {
        no_teacher: "Sélectionnez un intervenant",
        negative_hours: "Sélectionnez un nombre d'heures positif ou nul",
        no_type: "Sélectionnez un type de demande",
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
      course_not_found: "Erreur lors de la récupération du cours",
      service_not_found: {
        title: "Pas de service trouvé",
        caption: "Veuillez d'abord créer un service",
      },
      fetch: "Erreur lors de la récupération de la demande actuelle",
      invalid_type: "Type de requête invalide",
      create: "Échec de la création",
      update: "Échec de la mise à jour",
      delete: "Échec de la suppression",
    },
    success: {
      already_recorded: "{type} déjà enregistrée",
      created: "{type} créée",
      updated: "{type} mise à jour",
      deleted: "{type} supprimée",
    },
  },
} as const;
