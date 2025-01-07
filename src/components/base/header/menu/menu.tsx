import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router";
import { buttonStyles, navItem } from "../header-cva";
import { MenuProps } from "./menu.types";
import { ChangeLanguage } from "../../chang-language";
import { useTranslation } from "react-i18next";

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
          <NavLink to={"home"} className={navItem({ isMenuOpen })}>
            {t("header.home")}
          </NavLink>
          <NavLink to={"about"} className={navItem({ isMenuOpen })}>
            {t("header.about")}
          </NavLink>
          <NavLink to={"tours"} className={navItem({ isMenuOpen })}>
            {t("header.tours")}
          </NavLink>
          <NavLink to={"login"} className={navItem({ isMenuOpen })}>
            {t("header.login")}
          </NavLink>
          <Link to={"register"}>
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
