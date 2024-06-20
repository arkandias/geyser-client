<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts"></script>

<template>
  <QCardSection class="text-body2 text-justify">
    Cliquez sur la ligne d'un enseignement ou d'un intervenant pour afficher ici
    des informations détaillées. Si un enseignement et un intervenant sont
    sélectionnés en même temps, ce sont les informations de l'enseignement qui
    sont affichées. Vous pouvez désélectionner un enseignement ou un intervenant
    en cliquant à nouveau sur la ligne correspondante.
    <br />
    <br />
    Boutons dans l'en-tête (accessibles uniquement depuis cette page) :
    <ul>
      <li>
        Filtre intervenants (<QIcon name="sym_s_vertical_split" />) :
        afficher/masquer la liste des intervenants actifs (fonctionnalité
        réservée aux commissaires et aux administrateurs).
      </li>
      <li>
        Mon service (<QIcon name="sym_s_assignment" />) : vous
        sélectionner/désélectionner vous-même.
      </li>
    </ul>
    Lorsqu'un intervenant est sélectionné, les enseignements qui apparaissent
    dans la table ci-dessus sont seulement ceux qui ont été demandés par
    l'intervenant ou attribués à l'intervenant. Le nom de l'intervenant apparaît
    alors en haut de la table (à la place de «&nbsp;Enseignements&nbsp;»). Deux
    raccourcis sont présents à droite du nom de l'intervenant :
    <ul>
      <li>
        <QIcon name="sym_s_visibility" /> permet de désélectionner
        l'enseignement ;
      </li>
      <li>
        <QIcon name="sym_s_close" /> permet de désélectionner l'intervenant.
      </li>
    </ul>
  </QCardSection>
</template>

<style scoped lang="scss"></style>
