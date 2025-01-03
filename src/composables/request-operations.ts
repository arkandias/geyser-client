import { type Client, useClientHandle } from "@urql/vue";

import {
  REQUEST_TYPE_OPTIONS,
  type RequestType,
  isRequestType,
} from "@/config/types/request-types.ts";
import { graphql } from "@/gql";
import {
  DeleteRequestByIdDocument,
  DeleteRequestDocument,
  GetRequestDocument,
  UpsertRequestDocument,
} from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";

graphql(`
  query GetRequest($uid: String!, $courseId: Int!, $requestType: String!) {
    requests: demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
      limit: 1 # unique
    ) {
      hours: heures
    }
    course: enseignement_by_pk(id: $courseId) {
      year: annee
      yearByYear: anneeByAnnee {
        services(
          where: { uid: { _eq: $uid } }
          limit: 1 # unique
        ) {
          id
        }
      }
    }
  }

  mutation UpsertRequest(
    $uid: String!
    $courseId: Int!
    $requestType: String!
    $hours: Float!
  ) {
    request: insert_demande_one(
      object: {
        uid: $uid
        ens_id: $courseId
        type: $requestType
        heures: $hours
      }
      on_conflict: {
        constraint: demande_uid_ens_id_type_key
        update_columns: [heures]
      }
    ) {
      id
    }
  }

  mutation DeleteRequest(
    $uid: String!
    $courseId: Int!
    $requestType: String!
  ) {
    requests: delete_demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
    ) {
      returning {
        id
      }
    }
  }

  mutation DeleteRequestById($id: Int!) {
    request: delete_demande_by_pk(id: $id) {
      id
    }
  }
`);

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
  const result = await client.query(GetRequestDocument, variables, {
    requestPolicy: "network-only",
  });
  if (!result.data) {
    console.error(
      "Error while fetching the current request. Please report this error to an administrator",
    );
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération de la demande actuelle",
    });
    return null;
  }
  if (!result.data.course) {
    console.error(
      `Could not find course with id ${variables.courseId.toString()}`,
    );
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération de la demande actuelle",
    });
    return null;
  }
  if (!result.data.course.yearByYear.services[0]) {
    console.error(
      `No service associated to this request. First, you must create a service for the year ${result.data.course.year.toString()} for the user ${variables.uid}`,
    );
    notify(NotifyType.ERROR, {
      message: `Pas de service trouvé pour l'année ${result.data.course.year.toString()} pour l'intervenant ${variables.uid}`,
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
      notify(NotifyType.DEFAULT, {
        message: getLabel(variables.requestType) + " déjà enregistrée",
      });
      return;
    }
    if (hours === 0) {
      const result = await client.mutation(DeleteRequestDocument, rest);
      if (result.data?.requests?.returning && !result.error) {
        notify(NotifyType.SUCCESS, {
          message: getLabel(variables.requestType) + " supprimée",
        });
      } else {
        notify(NotifyType.ERROR, { message: "Échec de la suppression" });
      }
    } else {
      const result = await client.mutation(UpsertRequestDocument, variables);
      if (result.data?.request && !result.error) {
        notify(NotifyType.SUCCESS, {
          message:
            getLabel(variables.requestType) +
            (current === 0 ? " créée" : " mise à jour"),
        });
      } else {
        notify(NotifyType.ERROR, {
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
    const result = await client.mutation(DeleteRequestByIdDocument, { id });
    if (result.data?.request && !result.error) {
      notify(NotifyType.SUCCESS, {
        message: getLabel(requestType) + " supprimée",
      });
    } else {
      notify(NotifyType.ERROR, { message: "Échec de la suppression" });
    }
  };

export const useRequestOperations = () => {
  const client = useClientHandle().client;
  return {
    updateRequest: updateRequest(client),
    deleteRequest: deleteRequest(client),
  };
};
