import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router";
import { buttonStyles, navItem } from "&/base/header/header-cva";
import { MenuProps } from "./menu.types";
import { ChangeLanguage } from "&/base/change-language";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import ProfileSection from "&/base/header/profile-section";

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();

  const user = useAtomValue(loginAtom);

  const navLinkClass = (isActive: boolean) => {
    return `${navItem({ isMenuOpen })} ${isActive ? "text-orange-600" : "text-gray-600"}`;
  };

  return (
    isMenuOpen && (
      <div className="shadow-md lg:hidden">
        <div className="flex gap-2 p-4">
          <ModeToggle />
          <ChangeLanguage />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {Object.entries(MAIN_PATH)
            .filter(([key]) => !["REGISTER", "LOGIN"].includes(key))
            .map(([key, path]) => (
              <NavLink
                key={key}
                to={path}
                className={({ isActive }) => navLinkClass(isActive)}
              >
                {t(`header.${key.toLowerCase()}`)}
              </NavLink>
            ))}
          <div className="flex gap-3">
            {!user && (
              <>
                <Link to={MAIN_PATH.REGISTER}>
                  <Button
                    className={buttonStyles({ register: true })}
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
