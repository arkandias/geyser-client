<script setup lang="ts">
import { useMutation } from "villus";
import {
  type ComponentPublicInstance,
  type ShallowRef,
  computed,
  ref,
  shallowRef,
} from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
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
import { useCustomTextsStore } from "@/stores/useCustomTextsStore.ts";

import EditableText from "@/components/core/EditableText.vue";

const { t } = useCustomI18n();
const { customTexts } = useCustomTextsStore();

const customTextsEdit = ref(
  Object.fromEntries(
    Object.entries(customTexts.value).map(([key]) => [key, false]),
  ),
);
const customTextOptions = computed(() =>
  Object.entries(customTexts.value).map(([key, value]) => ({
    key,
    value,
    label: t(`admin.general.customTexts.${key}`),
  })),
);

graphql(`
  mutation UpdateCustomText($key: String!, $value: String) {
    customText: insertUiTextOne(
      object: { key: $key, value: $value }
      onConflict: { constraint: ui_text_pkey, updateColumns: [value] }
    ) {
      key
    }
  }

  mutation DeleteCustomText($key: String!) {
    customText: deleteUiTextByPk(key: $key) {
      key
    }
  }
`);

const updateCustomText = useMutation(UpdateCustomTextDocument, {
  refetchTags: ["CustomText"],
});
const deleteCustomText = useMutation(DeleteCustomTextDocument, {
  refetchTags: ["CustomText"],
});

const updateCustomTextHandle = (key: string, value: string) =>
  value
    ? updateCustomText.execute({ key, value }).then((result) => ({
        returnId: result.data?.customText?.key,
        error: result.error,
      }))
    : deleteCustomText.execute({ key }).then((result) => ({
        returnId: result.data?.customText?.key,
        error: result.error,
      }));

// For deletion, use EditableText's exposed method
type EditableTextInstance = {
  clear: () => Promise<void>;
};

const editableTextRefs = Object.fromEntries(
  CUSTOM_TEXT_KEYS.map((key) => [
    key,
    shallowRef<EditableTextInstance | null>(null),
  ]),
) as Record<CustomTextKey, ShallowRef<EditableTextInstance | null>>;

const setRef = (key: string, el: Element | ComponentPublicInstance | null) => {
  if (isCustomTextKey(key)) {
    if (el && "clear" in el) {
      editableTextRefs[key].value = el as EditableTextInstance;
    } else if (el === null) {
      editableTextRefs[key].value = null;
    }
  }
};

const callOnDelete = async (key: string) => {
  if (isCustomTextKey(key)) {
    await editableTextRefs[key].value?.clear();
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
            :default-text="t(`customTextDefault.${opt.key}`)"
          />
        </QCardSection>
        <QCardActions dense>
          <QBtn
            :label="t('admin.general.customTexts.button.edit')"
            icon="sym_s_edit"
            color="primary"
            no-caps
            outline
            dense
            @click="customTextsEdit[opt.key] = true"
          />
          <QBtn
            :label="t('admin.general.customTexts.button.delete')"
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
