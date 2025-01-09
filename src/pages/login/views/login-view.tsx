import Nature from "@/components/nature/nature";
import Login from "#/login/components/login-form";

const LoginView: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center md:flex-row">
      <div className="flex h-[70%] w-[95%] flex-col overflow-hidden rounded-lg shadow-2xl md:w-[75%] md:flex-row lg:w-[80%]">
        <Nature />
        <Login />
      </div>
    </div>
  );
};
export default LoginView;
