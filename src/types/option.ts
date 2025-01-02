export type Option<T> = {
  value: T;
  label: string;
};

export type OptionSearch<T> = Option<T> & {
  search: string;
};
