<script setup lang="ts">
import { computed, ref, watch } from "vue";
import xss from "xss";

import { NotifyType, notify } from "@/utils/notify.ts";

const showEditor = defineModel<boolean>();
const {
  text,
  setText,
  defaultText = "",
} = defineProps<{
  text: string;
  setText: (text: string) => Promise<boolean>;
  defaultText?: string;
}>();

// sanitize HTML to prevent XSS attacks
const options = {
  whiteList: {
    font: ["face"],
    div: ["style"],
    span: ["style"],
    p: [],
    br: [],
    b: [],
    i: [],
    u: [],
    strike: [],
    sub: [],
    sup: [],
    hr: [],
    a: ["href"],
    ol: [],
    ul: [],
    li: ["style"],
  },
  css: {
    whiteList: {
      "font-family": true,
      "text-align": true,
    },
  },
};
const sanitizedText = computed(() => xss(text || defaultText, options));
const editorText = ref("");

const onSave = async (): Promise<void> => {
  if (isOnlyWhitespace(editorText.value)) {
    editorText.value = "";
  }
  if (editorText.value === text) {
    notify(NotifyType.DEFAULT, { message: "Pas de changement à enregistrer" });
  } else {
    const success = await setText(editorText.value);
    if (success) {
      notify(NotifyType.SUCCESS, {
        message: "Texte " + (editorText.value ? "mis à jour" : " supprimé"),
      });
    } else {
      notify(NotifyType.ERROR, {
        message:
          "Échec de la " + (editorText.value ? "mise à jour" : "suppression"),
      });
    }
  }
  showEditor.value = false;
};

const onAbort = (): void => {
  editorText.value = text;
  showEditor.value = false;
};

watch(() => text, onAbort, { immediate: true });

const toolbar = [
  ["left", "center", "right", "justify"],
  ["bold", "italic", "underline", "strike", "subscript", "superscript"],
  ["hr", "link", "viewsource"],
  ["unordered", "ordered", "outdent", "indent"],
];

const isOnlyWhitespace = (htmlString: string) => {
  // First remove common whitespace HTML entities
  const withoutEntities = htmlString.replace(
    /&nbsp;|&ensp;|&emsp;|&thinsp;/g,
    "",
  );

  // Then remove all HTML tags
  const textOnly = withoutEntities.replace(/<[^>]*>/g, "");

  // Check if remaining content is only whitespace
  return /^\s*$/.test(textOnly);
};
</script>

<template>
  <QDialog v-model="showEditor" persistent square>
    <QCard flat square>
      <QCardSection class="q-pa-none">
        <QEditor v-model="editorText" :toolbar square />
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn label="Annuler" flat square dense @click="onAbort()" />
        <QBtn label="Enregistrer" flat square dense @click="onSave()" />
      </QCardActions>
    </QCard>
  </QDialog>
  <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
  <div class="displayed-text" v-html="sanitizedText" />
</template>

<style scoped lang="scss">
:deep(.q-editor__toolbar) {
  background-color: $grey-3;
}
.q-dark :deep(.q-editor__toolbar) {
  background-color: $grey-9;
}
</style>
