import { type QNotifyCreateOptions, useQuasar } from "quasar";

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
        color: "info",
      };
    case NotifyType.ERROR:
      return {
        ...commonProps,
        color: "negative",
      };
    case NotifyType.SUCCESS:
      return {
        ...commonProps,
        color: "positive",
      };
  }
};

export const useNotify = () => {
  const $q = useQuasar();

  const notify = (type: NotifyType, opts: QNotifyCreateOptions) => {
    $q.notify({ ...defaultOptions(type), ...opts });
  };

  return { notify };
};
