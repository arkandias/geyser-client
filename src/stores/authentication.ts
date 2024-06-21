/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { Client } from "@urql/vue";
import { Ref, reactive, readonly, ref, toRef } from "vue";

import { GET_INTERVENANT, UPSERT_INTERVENANT } from "@/graphql/intervenants.ts";
import { Intervenant } from "@/helpers/types.ts";
import { KeycloakClaims } from "@/services/keycloak.ts";

export const activeRole: Ref<string> = ref("");

const logged: Ref<boolean> = ref(false);
const intervenant: Intervenant = reactive({
  uid: "",
  nom: "",
  prenom: "",
  alias: null,
});
const allowedRoles: Ref<string[]> = ref([]);
const logout: Ref<(() => Promise<void>) | undefined> = ref(undefined);
export const setLogout = (fn: () => Promise<void>): void => {
  logout.value = fn;
};

export const useAuthentication = () => ({
  logged: readonly(logged),
  intervenant: readonly(intervenant),
  uid: readonly(toRef(intervenant, "uid")),
  allowedRoles: readonly(allowedRoles),
  activeRole: readonly(activeRole),
  logout: readonly(logout),
});

export async function login(
  claims: KeycloakClaims | null,
  flow?: string,
  client?: Client,
): Promise<boolean> {
  if (!claims) {
    console.error("Login failed: No token claims provided during login");
    return false;
  }
  if (!claims.allowedRoles.includes(claims.defaultRole)) {
    console.error("Login failed: Default role not allowed");
    intervenant.alias = claims.userId;
    return false;
  }
  console.debug("Logging in with token claims:", claims);
  let profile: Intervenant | null = {
    uid: claims.userId,
    nom: claims.lastName ?? "",
    prenom: claims.firstName ?? "",
    alias: claims.alias,
  };
  switch (flow) {
    case "LOOKUP":
      if (!client) {
        console.error("Login failed: Missing client with login flow 'LOOKUP'");
        return false;
      }
      profile = (await getProfile(profile.uid, client)) ?? null;
      break;
    case "IMPORT":
      if (!client) {
        console.error("Login failed: Missing client with login flow 'IMPORT'");
        return false;
      }
      profile = (await updateProfile(profile, client)) ?? null;
      break;
    case "DIRECT":
      break;
    default:
      console.warn(
        "Invalid Login Flow (valid flows are 'DIRECT', 'LOOKUP', and 'IMPORT'). Defaulting to 'DIRECT'",
      );
  }
  if (!profile) {
    return false;
  }
  allowedRoles.value = claims.allowedRoles;
  activeRole.value = claims.defaultRole;
  intervenant.uid = profile.uid;
  intervenant.nom = profile.nom;
  intervenant.prenom = profile.prenom;
  intervenant.alias = profile.alias;
  logged.value = true;
  console.debug("Logged in!");
  return true;
}

const getProfile = async (
  uid: string,
  client: Client,
): Promise<Intervenant | null> => {
  console.debug("Retrieving profile...");
  const result = await client.query(
    GET_INTERVENANT,
    { uid },
    { requestPolicy: "network-only" },
  );
  const profile = result.data?.intervenant ?? null;
  if (!profile) {
    console.warn("Could not find user profile in the database");
  }
  console.debug("Profile retrieved:", profile);
  return profile;
};

const updateProfile = async (
  profile: Intervenant,
  client: Client,
): Promise<Intervenant | null> => {
  console.debug("Updating profile...");
  const result = await client.mutation(UPSERT_INTERVENANT, {
    uid: profile.uid,
    nom: profile.nom,
    prenom: profile.prenom,
  });
  const newProfile = result.data?.intervenant ?? null;
  if (
    !newProfile ||
    newProfile.uid !== profile.uid ||
    newProfile.nom !== profile.nom ||
    newProfile.prenom !== profile.prenom
  ) {
    console.error("Could not update user profile in the database");
    return null;
  }
  console.debug("Profile updated:", newProfile);
  // Aliases cannot be updated automatically with the current login flow
  // because Keycloak does not provide a token claim when the attribute is null
  // and Hasura's permission system does not handle optional session variables.
  if (newProfile.alias !== profile.alias) {
    console.warn(
      `Aliases mismatch ` +
        `(current value: ${intervenant.alias ?? "null"}; ` +
        `local value: ${profile.alias ?? "null"}). ` +
        `Please report this warning to an administrator`,
    );
  }
  return newProfile;
};
