<script setup lang="ts">
import { computed } from "vue";

import { useAppSettings } from "@/composables/app-settings.ts";
import { PHASES } from "@/config/types/phases.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { sanitize } from "@/utils/sanitizer.ts";

const { currentPhase } = usePhaseStore();

const subtitle = sanitize(
  (await useAppSettings(`phase-subtitle-${currentPhase.value}`)) ?? "",
);

const defaultSubtitle = computed(() => {
  switch (currentPhase.value) {
    case PHASES.REQUESTS:
      return "Geyser est en phase de vœux";
    case PHASES.ASSIGNMENTS:
      return "Les travaux de la commission sont en cours";
    case PHASES.RESULTS:
      return "Geyser est en phase de consultation";
    case PHASES.SHUTDOWN:
      return "Geyser est fermé";
    default:
      throw new Error(`Unknown phase`);
  }
});

const message = sanitize(
  (await useAppSettings(`phase-message-${currentPhase.value}`)) ?? "",
);

const defaultMessage = computed(() => {
  switch (currentPhase.value) {
    case PHASES.REQUESTS:
      return `
      <p>
        Vérifiez que votre service de base (ci-dessous) est correct. Dans le cas
        contraire contactez un membre de la commission. Ajoutez ensuite vos
        modifications de service éventuelles (délégation, décharge, congé,
        etc.).
        <b>
          Le total indiqué doit correspondre au nombre d'heures équivalent TD
          que la commission doit vous attribuer avec des enseignements
          disponibles dans Geyser.
        </b>
      </p>
      <p>
        Vous pouvez ensuite faire des demandes principales et secondaires sur la
        page Enseignements (icône <QIcon name="sym_s_menu_book" /> dans
        l'en-tête). Merci de demander l’équivalent de votre service total en
        demandes principales et en demandes secondaires.
      </p>
      <p>
        Enfin, vous avez la possibilité de laisser un message à la commission
        afin de porter à sa connaissance toute information que vous jugez utile
        pour son travail. Ce message ne sera visible que par la commission et
        vous-même. Pour modifier votre message, cliquez sur le bouton
        <QBtn icon="sym_s_edit" color="primary" size="xs" flat square dense />
        qui apparaît à côté du titre de la section correspondante.
      </p>`;
    case PHASES.ASSIGNMENTS:
      return `
      Les travaux de la commission sont en cours. Vous serez informé lorsqu'ils
      seront terminés pour consulter les attributions. En attendant, vous pouvez
      toujours consulter les demandes mais il n'est plus possible de les
      modifier.`;
    case PHASES.RESULTS:
      return `
      Vous pouvez à présent consulter les attributions des enseignements de
      cette année. Vous avez également toujours accès aux demandes et aux
      attributions des années précédentes.`;
    case PHASES.SHUTDOWN:
      return "";
    default:
      throw new Error(`Unknown phase`);
  }
});

const subtitleClass = ["text-h6", "text-center"];
const messageClass = ["text-justify"];
</script>

<template>
  <QCardSection>
    <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
    <p :class="subtitleClass" v-html="subtitle || defaultSubtitle" />
    <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
    <div :class="messageClass" v-html="message || defaultMessage" />
  </QCardSection>
</template>

<style scoped lang="scss"></style>
