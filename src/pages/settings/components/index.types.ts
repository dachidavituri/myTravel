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

export interface EditProfileFormValues {
  username: string;
  name_ka: string;
  name_en: string;
  surname_ka: string;
  surname_en: string;
  phone: string;
  avatar_url: string;
}

export interface EditPasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
