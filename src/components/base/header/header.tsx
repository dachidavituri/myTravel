import React, { useState } from "react";
import TravelWorldIcon from "../travel-world";
import { navItem, buttonStyles } from "./header-cva";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useTheme } from "@/components/theme/theme-provider";
import { Link, NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import Menu from "./menu";
import { ChangeLanguage } from "../chang-language";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { t } = useTranslation();
  const { theme } = useTheme();
  const headerBgColor = theme == "dark" ? "bg-gray-400" : "bg-white";
  return (
    <header className={`${headerBgColor} shadow-md font-semibold`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center space-x-2">
          <TravelWorldIcon />
        </div>
        <nav className="hidden lg:flex space-x-8">
          <NavLink to={MAIN_PATH.HOME} className={navItem({ isMenuOpen })}>
            {t("header.home")}
          </NavLink>
          <NavLink to={MAIN_PATH.ABOUT} className={navItem({ isMenuOpen })}>
            {t("header.about")}
          </NavLink>
          <NavLink to={MAIN_PATH.TOURS} className={navItem({ isMenuOpen })}>
            {t("header.tours")}
          </NavLink>
          <NavLink to={MAIN_PATH.LOGIN} className={navItem({ isMenuOpen })}>
            {t("header.login")}
          </NavLink>
        </nav>
        <div className="hidden lg:block">
          <Link to={MAIN_PATH.REGISTER}>
            <Button className={buttonStyles()}>{t("header.register")}</Button>
          </Link>
        </div>
        <div className="hidden lg:flex gap-2">
          <ModeToggle />
          <ChangeLanguage />
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none hover:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
