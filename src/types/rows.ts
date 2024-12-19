export type Identifier = {
  id: number;
  name: string;
  shortName: string | null;
};

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
