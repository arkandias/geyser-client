export default {
  header: {
    warning: {
      archive: "Vous consultez une archive ({year})",
      impersonating: "Vous incarnez un intervenant ({uid})",
    },
    home: {
      label: "Accueil",
    },
    teacher: {
      label: "Mes informations",
    },
    courses: {
      label: "Enseignements",
      year: "Année",
      teachers_filter: "Filtre intervenants",
      my_requests: "Mes demandes",
    },
    admin: {
      label: "Administration",
    },
    lang: {
      label: "Langue",
    },
    refresh_data: {
      label: "Rafraîchir les données",
    },
    dark_mode: {
      label: "Mode sombre",
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
} as const;
