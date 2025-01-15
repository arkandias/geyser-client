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
