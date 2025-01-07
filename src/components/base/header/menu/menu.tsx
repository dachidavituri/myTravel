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
          {Object.entries(MAIN_PATH)
            .filter(([key]) => !["REGISTER", "GALLERY"].includes(key))
            .map(([key, path]) => (
              <NavLink
                key={key}
                to={path}
                className={({ isActive }) =>
                  `${navItem({ isMenuOpen })} ${isActive ? "text-orange-500" : "text-gray-600"}`
                }
              >
                {t(`header.${key.toLowerCase()}`)}
              </NavLink>
            ))}
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
