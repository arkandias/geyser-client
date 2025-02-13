<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";

import type { I18nOptions } from "@/services/i18n.ts";
import { NotifyType, notify } from "@/utils/notify.ts";
import { sanitize } from "@/utils/sanitize.ts";

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

const { t } = useI18n<I18nOptions>();

// Sanitize HTML to prevent XSS attacks
const sanitizedText = computed(() => sanitize(text || defaultText));
const editorText = ref("");

const onSave = async (): Promise<void> => {
  if (isOnlyWhitespace(editorText.value)) {
    editorText.value = "";
  }
  if (editorText.value === text) {
    notify(NotifyType.DEFAULT, { message: t("editor.save.no_changes") });
  } else {
    const success = await setText(editorText.value);
    if (success) {
      notify(NotifyType.SUCCESS, {
        message: t(
          editorText.value
            ? "editor.save.success.updated"
            : "editor.save.success.deleted",
        ),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t(
          editorText.value
            ? "editor.save.error.update"
            : "editor.save.error.delete",
        ),
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

// Helpers
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
        <QBtn
          :label="t('editor.button.cancel')"
          flat
          square
          dense
          @click="onAbort()"
        />
        <QBtn
          :label="t('editor.button.save')"
          flat
          square
          dense
          @click="onSave()"
        />
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
