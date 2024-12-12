import * as Dotenv from "dotenv";

Dotenv.config({ path: ".env.development" });
Dotenv.config({ path: ".env.development.local" });

export default {
  schema: "schema.graphql",
  extensions: {
    endpoints: {
      dev: {
        url: process.env["VITE_GRAPHQL_URL"] ?? "",
        headers: {
          "X-Hasura-Admin-Secret":
            process.env["VITE_HASURA_ADMIN_SECRET"] ?? "",
        },
      },
    },
  },
  documents: "**/*.graphql",
};
