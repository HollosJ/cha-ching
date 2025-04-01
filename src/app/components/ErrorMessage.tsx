import { ErrorMessage as FormikErrorMessage, ErrorMessageProps } from "formik";

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <FormikErrorMessage
      {...props}
      render={(msg) => <p className="text-red-500">{msg}</p>}
    />
  );
};

export default ErrorMessage;
