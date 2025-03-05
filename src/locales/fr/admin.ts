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
        invalidForm: "Formulaire non valide",
        emptyField: "{field} requis",
        notANumber: "{field} n'est pas un nombre valide",
        insertFailed: "Échec de la création",
        updateFailed: "Échec de la mise à jour",
        deleteFailed: "Échec de la suppression",
        importFailed: "Échec de l'import",
        exportFailed: "Échec de l'export",
        insertError: "Erreur durant l'insertion des données: {reason}",
        updateError: "Erreur durant la mise à jour des données: {reason}",
        deleteError: "Erreur durant la suppression des données: {reason}",
        noReturnData: "Pas de réponse",
        emptyFile: "Fichier vide",
        unreadableFile: "Fichier illisible: {reason}",
        parsingError: "Erreur durant l'extraction des données: {reason}",
        invalidRow: "Ligne {index} invalide: {reason}",
      },
      import: {
        title: "Import depuis un fichier CSV",
        csvInstructions: `
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
            nonNullable: "Non vide",
          },
          type: {
            string: "texte",
            number: "nombre",
            boolean: "booléen",
          },
        },
        filePickerLabel: "Sélectionnez un fichier CSV",
        overwrite: "Écraser les données en cas de conflit",
      },
    },
    general: {
      title: "Paramètres généraux",
      phase: {
        label: "Phase en cours",
        error: {
          setCurrent: "Échec de la mise à jour de la phase en cours",
        },
        success: {
          setCurrent: "Phase en cours mise à jour",
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
          setCurrent: "Échec de la mise à jour de l'année en cours",
          emptyValue: "Entrez une valeur pour l'année",
          emptyVisibility: "Sélectionnez la visibilité de l'année",
        },
        success: {
          setCurrent: "Année en cours mise à jour",
          insert: "Année {value} créée",
          update: "Année {value} mise à jour",
          delete: "Année {value} supprimée",
        },
      },
      customTexts: {
        label: "Personnalisation de l'interface",
        button: {
          edit: "Éditer",
          delete: "Supprimer",
        },
        contact: "Contact",
        legalNotice: "Mentions légales",
        homeTitle: "Titre de la page d'accueil",
        homeSubtitleRequests:
          "Sous-titre de la page d'accueil en phase de vœux",
        homeSubtitleAssignments:
          "Sous-titre de la page d'accueil en phase de commission",
        homeSubtitleResults:
          "Sous-titre de la page d'accueil en phase de consultation",
        homeSubtitleShutdown:
          "Sous-titre de la page d'accueil en phase de fermeture",
        homeMessageRequests: "Message de la page d'accueil en phase de vœux",
        homeMessageAssignments:
          "Message de la page d'accueil en phase de commission",
        homeMessageResults:
          "Message de la page d'accueil en phase de consultation",
        homeMessageShutdown:
          "Message de la page d'accueil en phase de fermeture",
      },
    },
    teachers: {
      title: "Intervenants",
      teachers: {
        label: "Intervenants",
        table: {
          columns: {
            uid: "Email",
            firstname: "Prénom",
            lastname: "Nom",
            alias: "Alias",
            position: "Fonction",
            baseServiceHours: "S. base (@:unit.weightedHours)",
            visible: "Visible",
            active: "Actif",
          },
        },
        form: {
          title: {
            none: "Nouvel intervenant",
            single: "{label}",
            multiple: "{count} intervenants sélectionnés",
          },
          fields: {
            uid: "Email",
            firstname: "Prénom",
            lastname: "Nom",
            alias: "Alias",
            position: "Fonction",
            baseServiceHours: "Service de base",
            visible: "Visible",
            active: "Actif",
          },
          error: {
            conflictEmail: "Cet email existe déjà",
            positionNotFound: "Il n'existe pas de fonction avec ce label",
            baseServiceHoursNegative:
              "Entrez un nombre d'heures positif ou nul",
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
            baseServiceHours: "S. base (@:unit.weightedHours)",
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
          columns: {
            year: "Année",
            uid: "Intervenant",
            hours: "Heures (@:unit.weightedHours)",
            message: "Message",
          },
        },
        form: {
          title: {
            none: "Nouveau service",
            single: "{label}",
            multiple: "{count} services sélectionnés",
          },
          fields: {
            year: "Année",
            uid: "Intervenant",
            hours: "Heures",
            message: "Message",
          },
          error: {
            conflictYearUid:
              "Un service existe déjà pour cet intervenant et cette année",
            hoursNegative: "Entrez un nombre d'heures positif ou nul",
          },
        },
        data: {
          success: {
            insert:
              "Aucun service créé | Service créé | {count} services créés",
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
      serviceModifications: {
        label: "Modifications de services",
        table: {
          columns: {
            year: "Année",
            uid: "Intervenant",
            type: "Type",
            hours: "Heures (@:unit.weightedHours)",
          },
        },
        form: {
          title: {
            none: "Nouvelle modification de service",
            single: "{label}",
            multiple: "{count} modifications de service sélectionnées",
          },
          fields: {
            year: "Année",
            uid: "Intervenant",
            type: "Type",
            hours: "Heures",
          },
          error: {
            updateYearWithoutUid:
              "Vous ne pouvez pas modifier l'année sans sélectionner un intervenant",
            updateUidWithoutYear:
              "Vous ne pouvez pas modifier l'intervenant sans sélectionner une année",
            serviceNotFound:
              "Il n'existe pas de service pour cet intervenant et cette année",
            typeNotFound:
              "Il n'existe pas de modification de service avec ce label",
          },
        },
        data: {
          success: {
            insert:
              "Aucune modification de service créée | Modification de service créée | {count} modifications de service créées",
            update:
              "Aucune modification de service mise à jour | Modification de service mise à jour | {count} modifications de service mises à jour",
            delete:
              "Aucune modification de service supprimée | Modification de service supprimée | {count} modifications de service supprimées",
            import:
              "0 modification de service importée | 1 modification de service importée | {count} modifications de service importées",
            export:
              "0 modification de service exportée | 1 modification de service exportée | {count} modifications de service exportées",
          },
          confirm: {
            delete: {
              single: `Êtes-vous sûr de vouloir supprimer la modification de service « {label} » ?`,
              multiple: `Êtes-vous sûr de vouloir supprimer les {count} modifications de service sélectionnées ?`,
            },
          },
        },
      },
      serviceModificationTypes: {
        label: "Types de modification de service",
        table: {
          columns: {
            label: "Label",
            description: "Description",
          },
        },
        form: {
          title: {
            none: "Nouveau type de modification",
            single: "{label}",
            multiple: "{count} types de modification sélectionnés",
          },
          fields: {
            label: "Label",
            description: "Description",
          },
          error: {
            conflictLabel: "Ce label existe déjà",
          },
        },
        data: {
          success: {
            insert:
              "Aucun type de modification créé | Type de modification créé | {count} types de modification créés",
            update:
              "Aucun type de modification mis à jour | Type de modification mis à jour | {count} types de modification mis à jour",
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
      title: "Demandes et priorités",
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
