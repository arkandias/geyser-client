import * as dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.development.local" });

const graphqlUrl = process.env["VITE_GRAPHQL_URL"];
const hasuraAdminSecret = process.env["VITE_HASURA_ADMIN_SECRET"];

if (!graphqlUrl) {
  throw new Error("Missing VITE_GRAPHQL_URL environment variable");
}
if (!hasuraAdminSecret) {
  throw new Error("Missing VITE_HASURA_ADMIN_SECRET environment variable");
}

const config = {
  schema: "schema.graphql",
  extensions: {
    endpoints: {
      dev: {
        url: graphqlUrl,
        headers: {
          "X-Hasura-Admin-Secret": hasuraAdminSecret,
        },
      },
    },
  },
  documents: [
    "src/**/*.graphql",
    "src/**/*.ts",
    "src/**/*.vue",
    "!src/gql/**/*",
  ],
};

export default config;
