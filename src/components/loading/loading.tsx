import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spin />
    </div>
  );
};
export default Loading;
