<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useRequestOperations } from "@/composables/request-operations.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { formatUser, nf, priorityColor } from "@/helpers/format.ts";
import type { RequestDetails } from "@/types/request.ts";

const { request, archive } = defineProps<{
  request: RequestDetails;
  archive?: boolean;
}>();

const perm = usePermissions();

const { updateRequest, deleteRequest } = useRequestOperations();
const assign = async (): Promise<void> => {
  await updateRequest({
    uid: request.teacher.uid,
    courseId: request.course.id,
    requestType: REQUEST_TYPES.ASSIGNMENT,
    hours: request.hours,
  });
};
const remove = async (): Promise<void> => {
  await deleteRequest(request.id, request.type);
};

const groups: ComputedRef<number> = computed(() =>
  request.course.hoursPerGroup
    ? request.hours / request.course.hoursPerGroup
    : 0,
);

const displayActions: ComputedRef<(requestType: string) => boolean> = computed(
  () => (requestType) => {
    switch (requestType) {
      case REQUEST_TYPES.ASSIGNMENT:
        return perm.toAssignCourses;
      default:
        return perm.toSubmitRequests || perm.toAssignCourses;
    }
  },
);

const displayAssignButton: ComputedRef<(requestType: string) => boolean> =
  computed(
    () => (requestType) =>
      requestType !== REQUEST_TYPES.ASSIGNMENT && perm.toAssignCourses,
  );
</script>

<template>
  <QCard bordered square class="request-card">
    <QCardSection class="request-card__titre q-pa-xs text-body2">
      <QBadge
        v-if="request.isPriority !== null"
        :color="priorityColor(request.isPriority)"
        rounded
      />
      {{ formatUser(request.teacher) }}
      <QTooltip :delay="TOOLTIP_DELAY" anchor="top middle" self="bottom middle">
        {{ formatUser(request.teacher) }}
      </QTooltip>
    </QCardSection>
    <QCardSection class="q-pa-xs text-caption">
      {{ nf.format(groups) + " groupe" + (groups > 1 ? "s" : "") }}
      <br />
      {{ nf.format(request.hours) + " heure" + (request.hours > 1 ? "s" : "") }}
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
        @click="assign"
      >
        <QTooltip
          :delay="TOOLTIP_DELAY"
          anchor="bottom middle"
          self="top middle"
        >
          Attribuer la demande
        </QTooltip>
      </QBtn>
      <QBtn
        icon="sym_s_close"
        color="negative"
        size="sm"
        :disable="!perm.toDeleteARequest(request)"
        flat
        square
        dense
        @click="remove"
      >
        <QTooltip
          :delay="TOOLTIP_DELAY"
          anchor="bottom middle"
          self="top middle"
        >
          Supprimer la demande
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
