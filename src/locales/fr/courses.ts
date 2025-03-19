export default {
  courses: {
    warning: {
      archive: "Vous consultez une archive ({year})",
    },
    table: {
      services: {
        title: "Services",
        columns: {
          teacher: {
            label: "Intervenant",
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
      },
      courses: {
        title: "Services",
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
      },
    },
  },
} as const;
