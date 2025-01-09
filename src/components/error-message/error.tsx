interface ErrorProps {
  message: string | undefined;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <span className={`text-sm text-red-500 md:text-base`}>{message}</span>;
};

export default Error;
