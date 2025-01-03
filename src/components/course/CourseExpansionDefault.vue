<script setup lang="ts">
defineProps<{ fetching?: boolean }>();
</script>

<template>
  <QCardSection v-if="fetching">
    <p>Chargement des informations sur l'enseignement sélectionné...</p>
  </QCardSection>
  <QCardSection v-else class="text-justify">
    <p>
      Lorsqu'un enseignement est sélectionné, les informations suivantes sont
      affichées ici :
    </p>
    <ul>
      <li>les responsables de la mention, du parcours et de l'UE ;</li>
      <li>une description de l'enseignement.</li>
    </ul>
    <p>
      La description peut être éditée par les responsables sus-mentionnés en
      cliquant sur le bouton
      <QBtn icon="sym_s_edit" color="primary" size="xs" flat square dense />
      (visible par eux seuls) qui apparaît à côté de «&nbsp;Description&nbsp;».
    </p>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
