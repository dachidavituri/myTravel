import { regiserFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  container,
  heading,
  paragraph,
  form,
  input,
  footerText,
  link,
} from "./register-cva";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { registerDefaultValues } from "@/data";
import Error from "@/components/error-message";
import { Link } from "react-router";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import useCurrentLang from "@/i18n/current-lang";

const Register: React.FC = () => {
  type RegisterForm = z.infer<typeof regiserFormSchema>;
  const currentLang = useCurrentLang();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(regiserFormSchema),
    defaultValues: registerDefaultValues,
  });

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    console.log(data);
  };

  return (
    <div className={container()}>
      <h1 className={heading()}>Create Your Account</h1>
      <p className={paragraph({ size: "md" })}>Start your journey with us!</p>

      <form className={form()} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={(field) => (
            <Input
              size="large"
              placeholder="Email address"
              prefix={<MailOutlined />}
              className={input({ size: "md" })}
              {...field}
            />
          )}
        />
        {errors.email && <Error message={errors.email.message} />}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type="password"
              placeholder="Password"
              prefix={<LockOutlined />}
              className={input({ size: "md" })}
              {...field}
            />
          )}
        />
        {errors.password && <Error message={errors.password.message} />}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <Input
              type="password"
              placeholder="Confirm password"
              prefix={<LockOutlined />}
              className={input({ size: "md" })}
              {...field}
            />
          )}
        />
        {errors.confirmPassword && (
          <Error message={errors.confirmPassword.message} />
        )}
        <Button
          color="danger"
          variant="solid"
          size="large"
          className="w-full font-semibold"
        >
          Sign up
        </Button>
      </form>

      <div className={footerText({ size: "md" })}>
        <p>
          Already have an account?{" "}
          <Link to={`/${currentLang}/${MAIN_PATH.LOGIN}`} className={link()}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
