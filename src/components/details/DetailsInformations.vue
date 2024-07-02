<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts"></script>

<template>
  <QCardSection class="text-body2 text-justify">
    <p>
      Cliquez sur la ligne d'un enseignement ou d'un intervenant pour afficher
      ici des informations détaillées. Si un enseignement et un intervenant sont
      sélectionnés en même temps, ce sont les informations de l'enseignement qui
      sont affichées. Vous pouvez désélectionner un enseignement ou un
      intervenant en cliquant à nouveau sur la ligne correspondante.
    </p>
    <p>Boutons dans l'en-tête (accessibles uniquement depuis cette page) :</p>
    <ul>
      <li>
        Année (<QIcon name="sym_s_history" />) : permet de choisir l'année à
        consulter (par défaut l'année en cours est affichée, mais il est
        possible de consulter les demandes et les attributions des années
        antérieures).
      </li>
      <li>
        Filtre intervenants (<QIcon name="sym_s_vertical_split" />) : permet
        d'afficher/masquer la liste des intervenants actifs (fonctionnalité
        réservée aux membres de la commission et aux administrateurs).
      </li>
      <li>
        Mon service (<QIcon name="sym_s_assignment" />) : permet de vous
        sélectionner/désélectionner vous-même (sans passer par le filtre
        intervenants).
      </li>
    </ul>
    <p>
      Lorsqu'un intervenant est sélectionné, les enseignements qui apparaissent
      dans la table ci-dessus sont seulement ceux qui ont été demandés par
      l'intervenant ou attribués à l'intervenant et les filtres de recherche
      sont désactivés. Le nom de l'intervenant apparaît alors en haut de la
      table (à la place de «&nbsp;Enseignements&nbsp;»). Deux raccourcis sont
      présents à droite du nom de l'intervenant :
    </p>
    <ul>
      <li>
        <QIcon name="sym_s_visibility" /> permet de désélectionner
        l'enseignement éventuellement sélectionné (pour afficher les
        informations sur l'intervenant) ;
      </li>
      <li>
        <QIcon name="sym_s_close" /> permet de désélectionner l'intervenant.
      </li>
    </ul>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
