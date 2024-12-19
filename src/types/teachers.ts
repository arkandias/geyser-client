import type { Option } from "@/types/common.ts";
import type { Message } from "@/types/messages.ts";
import type { Profile } from "@/types/profile.ts";
import type { RequestDetails } from "@/types/requests.ts";
import type { TotalHours, TotalWeightedHours } from "@/types/rows.ts";
import type { ServiceDetails } from "@/types/services.ts";

export type TeacherRow = Profile & {
  visible: boolean;
  position: Option<string> | null;
  services: ServiceDetails[];
  requests: RequestDetails[];
  totalAssigned: TotalHours & TotalWeightedHours;
  totalPrimary: TotalHours & TotalWeightedHours;
  totalSecondary: TotalHours & TotalWeightedHours;
  messages: Message[];
};
