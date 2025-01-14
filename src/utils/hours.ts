type TotalHours = {
  aggregate?: {
    sum?: {
      hours?: number | null;
    } | null;
  } | null;
};

type TotalWeightedHours = {
  aggregate?: {
    sum?: {
      hoursWeighted?: number | null;
    } | null;
  } | null;
};

export const totalH = (total?: TotalHours) => total?.aggregate?.sum?.hours ?? 0;

export const totalWH = (total?: TotalWeightedHours) =>
  total?.aggregate?.sum?.hoursWeighted ?? 0;

export const modifiedService = (service?: {
  hours: number;
  totalModifications: TotalHours;
}) => (service?.hours ?? 0) - totalH(service?.totalModifications);
