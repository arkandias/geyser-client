<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, ComputedRef, reactive } from "vue";

import DetailsEnseignementDemandes from "@/components/enseignements/DetailsEnseignementDemandes.vue";
import DetailsEnseignementVolet from "@/components/enseignements/DetailsEnseignementVolet.vue";
import { GET_ENSEIGNEMENT_DETAILS } from "@/graphql/enseignements.ts";
import { processArchives } from "@/helpers/enseignement.ts";
import {
  Archive,
  Demande,
  Priorite,
  Resume,
  RowEnseignement,
} from "@/helpers/types.ts";

const props = defineProps<{ enseignement: RowEnseignement | null }>();

const queryDetails = useQuery({
  query: GET_ENSEIGNEMENT_DETAILS,
  variables: reactive({
    ensId: computed(() => props.enseignement?.id ?? 0),
  }),
  pause: () => !props.enseignement?.id,
  context: {
    additionalTypenames: ["ec_demande"],
  },
});

const resume: ComputedRef<Resume | null> = computed(() =>
  props.enseignement ? queryDetails.data.value?.enseignement ?? null : null,
);
const demandes: ComputedRef<Demande[]> = computed(() =>
  props.enseignement && queryDetails.data.value?.enseignement
    ? queryDetails.data.value.enseignement.demandes
    : [],
);
const priorites: ComputedRef<Priorite[]> = computed(() =>
  props.enseignement && queryDetails.data.value?.enseignement
    ? queryDetails.data.value.enseignement.priorites
    : [],
);
const archives: ComputedRef<Archive[]> = computed(() =>
  (props.enseignement
    ? processArchives(queryDetails.data.value?.enseignement?.parent)
    : []
  ).sort((a, b) => b.annee - a.annee),
);
</script>

<template>
  <DetailsEnseignementVolet :resume />
  <DetailsEnseignementDemandes
    v-if="enseignement"
    :ens-id="enseignement.id"
    :heures-par-groupe="enseignement.heures"
    :demandes
    :priorites
    :archives
  />
</template>

<style scoped lang="scss"></style>
