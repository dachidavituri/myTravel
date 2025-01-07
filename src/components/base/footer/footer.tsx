import { useTheme } from "@/components/theme/theme-provider";
import TravelWorldIcon from "../travel-world";
import { container, navItem } from "./footer-cva";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
const Footer: React.FC = () => {
  const { theme } = useTheme();
  const footerBgColor = theme === "dark" ? "bg-gray-400" : "bg-white";
  const { t } = useTranslation();
  return (
    <footer
      className={`${footerBgColor} border-t border-gray-200 p-6 font-semibold`}
    >
      <div className={container()}>
        <div className="flex-shrink-0">
          <div className="flex items-center mb-4">
            <TravelWorldIcon />
          </div>
          <p className="text-sm leading-relaxed">{t("footer.info")}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Discover</h3>
            <ul className="space-y-2 flex flex-col">
              <NavLink to={MAIN_PATH.HOME} className={navItem()}>
                {t("footer.home")}
              </NavLink>
              <NavLink to={MAIN_PATH.ABOUT} className={navItem()}>
                {t("footer.about")}
              </NavLink>
              <NavLink to={MAIN_PATH.TOURS} className={navItem()}>
                {t("footer.tours")}
              </NavLink>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">More</h3>
            <ul className="space-y-2 flex flex-col">
              <NavLink to={MAIN_PATH.GALLERY} className={navItem()}>
                {t("footer.gallery")}
              </NavLink>
              <NavLink to={MAIN_PATH.LOGIN} className={navItem()}>
                {t("footer.login")}
              </NavLink>
              <NavLink to={MAIN_PATH.REGISTER} className={navItem()}>
                {t("footer.register")}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
