<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import { useCustomTextsStore } from "@/stores/custom-texts.ts";

import MenuBase from "@/components/header/MenuBase.vue";

const { t } = useI18n();

const { getValue } = useCustomTextsStore();

const isContactOpen = ref(false);
const isLicenceOpen = ref(false);
const isLegalNoticeOpen = ref(false);

const legalNotice = getValue("legal_notice");

// Style
const dialogHeaderClass = ["text-h6"];
const dialogBodyClass = ["text-justify"];
</script>

<template>
  <MenuBase :label="t('header.info.label')" icon="sym_s_info">
    <QList>
      <QItem v-close-popup clickable @click="isContactOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_contact_support" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ t("header.info.contact.label") }}</QItemLabel>
        </QItemSection>
      </QItem>
      <QItem v-close-popup clickable @click="isLicenceOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_license" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ t("header.info.license.label") }}</QItemLabel>
        </QItemSection>
      </QItem>
      <QItem
        v-close-popup
        clickable
        :disable="!legalNotice"
        @click="isLegalNoticeOpen = true"
      >
        <QItemSection side>
          <QIcon name="sym_s_balance" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ t("header.info.legal_notice.label") }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>

  <!-- TODO: refactor QDialog -->

  <QDialog v-model="isContactOpen">
    <QCard square>
      <QCardSection :class="dialogHeaderClass">
        {{ t("header.info.contact.label") }}
      </QCardSection>
      <QCardSection :class="dialogBodyClass">
        {{ t("header.info.contact.message") }}
      </QCardSection>
      <QCardActions align="right">
        <QBtn
          :label="t('header.info.contact.button')"
          icon="sym_s_mail"
          flat
          square
          dense
          href="mailto:julien.hauseux@univ-lille.fr"
        />
      </QCardActions>
    </QCard>
  </QDialog>

  <QDialog v-model="isLicenceOpen">
    <QCard square>
      <QCardSection :class="dialogHeaderClass">
        {{ t("header.info.license.label") }}
      </QCardSection>
      <!-- eslint-disable vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection
        :class="dialogBodyClass"
        v-html="t('header.info.license.message')"
      />
      <!-- eslint-enable vue/no-v-html vue/no-v-text-v-html-on-component -->
    </QCard>
  </QDialog>

  <QDialog v-model="isLegalNoticeOpen">
    <QCard square>
      <QCardSection :class="dialogHeaderClass">
        {{ t("header.info.legal_notice.label") }}
      </QCardSection>
      <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection :class="dialogBodyClass" v-html="legalNotice" />
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss">
.q-dialog .q-card {
  max-width: $info-dialog-max-width;
}
.q-item {
  white-space: nowrap;
}
</style>
