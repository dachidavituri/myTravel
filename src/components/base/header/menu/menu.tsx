import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router";
import { buttonStyles, navItem } from "../header-cva";
import { MenuProps } from "./menu.types";
import { ChangeLanguage } from "../../chang-language";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  return (
    isMenuOpen && (
      <div className="lg:hidden  shadow-md">
        <div className="p-4 flex gap-2">
          <ModeToggle />
          <ChangeLanguage />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
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
          <Link to={MAIN_PATH.REGISTER}>
            <Button
              className={buttonStyles()}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.register")}
            </Button>
          </Link>
        </nav>
      </div>
    )
  );
};
export default Menu;
