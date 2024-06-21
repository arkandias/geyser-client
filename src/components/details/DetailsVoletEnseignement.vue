<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ComputedRef } from "vue";

import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";
import DetailsVoletEnseignementResponsables from "@/components/details/DetailsVoletEnseignementResponsables.vue";
import { UPDATE_DESCRIPTION } from "@/graphql/enseignements.ts";
import { Details, Intervenant, Responsable } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";

const props = defineProps<{ details: Details }>();

const perm = usePermissions();

// responsables
const responsablesEnseignement: ComputedRef<Responsable[]> = computed(
  () => props.details.responsables,
);
const responsablesParcours: ComputedRef<Responsable[]> = computed(
  () => props.details.parcours?.responsables ?? [],
);
const responsablesMention: ComputedRef<Responsable[]> = computed(
  () => props.details.mention.responsables,
);
const responsables: ComputedRef<Intervenant[]> = computed(() => [
  ...responsablesEnseignement.value.map(({ intervenant }) => intervenant),
  ...responsablesParcours.value.map(({ intervenant }) => intervenant),
  ...responsablesMention.value.map(({ intervenant }) => intervenant),
]);

// description
const updateDescription = useMutation(UPDATE_DESCRIPTION);
const setDescription = (text: string): Promise<boolean> =>
  updateDescription
    .executeMutation({
      id: props.details.ensId,
      description: text || null,
    })
    .then((result) => !!result.data?.description?.id && !result.error);
</script>

<template>
  <DetailsSubsection title="Responsables">
    <DetailsVoletEnseignementResponsables
      :responsables-mention
      :responsables-enseignement
      :responsables-parcours
    />
  </DetailsSubsection>
  <DetailsSubsectionEditableText
    name="Description"
    :text="details.description"
    default-text="Pas de description (contactez un responsable)"
    :set-text="setDescription"
    :editable="perm.deModifierUneDescription(responsables)"
  />
</template>

<style scoped lang="scss"></style>
