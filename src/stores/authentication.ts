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

export const activeRole: Ref<string | null> = ref(null);

const intervenant: Intervenant = reactive({
  uid: "",
  nom: "",
  prenom: "",
  alias: null,
});
const allowedRoles: Ref<string[]> = ref([]);
const logout: Ref<(() => Promise<void>) | undefined> = ref(undefined);

export const useAuthentication = () => ({
  intervenant: readonly(intervenant),
  uid: readonly(toRef(intervenant, "uid")),
  allowedRoles: readonly(allowedRoles),
  activeRole: readonly(activeRole),
  logout: readonly(logout),
});

export const login = async (
  claims: Ref<KeycloakClaims | null>,
  keycloakLogout?: () => Promise<void>,
): Promise<void> => {
  if (!claims.value) {
    console.error("Login failed: No token claims provided during login");
    if (keycloakLogout) {
      await keycloakLogout();
    }
  } else if (!claims.value.allowedRoles.includes(claims.value.defaultRole)) {
    console.error("Login failed: Default role not allowed");
    if (keycloakLogout) {
      await keycloakLogout();
    }
  } else {
    console.debug("Logging in with token claims:", claims.value);
    allowedRoles.value = claims.value.allowedRoles;
    activeRole.value = claims.value.defaultRole;
    intervenant.uid = claims.value.userId;
    intervenant.nom = claims.value.lastName ?? "";
    intervenant.prenom = claims.value.firstName ?? "";
    intervenant.alias = claims.value.alias;
    logout.value = keycloakLogout;
    console.debug("Logged in!");
  }
};

export const getProfile = async (
  client: Client,
): Promise<Intervenant | null> => {
  const queryIntervenant = await client.query(
    GET_INTERVENANT,
    { uid: intervenant.uid },
    { requestPolicy: "network-only" },
  );
  if (queryIntervenant.data?.intervenant) {
    console.debug(
      "Profile retrieved in database:",
      queryIntervenant.data.intervenant,
    );
    return queryIntervenant.data.intervenant;
  } else {
    console.warn("Could not find user profile in the database");
    return null;
  }
};

export const applyProfile = (profile: Intervenant) => {
  Object.assign(intervenant, profile);
};

export const updateProfile = async (
  profile: Intervenant | null,
  client: Client,
): Promise<void> => {
  const updateIntervenant = await client.mutation(UPSERT_INTERVENANT, {
    uid: intervenant.uid,
    nom: intervenant.nom,
    prenom: intervenant.prenom,
  });
  if (!updateIntervenant.error) {
    console.debug(`User profile ${profile ? "updated" : "created"}`);
  }

  // Aliases cannot be updated automatically with the current login flow
  // because Keycloak does not provide a token claim when the attribute is null
  // and Hasura's permission system does not handle optional session variables.
  if (intervenant.alias !== (profile?.alias ?? null)) {
    console.warn(
      `Aliases mismatch ` +
        `(current value: ${intervenant.alias ?? "null"}; ` +
        `local value: ${profile?.alias ?? "null"}). ` +
        `Please report this warning to an administrator`,
    );
  }
};
