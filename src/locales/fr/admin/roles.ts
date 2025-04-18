import { RoleTypeEnum } from "@/gql/graphql.ts";

const roles = {
  column: {
    teacher: {
      label: "Intervenant",
      tooltip: "",
    },
    type: {
      label: "Type",
      tooltip: "",
    },
    comment: {
      label: "Commentaire",
      tooltip: "",
    },
  },
  form: {
    title: {
      none: "Nouveau rôle",
      single: "{label}",
      multiple: "{count} rôles sélectionnés",
    },
  },
  data: {
    success: {
      insert: "Aucun rôle créé | Rôle créé | {count} rôles créés",
      update:
        "Aucun rôle mis à jour | Rôle mis à jour | {count} rôles mis à jour",
      delete: "Aucun rôle supprimé | Rôle supprimé | {count} rôles supprimés",
      import: "0 rôle importé | 1 rôle importé | {count} rôles importés",
      export: "0 rôle exporté | 1 rôle exporté | {count} rôles exportés",
    },
    confirm: {
      delete: {
        single: "Êtes-vous sûr de vouloir supprimer le rôle « {label} » ?",
        multiple:
          "Êtes-vous sûr de vouloir supprimer les {count} rôles sélectionnés ?",
      },
    },
  },
};

export default {
  roles: {
    title: "Rôles et responsabilités",
    roles: {
      [RoleTypeEnum.Admin.toLowerCase()]: {
        label: "Administrateurs",
        ...roles,
      },
      [RoleTypeEnum.Commissioner.toLowerCase()]: {
        label: "Commissaires",
        ...roles,
      },
    },
    coordinations: {
      programs: "Responsables de mention",
      tracks: "Responsables de parcours",
      courses: "Responsables d'enseignement",
    },
  },
} as const;
