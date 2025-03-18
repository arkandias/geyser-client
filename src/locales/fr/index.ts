import admin from "@/locales/fr/admin.ts";
import app from "@/locales/fr/app.ts";
import common from "@/locales/fr/common.ts";
import core from "@/locales/fr/core.ts";
import courses from "@/locales/fr/courses.ts";
import customTextDefault from "@/locales/fr/custom-text-default.ts";
import downloadAssignments from "@/locales/fr/download-assignments.ts";
import header from "@/locales/fr/header.ts";
import home from "@/locales/fr/home.ts";
import teacher from "@/locales/fr/teacher.ts";

export default {
  ...admin,
  ...app,
  ...common,
  ...core,
  ...courses,
  ...customTextDefault,
  ...downloadAssignments,
  ...header,
  ...home,
  ...teacher,
} as const;
