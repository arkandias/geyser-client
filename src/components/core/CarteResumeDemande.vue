<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { ComputedRef, computed } from "vue";

import { deleteDemande, updateDemande } from "@/helpers/demandes.ts";
import {
  couleurPriorite,
  formatIntervenant,
  nf,
  tooltipDelay,
} from "@/helpers/format.ts";
import { Demande } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";

const props = defineProps<{ demande: Demande }>();

const perm = usePermissions();
const client = useClientHandle().client;
const onAttribute = async (): Promise<void> => {
  await updateDemande(
    client,
    props.demande.intervenant.uid,
    props.demande.enseignement.id,
    "attribution",
    props.demande.heures,
  );
};
const onDelete = async (): Promise<void> => {
  await deleteDemande(client, props.demande.id, props.demande.typeDemande);
};
const groupes: ComputedRef<number> = computed(
  () => props.demande.heures / props.demande.enseignement.heures,
);
</script>

<template>
  <QCard bordered square class="carte-resume-demande">
    <QCardSection class="carte-resume-demande-titre q-pa-xs text-body2">
      <QBadge
        v-if="demande.prioritaire !== null"
        :color="couleurPriorite(demande.prioritaire)"
        rounded
      />
      {{ formatIntervenant(demande.intervenant) }}
      <QTooltip :delay="tooltipDelay" anchor="top middle" self="bottom middle">
        {{ formatIntervenant(demande.intervenant) }}
      </QTooltip>
    </QCardSection>
    <QCardSection class="q-pa-xs text-caption">
      {{ nf.format(groupes) + " groupe" + (groupes > 1 ? "s" : "") }}
      <br />
      {{
        nf.format(demande.heures) + " heure" + (demande.heures > 1 ? "s" : "")
      }}
    </QCardSection>
    <QSeparator />
    <QCardActions align="evenly" class="q-pa-xs">
      <QBtn
        icon="sym_s_check"
        color="positive"
        size="sm"
        :disable="!perm.deModifierLesAttributions.value"
        flat
        square
        dense
        @click="onAttribute"
      >
        <QTooltip
          :delay="tooltipDelay"
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
          !perm.deSupprimerUneDemande.value(
            demande.typeDemande,
            demande.intervenant.uid,
          )
        "
        flat
        square
        dense
        @click="onDelete"
      >
        <QTooltip
          :delay="tooltipDelay"
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
.carte-resume-demande {
  width: 120px;
  text-align: center;
}

.carte-resume-demande-titre {
  background-color: $grey-3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.body--dark .carte-resume-demande-titre {
  background-color: $grey-9;
}
</style>
