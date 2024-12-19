import { Notify, type QNotifyCreateOptions } from "quasar";

export enum NotifyType {
  Default,
  Error,
  Success,
}

const defaultOptions = (type: NotifyType): QNotifyCreateOptions => {
  switch (type) {
    case NotifyType.Default:
      return {
        position: "bottom-right",
        group: false,
      };
    case NotifyType.Error:
      return {
        color: "negative",
        caption: "Essayez de recharcher la page ou contactez un administrateur",
        position: "bottom-right",
        group: false,
      };
    case NotifyType.Success:
      return {
        color: "positive",
        position: "bottom-right",
        group: false,
      };
  }
};

export const notify = (type: NotifyType, opts: QNotifyCreateOptions) => {
  Notify.create({ ...defaultOptions(type), ...opts });
};
