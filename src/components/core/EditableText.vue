<script setup lang="ts">
import type { CombinedError } from "@urql/vue";
import { ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

type SetTextReturn = {
  returnId: string | number | null | undefined;
  error: CombinedError | undefined;
};

const showEditor = defineModel<boolean>();
const {
  text,
  setText,
  defaultText = "",
  textStyle,
} = defineProps<{
  text: string;
  setText: (text: string) => Promise<SetTextReturn>;
  defaultText?: string;
  textStyle?: string;
}>();

const { t } = useCustomI18n();

const editorText = ref("");

const onSave = async () => {
  if (isOnlyWhitespace(editorText.value)) {
    editorText.value = "";
  }
  if (editorText.value === text) {
    notify(NotifyType.DEFAULT, { message: t("editor.save.noChanges") });
  } else {
    const { returnId, error } = await setText(editorText.value);
    if (!!returnId && !error) {
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
        caption: error?.message,
      });
    }
  }
  showEditor.value = false;
};

const onAbort = () => {
  editorText.value = text;
  showEditor.value = false;
};

const onDelete = async () => {
  editorText.value = "";
  await onSave();
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

defineExpose({ onDelete });
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
          color="primary"
          flat
          square
          dense
          @click="onAbort()"
        />
        <QBtn
          :label="t('editor.button.save')"
          color="primary"
          flat
          square
          dense
          @click="onSave()"
        />
      </QCardActions>
    </QCard>
  </QDialog>
  <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
  <div class="displayed-text" :style="textStyle" v-html="text || defaultText" />
</template>

<style scoped lang="scss">
:deep(.q-editor__toolbar) {
  background-color: $grey-3;
}
.q-dark :deep(.q-editor__toolbar) {
  background-color: $grey-9;
}
</style>
