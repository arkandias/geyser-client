import { PHASES } from "@/config/phases.ts";
import { capitalize } from "@/utils/misc.ts";

export default {
  customText: {
    homeTitle: {
      label: "Titre de la page d'accueil",
      default: "@:home.title",
    },
    [`homeSubtitle${capitalize(PHASES.REQUESTS)}`]: {
      label: "Sous-titre de la page d'accueil en phase de vœux",
      default: "@:home.subtitle.requests",
    },
    [`homeSubtitle${capitalize(PHASES.ASSIGNMENTS)}`]: {
      label: "Sous-titre de la page d'accueil en phase de commission",
      default: "@:home.subtitle.assignments",
    },
    [`homeSubtitle${capitalize(PHASES.RESULTS)}`]: {
      label: "Sous-titre de la page d'accueil en phase de consultation",
      default: "@:home.subtitle.results",
    },
    [`homeSubtitle${capitalize(PHASES.SHUTDOWN)}`]: {
      label: "Sous-titre de la page d'accueil en phase de fermeture",
      default: "@:home.subtitle.shutdown",
    },
    [`homeMessage${capitalize(PHASES.REQUESTS)}`]: {
      label: "Message de la page d'accueil en phase de vœux",
      default: "@:home.message.requests",
    },
    [`homeMessage${capitalize(PHASES.ASSIGNMENTS)}`]: {
      label: "Message de la page d'accueil en phase de commission",
      default: "@:home.message.assignments",
    },
    [`homeMessage${capitalize(PHASES.RESULTS)}`]: {
      label: "Message de la page d'accueil en phase de consultation",
      default: "@:home.message.results",
    },
    [`homeMessage${capitalize(PHASES.SHUTDOWN)}`]: {
      label: "Message de la page d'accueil en phase de fermeture",
      default: "@:home.message.shutdown",
    },
    contact: {
      label: "Contact",
      default: "@:header.info.contact.message",
    },
    legalNotice: {
      label: "Mentions légales",
      default: "@:header.info.legalNotice.message",
    },
  },
} as const;
