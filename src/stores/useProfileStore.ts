import type { Client } from "@urql/vue";
import { readonly, ref } from "vue";

import { ROLES, type Role, isRole } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import { GetUserProfileDocument } from "@/gql/graphql.ts";

graphql(`
  query GetUserProfile($uid: String!) {
    profile: teacherByPk(uid: $uid) {
      uid
      displayname
      active
      roles {
        type
      }
    }
  }
`);

const uid = ref("");
const displayname = ref("");
const active = ref(false);

const roles = ref<Role[]>([]);
const activeRole = ref<Role>(ROLES.TEACHER);

const fetching = ref(false);
const loaded = ref(false);

const fetchProfile = async (client: Client, claim: string) => {
  fetching.value = true;

  const { data, error } = await client.query(
    GetUserProfileDocument,
    { uid: claim },
    { requestPolicy: "network-only" },
  );

  if (data?.profile && !error) {
    uid.value = data.profile.uid;
    displayname.value = data.profile.displayname ?? "";
    active.value = data.profile.active;
    roles.value = data.profile.roles
      .map((role) => role.type)
      .filter((role) => isRole(role))
      .concat(ROLES.TEACHER);

    if (roles.value.includes(ROLES.ADMIN)) {
      activeRole.value = ROLES.ADMIN;
    }

    // Log invalid roles (if any)
    const invalidRoles = data.profile.roles
      .map((role) => role.type)
      .filter((role) => !isRole(role));
    if (invalidRoles.length) {
      console.warn(`Invalid roles: ${invalidRoles.join(", ")}`);
    }

    loaded.value = true;
  } else {
    loaded.value = false;
  }

  fetching.value = false;
};

const setActiveRole = (role: Role) => {
  if (roles.value.includes(role)) {
    activeRole.value = role;
  } else {
    console.error(`Role '${role}' is not an allowed role`);
  }
};

export const useProfileStore = () => ({
  uid: readonly(uid),
  displayname: readonly(displayname),
  active: readonly(active),
  roles: readonly(roles),
  activeRole: readonly(activeRole),
  loaded: readonly(loaded),
  fetching: readonly(fetching),
  fetchProfile,
  setActiveRole,
});
