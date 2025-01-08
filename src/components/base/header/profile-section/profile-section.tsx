import { useLogOut } from "@/react-query/mutation/auth";
import type { MenuProps } from "antd";
import { Dropdown, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const ProfileSection: React.FC = () => {
  const { mutate: handleLogOut } = useLogOut();
  const { t } = useTranslation();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={"settings"}>{t("header.settings")}</Link>,
    },
    {
      key: "2",
      label: <Link to={"profile"}>{t("header.profile")}</Link>,
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
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </Space>
  );
};
export default ProfileSection;
