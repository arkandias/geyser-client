<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";
import xss from "xss";

import { NotifyType, notify } from "@/helpers/notify.ts";

const edition = defineModel<boolean>();
const {
  text,
  setText,
  defaultText = "",
} = defineProps<{
  text: string | null;
  setText: (text: string) => Promise<boolean>;
  defaultText?: string;
}>();

// sanitize HTML to prevent XSS attacks
const sanitizedText: ComputedRef<string> = computed(() =>
  xss(text ?? defaultText),
);
const editorText: Ref<string> = ref("");

const onSave = async (): Promise<void> => {
  if (editorText.value === text) {
    notify(NotifyType.Default, { message: "Pas de changement à enregistrer" });
    return;
  }
  const success = await setText(editorText.value);
  if (success) {
    notify(NotifyType.Success, {
      message: "Texte " + (editorText.value ? "mis à jour" : " supprimé"),
    });
  } else {
    notify(NotifyType.Error, {
      message:
        "Échec de la " + (editorText.value ? "mise à jour" : "suppression"),
    });
  }
  edition.value = false;
};

const onAbort = (): void => {
  editorText.value = text ?? "";
  edition.value = false;
};
watch(() => text, onAbort, { immediate: true });

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
</script>

<template>
  <QCardSection v-if="edition">
    <QEditor v-model="editorText" :definitions :toolbar square dense />
  </QCardSection>
  <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
  <QCardSection v-else-if="sanitizedText" v-html="sanitizedText" />
</template>

<style scoped lang="scss"></style>
