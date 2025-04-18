import admin from "./admin/";
import app from "./app.ts";
import common from "./common.ts";
import core from "./core.ts";
import courses from "./courses.ts";
import customText from "./custom-text.ts";
import downloadAssignments from "./download-assignments.ts";
import header from "./header.ts";
import home from "./home.ts";
import service from "./service.ts";

export default {
  ...admin,
  ...app,
  ...common,
  ...core,
  ...courses,
  ...customText,
  ...downloadAssignments,
  ...header,
  ...home,
  ...service,
} as const;
