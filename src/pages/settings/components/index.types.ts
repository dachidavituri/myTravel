import { ReactNode } from "react";
export interface MenuItem {
  key: string;
  icon: ReactNode;
  label: string;
}

export interface SettingsLayoutProps {
  activeMenu: string;
  setActiveMenu: (key: string) => void;
  menuItems: MenuItem[];
  children: ReactNode;
}
