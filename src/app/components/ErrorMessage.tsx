type Props = {
  message: string | undefined;
};

const ErrorMessage = ({ message }: Props) => {
  return <p className="text-red-500">{message && message}</p>;
};

export default ErrorMessage;
