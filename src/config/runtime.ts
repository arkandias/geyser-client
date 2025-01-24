import type { DeepReadonly } from "vue";

type RuntimeConfig = DeepReadonly<{
  endpoints?: {
    graphql?: string;
    auth?: string;
  };
}>;

const isRuntimeConfig = (data: unknown): data is RuntimeConfig => {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  if ("endpoints" in data) {
    if (typeof data.endpoints !== "object" || data.endpoints === null) {
      return false;
    }

    if (
      "graphql" in data.endpoints &&
      data.endpoints.graphql !== undefined &&
      typeof data.endpoints.graphql !== "string"
    ) {
      return false;
    }

    if (
      "auth" in data.endpoints &&
      data.endpoints.auth !== undefined &&
      typeof data.endpoints.auth !== "string"
    ) {
      return false;
    }
  }

  return true;
};

export const getRuntimeConfig = async (): Promise<RuntimeConfig> => {
  try {
    const response = await fetch(import.meta.env.BASE_URL + "config.json");
    if (!response.ok) {
      console.warn(
        `Error loading runtime configuration. HTTP response status: ${response.status.toString()}`,
      );
    }
    const data = (await response.json()) as unknown;
    return isRuntimeConfig(data) ? data : {};
  } catch (error) {
    console.warn("Error loading runtime configuration:", error);
    return {};
  }
};
