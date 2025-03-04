<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComponentPublicInstance, computed, ref } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import {
  CUSTOM_TEXT_KEYS,
  type CustomTextKey,
  isCustomTextKey,
} from "@/config/types/custom-text-keys.ts";
import { graphql } from "@/gql";
import {
  DeleteCustomTextDocument,
  UpdateCustomTextDocument,
} from "@/gql/graphql.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";

import EditableText from "@/components/core/EditableText.vue";

graphql(`
  mutation UpdateCustomText($key: String!, $value: String) {
    updateCustomTextByPk: insertUiTextOne(
      object: { key: $key, value: $value }
      onConflict: { constraint: ui_text_pkey, updateColumns: [value] }
    ) {
      key
    }
  }

  mutation DeleteCustomText($key: String!) {
    deleteCustomTextByPk: deleteUiTextByPk(key: $key) {
      key
    }
  }
`);

const { t } = useCustomI18n();
const { customTexts } = useCustomTextsStore();
const updateCustomText = useMutation(UpdateCustomTextDocument);
const deleteCustomText = useMutation(DeleteCustomTextDocument);

const customTextOptions = computed(() =>
  Object.entries(customTexts.value).map(([key, value]) => ({
    key,
    value,
    label: t(`admin.general.custom_texts.${key}`),
  })),
);
const customTextsEdit = ref(
  Object.fromEntries(
    Object.entries(customTexts.value).map(([key]) => [key, false]),
  ),
);

const updateCustomTextHandle = (key: string, value: string) =>
  value
    ? updateCustomText
        .executeMutation({ key, value })
        .then(
          (result) => !!result.data?.updateCustomTextByPk?.key && !result.error,
        )
    : deleteCustomText
        .executeMutation({ key })
        .then(
          (result) => !!result.data?.deleteCustomTextByPk?.key && !result.error,
        );

// For deletion, use EditableText's exposed method
type EditableTextInstance = {
  onDelete: () => Promise<void>;
};

const editableTextRefs = ref(
  Object.fromEntries(CUSTOM_TEXT_KEYS.map((key) => [key, null])) as Record<
    CustomTextKey,
    EditableTextInstance | null
  >,
);

const setRef = (key: string, el: Element | ComponentPublicInstance | null) => {
  if (isCustomTextKey(key)) {
    if (el && "onDelete" in el) {
      editableTextRefs.value[key] = el as EditableTextInstance;
    } else if (el === null) {
      editableTextRefs.value[key] = null;
    }
  }
};

const callOnDelete = async (key: string) => {
  if (isCustomTextKey(key)) {
    await editableTextRefs.value[key]?.onDelete();
  }
};
</script>

<template>
  <QList bordered separator dense>
    <QExpansionItem
      v-for="opt in customTextOptions"
      :key="opt.key"
      :label="opt.label"
      dense
      dense-toggle
    >
      <QCard>
        <QCardSection>
          <EditableText
            :ref="(el) => setRef(opt.key, el)"
            v-model="customTextsEdit[opt.key]"
            :text="opt.value"
            :set-text="(value) => updateCustomTextHandle(opt.key, value)"
            :default-text="t(`custom_text_default.${opt.key}`)"
          />
        </QCardSection>
        <QCardActions dense>
          <QBtn
            :label="t('admin.general.custom_texts.button.edit')"
            icon="sym_s_edit"
            color="primary"
            no-caps
            outline
            dense
            @click="customTextsEdit[opt.key] = true"
          />
          <QBtn
            :label="t('admin.general.custom_texts.button.delete')"
            icon="sym_s_delete"
            color="primary"
            :disable="!opt.value"
            no-caps
            outline
            dense
            @click="callOnDelete(opt.key)"
          />
        </QCardActions>
      </QCard>
    </QExpansionItem>
  </QList>
</template>

<style scoped lang="scss"></style>
