<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, reactive } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { graphql } from "@/gql";
import { UpdateCustomTextDocument } from "@/gql/graphql.ts";
import { useCustomTextsStore } from "@/stores/custom-texts.ts";

import EditableText from "@/components/core/EditableText.vue";

graphql(`
  mutation UpdateCustomText($key: String!, $value: String) {
    updateCustomTextByPk: insertUiTextOne(
      object: { key: $key, value: $value }
      onConflict: { constraint: app_settings_pkey, updateColumns: [value] }
    ) {
      key
    }
  }
`);

const { t } = useCustomI18n();
const { customTexts } = useCustomTextsStore();
const updateCustomText = useMutation(UpdateCustomTextDocument);

const customTextOptions = computed(() =>
  customTexts.value.map((text) => ({
    ...text,
    label: t(`custom_text_label.${text.key}`),
  })),
);
const customTextsEdit = reactive(
  Object.fromEntries(customTexts.value.map((text) => [text.key, false])),
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
      v-for="opt in customTextOptions"
      :key="opt.key"
      :label="opt.label"
      dense
      dense-toggle
    >
      <QCard>
        <QCardSection>
          <EditableText
            v-model="customTextsEdit[opt.key]"
            :text="opt.value"
            :set-text="(value) => updateCustomTextHandle(opt.key, value)"
          />
        </QCardSection>
        <QCardActions dense>
          <QBtn
            :label="t('admin.general.custom_texts.edit_button')"
            color="primary"
            no-caps
            outline
            dense
            @click="customTextsEdit[opt.key] = true"
          />
        </QCardActions>
      </QCard>
    </QExpansionItem>
  </QList>
</template>

<style scoped lang="scss"></style>
