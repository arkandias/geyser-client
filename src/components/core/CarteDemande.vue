<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { TOOLTIP_DELAY } from "@/config/constants.ts";
import { deleteDemandeById, updateDemande } from "@/helpers/demandes.ts";
import { formatUser, nf, priorityColor } from "@/helpers/format.ts";
import type { RequestDetails } from "@/types/requests.ts";

const props = defineProps<{
  request: RequestDetails;
  archive?: boolean;
}>();

const perm = usePermissions();
const client = useClientHandle().client;

const assign = async (): Promise<void> => {
  await updateDemande(client, {
    serviceId: props.request.serviceId,
    ensId: props.request.course.id,
    typeDemande: "attribution",
    heures: props.request.hours,
  });
};
const remove = async (): Promise<void> => {
  await deleteDemandeById(client, props.request.id, props.request.requestType);
};

const groups: ComputedRef<number> = computed(() =>
  props.request.course.hoursPerGroup
    ? props.request.hours / props.request.course.hoursPerGroup
    : 0,
);
</script>

<template>
  <QCard bordered square class="carte-demande">
    <QCardSection class="carte-demande__titre q-pa-xs text-body2">
      <QBadge
        v-if="request.isPriority !== null"
        :color="priorityColor(request.isPriority)"
        rounded
      />
      {{ formatUser(request.service.teacher) }}
      <QTooltip :delay="TOOLTIP_DELAY" anchor="top middle" self="bottom middle">
        {{ formatUser(request.service.teacher) }}
      </QTooltip>
    </QCardSection>
    <QCardSection class="q-pa-xs text-caption">
      {{ nf.format(groups) + " groupe" + (groups > 1 ? "s" : "") }}
      <br />
      {{ nf.format(request.hours) + " heure" + (request.hours > 1 ? "s" : "") }}
    </QCardSection>
    <QSeparator />
    <QCardActions v-if="!archive" align="evenly" class="q-pa-xs">
      <QBtn
        icon="sym_s_check"
        color="positive"
        size="sm"
        :disable="!perm.deModifierLesAttributions"
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
        :disable="
          !perm.deSupprimerUneDemande(
            request.requestType,
            request.service.teacher.uid,
          )
        "
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
.carte-demande {
  width: $wish-card-width;
  text-align: center;
}

.carte-demande__titre {
  background-color: $grey-3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.body--dark .carte-demande__titre {
  background-color: $grey-9;
}
</style>
