import Nature from "@/components/nature";
import Register from "../components/register-form";

const RegisterView: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row w-[95%] md:w-[75%] lg:w-[80%] h-[70%] rounded-lg overflow-hidden shadow-2xl">
        <Nature />
        <Register />
      </div>
    </div>
  );
};

export default RegisterView;
