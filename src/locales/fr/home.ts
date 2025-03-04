import { PHASES } from "@/config/types/phases.ts";

export default {
  home: {
    title: "Bienvenue",
    subtitle: {
      [PHASES.REQUESTS]: "Geyser est actuellement en phase de vœux",
      [PHASES.ASSIGNMENTS]: "Les travaux de la commission sont en cours",
      [PHASES.RESULTS]: "Geyser est actuellement en phase de consultation",
      [PHASES.SHUTDOWN]: "Geyser est actuellement fermé",
    },
    message: {
      [PHASES.REQUESTS]: `
        <p>
          Sur la page <i class="material-symbols-sharp">badge</i> Mes informations,
          entrez votre service de base (en heures EQTD), puis ajoutez vos modifications
          de service éventuelles (délégation, décharge, congé, etc.).
          <b>
            Le total indiqué doit correspondre au nombre d'heures EQTD que la
            commission doit vous attribuer avec des enseignements disponibles sur
            Geyser.
          </b>
        </p>
        <p>
          Vous pouvez ensuite faire des demandes principales et secondaires sur la
          page <i class="material-symbols-sharp">menu_book</i> Enseignements.
          Merci de demander l’équivalent de votre service total en demandes principales
          et en demandes secondaires.
        </p>`,
      [PHASES.ASSIGNMENTS]: `
        Les travaux de la commission sont en cours. Vous serez informé
        lorsqu'ils seront terminés pour consulter les attributions.
        En attendant, vous pouvez toujours consulter les demandes mais il n'est
        plus possible de les modifier.`,
      [PHASES.RESULTS]: `
        Vous pouvez à présent consulter les attributions des enseignements de
        cette année. Vous avez également toujours accès aux demandes et aux
        attributions des années précédentes.`,
      [PHASES.SHUTDOWN]: "",
    },
    alert: {
      no_auth: "Vous n'êtes pas authentifié",
      loading_profile: "Chargement de votre profil...",
      profile_not_loaded: "Votre profil n'a pas pu être chargé",
      profile_not_active: "Votre profil n'est pas actif",
      loading_phase: "Chargement de la phase en cours...",
      shutdown: "Geyser est actuellement fermé",
      page_not_found: "Page non trouvée",
    },
  },
} as const;
