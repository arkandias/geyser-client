import { Notify, type QNotifyCreateOptions } from "quasar";

export enum NotifyType {
  Default = "default",
  Error = "error",
  Success = "success",
}

const commonProps: QNotifyCreateOptions = {
  position: "bottom-right",
  group: false,
};

const defaultOptions = (type: NotifyType): QNotifyCreateOptions => {
  switch (type) {
    case NotifyType.Default:
      return {
        ...commonProps,
      };
    case NotifyType.Error:
      return {
        ...commonProps,
        color: "negative",
        caption: "Essayez de recharcher la page ou contactez un administrateur",
      };
    case NotifyType.Success:
      return {
        ...commonProps,
        color: "positive",
      };
  }
};

export const notify = (type: NotifyType, opts: QNotifyCreateOptions) => {
  Notify.create({ ...defaultOptions(type), ...opts });
};
