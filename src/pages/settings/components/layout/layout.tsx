import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { SettingsLayoutProps } from "../index.types";

const SettingsLayout: React.FC<SettingsLayoutProps> = ({
  activeMenu,
  setActiveMenu,
  menuItems,
  children,
}) => {
  const menuData = menuItems.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: item.label,
  }));

  return (
    <Layout className="min-h-screen bg-gray-100">
      <Sider
        width={160}
        className="hidden border-r bg-white shadow-md md:block"
        breakpoint="md"
        collapsedWidth="0"
      >
        <Menu
          mode="inline"
          selectedKeys={[activeMenu]}
          onClick={(e) => setActiveMenu(e.key)}
          items={menuData}
          className="h-full"
        />
      </Sider>

      <Layout>
        <Menu
          mode="horizontal"
          selectedKeys={[activeMenu]}
          onClick={(e) => setActiveMenu(e.key)}
          items={menuData}
          className="block bg-white shadow-md md:hidden"
        />
        <Layout.Content className="p-4 dark:bg-gray-300">
          <div className="mx-auto max-w-screen-lg rounded-lg border bg-white p-4 shadow-md">
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default SettingsLayout;
