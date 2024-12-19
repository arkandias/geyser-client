export type Message = {
  id: number;
  body: string;
};

export type MessageCount = {
  aggregate: {
    count: number;
  } | null;
};
