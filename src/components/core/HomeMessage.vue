<script setup lang="ts">
import { type Ref, ref } from "vue";

import { PHASES } from "@/config/types/phases.ts";
import { usePhases } from "@/stores/phases.ts";

const { currentPhase } = usePhases();

const demo: Ref<boolean> = ref(false);
</script>

<template>
  <QCardSection v-if="currentPhase === PHASES.REQUESTS">
    <p class="text-subtitle1">Geyser est actuellement en phase de vœux</p>
    <div class="text-justify">
      <p>
        Vérifiez que votre service de base (ci-dessous) est correct. Dans le cas
        contraire contactez un membre de la commission. Ajoutez ensuite vos
        modifications de service éventuelles (délégation, décharge, congé,
        etc.).
        <b>
          Le total indiqué doit correspondre au nombre d'heures équivalent TD
          que la commission doit vous attribuer avec des enseignements
          disponibles sur Geyser.
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
        vous-même. Pour modifier votre message, cliquez sur le bouton à bascule
        <QToggle
          v-model="demo"
          icon="sym_s_edit"
          color="primary"
          size="xs"
          dense
        />
        qui apparaît à côté du titre de la section correspondante ci-dessous.
      </p>
    </div>
  </QCardSection>

  <QCardSection v-if="currentPhase === PHASES.ASSIGNMENTS">
    <p class="text-subtitle1">Geyser est actuellement en phase de commission</p>
    <p class="text-justify">
      Les travaux de la commission sont en cours. Vous serez informé lorsqu'ils
      seront terminés pour consulter les attributions. En attendant, vous pouvez
      toujours consulter les demandes mais il n'est plus possible de les
      modifier.
    </p>
  </QCardSection>

  <QCardSection v-if="currentPhase === PHASES.RESULTS">
    <p class="text-subtitle1">
      Geyser est actuellement en phase de consultation
    </p>
    <p class="text-justify">
      Vous pouvez à présent consulter les attributions des enseignements de
      cette année. Vous avez également toujours accès aux demandes et aux
      attributions des années précédentes. À l'année prochaine !
    </p>
  </QCardSection>

  <QCardSection v-if="currentPhase === PHASES.SHUTDOWN">
    <p class="text-subtitle2">Geyser est actuellement fermé</p>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
