<script setup lang="ts">
import type { CombinedError } from "villus";
import { ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, useNotify } from "@/composables/useNotify.ts";

type SetTextReturn = {
  returnId: string | number | null | undefined;
  error: CombinedError | null | undefined;
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
const { notify } = useNotify();

const editorText = ref("");

const save = async () => {
  if (isOnlyWhitespace(editorText.value)) {
    editorText.value = "";
  }
  if (editorText.value === text) {
    notify(NotifyType.DEFAULT, { message: t("editableText.save.noChanges") });
  } else {
    const { returnId, error } = await setText(editorText.value);
    if (!!returnId && !error) {
      notify(NotifyType.SUCCESS, {
        message: t(
          editorText.value
            ? "editableText.save.success.updated"
            : "editableText.save.success.deleted",
        ),
      });
    } else {
      notify(NotifyType.ERROR, {
        message: t(
          editorText.value
            ? "editableText.save.error.update"
            : "editableText.save.error.delete",
        ),
        caption: error?.message,
      });
    }
  }
  showEditor.value = false;
};

const abort = () => {
  editorText.value = text;
  showEditor.value = false;
};

const clear = async () => {
  editorText.value = "";
  await save();
};

watch(() => text, abort, { immediate: true });

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

defineExpose({ clear });
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
          :label="t('editableText.button.cancel')"
          color="primary"
          flat
          square
          dense
          @click="abort()"
        />
        <QBtn
          :label="t('editableText.button.save')"
          color="primary"
          flat
          square
          dense
          @click="save()"
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
