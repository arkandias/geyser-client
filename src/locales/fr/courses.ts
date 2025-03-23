export default {
  courses: {
    warning: {
      archive: "Vous consultez une archive ({year})",
    },
    table: {
      services: {
        title: "Services",
        columns: {
          lastname: {
            label: "Nom",
            tooltip: "",
          },
          firstname: {
            label: "Prénom",
            tooltip: "",
          },
          alias: {
            label: "Alias",
            tooltip: "",
          },
          message: {
            label: "M.",
            tooltip: "Message",
          },
          modifiedService: {
            label: "S.",
            tooltip: "Service à réaliser (@:unit.weightedHours)",
          },
          totalAssignment: {
            label: "A.",
            tooltip: "Nombre d'heures attribuées (@:unit.weightedHours)",
          },
          diffAssignment: {
            label: "ΔA",
            tooltip:
              "Différence entre le service à réaliser et le nombre d'heures attribuées (@:unit.weightedHours)",
          },
          totalPrimary: {
            label: "V1",
            tooltip:
              "Nombre d'heures demandées en vœux principaux (@:unit.weightedHours)",
          },
          diffPrimary: {
            label: "ΔV1",
            tooltip:
              "Différence entre le service à réaliser et le nombre d'heures demandées en vœux principaux (@:unit.weightedHours)",
          },
          totalSecondary: {
            label: "V2",
            tooltip:
              "Nombre d'heures demandées en vœux secondaires (@:unit.weightedHours)",
          },
        },
        filters: {
          search: "Rechercher…",
        },
        options: {
          stickyHeader: "En-tête fixe",
          visibleColumns: "Colonnes visibles",
        },
        loading: "Chargement des services…",
        noData: "Aucun service trouvé",
        noResults: "Aucun service ne correspond aux filtres",
      },
      courses: {
        title: "Enseignements",
        columns: {
          degreeProgram: {
            label: "Formation",
            tooltip: "",
          },
          track: {
            label: "Parcours",
            tooltip: "",
          },
          name: {
            label: "Nom",
            tooltip: "",
          },
          semester: {
            label: "S.",
            tooltip: "Semestre",
          },
          type: {
            label: "Type",
            tooltip: "",
          },
          hours: {
            label: "H.",
            tooltip: "Nombre d'heures par groupe",
          },
          groups: {
            label: "G.",
            tooltip: "Nombre de groupes",
          },
          totalAssignment: {
            label: "A.",
            tooltip: "Nombre d'heures attribuées",
          },
          diffAssignment: {
            label: "ΔA",
            tooltip: "Nombre d'heures restantes à attribuer",
          },
          totalPrimary: {
            label: "V1",
            tooltip: "Nombre d'heures demandées en vœux principaux",
          },
          diffPrimary: {
            label: "ΔV1",
            tooltip:
              "Différence entre le nombre d'heures à attribuer et le nombre d'heures demandées en vœux principaux",
          },
          diffPrimaryPriority: {
            label: "ΔV1 Prio",
            tooltip:
              "Différence entre le nombre d'heures à attribuer et le nombre d'heures demandées en vœux principaux prioritaires",
          },
          totalSecondary: {
            label: "V2",
            tooltip: "Nombre d'heures demandées en vœux secondaires",
          },
        },
        filters: {
          degreeProgram: "Formation",
          semester: "Semestre",
          type: "Type",
          search: "Rechercher…",
        },
        options: {
          teacher: {
            viewDetails: "Afficher les informations de l'intervenant",
            downloadAssignments:
              "Télécharger les attributions de l'intervenant",
            deselect: "Désélectionner l'intervenant",
          },
          weightedHours: "Heures équivalent TD",
          stickyHeader: "En-tête fixe",
          visibleColumns: "Colonnes visibles",
        },
        loading: "Chargement des enseignements…",
        noData: "Aucun enseignement trouvé",
        noResults: "Aucun enseignement ne correspond aux filtres",
      },
    },
    expansion: {
      defaultLabel: "Sélectionnez un course dans la liste ci-dessus",
      defaultCaption:
        "Cliquez sur ce volet pour afficher des informations supplémentaires",
      formatSemester: "S{semester}",
      coordinators: {
        title: "Responsables",
        program: "Responsable de la mention : | Responsables de la mention :",
        track: "Responsable du parcours : | Responsables du parcours :",
        course:
          "Responsable de l'enseignement : | Responsables de l'enseignement :",
      },
      description: {
        title: "Description",
        defaultText: "Pas de description (contactez un responsable)",
      },
      defaultText: `
<p>
  Lorsqu'un course est sélectionné, les informations suivantes sont affichées
  ici :
</p>
<ul>
  <li>les responsables de la mention, du parcours et de l'enseignement ;</li>
  <li>une description de l'enseignement.</li>
</ul>
<p>
  La description peut être éditée par les responsables sus-mentionnés en
  cliquant sur le bouton
  <i class="q-icon text-primary material-symbols-sharp">edit</i>
  (visible par eux seuls) qui apparaît à côté de «&nbsp;Description&nbsp;».
</p>`,
    },
    details: {
      requests: {
        title: "Demandes",
      },
      priorities: {
        title: "Priorités",
      },
      archives: {
        title: "Archives",
      },
      defaultText: `
        <p>
          Cliquez sur la ligne d'un course pour afficher ici des informations
          détaillées. Si un course et un intervenant sont sélectionnés en même
          temps, ce sont les informations de l'enseignement qui sont affichées. Vous
          pouvez désélectionner un course ou un intervenant en cliquant à nouveau
          sur la ligne correspondante.
        </p>
        <p>Boutons dans l'en-tête (accessibles uniquement depuis cette page) :</p>
        <ul>
          <li>
            <i class="q-icon text-primary material-symbols-sharp">history</i>
            Année : permet de choisir l'année à consulter (par défaut l'année en
            cours est affichée, mais il est possible de consulter les demandes et
            les attributions des années antérieures).
          </li>
          <li>
            <i class="q-icon text-primary material-symbols-sharp">vertical_split</i>
            Filtre intervenants : permet d'afficher/masquer la liste des
            intervenants actifs (fonctionnalité réservée aux membres de la
            commission et aux administrateurs).
          </li>
          <li>
            <i class="q-icon text-primary material-symbols-sharp">assignment</i>
            Mon service : permet de vous sélectionner/désélectionner vous-même (sans
            passer par le filtre intervenants).
          </li>
        </ul>
        <p>
          Lorsqu'un intervenant est sélectionné dans le filtre intervenant, les
          enseignements qui apparaissent dans la table ci-dessus sont seulement ceux
          qui ont été demandés par l'intervenant ou attribués à l'intervenant et les
          filtres de recherche sont désactivés. Le nom de l'intervenant apparaît
          alors en haut de la table (à la place de «&nbsp;Enseignements&nbsp;»).
          Deux raccourcis sont présents à droite du nom de l'intervenant :
        </p>
        <ul>
          <li>
            <i class="q-icon text-primary material-symbols-sharp">visibility</i>
            permet d'afficher des informations détaillées sur l'intervenant ;
          </li>
          <li>
            <i class="q-icon text-primary material-symbols-sharp">close</i>
            permet de désélectionner l'intervenant.
          </li>
        </ul>`,
    },
  },
} as const;
