import { type Client, useClientHandle } from "@urql/vue";

import { isRequestType } from "@/config/types/request-types.ts";
import { graphql } from "@/gql";
import {
  DeleteRequestByIdDocument,
  DeleteRequestDocument,
  GetRequestDocument,
  GetServiceFromCourseDocument,
  UpsertRequestDocument,
} from "@/gql/graphql.ts";
import { i18n } from "@/services/i18n.ts";
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

const { t } = i18n.global;

const getService =
  (client: Client) => async (uid: string, courseId: number) => {
    const course = await client
      .query(
        GetServiceFromCourseDocument,
        { uid, courseId },
        { requestPolicy: "network-only" },
      )
      .toPromise()
      .then((result) => result.data?.course ?? null);

    if (!course) {
      console.error(`No course found with id ${courseId.toString()}`);
      notify(NotifyType.ERROR, {
        message: t("request.error.course_not_found"),
      });
      return null;
    }

    if (!course.yearByYear.services[0]) {
      console.error(
        `No service found for teacher ${uid} and year ${course.year.toString()}`,
      );
      notify(NotifyType.ERROR, {
        message: t("request.error.service_not_found.title"),
        caption: t("request.error.service_not_found.caption"),
      });
      return null;
    }

    return course.yearByYear.services[0].id;
  };

const getRequest =
  (client: Client) =>
  async (serviceId: number, courseId: number, requestType: string) => {
    const requests = await client
      .query(
        GetRequestDocument,
        { serviceId, courseId, requestType },
        { requestPolicy: "network-only" },
      )
      .toPromise()
      .then((result) => result.data?.requests ?? null);

    if (!requests) {
      console.error("Error while fetching current request");
      notify(NotifyType.ERROR, {
        message: t("request.error.fetch"),
      });
      return null;
    }

    return requests[0]?.hours ?? 0;
  };

const updateRequest =
  (client: Client) =>
  async (uid: string, courseId: number, requestType: string, hours: number) => {
    const serviceId = await getService(client)(uid, courseId);
    if (serviceId === null) {
      return;
    }
    return updateRequestWithServiceId(client)(
      serviceId,
      courseId,
      requestType,
      hours,
    );
  };

const updateRequestWithServiceId =
  (client: Client) =>
  async (
    serviceId: number,
    courseId: number,
    requestType: string,
    hours: number,
  ) => {
    if (!isRequestType(requestType)) {
      console.error(`Invalid request type: ${requestType}`);
      notify(NotifyType.ERROR, {
        message: t("request.error.invalid_type"),
      });
      return;
    }
    const current = await getRequest(client)(serviceId, courseId, requestType);
    if (current === null) {
      return;
    }
    if (hours === current) {
      notify(NotifyType.DEFAULT, {
        message: t("request.success.already_recorded", {
          type: t(`request.type.${requestType}`),
        }),
      });
      return;
    }
    if (hours === 0) {
      const { data, error } = await client.mutation(DeleteRequestDocument, {
        serviceId,
        courseId,
        requestType,
      });
      if (data?.requests?.returning && !error) {
        notify(NotifyType.SUCCESS, {
          message: t("request.success.deleted", {
            type: t(`request.type.${requestType}`),
          }),
        });
      } else {
        notify(NotifyType.ERROR, {
          message: t("request.error.delete"),
        });
      }
    } else {
      const { data, error } = await client.mutation(UpsertRequestDocument, {
        serviceId,
        courseId,
        requestType,
        hours,
      });
      if (data?.request && !error) {
        notify(NotifyType.SUCCESS, {
          message: t(
            current === 0
              ? "request.success.created"
              : "request.success.updated",
            { type: t(`request.type.${requestType}`) },
          ),
        });
      } else {
        notify(NotifyType.ERROR, {
          message: t(
            current === 0 ? "request.error.create" : "request.error.update",
          ),
        });
      }
    }
  };

const deleteRequestById = (client: Client) => async (id: number) => {
  const { data, error } = await client.mutation(DeleteRequestByIdDocument, {
    id,
  });
  if (data?.request && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("request.success.deleted", {
        type: t(`request.${data.request.type}`),
      }),
    });
  } else {
    notify(NotifyType.ERROR, { message: t("request.error.delete") });
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
