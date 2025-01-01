<script setup lang="ts">
defineProps<{ fetching?: boolean }>();
</script>

<template>
  <QCardSection v-if="fetching" class="text-center">
    <p>Chargement des informations sur l'enseignement sélectionné...</p>
  </QCardSection>
  <QCardSection class="text-body2 text-justify">
    <p>
      Cliquez sur la ligne d'un enseignement pour afficher ici des informations
      détaillées. Si un enseignement et un intervenant sont sélectionnés en même
      temps, ce sont les informations de l'enseignement qui sont affichées. Vous
      pouvez désélectionner un enseignement ou un intervenant en cliquant à
      nouveau sur la ligne correspondante.
    </p>
    <p>Boutons dans l'en-tête (accessibles uniquement depuis cette page) :</p>
    <ul>
      <li>
        <QBtn
          icon="sym_s_history"
          color="primary"
          size="sm"
          flat
          square
          dense
        />
        Année : permet de choisir l'année à consulter (par défaut l'année en
        cours est affichée, mais il est possible de consulter les demandes et
        les attributions des années antérieures).
      </li>
      <li>
        <QBtn
          icon="sym_s_vertical_split"
          color="primary"
          size="sm"
          flat
          square
          dense
        />
        Filtre intervenants : permet d'afficher/masquer la liste des
        intervenants actifs (fonctionnalité réservée aux membres de la
        commission et aux administrateurs).
      </li>
      <li>
        <QBtn
          icon="sym_s_assignment"
          color="primary"
          size="sm"
          flat
          square
          dense
        />
        Mon service : permet de vous sélectionner/désélectionner vous-même (sans
        passer par le filtre intervenants).
      </li>
    </ul>
    <p>
      Lorsqu'un intervenant est sélectionné dans le filtre intervenant, les
      enseignements qui apparaissent dans la table ci-dessus sont seulement ceux
      qui ont été demandés par l'intervenant ou attribués à l'intervenant et les
      filtres de recherche sont désactivés. Le nom de l'intervenant apparaît
      alors en haut de la table (à la place de «&nbsp;Enseignements&nbsp;»).
      Deux raccourcis sont présents à droite du nom de l'intervenant :
    </p>
    <ul>
      <li>
        <QBtn
          icon="sym_s_visibility"
          color="primary"
          size="sm"
          flat
          square
          dense
        />
        permet d'afficher des informations détaillées sur l'intervenant ;
      </li>
      <li>
        <QBtn icon="sym_s_close" color="primary" size="sm" flat square dense />
        permet de désélectionner l'intervenant.
      </li>
    </ul>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
