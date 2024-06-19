<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import PuceResumePriorite from "@/components/core/PuceResumePriorite.vue";
import DetailsEnseignementDemandesFormulaire from "@/components/enseignement/DetailsEnseignementDemandesFormulaire.vue";
import DetailsEnseignementDemandesListe from "@/components/enseignement/DetailsEnseignementDemandesListe.vue";
import { formatTypeDemandesTitre } from "@/helpers/format.ts";
import { Archive, Demande, Priorite } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { ComputedRef, computed } from "vue";
import VueSection from "@/components/core/VueSection.vue";

defineProps<{
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
    <VueSection title="Demandes">
      <DetailsEnseignementDemandesFormulaire
        v-if="
          perm.deFaireDesDemandes.value || perm.deModifierLesAttributions.value
        "
        :ens-id
        :heures-par-groupe
      />
      <DetailsEnseignementDemandesListe
        v-for="typeDemande in typesDemandeAffiches"
        :key="typeDemande"
        :title="formatTypeDemandesTitre(typeDemande)"
        :demandes="
          demandes.filter((demande) => demande.typeDemande === typeDemande)
        "
      />
    </VueSection>
    <VueSection title="Priorités">
      <PuceResumePriorite
        v-for="priorite in priorites"
        :key="priorite.id"
        :priorite
      />
    </VueSection>
    <VueSection title="Archives">
      <DetailsEnseignementDemandesListe
        v-for="archive in archives"
        :key="archive.annee"
        :title="archive.annee.toString()"
        :demandes="archive.demandes"
        archive
      />
    </VueSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
