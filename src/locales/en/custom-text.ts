import { PHASES } from "@/config/phases.ts";
import { capitalize } from "@/utils/misc.ts";

export default {
  customText: {
    homeTitle: {
      label: "Homepage title",
      default: "@:home.title",
    },
    [`homeSubtitle${capitalize(PHASES.REQUESTS)}`]: {
      label: "Homepage subtitle during requests phase",
      default: "@:home.subtitle.requests",
    },
    [`homeSubtitle${capitalize(PHASES.ASSIGNMENTS)}`]: {
      label: "Homepage subtitle during assignments phase",
      default: "@:home.subtitle.assignments",
    },
    [`homeSubtitle${capitalize(PHASES.RESULTS)}`]: {
      label: "Homepage subtitle during results phase",
      default: "@:home.subtitle.results",
    },
    [`homeSubtitle${capitalize(PHASES.SHUTDOWN)}`]: {
      label: "Homepage subtitle during shutdown phase",
      default: "@:home.subtitle.shutdown",
    },
    [`homeMessage${capitalize(PHASES.REQUESTS)}`]: {
      label: "Homepage message during requests phase",
      default: "@:home.message.requests",
    },
    [`homeMessage${capitalize(PHASES.ASSIGNMENTS)}`]: {
      label: "Homepage message during assignments phase",
      default: "@:home.message.assignments",
    },
    [`homeMessage${capitalize(PHASES.RESULTS)}`]: {
      label: "Homepage message during results phase",
      default: "@:home.message.results",
    },
    [`homeMessage${capitalize(PHASES.SHUTDOWN)}`]: {
      label: "Homepage message during shutdown phase",
      default: "@:home.message.shutdown",
    },
    contact: {
      label: "Contact",
      default: "@:header.info.contact.message",
    },
    legalNotice: {
      label: "Legal notice",
      default: "@:header.info.legalNotice.message",
    },
  },
} as const;
