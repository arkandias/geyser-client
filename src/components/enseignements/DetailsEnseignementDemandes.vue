<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import DetailsEnseignementDemandesFormulaire from "@/components/enseignements/DetailsEnseignementDemandesFormulaire.vue";
import DetailsEnseignementDemandesListe from "@/components/enseignements/DetailsEnseignementDemandesListe.vue";
import DetailsEnseignementDemandesSection from "@/components/enseignements/DetailsEnseignementDemandesSection.vue";
import PuceResumePriorite from "@/components/core/PuceResumePriorite.vue";
import { formatTypeDemandesTitre } from "@/helpers/format.ts";
import { Archive, Demande, Priorite } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { ComputedRef, computed } from "vue";

const props = defineProps<{
  ensId: number;
  heuresParGroupe: number;
  demandes: Demande[];
  priorites: Priorite[];
  archives: Archive[];
}>();

const perm = usePermissions();

const typesDemandeAffiches: ComputedRef<string[]> = computed(() =>
  perm.deVoirLesAttributions.value
    ? ["attribution", "principale", "secondaire"]
    : ["principale", "secondaire"],
);
</script>

<template>
  <QCard flat square>
    <DetailsEnseignementDemandesSection title="Demandes">
      <DetailsEnseignementDemandesFormulaire
        v-if="
          perm.deFaireDesDemandes.value || perm.deModifierLesAttributions.value
        "
        :ens-id
        :heures-par-groupe="props.heuresParGroupe"
      />
      <DetailsEnseignementDemandesListe
        v-for="typeDemande in typesDemandeAffiches"
        :key="typeDemande"
        :title="formatTypeDemandesTitre(typeDemande)"
        :demandes="
          demandes.filter((demande) => demande.typeDemande === typeDemande)
        "
      />
    </DetailsEnseignementDemandesSection>
    <DetailsEnseignementDemandesSection title="Priorités">
      <PuceResumePriorite
        v-for="priorite in priorites"
        :key="priorite.id"
        :priorite
      />
    </DetailsEnseignementDemandesSection>
    <DetailsEnseignementDemandesSection title="Archives">
      <DetailsEnseignementDemandesListe
        v-for="archive in archives"
        :key="archive.annee"
        :title="archive.annee.toString()"
        :demandes="archive.demandes"
      />
    </DetailsEnseignementDemandesSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
