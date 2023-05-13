import { ToastInput, ToastAction } from "@geist-ui/core";
import Router from "next/router";

export default function ResponseHandler(
  error: any,
  action: ToastAction,
  setToast: React.Dispatch<React.SetStateAction<ToastInput>>
) {
  const err = JSON.parse(error.message);
  console.log(err);
  if (err.code) {
    if (err.code.status === 401) {
      setToast({
        text: "Unauthorized",
        actions: [action],
        type: "error",
      });
      return Router.replace("/");
    }
  } else if (err.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
}
