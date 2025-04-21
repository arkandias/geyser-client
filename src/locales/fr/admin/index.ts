import courses from "./courses.ts";
import data from "./data.ts";
import general from "./general.ts";
import requests from "./requests.ts";
import roles from "./roles.ts";
import teachers from "./teachers.ts";

export default {
  admin: {
    ...data,
    ...general,
    ...teachers,
    ...courses,
    ...requests,
    ...roles,
  },
} as const;
