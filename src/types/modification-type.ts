import type { Option } from "@/types/common.ts";

export type ModificationType = Option<string> & {
  description: string | null;
};
