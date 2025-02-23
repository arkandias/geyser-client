<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { usePermissions } from "@/composables/permissions.ts";
import { useRequestOperations } from "@/composables/request-operations.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { RequestCardDataFragmentDoc } from "@/gql/graphql.ts";
import { priorityColor } from "@/utils/colors.ts";
import { formatUser } from "@/utils/format.ts";

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
        uid
        firstname
        lastname
        alias
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
`);

const { t, n } = useCustomI18n();

const perm = usePermissions();
const { updateRequestWithServiceId, deleteRequestById } =
  useRequestOperations();

const data = computed(() =>
  useFragment(RequestCardDataFragmentDoc, dataFragment),
);

const assign = async (): Promise<void> => {
  await updateRequestWithServiceId(
    data.value.service.id,
    data.value.course.id,
    REQUEST_TYPES.ASSIGNMENT,
    data.value.hours,
  );
};
const remove = async (): Promise<void> => {
  await deleteRequestById(data.value.id);
};

const groups = computed(() =>
  data.value.course.hoursPerGroup
    ? data.value.hours / data.value.course.hoursPerGroup
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
</script>

<template>
  <QCard bordered square class="request-card">
    <QCardSection class="request-card__titre q-pa-xs text-body2">
      <QBadge
        v-if="data.isPriority !== null"
        :color="priorityColor(data.isPriority)"
        rounded
      />
      {{ formatUser(data.service.teacher) }}
      <QTooltip :delay="TOOLTIP_DELAY" anchor="top middle" self="bottom middle">
        {{ formatUser(data.service.teacher) }}
      </QTooltip>
    </QCardSection>
    <QCardSection class="q-pa-xs text-caption">
      {{ n(groups, "decimal") }}
      {{ t("request_card.group", Math.ceil(groups)) }}
      <br />
      {{ n(data.hours, "decimal") }}
      {{ t("request_card.hour", Math.ceil(data.hours)) }}
    </QCardSection>
    <QSeparator v-if="!archive && displayActions(data.type)" />
    <QCardActions
      v-if="!archive && displayActions(data.type)"
      align="evenly"
      class="q-pa-xs"
    >
      <QBtn
        v-if="displayAssignButton(data.type)"
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
          {{ t("request_card.tooltip.assign") }}
        </QTooltip>
      </QBtn>
      <QBtn
        v-if="displayDeleteButton(data.type)"
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
          {{ t("request_card.tooltip.remove") }}
        </QTooltip>
      </QBtn>
    </QCardActions>
  </QCard>
</template>

<style scoped lang="scss">
.request-card {
  width: $request-cards-width;
  text-align: center;
}

.request-card__titre {
  background-color: $grey-3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.body--dark .request-card__titre {
  background-color: $grey-9;
}
</style>
