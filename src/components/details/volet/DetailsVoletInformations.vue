<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

const demo: Ref<boolean> = ref(false);
</script>

<template>
  <QCardSection class="text-justify">
    <p>
      Ici sont affichées des informations supplémentaires lorsqu'un enseignement
      ou un intervenant est sélectionné.
    </p>
    <p>
      Lorsqu'un enseignement est sélectionné, les informations suivantes sont
      affichées :
    </p>
    <ul>
      <li>
        les responsables de l'enseignement, du parcours et de la mention ;
      </li>
      <li>
        une description de l'enseignement (cette information peut être éditée
        par les responsables sus-mentionnés en cliquant sur le bouton à bascule
        <QToggle
          v-model="demo"
          icon="sym_s_edit"
          color="primary"
          size="xs"
          dense
        />
        qui apparaît à côté du titre).
      </li>
    </ul>
    <p>
      Lorsqu'un intervenant est sélectionné, son service de base et ses
      modifications de service (délégation, décharge, etc.) sont affichées ici.
      Vous avez la possibilité d'ajouter des modifications de services durant la
      phase de vœux, afin de faire connaître à la commission le nombre total
      d'heures d'enseignement qui doivent vous être attribuées.
    </p>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
