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
  if (!result.data) {
    console.error(
      "Error while fetching the current request. Please report this error to an administrator",
    );
    notify(NotifyType.Error, {
      message: "Erreur lors de la récupération de la demande actuelle",
    });
    return null;
  }
  if (!result.data.course) {
    console.error(
      `Could not find course with id ${variables.courseId.toString()}`,
    );
    notify(NotifyType.Error, {
      message: "Erreur lors de la récupération de la demande actuelle",
    });
    return null;
  }
  if (!result.data.course.yearByYear.services[0]) {
    console.error(
      `No service associated to this request. You must create a service for user ${variables.uid} and year ${result.data.course.year.toString()} first`,
    );
    notify(NotifyType.Error, {
      message: `Pas de service trouvé pour ${variables.uid} pour l'année ${result.data.course.year.toString()}`,
      caption: `Veuillez d'abord créer un service sur la page enseignant`,
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
      const result = await client.mutation(DELETE_REQUEST, rest);
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
