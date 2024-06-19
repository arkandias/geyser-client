<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ComputedRef, Ref, ref, watch } from "vue";

import EditableText from "@/components/core/EditableText.vue";
import { UPDATE_DESCRIPTION } from "@/graphql/enseignements.ts";
import { Intervenant, Responsable, Resume } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";
import DetailsVolet from "@/components/core/DetailsVolet.vue";
import DetailsEnseignementResponsables from "@/components/enseignement/DetailsEnseignementResponsables.vue";

const props = defineProps<{ resume: Resume | null }>();

const perm = usePermissions();

const expanded: Ref<boolean> = ref(false);

// header
const label: ComputedRef<string> = computed(() =>
  props.resume
    ? props.resume.nom
    : "Cliquez sur un enseignement ou un intervenant",
);
const caption: ComputedRef<string> = computed(() =>
  props.resume
    ? props.resume.mention.cursus.nom +
      " \u2014 " +
      props.resume.mention.nom +
      " \u2014 " +
      (props.resume.parcours?.nom ?? "") +
      " \u2014 S" +
      props.resume.semestre.toString() +
      " \u2014 " +
      props.resume.typeEnseignement
    : "",
);

// responsables
const responsablesEnseignement: ComputedRef<Responsable[]> = computed(
  () => props.resume?.responsables ?? [],
);
const responsablesParcours: ComputedRef<Responsable[]> = computed(
  () => props.resume?.parcours?.responsables ?? [],
);
const responsablesMention: ComputedRef<Responsable[]> = computed(
  () => props.resume?.mention.responsables ?? [],
);
const responsables: ComputedRef<Intervenant[]> = computed(() => [
  ...responsablesEnseignement.value.map(({ intervenant }) => intervenant),
  ...responsablesParcours.value.map(({ intervenant }) => intervenant),
  ...responsablesMention.value.map(({ intervenant }) => intervenant),
]);

// description
const description: ComputedRef<string> = computed(
  () => props.resume?.description ?? "",
);
const updateDescription = useMutation(UPDATE_DESCRIPTION);
const setDescription = (text: string): Promise<boolean> =>
  updateDescription
    .executeMutation({
      id: props.resume?.ensId ?? 0,
      description: text || null,
    })
    .then((result) => !!result.data?.description?.id && !result.error);

// on change: close and scroll to top
watch(
  () => props.resume?.ensId,
  () => {
    expanded.value = false;
    document.getElementById("volet")?.scrollIntoView();
  },
);
</script>

<template>
  <DetailsVolet :label :caption :disable="!resume">
    <DetailsEnseignementResponsables
      :responsables-mention
      :responsables-enseignement
      :responsables-parcours
    />
    <EditableText
      name="Description"
      :text="description"
      :set-text="setDescription"
      :editable="perm.deModifierUneDescription.value(responsables)"
    />
  </DetailsVolet>
</template>

<style scoped lang="scss"></style>
