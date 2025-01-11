import { type Client, useClientHandle } from "@urql/vue";
import { reactive, readonly, ref } from "vue";

import { ROLES, type Role } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import { GetUserProfileDocument } from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { getClaims, logout as logoutKeycloak } from "@/services/keycloak.ts";
import type { HasuraClaims } from "@/types/claims.ts";
import type { ProfileWithActive } from "@/types/user.ts";

graphql(`
  query GetUserProfile($uid: String!) {
    profile: intervenant_by_pk(uid: $uid) {
      uid
      firstname: prenom
      lastname: nom
      alias
      active: actif
    }
  }
`);

const isLogged = ref(false);
const claims = reactive<HasuraClaims>({
  userId: "",
  defaultRole: ROLES.USER,
  allowedRoles: [ROLES.USER],
});
const profile = reactive<ProfileWithActive>({
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

const setProfile = (newProfile: ProfileWithActive) => {
  Object.assign(profile, newProfile);
};

const getProfile = async (client: Client, uid: string) =>
  client
    .query(GetUserProfileDocument, { uid })
    .then((result) => result.data?.profile ?? null);

const login = (client: Client) => async () => {
  const claims = getClaims();
  if (claims === null) {
    console.error("Login failed: No claims");
    notify(NotifyType.ERROR, { message: "Attributs Hasura non trouvés" });
    return;
  }
  const profile = await getProfile(client, claims.userId);
  if (!profile) {
    console.error(
      `Login failed: Profile not found with uid '${claims.userId}'`,
    );
    notify(NotifyType.ERROR, { message: "Profil non trouvé" });
    return;
  }
  setClaims(claims);
  setProfile(profile);
  isLogged.value = true;
  notify(NotifyType.SUCCESS, { message: "Connecté" });
};

const logout = async () => {
  await logoutKeycloak();
  isLogged.value = false;
};

// Impersonating
const isImpersonating = ref(false);
const claimsSaved = reactive<HasuraClaims>({ ...claims });
const profileSaved = reactive<ProfileWithActive>({ ...profile });

const impersonate = (
  otherClaims: HasuraClaims,
  otherProfile: ProfileWithActive,
) => {
  if (!isImpersonating.value) {
    Object.assign(claimsSaved, claims);
    Object.assign(profileSaved, profile);
  }
  setClaims(otherClaims);
  setProfile(otherProfile);
  isImpersonating.value = true;
};

const stopImpersonating = () => {
  if (isImpersonating.value) {
    setClaims(claimsSaved);
    setProfile(profileSaved);
    isImpersonating.value = false;
  }
};

export const useAuthentication = () => {
  const client: Client = useClientHandle().client;
  return {
    isLogged: readonly(isLogged),
    isImpersonating: readonly(isImpersonating),
    claims: readonly(claims),
    profile: readonly(profile),
    activeRole: readonly(activeRole),
    setActiveRole,
    login: login(client),
    logout,
    impersonate,
    stopImpersonating,
  };
};
