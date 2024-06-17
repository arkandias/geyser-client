<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import AccueilVolet from "@/components/accueil/AccueilVolet.vue";
</script>

<template>
  <QCard bordered flat square>
    <QList>
      <AccueilVolet label="Guide d'utilisation">
        Pour toute question, remarque, suggestion d'améliorations, signalement
        d'erreurs ou de bugs éventuels, merci d'utiliser l'adresse électronique
        de contact ci-dessous.
        <br /><br />
        Contact :
        <a href="mailto:julien.hauseux@univ-lille.fr"
          >julien.hauseux@univ-lille.fr</a
        >
      </AccueilVolet>
      <AccueilVolet label="Mention d'information">
        <p>
          Les informations recueillies dans cette application sont enregistrées
          dans un fichier informatisé par le département de mathématiques pour
          faciliter la gestion des services prévisionnels des intervenants dans
          les enseignements de mathématiques de l’Université de Lille. La base
          légale du traitement est le consentement.
        </p>
        <p>
          Les données collectées seront conservées sur les serveurs du
          département de mathématiques pendant une période de 5 ans et ne seront
          communiquées à aucun service extérieur.
        </p>
        La confidentialité des données est de deux types :
        <ol>
          <li>
            Vos vœux (principaux et secondaires) et vos attributions de services
            seront visibles par l’ensemble des intervenants dans les
            enseignements de mathématiques.
          </li>
          <li>
            Vos modifications de services (décharges, délégations, etc.) et les
            commentaires à l’attention de la commission d’attribution des
            services ne seront visibles que par les membres de cette commission.
          </li>
        </ol>
        <p>
          Vous pouvez accéder aux données vous concernant, les rectifier,
          demander leur effacement ou exercer votre droit à la limitation du
          traitement de vos données. Vous pouvez également retirer à tout moment
          votre consentement au traitement de vos données. Consultez le site
          <a
            href="https://www.cnil.fr/fr"
            target="_blank"
            rel="noopener noreferrer"
            >cnil.fr</a
          >
          pour plus d’informations sur vos droits.
        </p>
        <p>
          Pour exercer ces droits ou pour toute question sur le traitement de
          vos données dans ce dispositif, vous pouvez contacter le directeur du
          département de mathématiques :
        </p>
        <div class="resp-rgpd">
          M. Amaël Broustet<br />
          Bâtiment M2, Bureau 004<br />
          +33 (0) 3 20 43 42 38<br />
          <a href="mailto:direction-dpt-maths@univ-lille.fr"
            >direction-dpt-maths@univ-lille.fr</a
          >
        </div>
        <br />
        <p>
          Si vous estimez, après avoir contacté le directeur du département de
          mathématiques, que vos droits «&nbsp;Informatique et Libertés&nbsp;»
          ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
        </p>
      </AccueilVolet>
      <AccueilVolet label="Licence">
        <p>
          Geyser &mdash; Gestion des enseignements prévisionnels<br />
          Copyright &copy; 2021-2024 Amaël Broustet, Julien Hauseux
        </p>
        <p>
          Geyser est un logiciel libre distribué sous les termes de la license
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
        <p style="text-align: right">
          Extrait de
          <a
            href="https://www.gnu.org/licenses/why-affero-gpl.fr.html"
            target="_blank"
            rel="noopener noreferrer"
            >https://www.gnu.org/licenses/why-affero-gpl.fr.html</a
          >
          le 03/03/2024.
        </p>
        <p style="text-align: right"></p>
        Le code source de Geyser est disponible sur l'instance Gitlab de
        l'Université de Lille :
        <ol>
          <li>
            <a
              href="https://gitlab.univ-lille.fr/julien.hauseux/geyser-backend"
              target="_blank"
              rel="noopener noreferrer"
              >https://gitlab.univ-lille.fr/julien.hauseux/geyser-backend</a
            >
          </li>
          <li>
            <a
              href="https://gitlab.univ-lille.fr/julien.hauseux/geyser-frontend"
              target="_blank"
              rel="noopener noreferrer"
              >https://gitlab.univ-lille.fr/julien.hauseux/geyser-frontend</a
            >
          </li>
        </ol>
      </AccueilVolet>
    </QList>
  </QCard>
</template>

<style scoped lang="scss">
.resp-rgpd {
  display: block;
  margin-left: 16px;
}
ol,
li {
  margin-top: 0;
}
</style>
