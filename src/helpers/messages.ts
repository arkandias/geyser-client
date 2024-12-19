import type { Client } from "@urql/vue";

import { DELETE_MESSAGE, UPSERT_MESSAGE } from "@/graphql/messages.ts";

export const updateMessage =
  (client: Client, variables: { year: number; uid: string }) =>
  (body: string): Promise<boolean> =>
    body
      ? client
          .mutation(UPSERT_MESSAGE, {
            ...variables,
            body,
          })
          .toPromise()
          .then((result) => !!result.data?.message?.id && !result.error)
      : client
          .mutation(DELETE_MESSAGE, variables)
          .toPromise()
          .then(
            (result) => !!result.data?.messages?.returning && !result.error,
          );
