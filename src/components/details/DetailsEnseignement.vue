<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import DetailsSection from "@/components/details/DetailsSection.vue";
import FormulaireDemande from "@/components/core/FormulaireDemande.vue";
import DetailsEnseignementDemandes from "@/components/details/DetailsEnseignementDemandes.vue";
import PucePriorite from "@/components/core/PucePriorite.vue";
import { processArchives } from "@/helpers/enseignement.ts";
import { Archive, Details } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";
import { formatTypeDemandesTitre } from "@/helpers/format.ts";

const props = defineProps<{ details: Details }>();

const perm = usePermissions();

const archives: ComputedRef<Archive[]> = computed(() =>
  processArchives(props.details.parent).sort((a, b) => b.annee - a.annee),
);
const typesDemandeAffiches: ComputedRef<string[]> = computed(() =>
  perm.deVoirLesAttributions
    ? ["attribution", "principale", "secondaire"]
    : ["principale", "secondaire"],
);
</script>

<template>
  <DetailsSection title="Demandes">
    <FormulaireDemande
      v-if="perm.deFaireDesDemandes || perm.deModifierLesAttributions"
      :ens-id="details.ensId"
      :heures-par-groupe="details.heuresParGroupe"
    />
    <DetailsEnseignementDemandes
      v-for="typeDemande in typesDemandeAffiches"
      :key="typeDemande"
      :title="formatTypeDemandesTitre(typeDemande)"
      :demandes="
        details.demandes.filter(
          (demande) => demande.typeDemande === typeDemande,
        )
      "
    />
  </DetailsSection>
  <DetailsSection title="Priorités">
    <QCardSection>
      <PucePriorite
        v-for="priorite in details.priorites"
        :key="priorite.id"
        :priorite
      />
    </QCardSection>
  </DetailsSection>
  <DetailsSection title="Archives">
    <DetailsEnseignementDemandes
      v-for="archive in archives"
      :key="archive.annee"
      :title="archive.annee.toString()"
      :demandes="archive.demandes"
      archive
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
