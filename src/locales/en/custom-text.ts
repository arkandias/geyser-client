import { PHASES } from "@/config/types/phases.ts";

export default {
  customText: {
    homeTitle: {
      label: "Homepage title",
      default: "@:home.title",
    },
    [`homeSubtitle${PHASES.REQUESTS}`]: {
      label: "Homepage subtitle during requests phase",
      default: "@:home.subtitle.requests",
    },
    [`homeSubtitle${PHASES.ASSIGNMENTS}`]: {
      label: "Homepage subtitle during assignments phase",
      default: "@:home.subtitle.assignments",
    },
    [`homeSubtitle${PHASES.RESULTS}`]: {
      label: "Homepage subtitle during results phase",
      default: "@:home.subtitle.results",
    },
    [`homeSubtitle${PHASES.SHUTDOWN}`]: {
      label: "Homepage subtitle during shutdown phase",
      default: "@:home.subtitle.shutdown",
    },
    [`homeMessage${PHASES.REQUESTS}`]: {
      label: "Homepage message during requests phase",
      default: "@:home.message.requests",
    },
    [`homeMessage${PHASES.ASSIGNMENTS}`]: {
      label: "Homepage message during assignments phase",
      default: "@:home.message.assignments",
    },
    [`homeMessage${PHASES.RESULTS}`]: {
      label: "Homepage message during results phase",
      default: "@:home.message.results",
    },
    [`homeMessage${PHASES.SHUTDOWN}`]: {
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
