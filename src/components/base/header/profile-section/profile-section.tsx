import { useLogOut } from "@/react-query/mutation/auth";
import type { MenuProps } from "antd";
import { Dropdown, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";

const ProfileSection: React.FC = () => {
  const { mutate: handleLogOut } = useLogOut();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={"settings"}>პარამეტრები</Link>,
    },
    {
      key: "2",
      label: <Link to={"profile"}>პროფილი</Link>,
    },
    {
      key: "3",
      label: <p onClick={() => handleLogOut()}>Log out</p>,
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
