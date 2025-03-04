export default {
  admin: {
    data: {
      button: {
        create: "Créer",
        edit: "Éditer",
        update: "Mettre à jour",
        delete: "Supprimer",
        import: "Importer",
        export: "Exporter",
      },
      search: "Rechercher...",
      error: {
        invalid_form: "Formulaire non valide",
        empty_field: "{field} requis",
        not_a_number: "{field} n'est pas un nombre valide",
        insert_failed: "Échec de la création",
        update_failed: "Échec de la mise à jour",
        delete_failed: "Échec de la suppression",
        import_failed: "Échec de l'import",
        export_failed: "Échec de l'export",
        insert_error: "Erreur durant l'insertion des données: {reason}",
        update_error: "Erreur durant la mise à jour des données: {reason}",
        delete_error: "Erreur durant la suppression des données: {reason}",
        no_return_data: "Pas de réponse",
        empty_file: "Fichier vide",
        unreadable_file: "Fichier illisible: {reason}",
        parsing_error: "Erreur durant l'extraction des données: {reason}",
        invalid_row: "Ligne {index} invalide: {reason}",
      },
      import: {
        title: "Import depuis un fichier CSV",
        csv_instructions: `
        Pour être valide, le fichier CSV doit impérativement respecter les règles suivantes :
        <ul>
          <li>Le fichier doit contenir exactement les colonnes listées dans le tableau ci-dessous, toutes sont obligatoires.</li>
          <li>Les noms des colonnes doivent être écrits exactement comme indiqué dans le tableau (en minuscules).</li>
          <li>Les valeurs doivent être séparées par des virgules.</li>
          <li>Les textes contenant des virgules doivent être entre guillemets doubles.</li>
          <li>Si un texte contient lui-même des guillemets doubles, ceux-ci doivent être doublés (ex : "Il a dit : ""Bonjour""")</li>
          <li>Les nombres doivent utiliser le point comme séparateur décimal et ne pas contenir d'espaces (ex : 1234.56).</li>
          <li>Les valeurs booléennes doivent être écrites "true" ou "false" (en minuscules)</li>
        </ul>`,
        table: {
          columns: {
            key: "Nom",
            type: "Type",
            non_nullable: "Non vide",
          },
          type: {
            string: "texte",
            number: "nombre",
            boolean: "booléen",
          },
        },
        file_picker_label: "Sélectionnez un fichier CSV",
        overwrite: "Écraser les données en cas de conflit",
      },
    },
    general: {
      title: "Paramètres généraux",
      phase: {
        label: "Phase en cours",
        error: {
          set_current: "Échec de la mise à jour de la phase en cours: {reason}",
        },
        success: {
          set_current: "Phase en cours mise à jour",
        },
      },
      years: {
        label: "Années",
        year: "Année",
        visible: "Visible",
        current: "En cours",
        button: {
          create: "Créer",
          update: "Mettre à jour",
        },
        confirm: {
          delete: `Êtes-vous sûr de vouloir supprimer l'année {year} ?
Si des cours ou des services sont associés à cette année, vous ne pourrez pas \
la supprimer.`,
        },
        error: {
          set_current: "Échec de la mise à jour de l'année en cours",
          empty_value: "Entrez une valeur pour l'année",
          empty_visibility: "Sélectionnez la visibilité de l'année",
        },
        success: {
          set_current: "Année en cours mise à jour",
          insert: "Année {value} créée",
          update: "Année {value} mise à jour",
          delete: "Année {value} supprimée",
        },
      },
      custom_texts: {
        label: "Personnalisation de l'interface",
        button: {
          edit: "Éditer",
          delete: "Supprimer",
        },
        contact: "Contact",
        legal_notice: "Mentions légales",
        home_title: "Titre de la page d'accueil",
        home_subtitle_requests:
          "Sous-titre de la page d'accueil en phase de vœux",
        home_subtitle_assignments:
          "Sous-titre de la page d'accueil en phase de commission",
        home_subtitle_results:
          "Sous-titre de la page d'accueil en phase de consultation",
        home_subtitle_shutdown:
          "Sous-titre de la page d'accueil en phase de fermeture",
        home_message_requests: "Message de la page d'accueil en phase de vœux",
        home_message_assignments:
          "Message de la page d'accueil en phase de commission",
        home_message_results:
          "Message de la page d'accueil en phase de consultation",
        home_message_shutdown:
          "Message de la page d'accueil en phase de fermeture",
      },
    },
    teachers: {
      title: "Intervenants",
      teachers: {
        label: "Intervenants",
        table: {
          uid: "Email",
          firstname: "Prénom",
          lastname: "Nom",
          alias: "Alias",
          position: "Fonction",
          base_service_hours: "S. base",
          visible: "V.",
          active: "A.",
        },
        form: {
          title: {
            none: "Nouvel intervenant",
            single: "{label}",
            multiple: "{count} intervenants sélectionnés",
          },
          uid: "Email",
          firstname: "Prénom",
          lastname: "Nom",
          alias: "Alias",
          position: "Fonction",
          base_service_hours: "Service de base (@:unit.weighted_hours)",
          visible: "Visible",
          active: "Actif",
          error: {
            uid_empty: "Entrez un email",
            firstname_empty: "Entrez un prénom",
            lastname_empty: "Entrez un nom",
          },
        },
        data: {
          success: {
            insert:
              "Aucun intervenant créé | Intervenant créé | {count} intervenants créés",
            update:
              "Aucun intervenant mis à jour | Intervenant mis à jour | {count} intervenants mis à jour",
            delete:
              "Aucun intervenant supprimé | Intervenant supprimé | {count} intervenants supprimés",
            import:
              "0 intervenant importé | 1 intervenant importé | {count} intervenants importés",
            export:
              "0 intervenant exporté | 1 intervenant exporté | {count} intervenants exportés",
          },
          confirm: {
            delete: {
              single: `Êtes-vous sûr de vouloir supprimer l'intervenant « {label} » ?
Si des services, responsabilités ou rôles sont attribués à cet intervenant, \
vous ne pourrez pas le supprimer.`,
              multiple: `Êtes-vous sûr de vouloir supprimer les {count} intervenants sélectionnés ?
Si des services, responsabilités ou rôles sont attribués à ces intervenant, \
vous ne pourrez pas les supprimer.`,
            },
          },
        },
      },
      positions: {
        label: "Fonctions",
        table: {
          columns: {
            value: "Valeur",
            label: "Label",
            description: "Description",
            baseServiceHours: "S. base (@:unit.weighted_hours)",
          },
        },
        form: {
          title: {
            none: "Nouvelle fonction",
            single: "{label}",
            multiple: "{count} fonctions sélectionnées",
          },
          fields: {
            value: "Valeur",
            label: "Label",
            description: "Description",
            baseServiceHours: "Service de base",
          },
          error: {
            conflictLabel: "Ce label existe déjà",
            baseServiceHoursNegative:
              "Entrez un nombre d'heures positif ou nul",
          },
        },
        data: {
          success: {
            insert:
              "Aucune fonction créée | Fonction créée | {count} fonctions créées",
            update:
              "Aucune fonction mise à jour | Fonction mise à jour | {count} fonctions mises à jour",
            delete:
              "Aucune fonction supprimée | Fonction supprimée | {count} fonctions supprimées",
            import:
              "0 fonction importée | 1 fonction importée | {count} fonctions importées",
            export:
              "0 fonction exportée | 1 fonction exportée | {count} fonctions exportées",
          },
          confirm: {
            delete: {
              single: `Êtes-vous sûr de vouloir supprimer la fonction « {label} » ?
Si cette fonction est attribuée à des intervenants, vous ne pourrez pas la supprimer.`,
              multiple: `Êtes-vous sûr de vouloir supprimer les {count} fonctions sélectionnées ?
Si ces fonctions sont attribuées à des intervenants, vous ne pourrez pas les supprimer.`,
            },
          },
        },
      },
      services: {
        label: "Services",
        table: {
          year: "Année",
          uid: "Intervenant",
          hours: "Heures",
          message: "Message",
        },
        form: {
          title: {
            none: "Nouveau service",
            single: "{label}",
            multiple: "{count} services sélectionnés",
          },
          year: "Année",
          uid: "Intervenant",
          hours: "Heures (@:unit.weighted_hours)",
          message: "Message",
          error: {
            year_empty: "Entrez une année",
            uid_empty: "Entrez un intervenant",
          },
        },
        data: {
          success: {
            insert:
              "Aucun service créé | Service créé | {count} services créée",
            update:
              "Aucun service mis à jour | Service mis à jour | {count} services mis à jour",
            delete:
              "Aucun service supprimé | Service supprimé | {count} services supprimés",
            import:
              "0 service importé | 1 service importé | {count} services importés",
            export:
              "0 service exporté | 1 service exporté | {count} services exportés",
          },
          confirm: {
            delete: {
              single: `Êtes-vous sûr de vouloir supprimer le service « {label} » ?
Si des modifications ou des demandes sont rattachés à ce service, vous ne pourrez pas le supprimer.`,
              multiple: `Êtes-vous sûr de vouloir supprimer les {count} services sélectionnés ?
Si des modifications ou des demandes sont rattachés à ces services, vous ne pourrez pas les supprimer.`,
            },
          },
        },
      },
      service_modifications: {
        label: "Modifications de service",
      },
      service_modification_types: {
        label: "Types de modification de service",
        table: {
          label: "Label",
          description: "Description",
        },
        form: {
          title: {
            none: "Nouveau type de modification",
            single: "{label}",
            multiple: "{count} types de modification sélectionnés",
          },
          label: "Label",
          description: "Description",
          error: {
            label_empty: "Entrez un label",
          },
        },
        data: {
          success: {
            insert:
              "Aucun type de modification créé | Type de modification créé | {count} types de modification créés",
            update:
              "Aucun type de modification mis à jour | Type de modification mise à jour | {count} types de modification mis à jour",
            delete:
              "Aucun type de modification supprimé | Type de modification supprimé | {count} Types de modification supprimés",
            import:
              "0 type de modification importé | 1 type de modification importé | {count} types de modification importés",
            export:
              "0 type de modification exporté | 1 type de modification exporté | {count} types de modification exportés",
          },
          confirm: {
            delete: {
              single: `Êtes-vous sûr de vouloir supprimer le type de modification « {label} » ?
Si ce type est attribué à des modifications, vous ne pourrez pas le supprimer.`,
              multiple: `Êtes-vous sûr de vouloir supprimer les {count} types de modification sélectionnés ?
Si ces types sont attribués à des modifications, vous ne pourrez pas les supprimer.`,
            },
          },
        },
      },
    },
    courses: {
      title: "Enseignements",
      courses: "Enseignements",
      degrees: "Diplômes",
      programs: "Mentions",
      tracks: "Parcours",
      types: "Types d'enseignement",
    },
    requests: {
      title: "Demandes",
      requests: "Demandes",
      priorities: "Priorités",
    },
    coordinations: {
      title: "Responsabilités",
      programs: "Mentions",
      tracks: "Parcours",
      courses: "Enseignements",
    },
    roles: {
      title: "Rôles",
      admin: "Administrateurs",
      commissioners: "Commissaires",
    },
  },
} as const;
