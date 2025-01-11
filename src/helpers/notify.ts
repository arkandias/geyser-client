import { Notify, type QNotifyCreateOptions } from "quasar";

export enum NotifyType {
  DEFAULT = "DEFAULT",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

const commonProps: QNotifyCreateOptions = {
  position: "bottom-right",
  group: false,
};

const defaultOptions = (type: NotifyType): QNotifyCreateOptions => {
  switch (type) {
    case NotifyType.DEFAULT:
      return {
        ...commonProps,
      };
    case NotifyType.ERROR:
      return {
        ...commonProps,
        color: "negative",
        caption:
          "Si le problème persiste, merci de contacter un administrateur",
      };
    case NotifyType.SUCCESS:
      return {
        ...commonProps,
        color: "positive",
      };
  }
};

export const notify = (type: NotifyType, opts: QNotifyCreateOptions) => {
  Notify.create({ ...defaultOptions(type), ...opts });
};
