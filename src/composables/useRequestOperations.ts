import type { Client } from "@urql/vue";

import { isRequestType } from "@/config/types/request-types.ts";
import { graphql } from "@/gql";
import {
  DeleteRequestByIdDocument,
  DeleteRequestDocument,
  GetRequestDocument,
  UpsertRequestDocument,
} from "@/gql/graphql.ts";
import { i18n } from "@/services/i18n.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

graphql(`
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

const getRequest =
  (client: Client) =>
  async (serviceId: number, courseId: number, requestType: string) => {
    const { data, error } = await client.query(
      GetRequestDocument,
      { serviceId, courseId, requestType },
      { requestPolicy: "network-only" },
    );
    if (!data?.requests || error) {
      notify(NotifyType.ERROR, {
        message: t("request.error.fetch"),
        caption: error?.message,
      });
      return null;
    }
    return data.requests[0]?.hours ?? 0;
  };

const updateRequest =
  (client: Client) =>
  async (
    serviceId: number,
    courseId: number,
    requestType: string,
    hours: number,
  ) => {
    if (!isRequestType(requestType)) {
      console.error(`Invalid request type: ${requestType}`);
      return;
    }
    const current = await getRequest(client)(serviceId, courseId, requestType);
    if (current === null) {
      return;
    }
    if (hours === current) {
      notify(NotifyType.DEFAULT, {
        message: t("request.success.alreadyRecorded", {
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
          caption: error?.message,
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
          caption: error?.message,
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
    notify(NotifyType.ERROR, {
      message: t("request.error.delete"),
      caption: error?.message,
    });
  }
};

export const useRequestOperations = (client: Client) => ({
  updateRequest: updateRequest(client),
  deleteRequestById: deleteRequestById(client),
});
