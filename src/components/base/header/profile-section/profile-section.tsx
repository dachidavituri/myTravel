import { useLogOut } from "@/react-query/mutation/auth";
import type { MenuProps } from "antd";
import { Dropdown, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import { useGetProfile } from "@/react-query/query/account";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";

const ProfileSection: React.FC = () => {
  const { mutate: handleLogOut } = useLogOut();

  const { t } = useTranslation();

  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={ADDITION_PATH.SETTINGS}>{t("header.settings")}</Link>,
    },
    {
      key: "2",
      label: <Link to={ADDITION_PATH.PROFILE}>{t("header.profile")}</Link>,
    },
    {
      key: "3",
      label: <p onClick={() => handleLogOut()}>{t("header.logout")}</p>,
    },
  ];

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Avatar
            size="large"
            src={data && data[0]?.avatar_url ? data[0].avatar_url : undefined}
            icon={!data || !data[0]?.avatar_url ? <UserOutlined /> : null}
            style={{ border: "3px solid black" }}
          />
        </Dropdown>
      </Space>
    </Space>
  );
};
export default ProfileSection;
