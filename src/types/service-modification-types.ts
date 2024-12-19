import type { Option } from "@/types/common.ts";

export type ServiceModificationType = Option<string> & {
  description?: string;
};
