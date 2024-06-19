<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef, Ref, ref, watch } from "vue";
import xss from "xss";

import { defaultNotify, successNotify } from "@/helpers/notify.ts";

const props = defineProps<{
  name: string;
  text: string;
  setText: (text: string) => Promise<boolean>;
  editable: boolean;
}>();

const edition: Ref<boolean> = ref(false);

// sanitize HTML to prevent XSS attacks
const sanitizedText: ComputedRef<string> = computed(() => xss(props.text));

const editorText: Ref<string> = ref("");

const onSave = async (): Promise<void> => {
  if (editorText.value === props.text) {
    defaultNotify("Pas de changements à enregistrer");
    return;
  }
  const success = await props.setText(editorText.value);
  if (success) {
    successNotify(
      props.name + (editorText.value ? " mis(e) à jour" : " supprimé(e)"),
    );
  }
  edition.value = false;
};
const onAbort = (): void => {
  editorText.value = props.text;
  edition.value = false;
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

watch(
  () => props.text,
  () => {
    onAbort();
  },
  { immediate: true },
);
</script>

<template>
  <QCardSection>
    <div class="text-subtitle1">
      {{ name }}
      <QToggle
        v-if="editable"
        v-model="edition"
        icon="sym_s_edit"
        color="primary"
        size="sm"
        dense
      />
    </div>
    <QEditor
      v-if="edition"
      v-model="editorText"
      :definitions
      :toolbar
      square
      dense
    />
    <!--eslint-disable-next-line-->
    <QCardSection v-else-if="text" class="q-px-md" v-html="sanitizedText" />
  </QCardSection>
</template>

<style scoped lang="scss"></style>
