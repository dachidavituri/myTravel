import { newPasswordSchema, profileSchema } from "@/schema";
import { ReactNode } from "react";
import { z } from "zod";

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

export type EditProfileForm = z.infer<typeof profileSchema>;

export type EditPasswordFormValues = z.infer<typeof newPasswordSchema>;
