<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { usePermissions } from "@/composables/usePermissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  DeleteRequestCardDocument,
  GetAssignmentDocument,
  InsertAssignementDocument,
  RequestCardDataFragmentDoc,
  UpdateAssignmentDocument,
} from "@/gql/graphql.ts";
import { priorityColor } from "@/utils/colors.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof RequestCardDataFragmentDoc>;
  archive?: boolean;
}>();

graphql(`
  fragment RequestCardData on Request {
    id
    service {
      id
      teacher {
        displayname
      }
    }
    course {
      id
      hoursPerGroup: hoursEffective
    }
    type
    hours
    isPriority
  }

  query GetAssignment($serviceId: Int!, $courseId: Int!) {
    requests: request(
      where: {
        _and: [
          { serviceId: { _eq: $serviceId } }
          { courseId: { _eq: $courseId } }
          { type: { _eq: "assignment" } }
        ]
      }
      limit: 1 # unique
    ) {
      id
      hours
    }
  }

  mutation InsertAssignement(
    $serviceId: Int!
    $courseId: Int!
    $hours: Float!
  ) {
    assignment: insertRequestOne(
      object: {
        serviceId: $serviceId
        courseId: $courseId
        type: "assignment"
        hours: $hours
      }
    ) {
      id
    }
  }

  mutation UpdateAssignment($id: Int!, $hours: Float!) {
    assignment: updateRequestByPk(
      pkColumns: { id: $id }
      _set: { hours: $hours }
    ) {
      id
    }
  }

  mutation DeleteRequestCard($id: Int!) {
    request: deleteRequestByPk(id: $id) {
      id
    }
  }
`);

const { t, n } = useCustomI18n();
const perm = usePermissions();
const client = useClientHandle().client;

const request = computed(() =>
  useFragment(RequestCardDataFragmentDoc, dataFragment),
);

const groups = computed(() =>
  request.value.course.hoursPerGroup
    ? request.value.hours / request.value.course.hoursPerGroup
    : 0,
);

const displayAssignButton = computed(
  () => (requestType: string) =>
    requestType !== REQUEST_TYPES.ASSIGNMENT && perm.toEditAssignments,
);

const displayDeleteButton = computed(() => (requestType: string) => {
  switch (requestType) {
    case REQUEST_TYPES.ASSIGNMENT:
      return perm.toEditAssignments;
    default:
      return perm.toDeleteRequests;
  }
});

const displayActions = computed(
  () => (requestType: string) =>
    displayAssignButton.value(requestType) ||
    displayDeleteButton.value(requestType),
);

const assign = async (): Promise<void> => {
  const result = await client.query(
    GetAssignmentDocument,
    {
      serviceId: request.value.service.id,
      courseId: request.value.course.id,
    },
    { requestPolicy: "network-only" },
  );

  if (!result.data?.requests || result.error) {
    notify(NotifyType.ERROR, {
      message: t("requestCard.assign.error"),
      caption: result.error?.message,
    });
    return;
  }

  const assignment = result.data.requests[0];

  if (assignment) {
    if (assignment.hours === request.value.hours) {
      notify(NotifyType.DEFAULT, {
        message: t("requestCard.assign.identical"),
      });
      return;
    }

    const { data, error } = await client.mutation(UpdateAssignmentDocument, {
      id: assignment.id,
      hours: request.value.hours,
    });

    if (data?.assignment && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("requestCard.assign.updated"),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t("requestCard.assign.error"),
        caption: error?.message,
      });
    }
  } else {
    const { data, error } = await client.mutation(InsertAssignementDocument, {
      serviceId: request.value.service.id,
      courseId: request.value.course.id,
      hours: request.value.hours,
    });

    if (data?.assignment && !error) {
      notify(NotifyType.SUCCESS, {
        message: t("requestCard.assign.created"),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t("requestCard.assign.error"),
        caption: error?.message,
      });
    }
  }
};

const remove = async (): Promise<void> => {
  const { data, error } = await client.mutation(DeleteRequestCardDocument, {
    id: request.value.id,
  });

  if (data?.request && !error) {
    notify(NotifyType.SUCCESS, {
      message: t("requestCard.delete.success"),
    });
  } else {
    notify(NotifyType.ERROR, {
      message: t("requestCard.delete.error"),
      caption: error?.message,
    });
  }
};
</script>

<template>
  <QCard bordered square class="request-card">
    <QCardSection class="request-card__titre q-pa-xs text-body2">
      <QBadge
        v-if="request.isPriority !== null"
        :color="priorityColor(request.isPriority)"
        rounded
      />
      {{ request.service.teacher.displayname }}
      <QTooltip :delay="TOOLTIP_DELAY" anchor="top middle" self="bottom middle">
        {{ request.service.teacher.displayname }}
      </QTooltip>
    </QCardSection>
    <QCardSection class="q-pa-xs text-caption">
      {{ n(groups, "decimal") }}
      {{ t("requestCard.group", Math.ceil(groups)) }}
      <br />
      {{ n(request.hours, "decimal") }}
      {{ t("requestCard.hour", Math.ceil(request.hours)) }}
    </QCardSection>
    <QSeparator v-if="!archive && displayActions(request.type)" />
    <QCardActions
      v-if="!archive && displayActions(request.type)"
      align="evenly"
      class="q-pa-xs"
    >
      <QBtn
        v-if="displayAssignButton(request.type)"
        icon="sym_s_check"
        color="positive"
        size="sm"
        flat
        square
        dense
        @click="assign()"
      >
        <QTooltip
          :delay="TOOLTIP_DELAY"
          anchor="bottom middle"
          self="top middle"
        >
          {{ t("requestCard.tooltip.assign") }}
        </QTooltip>
      </QBtn>
      <QBtn
        v-if="displayDeleteButton(request.type)"
        icon="sym_s_close"
        color="negative"
        size="sm"
        flat
        square
        dense
        @click="remove()"
      >
        <QTooltip
          :delay="TOOLTIP_DELAY"
          anchor="bottom middle"
          self="top middle"
        >
          {{ t("requestCard.tooltip.remove") }}
        </QTooltip>
      </QBtn>
    </QCardActions>
  </QCard>
</template>

<style scoped lang="scss">
.request-card {
  width: 120px;
  text-align: center;
}

.request-card__titre {
  background-color: $grey-3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.body--dark .request-card__titre {
  background-color: $grey-9;
}
</style>
