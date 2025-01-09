import Nature from "@/components/nature";
import Register from "#/register/components/register-form";

const RegisterView: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center md:flex-row">
      <div className="flex h-[70%] w-[95%] flex-col overflow-hidden rounded-lg shadow-2xl md:w-[75%] md:flex-row lg:w-[80%]">
        <Nature />
        <Register />
      </div>
    </div>
  );
};

export default RegisterView;
