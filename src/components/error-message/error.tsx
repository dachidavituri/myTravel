interface ErrorProps {
  message: string | undefined;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <span className={`text-red-500 text-sm md:text-base`}>{message}</span>;
};

export default Error;
