import {
  container,
  heading,
  paragraph,
  form,
  input,
  link,
  footerText,
} from "./login-cva";
import { Input, Button } from "antd";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/schema";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LoginDefaultValues } from "@/data";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Error from "@/components/error-message";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { Link } from "react-router";
import useCurrentLang from "@/i18n/current-lang";
import { useLogin } from "@/react-query/mutation/auth";
const Login: React.FC = () => {
  type LoginForm = z.infer<typeof loginFormSchema>;
  const currentLang = useCurrentLang();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: LoginDefaultValues,
  });
  const { mutate: handleLogin } = useLogin();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    handleLogin(data);
  };
  return (
    <div className={container()}>
      <h1 className={heading()}>Welcome Back</h1>
      <p className={paragraph({ size: "md" })}>Sign in to your account</p>

      <form className={form()} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              size="large"
              placeholder="Email address"
              prefix={<MailOutlined />}
              className={input({ size: "md" })}
              {...field}
            />
          )}
        />
        {errors.email?.message && <Error message={errors.email.message} />}
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
        <div className="flex justify-end">
          <a href="#" className={link()}>
            Forgot Password?
          </a>
        </div>
        <Button
          htmlType="submit"
          color="danger"
          variant="solid"
          size="large"
          className="w-full font-semibold"
        >
          Log in
        </Button>
      </form>

      <div className={footerText({ size: "md" })}>
        <p>
          Don’t have an account?{" "}
          <Link to={`/${currentLang}/${MAIN_PATH.REGISTER}`} className={link()}>
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
