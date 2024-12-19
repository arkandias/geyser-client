import type { Client } from "@urql/vue";

import {
  DELETE_REQUEST,
  DELETE_REQUEST_BY_ID,
  GET_REQUEST,
  UPSERT_REQUEST,
} from "@/graphql/requests.ts";
import { formatRequestType } from "@/helpers/format.ts";
import { defaultNotify, errorNotify, successNotify } from "@/helpers/notify.ts";

const getCurrentRequest = async (
  client: Client,
  variables: { uid: string; courseId: number; requestType: string },
): Promise<number | null> => {
  const result = await client.query(GET_REQUEST, variables, {
    requestPolicy: "network-only",
  });
  if (!result.data?.requests[0]) {
    console.error(
      "Cannot get current demande. Please report this error to an administrator",
    );
    errorNotify(
      "Impossible de récupérer la demande actuelle",
      "Merci de rapporter cette erreur à un administrateur",
    );
    return null;
  }
  return result.data.requests[0].hours;
};

export const updateRequest = async (
  client: Client,
  variables: {
    uid: string;
    courseId: number;
    requestType: string;
    hours: number;
  },
): Promise<void> => {
  const current = await getCurrentRequest(client, variables);
  if (current === null) {
    return;
  }
  if (variables.hours === current) {
    defaultNotify(formatRequestType(variables.requestType) + " identique");
    return;
  }
  if (variables.hours === 0) {
    const result = await client.mutation(DELETE_REQUEST, variables);
    if (result.data?.requests?.returning && !result.error) {
      successNotify(formatRequestType(variables.requestType) + " supprimée");
    } else {
      errorNotify("Échec de la suppression");
    }
  } else {
    const result = await client.mutation(UPSERT_REQUEST, variables);
    if (result.data?.request && !result.error) {
      successNotify(
        formatRequestType(variables.requestType) +
          (current === 0 ? " créée" : " mise à jour"),
      );
    } else {
      errorNotify(`Échec de la ${current === 0 ? "création" : "mise à jour"}`);
    }
  }
};

export const deleteDemandeById = async (
  client: Client,
  id: number,
  typeDemande: string,
): Promise<void> => {
  const result = await client.mutation(DELETE_REQUEST_BY_ID, { id });
  if (result.data?.request && !result.error) {
    successNotify(formatRequestType(typeDemande) + " supprimée");
  } else {
    errorNotify("Échec de la suppression");
  }
};
