import { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import EditProfile from "#/settings/components/edit-profile";
import EditPassword from "#/settings/components/edit-password";
import SettingsLayout from "#/settings/components/layout";
import { useTranslation } from "react-i18next";

const SettingsView: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("profile");

  const { t } = useTranslation();

  const menuItems = [
    { key: "profile", icon: <UserOutlined />, label: t("settings.profile") },
    { key: "password", icon: <LockOutlined />, label: t("settings.password") },
  ];

  const renderForm = () => {
    if (activeMenu === "profile") {
      return <EditProfile />;
    } else if (activeMenu === "password") {
      return <EditPassword />;
    }
    return null;
  };

  return (
    <SettingsLayout
      activeMenu={activeMenu}
      setActiveMenu={setActiveMenu}
      menuItems={menuItems}
    >
      {renderForm()}
    </SettingsLayout>
  );
};

export default SettingsView;
