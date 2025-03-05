import admin from "@/locales/fr/admin.ts";
import common from "@/locales/fr/common.ts";
import courses from "@/locales/fr/course.ts";
import customTextDefault from "@/locales/fr/custom-text-default.ts";
import header from "@/locales/fr/header.ts";
import home from "@/locales/fr/home.ts";
import teacher from "@/locales/fr/teacher.ts";

export default {
  ...common,
  ...customTextDefault,
  ...header,
  ...home,
  ...courses,
  ...teacher,
  ...admin,
} as const;
