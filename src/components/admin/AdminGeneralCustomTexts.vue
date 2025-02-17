<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, reactive } from "vue";
import { useI18n } from "vue-i18n";

import { graphql } from "@/gql";
import { UpdateCustomTextDocument } from "@/gql/graphql.ts";
import type { I18nOptions } from "@/services/i18n.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";

import EditableText from "@/components/core/EditableText.vue";

graphql(`
  mutation UpdateCustomText($key: String!, $value: String) {
    updateCustomTextByPk: insertUiTextOne(
      object: { key: $key, value: $value }
      onConflict: { constraint: app_settings_pkey, updateColumns: [value] }
    ) {
      key
      value
    }
  }
`);

const { t } = useI18n<I18nOptions>();
const { customTexts } = useCustomTextsStore();
const updateCustomText = useMutation(UpdateCustomTextDocument);

const customTextOptions = computed(() =>
  customTexts.value.map((customText) => ({
    ...customText,
    label: t(`custom_text_label.${customText.key}`),
  })),
);
const customTextsEdit = reactive(
  Object.fromEntries(
    customTexts.value.map((customText) => [customText.key, false]),
  ),
);

const updateCustomTextHandle = (key: string, value: string) =>
  updateCustomText
    .executeMutation({
      key,
      value: value || null,
    })
    .then(
      (result) => !!result.data?.updateCustomTextByPk?.key && !result.error,
    );
</script>

<template>
  <QList bordered separator dense>
    <QExpansionItem
      v-for="option in customTextOptions"
      :key="option.key"
      :label="option.label"
      dense
      dense-toggle
    >
      <QCard>
        <QCardSection>
          <EditableText
            v-model="customTextsEdit[option.key]"
            :text="option.value"
            :set-text="(value) => updateCustomTextHandle(option.key, value)"
          />
        </QCardSection>
        <QCardActions dense>
          <QBtn
            :label="t('admin.general.custom_texts.edit_button')"
            color="primary"
            no-caps
            outline
            dense
            @click="customTextsEdit[option.key] = true"
          />
        </QCardActions>
      </QCard>
    </QExpansionItem>
  </QList>
</template>

<style scoped lang="scss"></style>
