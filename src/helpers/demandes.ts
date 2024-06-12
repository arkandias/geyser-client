/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { Client } from "@urql/vue";

import {
  DELETE_DEMANDE,
  DELETE_DEMANDE_BY_ID,
  GET_DEMANDE,
  UPSERT_DEMANDE,
} from "@/graphql/demandes.ts";
import { defaultNotify, errorNotify, successNotify } from "@/helpers/notify.ts";

const getCurrentDemande = async (
  client: Client,
  uid: string,
  ensId: number,
  typeDemande: string,
): Promise<number | null> => {
  const resultQuery = await client.query(
    GET_DEMANDE,
    { uid, ensId, typeDemande },
    { requestPolicy: "network-only" },
  );
  if (!resultQuery.data?.demande) {
    console.error(
      "Cannot get current demande. Please report this error to an administrator",
    );
    errorNotify(
      "Impossible de récupérer la demande actuelle",
      "Merci de rapporter cette erreur à un administrateur",
    );
    return null;
  }
  return resultQuery.data.demande[0]?.heures ?? 0;
};

export const updateDemande = async (
  client: Client,
  uid: string,
  ensId: number,
  typeDemande: string,
  heures: number,
): Promise<void> => {
  const current = await getCurrentDemande(client, uid, ensId, typeDemande);
  if (current === null) {
    return;
  }
  if (heures === current) {
    defaultNotify(format(typeDemande) + " identique");
    return;
  }
  if (heures === 0) {
    const resultMutation = await client.mutation(DELETE_DEMANDE, {
      uid,
      ensId,
      typeDemande,
    });
    if (!resultMutation.error) {
      successNotify(format(typeDemande) + " supprimée");
    }
  } else {
    const resultMutation = await client.mutation(UPSERT_DEMANDE, {
      uid,
      ensId,
      typeDemande,
      heures,
    });
    if (!resultMutation.error) {
      successNotify(
        format(typeDemande) + (current === 0 ? " créée" : " mise à jour"),
      );
    }
  }
};

export const deleteDemande = async (
  client: Client,
  id: number,
  typeDemande: string,
): Promise<void> => {
  const resultMutation = await client.mutation(DELETE_DEMANDE_BY_ID, { id });
  if (!resultMutation.error) {
    successNotify(format(typeDemande) + " supprimée");
  }
};

const format = (typeDemande: string): string =>
  typeDemande === "attribution" ? "Attribution" : `Demande ${typeDemande}`;
