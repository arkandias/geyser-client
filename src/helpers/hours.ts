import type { TotalHours, TotalWeightedHours } from "@/types/row.ts";
import type { Service } from "@/types/service.ts";

export const totalH = (total?: TotalHours): number =>
  total?.aggregate?.sum?.hours ?? 0;

export const totalWH = (total?: TotalWeightedHours): number =>
  total?.aggregate?.sum?.weightedHours ?? 0;

export const modifiedService = (service?: Service): number =>
  (service?.base ?? 0) - totalWH(service?.totalModifications);
