import { type Client, useClientHandle } from "@urql/vue";

import {
  REQUEST_TYPE_OPTIONS,
  type RequestType,
  isRequestType,
} from "@/config/types/request-types.ts";
import {
  DELETE_REQUEST,
  DELETE_REQUEST_BY_ID,
  GET_REQUEST,
  UPSERT_REQUEST,
} from "@/graphql/requests.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";

const getLabel = (requestType: RequestType): string => {
  const option = REQUEST_TYPE_OPTIONS.find(
    (option) => option.value === requestType,
  );
  if (!option) {
    throw new Error(`No label found for request type: ${requestType}`);
  }
  return option.label;
};

const getRequest = async (
  client: Client,
  variables: {
    uid: string;
    courseId: number;
    requestType: string;
  },
): Promise<number | null> => {
  const result = await client.query(GET_REQUEST, variables, {
    requestPolicy: "network-only",
  });
  if (!result.data?.requests) {
    console.error(
      "Cannot get the current request. Please report this error to an administrator",
    );
    notify(NotifyType.Error, {
      message: "Impossible de récupérer la demande actuelle",
    });
    return null;
  }
  return result.data.requests[0]?.hours ?? 0;
};

const updateRequest =
  (client: Client) =>
  async (variables: {
    uid: string;
    courseId: number;
    requestType: string;
    hours: number;
  }): Promise<void> => {
    if (!isRequestType(variables.requestType)) {
      throw new Error(`Invalid request type '${variables.requestType}'`);
    }
    const { hours, ...rest } = variables;
    const current = await getRequest(client, rest);
    if (current === null) {
      return;
    }
    if (hours === current) {
      notify(NotifyType.Default, {
        message: getLabel(variables.requestType) + " déjà enregistrée",
      });
      return;
    }
    if (hours === 0) {
      const result = await client.mutation(DELETE_REQUEST, variables);
      if (result.data?.requests?.returning && !result.error) {
        notify(NotifyType.Success, {
          message: getLabel(variables.requestType) + " supprimée",
        });
      } else {
        notify(NotifyType.Error, { message: "Échec de la suppression" });
      }
    } else {
      const result = await client.mutation(UPSERT_REQUEST, variables);
      if (result.data?.request && !result.error) {
        notify(NotifyType.Success, {
          message:
            getLabel(variables.requestType) +
            (current === 0 ? " créée" : " mise à jour"),
        });
      } else {
        notify(NotifyType.Error, {
          message: `Échec de la ${current === 0 ? "création" : "mise à jour"}`,
        });
      }
    }
  };

const deleteRequest =
  (client: Client) =>
  async (id: number, requestType: string): Promise<void> => {
    if (!isRequestType(requestType)) {
      throw new Error(`Invalid request type '${requestType}'`);
    }
    const result = await client.mutation(DELETE_REQUEST_BY_ID, { id });
    if (result.data?.request && !result.error) {
      notify(NotifyType.Success, {
        message: getLabel(requestType) + " supprimée",
      });
    } else {
      notify(NotifyType.Error, { message: "Échec de la suppression" });
    }
  };

export const useRequestOperations = () => {
  const client = useClientHandle().client;
  return {
    updateRequest: updateRequest(client),
    deleteRequest: deleteRequest(client),
  };
};
