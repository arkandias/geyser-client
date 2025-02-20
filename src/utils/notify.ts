import { Notify, type QNotifyCreateOptions } from "quasar";

import { i18n } from "@/services/i18n.ts";

const { t } = i18n.global;

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
        caption: t("notify.error.caption.default"),
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

export const notifyOperationResult = (
  affectedRows: number | undefined,
  message: { error: string; none: string; single: string; multiple: string },
) => {
  switch (affectedRows) {
    case undefined:
      notify(NotifyType.ERROR, { message: message.error });
      break;
    case 0:
      notify(NotifyType.DEFAULT, { message: message.none });
      break;
    case 1:
      notify(NotifyType.SUCCESS, { message: message.single });
      break;
    default:
      notify(NotifyType.SUCCESS, { message: message.multiple });
  }
};
