import type { Service } from "@/gql/graphql.ts";

export type Request = {
  id: number;
  serviceId: number;
  service: Service;
  course: {
    id: number;
    hoursPerGroup: number | null;
  };
  requestType: string;
  hours: number;
  isPriority: boolean | null;
};

export type Priority = {
  id: number;
  service: Service;
  ensId: number;
  seniority: number | null;
  isPriority: boolean | null;
};

export type Archive = {
  year: number;
  courseId: number;
  requests: Request[];
};

export type NestedArchives = Archive & {
  parent?: NestedArchives | null;
};
