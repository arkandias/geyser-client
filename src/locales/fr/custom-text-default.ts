import { PHASES } from "@/config/types/phases.ts";

export default {
  custom_text_default: {
    home_title: "@:home.title",
    [`home_subtitle_${PHASES.REQUESTS}`]: "@:home.subtitle.requests",
    [`home_subtitle_${PHASES.ASSIGNMENTS}`]: "@:home.subtitle.assignments",
    [`home_subtitle_${PHASES.RESULTS}`]: "@:home.subtitle.results",
    [`home_subtitle_${PHASES.SHUTDOWN}`]: "@:home.subtitle.shutdown",
    [`home_message_${PHASES.REQUESTS}`]: "@:home.message.requests",
    [`home_message_${PHASES.ASSIGNMENTS}`]: "@:home.message.assignments",
    [`home_message_${PHASES.RESULTS}`]: "@:home.message.results",
    [`home_message_${PHASES.SHUTDOWN}`]: "@:home.message.shutdown",
    contact: "@:header.info.contact.message",
    legal_notice: "@:header.info.legal_notice.message",
  },
} as const;
