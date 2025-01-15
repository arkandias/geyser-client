import { type Client, useClientHandle } from "@urql/vue";

import {
  REQUEST_TYPE_OPTIONS,
  isRequestType,
} from "@/config/types/request-types.ts";
import { graphql } from "@/gql";
import {
  DeleteRequestByIdDocument,
  DeleteRequestDocument,
  GetRequestDocument,
  GetServiceFromCourseDocument,
  UpsertRequestDocument,
} from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

graphql(`
  query GetServiceFromCourse($uid: String!, $courseId: Int!) {
    course: courseByPk(id: $courseId) {
      year
      yearByYear {
        services(
          where: { teacher: { uid: { _eq: $uid } } }
          limit: 1 # unique
        ) {
          id
        }
      }
    }
  }

  query GetRequest($serviceId: Int!, $courseId: Int!, $requestType: String!) {
    requests: request(
      where: {
        _and: [
          { serviceId: { _eq: $serviceId } }
          { courseId: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
      limit: 1 # unique
    ) {
      hours
    }
  }

  mutation UpsertRequest(
    $serviceId: Int!
    $courseId: Int!
    $requestType: String!
    $hours: Float!
  ) {
    request: insertRequestOne(
      object: {
        serviceId: $serviceId
        courseId: $courseId
        type: $requestType
        hours: $hours
      }
      onConflict: {
        constraint: request_service_id_course_id_type_key
        updateColumns: [hours]
      }
    ) {
      id
    }
  }

  mutation DeleteRequest(
    $serviceId: Int!
    $courseId: Int!
    $requestType: String!
  ) {
    requests: deleteRequest(
      where: {
        _and: [
          { serviceId: { _eq: $serviceId } }
          { courseId: { _eq: $courseId } }
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
    request: deleteRequestByPk(id: $id) {
      id
      type
    }
  }
`);

const getLabel = (requestType: string) => {
  const option = REQUEST_TYPE_OPTIONS.find(
    (option) => option.value === requestType,
  );
  return option?.label ?? "";
};

const getService = async (
  client: Client,
  variables: {
    uid: string;
    courseId: number;
  },
) => {
  const result = await client.query(GetServiceFromCourseDocument, variables, {
    requestPolicy: "network-only",
  });
  if (!result.data) {
    console.error("Error while fetching teacher service");
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération du service de l'intervenant",
    });
    return null;
  }
  if (!result.data.course) {
    console.error(`No course found (id=${variables.courseId.toString()})`);
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération du cours",
    });
    return null;
  }
  if (!result.data.course.yearByYear.services[0]) {
    console.error(
      `No service found (year=${result.data.course.year.toString()}, uid=${variables.uid})`,
    );
    notify(NotifyType.ERROR, {
      message: `Pas de service trouvé`,
      caption: `Veuillez d'abord créer un service`,
    });
    return null;
  }
  return result.data.course.yearByYear.services[0].id;
};

const getRequest = async (
  client: Client,
  variables: {
    serviceId: number;
    courseId: number;
    requestType: string;
  },
) => {
  const result = await client.query(GetRequestDocument, variables, {
    requestPolicy: "network-only",
  });
  if (!result.data) {
    console.error("Error while fetching current request");
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération de la demande actuelle",
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
  }) => {
    const { uid, courseId, ...rest } = variables;
    const serviceId = await getService(client, { uid, courseId });
    if (serviceId === null) {
      return;
    }
    return updateRequestWithServiceId(client)({ serviceId, courseId, ...rest });
  };

const updateRequestWithServiceId =
  (client: Client) =>
  async (variables: {
    serviceId: number;
    courseId: number;
    requestType: string;
    hours: number;
  }) => {
    if (!isRequestType(variables.requestType)) {
      console.error(`Invalid request type: ${variables.requestType}`);
      notify(NotifyType.ERROR, {
        message: "Type de requête invalide",
      });
      return;
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

const deleteRequestById = (client: Client) => async (id: number) => {
  const result = await client.mutation(DeleteRequestByIdDocument, { id });
  if (result.data?.request && !result.error) {
    notify(NotifyType.SUCCESS, {
      message: getLabel(result.data.request.type) + " supprimée",
    });
  } else {
    notify(NotifyType.ERROR, { message: "Échec de la suppression" });
  }
};

export const useRequestOperations = () => {
  const client = useClientHandle().client;
  return {
    updateRequest: updateRequest(client),
    updateRequestWithServiceId: updateRequestWithServiceId(client),
    deleteRequestById: deleteRequestById(client),
  };
};
