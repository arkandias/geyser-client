import * as dotenv from "dotenv";

dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.development.local" });

// Validate required environment variables
const GRAPHQL_URL = process.env["VITE_GRAPHQL_URL"];
const HASURA_ADMIN_SECRET = process.env["VITE_HASURA_ADMIN_SECRET"];
if (!GRAPHQL_URL) {
  throw new Error("VITE_GRAPHQL_URL environment variable is required");
}
if (!HASURA_ADMIN_SECRET) {
  throw new Error("VITE_HASURA_ADMIN_SECRET environment variable is required");
}

export default {
  schema: "schema.graphql",
  extensions: {
    endpoints: {
      dev: {
        url: GRAPHQL_URL,
        headers: {
          "X-Hasura-Admin-Secret": HASURA_ADMIN_SECRET,
        },
      },
    },
  },
  documents: "**/*.graphql",
};
