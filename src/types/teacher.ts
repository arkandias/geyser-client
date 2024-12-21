import type { Option } from "@/types/common.ts";
import type { Message, MessageCount } from "@/types/message.ts";
import type { Priority } from "@/types/priority.ts";
import type { Profile } from "@/types/profile.ts";
import type { RequestDetails } from "@/types/request.ts";
import type { TotalHours, TotalWeightedHours } from "@/types/row.ts";
import type { Service, ServiceDetails } from "@/types/service.ts";

export type TeacherDetails = Profile & {
  position: Option<string> | null;
  services: ServiceDetails[];
  priorities: Priority[];
  requests: RequestDetails[];
  totalAssigned: TotalHours & TotalWeightedHours;
  totalPrimary: TotalHours & TotalWeightedHours;
  totalSecondary: TotalHours & TotalWeightedHours;
  messages: Message[];
};

export type TeacherRow = Profile & {
  visible: boolean;
  services: Service[];
  totalAssigned: TotalHours & TotalWeightedHours;
  totalPrimary: TotalHours & TotalWeightedHours;
  totalSecondary: TotalHours & TotalWeightedHours;
  messageCount: MessageCount;
};
