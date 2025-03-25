import { PHASES } from "@/config/types/phases.ts";
import { capitalize } from "@/utils/misc.ts";

export default {
  customTextDefault: {
    homeTitle: "@:home.title",
    [`homeSubtitle${capitalize(PHASES.REQUESTS)}`]: "@:home.subtitle.requests",
    [`homeSubtitle${capitalize(PHASES.ASSIGNMENTS)}`]:
      "@:home.subtitle.assignments",
    [`homeSubtitle${capitalize(PHASES.RESULTS)}`]: "@:home.subtitle.results",
    [`homeSubtitle${capitalize(PHASES.SHUTDOWN)}`]: "@:home.subtitle.shutdown",
    [`homeMessage${capitalize(PHASES.REQUESTS)}`]: "@:home.message.requests",
    [`homeMessage${capitalize(PHASES.ASSIGNMENTS)}`]:
      "@:home.message.assignments",
    [`homeMessage${capitalize(PHASES.RESULTS)}`]: "@:home.message.results",
    [`homeMessage${capitalize(PHASES.SHUTDOWN)}`]: "@:home.message.shutdown",
    contact: "@:header.info.contact.message",
    legalNotice: "@:header.info.legalNotice.message",
  },
} as const;
