import { RoleTypeEnum } from "@/gql/graphql.ts";
import type { AdminColNameOptions } from "@/types/i18n.ts";

import type { ColName as AdminRolesRolesColName } from "@/components/admin/AdminRolesRoles.vue";

const roles = {
  column: {
    uid: {
      label: "Intervenant",
      tooltip: "",
    },
    comment: {
      label: "Commentaire",
      tooltip: "",
    },
  } satisfies Record<AdminRolesRolesColName, AdminColNameOptions>,
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
    title: "Rôles",
    [RoleTypeEnum.Admin]: {
      label: "Administrateurs",
      ...roles,
    },
    [RoleTypeEnum.Commissioner]: {
      label: "Commissaires",
      ...roles,
    },
  },
} as const;
