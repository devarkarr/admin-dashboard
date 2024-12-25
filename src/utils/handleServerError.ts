import { AxiosError } from "axios";

export default function handleServerError(error: unknown) {
  const errMsg =
    error instanceof AxiosError
      ? error.response?.data.meta.messageEn
      : "Something went wrong!";

  console.log(errMsg);
  //   showToastNoti(errMsg, "error")
}
