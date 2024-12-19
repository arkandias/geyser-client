export type TotalHours = {
  aggregate: {
    sum: {
      hours: number | null;
    } | null;
  } | null;
};

export type TotalWeightedHours = {
  aggregate: {
    sum: {
      weightedHours: number | null;
    } | null;
  } | null;
};
