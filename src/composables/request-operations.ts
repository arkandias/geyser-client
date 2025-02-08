import { useMutation, useQuery } from "@urql/vue";

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

const getService = async (uid: string, courseId: number) => {
  const course = await useQuery({
    query: GetServiceFromCourseDocument,
    variables: { uid, courseId },
    context: { requestPolicy: "network-only" },
  }).then((result) => result.data.value?.course ?? null);

  if (!course) {
    console.error(`No course found with id ${courseId.toString()}`);
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération du cours",
    });
    return null;
  }

  if (!course.yearByYear.services[0]) {
    console.error(
      `No service found for teacher ${uid} and year ${course.year.toString()}`,
    );
    notify(NotifyType.ERROR, {
      message: `Pas de service trouvé`,
      caption: `Veuillez d'abord créer un service`,
    });
    return null;
  }

  return course.yearByYear.services[0].id;
};

const getRequest = async (
  serviceId: number,
  courseId: number,
  requestType: string,
) => {
  const requests = await useQuery({
    query: GetRequestDocument,
    variables: { serviceId, courseId, requestType },
    context: { requestPolicy: "network-only" },
  }).then((result) => result.data.value?.requests ?? null);

  if (!requests) {
    console.error("Error while fetching current request");
    notify(NotifyType.ERROR, {
      message: "Erreur lors de la récupération de la demande actuelle",
    });
    return null;
  }

  return requests[0]?.hours ?? 0;
};

const updateRequest = async (
  uid: string,
  courseId: number,
  requestType: string,
  hours: number,
) => {
  const serviceId = await getService(uid, courseId);
  if (serviceId === null) {
    return;
  }
  return updateRequestWithServiceId(serviceId, courseId, requestType, hours);
};

const updateRequestWithServiceId = async (
  serviceId: number,
  courseId: number,
  requestType: string,
  hours: number,
) => {
  if (!isRequestType(requestType)) {
    console.error(`Invalid request type: ${requestType}`);
    notify(NotifyType.ERROR, {
      message: "Type de requête invalide",
    });
    return;
  }
  const current = await getRequest(serviceId, courseId, requestType);
  if (current === null) {
    return;
  }
  if (hours === current) {
    notify(NotifyType.DEFAULT, {
      message: getLabel(requestType) + " déjà enregistrée",
    });
    return;
  }
  if (hours === 0) {
    const deleteRequest = useMutation(DeleteRequestDocument);
    const { data, error } = await deleteRequest.executeMutation({
      serviceId,
      courseId,
      requestType,
    });
    if (data?.requests?.returning && !error) {
      notify(NotifyType.SUCCESS, {
        message: getLabel(requestType) + " supprimée",
      });
    } else {
      notify(NotifyType.ERROR, { message: "Échec de la suppression" });
    }
  } else {
    const upsertRequest = useMutation(UpsertRequestDocument);
    const { data, error } = await upsertRequest.executeMutation({
      serviceId,
      courseId,
      requestType,
      hours,
    });
    if (data?.request && !error) {
      notify(NotifyType.SUCCESS, {
        message:
          getLabel(requestType) + (current === 0 ? " créée" : " mise à jour"),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: `Échec de la ${current === 0 ? "création" : "mise à jour"}`,
      });
    }
  }
};

const deleteRequestById = async (id: number) => {
  const deleteRequestById = useMutation(DeleteRequestByIdDocument);
  const { data, error } = await deleteRequestById.executeMutation({ id });
  if (data?.request && !error) {
    notify(NotifyType.SUCCESS, {
      message: getLabel(data.request.type) + " supprimée",
    });
  } else {
    notify(NotifyType.ERROR, { message: "Échec de la suppression" });
  }
};

export const useRequestOperations = () => ({
  updateRequest,
  updateRequestWithServiceId,
  deleteRequestById,
});
