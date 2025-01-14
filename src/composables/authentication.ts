import { type Client, useClientHandle } from "@urql/vue";
import { reactive, readonly, ref } from "vue";

import { ROLES, type Role } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import { GetUserProfileDocument } from "@/gql/graphql.ts";
import { getClaims, logout as logoutKeycloak } from "@/services/keycloak.ts";
import type { HasuraClaims } from "@/types/claims.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

graphql(`
  query GetUserProfile($uid: String!) {
    profile: teacher_by_pk(uid: $uid) {
      uid
      firstname
      lastname
      alias
      active
    }
  }
`);

type Profile = {
  uid: string;
  firstname: string;
  lastname: string;
  alias?: string | null;
  active: boolean;
};

const isLogged = ref(false);
const claims = reactive<HasuraClaims>({
  userId: "",
  defaultRole: ROLES.USER,
  allowedRoles: [ROLES.USER],
});
const profile = reactive<Profile>({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  active: false,
});
const activeRole = ref<Role>(ROLES.USER);

const setActiveRole = (role: Role) => {
  if (claims.allowedRoles.includes(role)) {
    activeRole.value = role;
  }
};

const setClaims = (newClaims: HasuraClaims) => {
  Object.assign(claims, newClaims);
  setActiveRole(newClaims.defaultRole);
};

const setProfile = (newProfile: Profile) => {
  Object.assign(profile, newProfile);
};

const getProfile = async (client: Client, uid: string) =>
  client
    .query(GetUserProfileDocument, { uid })
    .then((result) => result.data?.profile ?? null);

const loginWithClaims = async (client: Client) => {
  const profile = await getProfile(client, claims.userId);
  if (!profile) {
    console.error(`Login failed: Profile not found (uid=${claims.userId})`);
    notify(NotifyType.ERROR, { message: "Profil non trouvé" });
    return;
  }
  setProfile(profile);
  isLogged.value = true;
  notify(NotifyType.SUCCESS, { message: "Connecté" });
};

const login = (client: Client) => async () => {
  const claims = getClaims();
  if (claims === null) {
    console.error("Login failed: No claims");
    notify(NotifyType.ERROR, { message: "Attributs Hasura non trouvés" });
    return;
  }
  setClaims(claims);
  await loginWithClaims(client);
};

const logout = async () => {
  await logoutKeycloak();
  isLogged.value = false;
};

// Impersonating
const isImpersonating = ref(false);
const claimsSaved = reactive<HasuraClaims>({ ...claims });

const impersonate = (client: Client) => async (otherClaims: HasuraClaims) => {
  if (!isImpersonating.value) {
    Object.assign(claimsSaved, claims);
  }
  setClaims(otherClaims);
  await loginWithClaims(client);
  isImpersonating.value = true;
};

const stopImpersonating = (client: Client) => async () => {
  if (isImpersonating.value) {
    setClaims(claimsSaved);
    await loginWithClaims(client);
    isImpersonating.value = false;
  }
};

export const useAuthentication = () => {
  const client: Client = useClientHandle().client;
  return {
    isLogged: readonly(isLogged),
    claims: readonly(claims),
    profile: readonly(profile),
    activeRole: readonly(activeRole),
    setActiveRole,
    login: login(client),
    logout,
    isImpersonating: readonly(isImpersonating),
    impersonate: impersonate(client),
    stopImpersonating: stopImpersonating(client),
  };
};
