import { PHASES, capPhase } from "@/config/types/phases.ts";

export default {
  customTextDefault: {
    homeTitle: "@:home.title",
    [`homeSubtitle${capPhase(PHASES.REQUESTS)}`]: "@:home.subtitle.requests",
    [`homeSubtitle${capPhase(PHASES.ASSIGNMENTS)}`]:
      "@:home.subtitle.assignments",
    [`homeSubtitle${capPhase(PHASES.RESULTS)}`]: "@:home.subtitle.results",
    [`homeSubtitle${capPhase(PHASES.SHUTDOWN)}`]: "@:home.subtitle.shutdown",
    [`homeMessage${capPhase(PHASES.REQUESTS)}`]: "@:home.message.requests",
    [`homeMessage${capPhase(PHASES.ASSIGNMENTS)}`]:
      "@:home.message.assignments",
    [`homeMessage${capPhase(PHASES.RESULTS)}`]: "@:home.message.results",
    [`homeMessage${capPhase(PHASES.SHUTDOWN)}`]: "@:home.message.shutdown",
    contact: "@:header.info.contact.message",
    legalNotice: "@:header.info.legalNotice.message",
  },
} as const;
