import { useToasts } from "@geist-ui/core";

export const successToast = (t: string) => {
  const { setToast } = useToasts();
  const action = {
    name: "close",
    passive: true,
    handler: (_: any, cancel: any) => cancel("error"),
  };

  return setToast({
    text: String(t),
    actions: [action],
    type: "success",
  });
};

export const failToast = (t: string) => {
  const { setToast } = useToasts();
  const action = {
    name: "close",
    passive: true,
    handler: (_: any, cancel: any) => cancel("error"),
  };

  return setToast({
    text: String(t),
    actions: [action],
    type: "error",
  });
};
