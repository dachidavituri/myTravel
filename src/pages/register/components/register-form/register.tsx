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
import { Link, useNavigate } from "react-router";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import useCurrentLang from "@/i18n/current-lang";
import { useRegister } from "@/react-query/mutation/auth";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
  type RegisterForm = z.infer<typeof regiserFormSchema>;
  const currentLang = useCurrentLang();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(regiserFormSchema),
    defaultValues: registerDefaultValues,
  });
  const { mutate: hadnleSignUp } = useRegister();
  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    hadnleSignUp(data, {
      onSuccess: () => {
        navigate(`/${currentLang}/${MAIN_PATH.LOGIN}`);
      },
    });
  };

  return (
    <div className={container()}>
      <h1 className={heading()}>{t("register.createAccount")}</h1>
      <p className={paragraph({ size: "md" })}>{t("register.startJourney")}</p>

      <form className={form()} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              size="large"
              placeholder={t("register.emailPlaceholder")}
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
              placeholder={t("register.passwordPlaceholder")}
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
              placeholder={t("register.confirmPasswordPlaceholder")}
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
          htmlType="submit"
          color="danger"
          variant="solid"
          size="large"
          className="w-full font-semibold"
        >
          {t("register.signUpButton")}
        </Button>
      </form>

      <div className={footerText({ size: "md" })}>
        <p>
          {t("register.footerText")}{" "}
          <Link to={`/${currentLang}/${MAIN_PATH.LOGIN}`} className={link()}>
            {t("register.loginLinkText")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
