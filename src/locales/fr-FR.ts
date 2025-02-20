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
  course: {
    label: "Enseignement | Enseignements",
    degree: "Diplôme",
    program: "Mention",
    track: "Parcours",
    semester: "Semestre",
    type: "Type",
  },
  teacher: {
    label: "Intervenant | Intervenants",
    firstname: "Prénom",
    lastname: "Nom",
    alias: "Alias",
    position: "Fonction",
    service: "Service",
    base_service_hours: "Service de base",
    visible: "Visible",
    active: "Actif",
    email: "Courriel",
    coordinator: "Responsable",
    coordination: "Responsabilité",
  },
  unit: {
    hours: "h",
    weighted_hours: "htd",
  },
  notify: {
    error: {
      unknown: "Erreur inconnue",
      caption: {
        default:
          "Si le problème persiste, merci de contacter un administrateur",
      },
    },
  },
  header: {
    warning: {
      archive: "Vous consultez une archive ({year})",
      impersonating: "Vous incarnez un intervenant ({uid})",
    },
    tooltip: {
      home: "Accueil",
      teacher: "Mes informations",
      courses: "Enseignements",
      admin: "Administration",
      teachers_filter: "Filtre intervenants",
      my_requests: "Mes demandes",
      refresh_data: "Rafraîchir les données",
      dark_mode: "Mode sombre",
    },
    year: {
      label: "Année",
    },
    lang: {
      label: "Langue",
    },
    info: {
      label: "Infos",
      contact: {
        label: "Contact",
        message: `
          Pour toute question, remarque, suggestion d'améliorations, signalement
          d'erreurs ou de bugs éventuels, vous pouvez utiliser le bouton
          ci-dessous.`,
        button: "Envoyer un message",
      },
      license: {
        label: "Licence",
        message: `
          <p>
            Geyser &mdash; Gestion des enseignements prévisionnels<br />
            Copyright &copy; 2021-2025 Amaël Broustet, Julien Hauseux
          </p>
          <p>
            Geyser est un logiciel libre distribué sous les termes de la licence
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html#license-text"
              target="_blank"
              rel="noopener noreferrer"
              >GNU Affero GPL v3</a
            >.
          </p>
          <p class="text-italic">
            La licence publique générale GNU Affero (GNU AGPL) est une version
            modifiée de la version 3 de la GNU GPL ordinaire. Elle a une seule
            exigence supplémentaire : si vous exécutez un programme modifié sur un
            serveur et laissez d'autres utilisateurs communiquer avec lui, votre
            serveur doit aussi leur permettre de télécharger le code source
            correspondant à la version modifiée en fonctionnement.
          </p>
          <p class="text-right">
            Extrait de
            <a
              href="https://www.gnu.org/licenses/why-affero-gpl.fr.html"
              target="_blank"
              rel="noopener noreferrer"
              >https://www.gnu.org/licenses/why-affero-gpl.fr.html</a
            >
            le 03/03/2024.
          </p>
          Le code source de Geyser est disponible sur GitHub :
          <ol>
            <li>
              <a
                href="https://github.com/arkandias/geyser"
                target="_blank"
                rel="noopener noreferrer"
                >https://github.com/arkandias/geyser</a
              >
            </li>
            <li>
              <a
                href="https://github.com/arkandias/geyser-client"
                target="_blank"
                rel="noopener noreferrer"
                >https://github.com/arkandias/geyser-client</a
              >
            </li>
          </ol>`,
      },
      legal_notice: {
        label: "Mentions légales",
      },
    },
    user: {
      label: "Utilisateur",
      logout: "Déconnexion",
    },
  },
  profile: {
    status: {
      found: "Profil trouvé",
      not_found: "Profil non trouvé",
    },
  },
  auth: {
    not_authenticated: "Vous n'êtes pas authentifié",
    loading_profile: "Chargement de votre profil...",
    profile_load_failed: "Votre profil n'a pas pu être chargé",
    profile_inactive: "Votre profil n'est pas actif",
    loading_phase: "Chargement de la phase en cours...",
    system_closed: "Geyser est actuellement fermé",
  },
  home: {
    title: "Bienvenue",
    subtitle: {
      requests: "Geyser est en phase de vœux",
      assignments: "Les travaux de la commission sont en cours",
      results: "Geyser est en phase de consultation",
      shutdown: "Geyser est fermé",
    },
    message: {
      requests: `
        <p>
          Vérifiez que votre service de base (ci-dessous) est correct. Dans le cas
          contraire contactez un membre de la commission. Ajoutez ensuite vos
          modifications de service éventuelles (délégation, décharge, congé,
          etc.).
          <b>
            Le total indiqué doit correspondre au nombre d'heures équivalent TD
            que la commission doit vous attribuer avec des enseignements
            disponibles dans Geyser.
          </b>
        </p>
        <p>
          Vous pouvez ensuite faire des demandes principales et secondaires sur la
          page Enseignements (icône <QIcon name="sym_s_menu_book" /> dans
          l'en-tête). Merci de demander l’équivalent de votre service total en
          demandes principales et en demandes secondaires.
        </p>
        <p>
          Enfin, vous avez la possibilité de laisser un message à la commission
          afin de porter à sa connaissance toute information que vous jugez utile
          pour son travail. Ce message ne sera visible que par la commission et
          vous-même. Pour modifier votre message, cliquez sur le bouton
          <QBtn icon="sym_s_edit" color="primary" size="xs" flat square dense />
          qui apparaît à côté du titre de la section correspondante.
        </p>`,
      assignments: `
        Les travaux de la commission sont en cours. Vous serez informé lorsqu'ils
        seront terminés pour consulter les attributions. En attendant, vous pouvez
        toujours consulter les demandes mais il n'est plus possible de les
        modifier.`,
      results: `
        Vous pouvez à présent consulter les attributions des enseignements de
        cette année. Vous avez également toujours accès aux demandes et aux
        attributions des années précédentes.`,
      shutdown: "",
    },
  },
  admin: {
    buttons: {
      create: "Créer",
      edit: "Éditer",
      update: "Mettre à jour",
      delete: "Supprimer",
      import: "Importer",
      export: "Exporter",
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
        values: {
          type_string: "texte",
          type_number: "nombre",
          type_boolean: "booléen",
        },
      },
      file_picker_label: "Sélectionnez un fichier CSV",
      overwrite: "Écraser les données en cas de conflit",
      invalid: {
        message: "Échec de l'import",
        caption: {
          file_empty: "Fichier vide",
          unreadable_file: "Fichier illisible",
        },
      },
    },
    export: {
      invalid: {
        message: "Échec de l'export",
      },
    },
    general: {
      title: "Paramètres généraux",
      phase: { label: "Phase en cours" },
      years: {
        label: "Années",
        visible: "Visible",
        current: "En cours",
        new_year_button: "Nouvelle année",
        insert_year_button: "Créer",
        confirm: {
          delete: `Êtes-vous sûr de vouloir supprimer l'année {year} ?
Si des cours ou des services sont associés à cette année, vous ne pourrez pas \
la supprimer.`,
        },
      },
      custom_texts: {
        label: "Personnalisation de l'interface",
        edit_button: "Éditer",
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
            new_teacher: "Nouvel intervenant",
            teachers_selected: "{count} intervenants sélectionnés",
          },
          uid: "Email",
          firstname: "Prénom",
          lastname: "Nom",
          alias: "Alias",
          position: "Fonction",
          base_service_hours: "Service de base (htd)",
          visible: "Visible",
          active: "Actif",
          confirm: {
            delete: {
              single: `Êtes-vous sûr de vouloir supprimer l'intervenant « {uid} » ?
Si des services, responsabilités ou rôles sont attribués à cet intervenant, \
vous ne pourrez pas le supprimer.`,
              multiple: `Êtes-vous sûr de vouloir supprimer les {count} intervenants sélectionnés ?
Si des services, responsabilités ou rôles sont attribués à ces intervenant, \
vous ne pourrez pas les supprimer.`,
            },
          },
          valid: {
            insert: {
              none: "0 intervenant créé",
              single: "Intervenant {uid} créé",
              multiple: "{count} intervenants créés",
            },
            update: {
              none: "0 intervenant mis à jour",
              single: "Intervenant {uid} mis à jour",
              multiple: "{count} intervenants mis à jour",
            },
            delete: {
              none: "0 intervenant supprimé",
              single: "Intervenant {uid} supprimé",
              multiple: "{count} intervenants supprimés",
            },
          },
          invalid: {
            message: "Formulaire non valide",
            caption: {
              uid_empty: "Entrez un email",
              uid_conflict: "Un intervenant avec cet email existe déjà",
              firstname_empty: "Entrez un prénom",
              lastname_empty: "Entrez un nom",
            },
          },
        },
        import: {
          valid: {
            message:
              "0 intervenant importé | 1 intervenant importé | {count} intervenants importés",
          },
        },
        export: {
          valid: {
            message:
              "0 intervenant exporté | 1 intervenant exporté | {count} intervenants exportés",
          },
        },
      },
      positions: {
        label: "Fonctions",
        new_position_button: "Nouvelle fonction",
        table: {
          value: "Clé",
          label: "Label",
          description: "Description",
          base_service_hours: "S. base",
        },
        form: {
          value: "Clé",
          label: "Label",
          description: "Description",
          base_service_hours: "Service de base (htd)",
          confirm: {
            delete: `Êtes-vous sûr de vouloir supprimer la fonction « {position} » ?
Si cette fonction est attribuée à des intervenants, vous ne pourrez pas la \
supprimer.`,
          },
          valid: {
            insert: "Fonction {position} créée",
            update: "Fonction {position} mise à jour",
            delete: "Fonction {position} supprimée",
          },
          invalid: {
            message: "Formulaire non valide",
            caption: {
              value_empty: "Entrez une clé",
              value_invalid_characters:
                "Entrez une clé valide (caractères autorisés : " +
                "lettres minuscules, chiffres et tirets bas)",
              label_empty: "Entrez un label",
            },
          },
        },
        import: {
          valid: {
            message:
              "0 fonction importée | 1 fonction importée | {count} fonctions importées",
          },
        },
        export: {
          valid: {
            message:
              "0 fonction exportée | 1 fonction exportée | {count} fonctions exportées",
          },
        },
      },
    },
    services: {
      title: "Services",
      services: "Services",
      service_modifications: "Modifications de service",
    },
    courses: {
      title: "Enseignements",
      courses: "Enseignements",
      degrees: "Diplômes",
      programs: "Mentions",
      tracks: "Parcours",
      types: "Types",
    },
    priorities: {
      title: "Priorités",
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
  download_assignments: {
    success:
      "0 attribution téléchargée | 1 attribution téléchargée | {count} attributions téléchargées",
    error: "Échec du téléchargement",
  },
  custom_text_label: {
    legal_notice: "Mentions légales",
    home_title: "Titre de la page d'accueil",
    home_subtitle_requests: "Sous-titre de la page d'accueil en phase de vœux",
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
    home_message_shutdown: "Message de la page d'accueil en phase de fermeture",
  },
};
