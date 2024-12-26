<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";
import xss from "xss";

import { isOnlyWhitespace } from "@/helpers/misc.ts";
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
const options = {
  whiteList: {
    font: ["face"],
    div: ["style"],
    span: ["style"],
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
const sanitizedText: ComputedRef<string> = computed(() =>
  xss(text ?? defaultText, options),
);
const editorText: Ref<string> = ref("");

const onSave = async (): Promise<void> => {
  if (isOnlyWhitespace(editorText.value)) {
    editorText.value = "";
  }
  if (editorText.value === text) {
    notify(NotifyType.Default, { message: "Pas de changement à enregistrer" });
  } else {
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
  }
  edition.value = false;
};

const onAbort = (): void => {
  editorText.value = text ?? "";
  edition.value = false;
};

watch(() => text, onAbort, { immediate: true });

const toolbar = [
  ["left", "center", "right", "justify"],
  ["bold", "italic", "underline", "strike", "subscript", "superscript"],
  ["hr", "link", "viewsource"],
  ["unordered", "ordered", "outdent", "indent"],
];
</script>

<template>
  <QDialog v-model="edition" persistent square>
    <QCard flat square>
      <QCardSection class="q-pa-none">
        <QEditor v-model="editorText" :toolbar square />
      </QCardSection>
      <QSeparator />
      <QCardActions align="right">
        <QBtn label="Annuler" flat square dense @click="onAbort" />
        <QBtn label="Enregistrer" flat square dense @click="onSave" />
      </QCardActions>
    </QCard>
  </QDialog>
  <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
  <div class="message" v-html="sanitizedText" />
</template>

<style scoped lang="scss">
.message {
  width: 720px;
}
:deep(.q-editor__toolbar) {
  background-color: $grey-3;
}
.q-dark :deep(.q-editor__toolbar) {
  background-color: $grey-9;
}
</style>
