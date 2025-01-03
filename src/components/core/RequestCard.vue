<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useRequestOperations } from "@/composables/request-operations.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { RequestCardDataFragmentDoc } from "@/gql/graphql.ts";
import { formatUser, nf, priorityColor } from "@/helpers/format.ts";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof RequestCardDataFragmentDoc>;
  archive?: boolean;
}>();

graphql(`
  fragment RequestCardData on demande {
    id
    teacher: intervenant {
      uid
      firstname: prenom
      lastname: nom
      alias
    }
    course: enseignement {
      id
      hoursPerGroup: heures_corrigees
    }
    type
    hours: heures
    isPriority: prioritaire
  }
`);

const perm = usePermissions();

const data = computed(() =>
  useFragment(RequestCardDataFragmentDoc, dataFragment),
);

const { updateRequest, deleteRequest } = useRequestOperations();
const assign = async (): Promise<void> => {
  await updateRequest({
    uid: data.value.teacher.uid,
    courseId: data.value.course.id,
    requestType: REQUEST_TYPES.ASSIGNMENT,
    hours: data.value.hours,
  });
};
const remove = async (): Promise<void> => {
  await deleteRequest(data.value.id, data.value.type);
};

const groups = computed(() =>
  data.value.course.hoursPerGroup
    ? data.value.hours / data.value.course.hoursPerGroup
    : 0,
);

const displayActions = computed(() => (requestType: string) => {
  switch (requestType) {
    case REQUEST_TYPES.ASSIGNMENT:
      return perm.toAssignCourses;
    default:
      return perm.toSubmitRequests || perm.toAssignCourses;
  }
});

const displayAssignButton = computed(
  () => (requestType: string) =>
    requestType !== REQUEST_TYPES.ASSIGNMENT && perm.toAssignCourses,
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
      {{ formatUser(data.teacher) }}
      <QTooltip :delay="TOOLTIP_DELAY" anchor="top middle" self="bottom middle">
        {{ formatUser(data.teacher) }}
      </QTooltip>
    </QCardSection>
    <QCardSection class="q-pa-xs text-caption">
      {{ nf.format(groups) + " groupe" + (groups > 1 ? "s" : "") }}
      <br />
      {{ nf.format(data.hours) + " heure" + (data.hours > 1 ? "s" : "") }}
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
        :disable="!perm.toDeleteARequest(data)"
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
