import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router";
import { buttonStyles, navItem } from "../header-cva";
import { MenuProps } from "./menu.types";
import { ChangeLanguage } from "../../chang-language";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import ProfileSection from "../profile-section";

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const user = useAtomValue(loginAtom);
  return (
    isMenuOpen && (
      <div className="lg:hidden  shadow-md">
        <div className="p-4 flex gap-2">
          <ModeToggle />
          <ChangeLanguage />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {Object.entries(MAIN_PATH)
            .filter(([key]) => !["REGISTER", "GALLERY", "LOGIN"].includes(key))
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
          <div className="flex gap-3">
            {!user && (
              <>
                <Link to={MAIN_PATH.REGISTER}>
                  <Button
                    className={buttonStyles()}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("header.register")}
                  </Button>
                </Link>
                <Link to={MAIN_PATH.LOGIN}>
                  <Button
                    className={buttonStyles()}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("header.login")}
                  </Button>
                </Link>{" "}
              </>
            )}
            {user && <ProfileSection />}
          </div>
        </nav>
      </div>
    )
  );
};
export default Menu;
