import Nature from "@/components/nature/nature";
import Login from "../components/login-form";

const LoginView: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row w-[95%] md:w-[75%] lg:w-[80%] h-[70%] rounded-lg overflow-hidden shadow-2xl">
        <Nature />
        <Login />
      </div>
    </div>
  );
};
export default LoginView;
