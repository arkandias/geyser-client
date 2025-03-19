import { type DocumentNode, Kind, type OperationDefinitionNode } from "graphql";
import {
  type ClientPluginContext,
  createClient,
  defaultPlugins,
  definePlugin,
} from "villus";

import { graphqlURL } from "@/config/env.ts";
import { getAuthHeader } from "@/services/keycloak.ts";

const authPlugin = definePlugin(async ({ opContext }) => {
  Object.assign(opContext.headers, await getAuthHeader());
});

const debugPlugin = definePlugin((context: ClientPluginContext) => {
  // Capture the time when request processing begins
  const startTime = Date.now();

  // Create a unique ID for tracking request-response pairs
  const requestId =
    startTime.toString(36) + Math.random().toString(36).substring(2);

  // Get operation name safely
  let operationName: string | undefined;
  try {
    const query = context.operation.query;
    if (typeof query === "string") {
      operationName = "String Query";
    } else if (isDocumentNode(query)) {
      operationName = query.definitions.find((def) =>
        isOperationDefinition(def),
      )?.name?.value;
    } else {
      operationName = "Unnamed";
    }
  } catch (_) {
    operationName = "Unnamed";
  }

  // Log the request
  console.groupCollapsed(
    `[Villus] 🚀 Request #${requestId}: ${operationName} (${context.operation.type})`,
  );
  console.log(`Start time: ${startTime}`);
  console.log("Operation:", context.operation);
  console.log("Fetch Options:", context.opContext);
  console.groupEnd();

  // Log the response
  context.afterQuery((result) => {
    const duration = `${Date.now() - startTime}ms`;
    if (result.error) {
      console.groupCollapsed(
        `[Villus] ❌ Response #${requestId}: FAILED (${duration})`,
      );
      console.error("Error:", result.error);
      console.groupEnd();
    } else {
      console.groupCollapsed(
        `[Villus] ✅ Response #${requestId}: SUCCESS (${duration})`,
      );
      console.log("Data:", result.data);
      console.groupEnd();
    }
  });
});

const isDocumentNode = (value: unknown): value is DocumentNode =>
  typeof value === "object" &&
  value !== null &&
  "kind" in value &&
  value.kind === Kind.DOCUMENT;

const isOperationDefinition = (
  value: unknown,
): value is OperationDefinitionNode =>
  typeof value === "object" &&
  value !== null &&
  "kind" in value &&
  value.kind === Kind.OPERATION_DEFINITION;

export const client = createClient({
  url: graphqlURL,
  use: [
    ...(import.meta.env.DEV ? [debugPlugin] : []),
    authPlugin,
    ...defaultPlugins(),
  ],
});
