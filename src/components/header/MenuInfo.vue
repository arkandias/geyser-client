<script setup lang="ts">
import { onMounted, ref } from "vue";

import MenuBase from "@/components/header/MenuBase.vue";

const isInformationOpen = ref(false);
const isLicenceOpen = ref(false);
const isLegalNoticeOpen = ref(false);

const informationLabel = "À propos";
const licenceLabel = "Licence";
const legalNoticeLabel = "Mentions légales";

// Fetch legal notice
const legalNotice = ref("");
const fetchLegalNotice = async () => {
  try {
    const response = await fetch("/legal-notice.html");
    if (!response.ok) {
      console.error(
        `Failed to load legal notice: ${response.status.toString()} ${response.statusText}`,
      );
    }
    legalNotice.value = await response.text();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error loading legal notice:", error.name, error.message);
    } else {
      console.error("Unknown error loading legal notice:", error);
    }
  }
};
onMounted(fetchLegalNotice);
</script>

<template>
  <MenuBase label="Infos" icon="sym_s_info">
    <QList>
      <QItem v-close-popup clickable @click="isInformationOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_info" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ informationLabel }}</QItemLabel>
        </QItemSection>
      </QItem>
      <QItem v-close-popup clickable @click="isLicenceOpen = true">
        <QItemSection side>
          <QIcon name="sym_s_license" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ licenceLabel }}</QItemLabel>
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
          <QItemLabel>{{ legalNoticeLabel }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>

  <QDialog v-model="isInformationOpen">
    <QCard square>
      <QCardSection class="text-h6">{{ informationLabel }}</QCardSection>
      <QCardSection>
        <p class="text-justify">
          Pour toute question, remarque, suggestion d'améliorations, signalement
          d'erreurs ou de bugs éventuels, merci d'utiliser l'adresse
          électronique de contact ci-dessous.
        </p>
        Contact :
        <a href="mailto:julien.hauseux@univ-lille.fr"
          >julien.hauseux@univ-lille.fr</a
        >
      </QCardSection>
    </QCard>
  </QDialog>

  <QDialog v-model="isLicenceOpen">
    <QCard square>
      <QCardSection class="text-h6">{{ licenceLabel }}</QCardSection>
      <QCardSection class="text-justify">
        <p>
          Geyser &mdash; Gestion des enseignements prévisionnels<br />
          Copyright &copy; 2021-2025 Amaël Broustet, Julien Hauseux
        </p>
        <p>
          Geyser est un logiciel libre distribué sous les termes de la licence
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.html#license-text"
            target="_blank"
            rel="noopener noreferrer"
            >GNU Affero GPL v3</a
          >.
        </p>
        <p class="text-italic">
          La licence publique générale GNU Affero (GNU AGPL) est une version
          modifiée de la version 3 de la GNU GPL ordinaire. Elle a une seule
          exigence supplémentaire : si vous exécutez un programme modifié sur un
          serveur et laissez d'autres utilisateurs communiquer avec lui, votre
          serveur doit aussi leur permettre de télécharger le code source
          correspondant à la version modifiée en fonctionnement.
        </p>
        <p class="text-right">
          Extrait de
          <a
            href="https://www.gnu.org/licenses/why-affero-gpl.fr.html"
            target="_blank"
            rel="noopener noreferrer"
            >https://www.gnu.org/licenses/why-affero-gpl.fr.html</a
          >
          le 03/03/2024.
        </p>
        Le code source de Geyser est disponible sur GitHub :
        <ol>
          <li>
            <a
              href="https://github.com/arkandias/geyser"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/arkandias/geyser</a
            >
          </li>
          <li>
            <a
              href="https://github.com/arkandias/geyser-client"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/arkandias/geyser-client</a
            >
          </li>
        </ol>
      </QCardSection>
    </QCard>
  </QDialog>

  <QDialog v-model="isLegalNoticeOpen">
    <QCard square>
      <QCardSection class="text-h6">{{ legalNoticeLabel }}</QCardSection>
      <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
      <QCardSection class="text-justify" v-html="legalNotice" />
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
