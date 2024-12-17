<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import { processArchives } from "@/helpers/enseignement.ts";
import { useDemandes } from "@/stores/demandes.ts";
import { usePermissions } from "@/stores/permissions.ts";
import type { Archive } from "@/types/demandes.ts";
import { TypeDemande } from "@/types/demandes.ts";
import type { Details } from "@/types/enseignements.ts";

import FormulaireDemande from "@/components/core/FormulaireDemande.vue";
import PucePriorite from "@/components/core/PucePriorite.vue";
import DetailsEnseignementDemandes from "@/components/details/DetailsEnseignementDemandes.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ details: Details }>();

const perm = usePermissions();
const { typesAffiches: typesDemandeAffiches } = useDemandes();

const archives: ComputedRef<Archive[]> = computed(() =>
  processArchives(props.details.parent).sort((a, b) => b.annee - a.annee),
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
      :title="TypeDemande[typeDemande].labelPlural"
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
