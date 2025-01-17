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
import { Link, useNavigate } from "react-router";
import useCurrentLang from "@/i18n/hooks/current-lang";
import { useLogin } from "@/react-query/mutation/auth";
import { useTranslation } from "react-i18next";

const Login: React.FC = () => {
  type LoginForm = z.infer<typeof loginFormSchema>;
  const currentLang = useCurrentLang();
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    handleLogin(data, {
      onSuccess: () => {
        navigate(`/${currentLang}/${MAIN_PATH.HOME}`);
      },
    });
  };

  return (
    <div className={container()}>
      <h1 className={heading()}>{t("login.welcomeBack")}</h1>
      <p className={paragraph({ size: "md" })}>{t("login.signInText")}</p>

      <form className={form()} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              size="large"
              placeholder={t("login.emailPlaceholder")}
              prefix={<MailOutlined />}
              className={input({ size: "md" })}
              {...field}
            />
          )}
        />
        {errors.email?.message && (
          <Error message={t(`${errors.email.message}`)} />
        )}
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type="password"
              placeholder={t("login.passwordPlaceholder")}
              prefix={<LockOutlined />}
              className={input({ size: "md" })}
              {...field}
            />
          )}
        />
        {errors.password && <Error message={t(`${errors.password.message}`)} />}
        <Button
          htmlType="submit"
          color="danger"
          variant="solid"
          size="large"
          className="w-full font-semibold"
        >
          {t("login.loginButton")}
        </Button>
      </form>

      <div className={footerText({ size: "md" })}>
        <p>
          {t("login.footerText")}{" "}
          <Link to={`/${currentLang}/${MAIN_PATH.REGISTER}`} className={link()}>
            {t("login.registerLinkText")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
