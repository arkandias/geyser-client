import type { Client } from "@urql/vue";

import { DELETE_MESSAGE, UPSERT_MESSAGE } from "@/graphql/messages.ts";

export const updateMessage =
  (client: Client, variables: { serviceId: number }) =>
  (contenu: string): Promise<boolean> =>
    contenu
      ? client
          .mutation(UPSERT_MESSAGE, {
            ...variables,
            contenu,
          })
          .toPromise()
          .then((result) => !!result.data?.message?.id && !result.error)
      : client
          .mutation(DELETE_MESSAGE, variables)
          .toPromise()
          .then(
            (result) => !!result.data?.messages?.returning && !result.error,
          );
