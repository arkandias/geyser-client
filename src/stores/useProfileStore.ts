import type { Client } from "@urql/vue";
import { reactive, readonly, ref, toRefs } from "vue";

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

type Profile = {
  uid: string;
  displayname: string;
  active: boolean;
  roles: Role[];
  activeRole: Role;
};

const profile = reactive<Profile>({
  uid: "",
  displayname: "",
  active: false,
  roles: [],
  activeRole: ROLES.TEACHER,
});

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
    profile.uid = data.profile.uid;
    profile.displayname = data.profile.displayname ?? "";
    profile.active = data.profile.active;
    profile.roles = data.profile.roles
      .map((role) => role.type)
      .filter((role) => isRole(role))
      .concat(ROLES.TEACHER);

    if (profile.roles.includes(ROLES.ADMIN)) {
      profile.activeRole = ROLES.ADMIN;
    } else {
      profile.activeRole = ROLES.TEACHER;
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
  if (profile.roles.includes(role)) {
    profile.activeRole = role;
  } else {
    console.error(`Role '${role}' is not an allowed role`);
  }
};

// Impersonating
const isImpersonating = ref(false);
const profileSaved: Profile = {
  uid: "",
  displayname: "",
  active: false,
  roles: [],
  activeRole: ROLES.TEACHER,
};

const startImpersonating = async (client: Client, claim: string) => {
  if (!isImpersonating.value) {
    Object.assign(profileSaved, profile);
  }
  await fetchProfile(client, claim);
  isImpersonating.value = true;
};

const stopImpersonating = () => {
  if (isImpersonating.value) {
    Object.assign(profile, profileSaved);
    isImpersonating.value = false;
  } else {
    console.warn("User is not currently impersonating");
  }
};

export const useProfileStore = () => ({
  ...toRefs(profile),
  loaded: readonly(loaded),
  fetching: readonly(fetching),
  fetchProfile,
  setActiveRole,
  isImpersonating: readonly(isImpersonating),
  startImpersonating,
  stopImpersonating,
});
