<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";
import xss from "xss";

import { defaultNotify, errorNotify, successNotify } from "@/helpers/notify.ts";

const edition = defineModel<boolean>();
const props = withDefaults(
  defineProps<{
    title: string;
    text: string | null;
    defaultText?: string;
    setText?: (text: string) => Promise<boolean>;
  }>(),
  {
    defaultText: "",
    setText: () => Promise.resolve(false),
  },
);

// sanitize HTML to prevent XSS attacks
const sanitizedText: ComputedRef<string> = computed(() =>
  xss(props.text ?? props.defaultText),
);

const editorText: Ref<string> = ref("");

const onSave = async (): Promise<void> => {
  if (editorText.value === props.text) {
    defaultNotify("Pas de changements à enregistrer");
    return;
  }
  const success = await props.setText(editorText.value);
  if (success) {
    successNotify(
      props.title + (editorText.value ? " mis(e) à jour" : " supprimé(e)"),
    );
  } else {
    errorNotify(
      `Échec de la ${editorText.value ? "mise à jour" : "suppression"}`,
    );
  }
  edition.value = false;
};
const onAbort = (): void => {
  editorText.value = props.text ?? "";
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
  <QCardSection v-if="edition">
    <QEditor v-model="editorText" :definitions :toolbar square dense />
  </QCardSection>
  <!--eslint-disable-next-line-->
  <QCardSection v-else-if="sanitizedText" v-html="sanitizedText" />
</template>

<style scoped lang="scss"></style>
