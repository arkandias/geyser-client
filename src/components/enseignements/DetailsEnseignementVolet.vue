<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ComputedRef, Ref, ref, watch } from "vue";
import xss from "xss";

import { UPDATE_DESCRIPTION } from "@/graphql/enseignements.ts";
import { formatResponsables } from "@/helpers/format.ts";
import { defaultNotify, successNotify } from "@/helpers/notify.ts";
import { Intervenant, Responsable, Resume } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";

const props = defineProps<{ resume: Resume | null }>();

const perm = usePermissions();

const updateDescription = useMutation(UPDATE_DESCRIPTION);

const voletOuvert = ref(false);

// infos volet fermé
const label: ComputedRef<string> = computed(() =>
  props.resume ? props.resume.nom : "Sélectionnez une ligne",
);
const caption: ComputedRef<string> = computed(() =>
  props.resume
    ? props.resume.mention.cursus.nom +
      " \u2014 " +
      props.resume.mention.nom +
      " \u2014 " +
      (props.resume.parcours?.nom ?? "") +
      " \u2014 S" +
      props.resume.semestre.toString()
    : "Cliquez sur une ligne de la table ci-dessus",
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
const description: ComputedRef<string> = computed(() =>
  // sanitize HTML to prevent XSS attacks
  xss(props.resume?.description ?? ""),
);
const editorOpen: Ref<boolean> = ref(false);
const editorText: Ref<string> = ref("");
watch(
  description,
  (value) => {
    editorText.value = value;
  },
  { immediate: true },
);

const onSave = async (): Promise<void> => {
  if (!props.resume) {
    return;
  }
  if (editorText.value === description.value) {
    defaultNotify("Pas de changements à enregistrer");
    return;
  }
  const result = await updateDescription.executeMutation({
    id: props.resume.ensId,
    description: editorText.value || null,
  });
  if (!result.error) {
    successNotify(`Description mise à jour`);
  }
  editorOpen.value = false;
};
const onAbort = (): void => {
  editorText.value = description.value;
  editorOpen.value = false;
};

const definitions = {
  save: {
    icon: "sym_s_save",
    label: "Enregistrer",
    tip: "Enregistrer les modifications",
    handler: onSave,
  },
  delete: {
    icon: "sym_s_delete",
    label: "Abandonner",
    tip: "Abandonner les modifications",
    handler: onAbort,
  },
};
const toolbar = [
  ["left", "center", "right", "justify"],
  ["bold", "italic", "underline", "strike", "subscript", "superscript"],
  ["hr", "link", "viewsource"],
  ["unordered", "ordered", "outdent", "indent"],
  ["undo", "redo"],
  ["save", "delete"],
];

// changement d'enseignement : tout fermer et revenir en haut de la fenêtre
watch(
  () => props.resume?.ensId,
  () => {
    voletOuvert.value = false;
    editorOpen.value = false;
    editorText.value = description.value;
    document.getElementById("volet")?.scrollIntoView();
  },
);
</script>

<template>
  <QExpansionItem
    id="volet"
    v-model="voletOuvert"
    expand-separator
    :label
    :caption
    :disable="!resume"
    class="details"
    dense
    dense-toggle
  >
    <QCard v-if="resume" flat square class="text-body2">
      <QCardSection>
        <div class="text-subtitle2 q-py-sm">Responsables</div>
        <div v-if="responsablesEnseignement.length" class="q-pa-sm">
          Responsable(s) de l'enseignement :
          {{ formatResponsables(responsablesEnseignement) }}
        </div>
        <div v-if="responsablesParcours.length" class="q-pa-sm">
          Responsable(s) du parcours :
          {{ formatResponsables(responsablesParcours) }}
        </div>
        <div v-if="responsablesMention.length" class="q-pa-sm">
          Responsable(s) de la mention :
          {{ formatResponsables(responsablesMention) }}
        </div>
      </QCardSection>
      <QCardSection>
        <div class="text-subtitle2">
          Description
          <QToggle
            v-if="perm.deModifierUneDescription.value(responsables)"
            v-model="editorOpen"
            icon="sym_s_edit"
            color="primary"
            dense
            size="sm"
          />
        </div>
        <br />
        <QEditor
          v-if="editorOpen"
          v-model="editorText"
          :definitions
          :toolbar
          square
          dense
        />
        <!--eslint-disable-next-line-->
        <div v-else class="q-px-md" v-html="description" />
      </QCardSection>
    </QCard>
  </QExpansionItem>
</template>

<style scoped lang="scss">
.details {
  background-color: $grey-3;
}
.body--dark .details {
  background-color: $grey-9;
}
</style>
