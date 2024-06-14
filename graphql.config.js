import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.development.local" });

export default {
  schema: "schema.graphql",
  extensions: {
    endpoints: {
      dev: {
        url: process.env.VITE_GRAPHQL_URL ?? "",
        headers: {
          "x-hasura-admin-secret": process.env.VITE_HASURA_ADMIN_SECRET ?? "",
        },
      },
    },
  },
  documents: "**/*.graphql",
};
