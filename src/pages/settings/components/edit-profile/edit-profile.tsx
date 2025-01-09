import SkeletonLoading from "@/components/skeleton-ui";
import { useFillProfileInfo } from "@/react-query/mutation/account";
import { useGetProfile } from "@/react-query/query/account";
import { PROFILE_QUERY_KEYS } from "@/react-query/query/account/enum";
import { loginAtom } from "@/store";
import { Button, Form, Input } from "antd";
import { useAtomValue } from "jotai";
import { useQueryClient } from "react-query";
import { EditProfileFormValues } from "../index.types";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const EditProfile: React.FC = () => {
  const [form] = Form.useForm();
  const { t, i18n } = useTranslation();
  const user = useAtomValue(loginAtom);
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const { mutate: handleProfile } = useFillProfileInfo();

  const onFinish = (values: EditProfileFormValues) => {
    if (user) {
      const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${values.username}`;
      handleProfile(
        { ...values, avatar_url: avatarUrl, id: user?.user.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              PROFILE_QUERY_KEYS.INFO,
              user?.user.id,
            ]);
          },
        },
      );
    }
  };

  useEffect(() => {
    form.validateFields();
  }, [form, i18n.language]);

  if (isLoading || isFetching || !data || data.length === 0) {
    return <SkeletonLoading number={6} />;
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="space-y-"
      initialValues={{
        username: data?.[0]?.username,
        name_ka: data?.[0]?.name_ka,
        name_en: data?.[0]?.name_en,
        surname_ka: data?.[0]?.surname_ka,
        surname_en: data?.[0]?.surname_en,
        phone: data?.[0]?.phone,
      }}
    >
      <Form.Item
        label={
          <span className="font-semibold text-gray-700">
            {t("settings.nameKa.label")}
          </span>
        }
        name="name_ka"
        rules={[
          { required: true, message: t("settings.nameKa.requiredMessage") },
        ]}
      >
        <Input placeholder={t("settings.nameKa.placeholder")} />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">
            {t("settings.nameEn.label")}
          </span>
        }
        name="name_en"
        rules={[
          { required: true, message: t("settings.nameEn.requiredMessage") },
        ]}
      >
        <Input placeholder={t("settings.nameEn.placeholder")} />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">
            {t("settings.username.label")}
          </span>
        }
        name="username"
        rules={[
          { required: true, message: t("settings.username.requiredMessage") },
        ]}
      >
        <Input placeholder={t("settings.username.placeholder")} />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">
            {t("settings.surnameKa.label")}
          </span>
        }
        name="surname_ka"
        rules={[
          { required: true, message: t("settings.surnameKa.requiredMessage") },
        ]}
      >
        <Input placeholder={t("settings.surnameKa.placeholder")} />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">
            {t("settings.surnameEn.label")}
          </span>
        }
        name="surname_en"
        rules={[
          { required: true, message: t("settings.surnameEn.requiredMessage") },
        ]}
      >
        <Input placeholder={t("settings.surnameEn.placeholder")} />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">
            {t("settings.phone.label")}
          </span>
        }
        name="phone"
        rules={[
          { required: true, message: t("settings.phone.requiredMessage") },
        ]}
      >
        <Input placeholder={t("settings.phone.placeholder")} />
      </Form.Item>

      <Form.Item>
        <Button
          color="danger"
          htmlType="submit"
          variant="solid"
          className="w-full"
        >
          {t("settings.save")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProfile;
