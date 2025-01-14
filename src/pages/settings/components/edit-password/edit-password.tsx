import { Input, Button, message } from "antd";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdatePassword } from "@/react-query/mutation/auth";
import { newPasswordSchema } from "@/schema";
import Error from "@/components/error-message";
import { resetDefaultValues } from "@/data";
import { useTranslation } from "react-i18next";

type EditPasswordFormValues = z.infer<typeof newPasswordSchema>;

const EditPassword: React.FC = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditPasswordFormValues>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: resetDefaultValues,
  });

  const { mutateAsync: updatePassword } = useUpdatePassword();

  const onSubmit = async (data: EditPasswordFormValues) => {
    const { currentPassword, newPassword } = data;
    try {
      await updatePassword({ currentPassword, newPassword });
      message.success("Password updated successfully!");
      reset();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.currentPassText")}
        </label>
        <Controller
          name="currentPassword"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="Enter your current password"
            />
          )}
        />
        {errors.currentPassword && (
          <Error message={t(`${errors.currentPassword.message}`)} />
        )}
      </div>
      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.newPass")}
        </label>
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <Input.Password {...field} placeholder="Enter your new password" />
          )}
        />
        {errors.newPassword && (
          <Error message={t(`${errors.newPassword.message}`)} />
        )}
      </div>
      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.confirmPass")}
        </label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="Confirm your new password"
            />
          )}
        />
        {errors.confirmPassword && (
          <Error message={t(`${errors.confirmPassword.message}`)} />
        )}
      </div>

      <Button
        color="danger"
        variant="solid"
        htmlType="submit"
        className="w-full font-semibold"
      >
        {t("settings.updatePass")}
      </Button>
    </form>
  );
};

export default EditPassword;
