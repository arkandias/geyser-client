<script setup lang="ts">
import { type Ref, ref } from "vue";

import MenuBase from "@/components/header/MenuBase.vue";

const isInformationOpen: Ref<boolean> = ref(false);
const isLegalNoticeOpen: Ref<boolean> = ref(false);
const isLicenceOpen: Ref<boolean> = ref(false);

const informationLabel = "À propos";
const legalNoticeLabel = "Mentions légales";
const licenceLabel = "Licence";
</script>

<template>
  <MenuBase label="Infos" icon="sym_s_info">
    <QList>
      <QItem v-close-popup clickable @click="isInformationOpen = true">
        <QItemSection>
          <QItemLabel>{{ informationLabel }}</QItemLabel>
        </QItemSection>
      </QItem>
      <QItem v-close-popup clickable @click="isLegalNoticeOpen = true">
        <QItemSection>
          <QItemLabel>{{ legalNoticeLabel }}</QItemLabel>
        </QItemSection>
      </QItem>
      <QItem v-close-popup clickable @click="isLicenceOpen = true">
        <QItemSection>
          <QItemLabel>{{ licenceLabel }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </MenuBase>

  <QDialog v-model="isInformationOpen">
    <QCard square>
      <QCardSection class="text-h6">{{ informationLabel }}</QCardSection>
      <QCardSection>
        <p>
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

  <QDialog v-model="isLegalNoticeOpen">
    <QCard square>
      <QCardSection class="text-h6">{{ legalNoticeLabel }}</QCardSection>
      <QCardSection>
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
        <p>
          Si vous estimez, après avoir contacté le directeur du département de
          mathématiques, que vos droits «&nbsp;Informatique et Libertés&nbsp;»
          ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
        </p>
      </QCardSection>
    </QCard>
  </QDialog>

  <QDialog v-model="isLicenceOpen">
    <QCard square>
      <QCardSection class="text-h6">{{ licenceLabel }}</QCardSection>
      <QCardSection>
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
        Le code source de Geyser est disponible sur l'instance GitLab de
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
      </QCardSection>
    </QCard>
  </QDialog>
</template>

<style scoped lang="scss">
.q-item {
  white-space: nowrap;
}
</style>
