import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import SkeletonLoading from "@/components/skeleton-ui";
import { useFillProfileInfo } from "@/react-query/mutation/account";
import { useGetProfile } from "@/react-query/query/account";
import { PROFILE_QUERY_KEYS } from "@/react-query/query/account/enum";
import { loginAtom } from "@/store";
import { useQueryClient } from "react-query";
import Error from "@/components/error-message";
import { profileSchema } from "@/schema";
import { z } from "zod";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import useCurrentLang from "@/i18n/hooks/current-lang";

type EditProfile = z.infer<typeof profileSchema>;

const EditProfile: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const currentLang = useCurrentLang();

  const { data, isLoading, isFetching } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const { mutate: handleProfile } = useFillProfileInfo();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfile>({
    resolver: zodResolver(profileSchema),
    defaultValues: {},
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const profileDefaultValue = {
        name_ka: data[0]?.name_ka ?? undefined,
        name_en: data[0]?.name_en ?? undefined,
        username: data[0]?.username ?? undefined,
        surname_ka: data[0]?.surname_ka ?? undefined,
        surname_en: data[0]?.surname_en ?? undefined,
        phone: data[0]?.phone ?? undefined,
      };

      reset(profileDefaultValue);
    }
  }, [data, reset]);

  const onSubmit: SubmitHandler<EditProfile> = (data) => {
    if (user) {
      const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${data.username}`;
      handleProfile(
        { ...data, avatar_url: avatarUrl, id: user?.user.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              PROFILE_QUERY_KEYS.INFO,
              user?.user.id,
            ]);
            navigate(`/${currentLang}/${ADDITION_PATH.PROFILE}`);
          },
        },
      );
    }
  };

  if (isLoading || isFetching) {
    return <SkeletonLoading number={6} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.username.label")}
        </label>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your username" />
          )}
        />
        {errors.username && <Error message={t(`${errors.username.message}`)} />}
      </div>
      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.nameKa.label")}
        </label>
        <Controller
          name="name_ka"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your name in Georgian" />
          )}
        />
        {errors.name_ka && <Error message={t(`${errors.name_ka.message}`)} />}
      </div>

      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.nameEn.label")}
        </label>
        <Controller
          name="name_en"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your name in English" />
          )}
        />
        {errors.name_en && <Error message={t(`${errors.name_en.message}`)} />}
      </div>

      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.surnameKa.label")}
        </label>
        <Controller
          name="surname_ka"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your surname in Georgian" />
          )}
        />
        {errors.surname_ka && (
          <Error message={t(`${errors.surname_ka.message}`)} />
        )}
      </div>

      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.surnameEn.label")}
        </label>
        <Controller
          name="surname_en"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your surname in English" />
          )}
        />
        {errors.surname_en && (
          <Error message={t(`${errors.surname_en.message}`)} />
        )}
      </div>

      <div>
        <label className="font-semibold text-gray-700">
          {t("settings.phone.label")}
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Enter your phone number" />
          )}
        />
        {errors.phone && <Error message={t(`${errors.phone.message}`)} />}
      </div>
      <div>
        <Button
          color="danger"
          variant="solid"
          htmlType="submit"
          className="w-full font-semibold"
        >
          {t("settings.save")}
        </Button>
      </div>
    </form>
  );
};

export default EditProfile;
