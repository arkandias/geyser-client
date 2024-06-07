/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { GET_INTERVENANT, UPSERT_INTERVENANT } from "@/graphql/intervenants.ts";
import { Intervenant, KeycloakClaims } from "@/helpers/types.ts";
import { Client } from "@urql/vue";
import { Ref, reactive, readonly, ref, toRef } from "vue";

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

export const useAuthentication = () => ({
  logged: readonly(logged),
  intervenant: readonly(intervenant),
  uid: readonly(toRef(intervenant, "uid")),
  allowedRoles: readonly(allowedRoles),
  activeRole: readonly(activeRole),
  logout: readonly(logout),
});

export const login = (
  claims: Ref<KeycloakClaims | null>,
  keycloakLogout?: () => Promise<void>,
) => {
  if (!claims.value) {
    console.error("No token claims provided during login");
  } else {
    console.debug("Logging in with token claims:", claims.value);
    allowedRoles.value = claims.value.allowedRoles;
    activeRole.value = claims.value.defaultRole;
    intervenant.uid = claims.value.userId;
    intervenant.nom = claims.value.lastName ?? "";
    intervenant.prenom = claims.value.firstName ?? "";
    intervenant.alias = claims.value.alias;
    logout.value = keycloakLogout;
    logged.value = true;
  }
};

export const getProfile = async (client: Client) => {
  // Retrieving user profile in the database
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
    intervenant.nom = queryIntervenant.data.intervenant.nom;
    intervenant.prenom = queryIntervenant.data.intervenant.prenom;
    intervenant.alias = queryIntervenant.data.intervenant.alias ?? null;
  } else {
    console.warn("Could not find user profile in the database");
    intervenant.alias = intervenant.uid;
  }
};

export const updateProfile = async (client: Client) => {
  // Retrieving user profile in the database
  const queryIntervenant = await client.query(
    GET_INTERVENANT,
    { uid: intervenant.uid },
    { requestPolicy: "network-only" },
  );
  let diff: boolean;
  let diffAlias: boolean;
  if (queryIntervenant.data?.intervenant) {
    console.debug(
      "Profile retrieved in database:",
      queryIntervenant.data.intervenant,
    );
    diff =
      intervenant.nom !== queryIntervenant.data.intervenant.nom ||
      intervenant.prenom !== queryIntervenant.data.intervenant.prenom;
    diffAlias = intervenant.alias !== queryIntervenant.data.intervenant.alias;
  } else {
    console.debug("Could not find user profile in the database");
    diff = true;
    diffAlias = intervenant.alias !== null;
  }

  // Aliases cannot be updated automatically with the current login flow
  // because Keycloak does not provide a token claim when the attribute is null
  // and Hasura's permission system does not handle optional session variables.
  if (diffAlias) {
    console.warn(
      `Aliases mismatch ` +
        `(current value: ${intervenant.alias ?? "-"}; ` +
        `local value: ${queryIntervenant.data?.intervenant?.alias ?? "-"}). ` +
        `Please report this warning to an administrator`,
    );
  }

  if (diff) {
    // Updating user profile in the database
    const updateIntervenant = await client.mutation(UPSERT_INTERVENANT, {
      uid: intervenant.uid,
      nom: intervenant.nom,
      prenom: intervenant.prenom,
    });
    if (!updateIntervenant.error) {
      console.debug(
        `User profile ${queryIntervenant.data?.intervenant ? "updated" : "created"}`,
      );
    }
  }
};
