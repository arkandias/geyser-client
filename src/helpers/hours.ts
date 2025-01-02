type TotalHours = {
  aggregate: {
    sum: {
      hours: number | null;
    } | null;
  } | null;
};

type TotalWeightedHours = {
  aggregate: {
    sum: {
      weightedHours: number | null;
    } | null;
  } | null;
};

export const totalH = (total?: TotalHours): number =>
  total?.aggregate?.sum?.hours ?? 0;

export const totalWH = (total?: TotalWeightedHours): number =>
  total?.aggregate?.sum?.weightedHours ?? 0;

export const modifiedService = (service?: {
  base: number;
  totalModifications: TotalHours;
}): number => (service?.base ?? 0) - totalH(service?.totalModifications);
