import TravelWorldIcon from "&/base/travel-world";
import { container, navItem } from "./footer-cva";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { ADDITION_PATH, MAIN_PATH } from "@/routes/default-layout/index.enum";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
const Footer: React.FC = () => {
  const { t } = useTranslation();

  const user = useAtomValue(loginAtom);

  return (
    <footer
      className={`border-t border-gray-200 p-6 font-semibold dark:bg-gray-400`}
    >
      <div className={container()}>
        <div className="flex-shrink-0">
          <div className="mb-4 flex items-center">
            <TravelWorldIcon />
          </div>
          <p className="hidden text-sm leading-relaxed lg:block">
            {t("footer.info")}
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <h3 className="mb-4 font-semibold text-gray-800">Discover</h3>
            <ul className="flex flex-col space-y-2">
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
            <h3 className="mb-4 font-semibold text-gray-800">More</h3>
            <ul className="flex flex-col space-y-2">
              <NavLink to={ADDITION_PATH.GALLERY} className={navItem()}>
                {t("footer.gallery")}
              </NavLink>
              {!user && (
                <>
                  <NavLink to={MAIN_PATH.LOGIN} className={navItem()}>
                    {t("footer.login")}
                  </NavLink>
                  <NavLink to={MAIN_PATH.REGISTER} className={navItem()}>
                    {t("footer.register")}
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gray-800">Fun</h3>
            <ul className="flex flex-col space-y-2">
              <NavLink to={ADDITION_PATH.GAME} className={navItem()}>
                {t("footer.quiz")}
              </NavLink>
              <NavLink to={ADDITION_PATH.PERSONALITY} className={navItem()}>
                {t("footer.personality")}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
