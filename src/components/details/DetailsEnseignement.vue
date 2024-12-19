<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { useShownRequestTypes } from "@/composables/shown-request-types.ts";
import { labelRequestType } from "@/config/types/request-types.ts";
import { processArchives } from "@/helpers/courses.ts";
import type { CourseDetails } from "@/types/courses.ts";

import FormulaireDemande from "@/components/core/FormulaireDemande.vue";
import PucePriorite from "@/components/core/PucePriorite.vue";
import DetailsEnseignementDemandes from "@/components/details/DetailsEnseignementDemandes.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";

const props = defineProps<{ courseDetails: CourseDetails }>();

const perm = usePermissions();
const { shown: shownRequestTypes } = useShownRequestTypes();

const archives: ComputedRef<Archive[]> = computed(() =>
  processArchives(props.courseDetails.parent).sort((a, b) => b.year - a.year),
);
</script>

<template>
  <DetailsSection title="Demandes">
    <FormulaireDemande
      v-if="perm.deFaireDesDemandes || perm.deModifierLesAttributions"
      :ens-id="courseDetails.courseId"
      :heures-par-groupe="courseDetails.hoursPerGroup"
    />
    <DetailsEnseignementDemandes
      v-for="requestType in shownRequestTypes"
      :key="requestType"
      :title="labelRequestType(requestType)"
      :requests="
        courseDetails.requests.filter(
          (demande) => demande.requestType === requestType,
        )
      "
    />
  </DetailsSection>
  <DetailsSection title="Priorités">
    <QCardSection>
      <PucePriorite
        v-for="priorite in courseDetails.priorities"
        :key="priorite.id"
        :priorite
      />
    </QCardSection>
  </DetailsSection>
  <DetailsSection title="Archives">
    <DetailsEnseignementDemandes
      v-for="archive in archives"
      :key="archive.year"
      :title="archive.year.toString()"
      :requests="archive.requests"
      archive
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
