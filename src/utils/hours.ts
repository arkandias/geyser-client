import { i18n } from "@/services/i18n.ts";

const { t, n } = i18n.global;

type TotalHours = {
  aggregate?: {
    sum?: {
      hours?: number | null;
    } | null;
  } | null;
};

type TotalHoursWeighted = {
  aggregate?: {
    sum?: {
      hoursWeighted?: number | null;
    } | null;
  } | null;
};

export const totalH = (total?: TotalHours) => total?.aggregate?.sum?.hours ?? 0;

export const totalHW = (total?: TotalHoursWeighted) =>
  total?.aggregate?.sum?.hoursWeighted ?? 0;

export const modifiedService = (service?: {
  hours: number;
  totalModifications: TotalHours;
}) => (service?.hours ?? 0) - totalH(service?.totalModifications);

export const formatWH = (hours: number) =>
  n(hours, "decimal") + "\u00A0" + t("unit.weightedHours");
