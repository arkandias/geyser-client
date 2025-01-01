import type { TotalHours, TotalWeightedHours } from "@/types/hours.ts";

export const totalH = (total?: TotalHours): number =>
  total?.aggregate?.sum?.hours ?? 0;

export const totalWH = (total?: TotalWeightedHours): number =>
  total?.aggregate?.sum?.weightedHours ?? 0;

export const modifiedService = (service?: {
  base: number;
  totalModifications: TotalHours;
}): number => (service?.base ?? 0) - totalH(service?.totalModifications);
