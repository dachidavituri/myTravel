import Card from "./card";
import weatherImg from "!/reshot-icon-weather-EJPNZMV8U5.svg";
import EiffelImg from "!/reshot-icon-eiffel-tower-E6NB9JDQ5X.svg";
import { Link } from "react-router";
import useCurrentLang from "@/i18n/current-lang";
import { ADDITION_PATH, MAIN_PATH } from "@/routes/default-layout/index.enum";
import { useTranslation } from "react-i18next";
const Services: React.FC = () => {
  const currentLang = useCurrentLang();
  const { t } = useTranslation();
  return (
    <section className="mt-5 flex flex-col items-center gap-7 p-2 md:p-8 lg:flex-row">
      <div className="text-center lg:text-left">
        <h3 className="text-lg italic text-pink-600">{t("home.serve")}</h3>
        <h2 className="mt-2 text-3xl font-semibold text-gray-800 dark:text-white md:text-4xl">
          {t("home.offer")}
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        <Link to={`/${currentLang}/${ADDITION_PATH.WEATHER}`}>
          <Card
            icon={<img src={weatherImg} className="w-10" />}
            title="Calculate Weather"
            description={t("home.weatherDesc")}
          />
        </Link>
        <Link to={`/${currentLang}/${MAIN_PATH.TOURS}`}>
          <Card
            icon={<img src={EiffelImg} className="w-10" />}
            title="Best Tour Offers"
            description={t("home.tourDesc")}
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;
