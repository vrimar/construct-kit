import { Alert } from "./Alert";

interface ApiErrorAlertProps {
  error?: unknown;
}

export const ApiErrorAlert = ({ error }: ApiErrorAlertProps) => {
  const err = error as Record<string, unknown> | undefined;
  const message = String(
    err?.Message ||
      err?.message ||
      err?.description ||
      err?.error_description ||
      "An error has occurred",
  );

  return (
    <Alert
      status="error"
      title={message}
    />
  );
};
