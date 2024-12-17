<script setup lang="ts">
import { useMutation } from "@urql/vue";
import type { ComputedRef } from "vue";
import { computed } from "vue";

import { UPDATE_DESCRIPTION } from "@/graphql/enseignements.ts";
import { usePermissions } from "@/stores/permissions.ts";
import type { Details } from "@/types/enseignements.ts";
import type { Intervenant, Responsable } from "@/types/intervenants.ts";

import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";
import DetailsVoletEnseignementResponsables from "@/components/details/volet/DetailsVoletEnseignementResponsables.vue";

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
    title="Description"
    :text="details.description"
    default-text="Pas de description (contactez un responsable)"
    :set-text="setDescription"
    :editable="perm.deModifierUneDescription(responsables)"
  />
</template>

<style scoped lang="scss"></style>
