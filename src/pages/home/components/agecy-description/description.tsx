import { useTranslation } from "react-i18next";

const AgencyDescription: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center md:w-1/2 md:text-left">
      <div className="mb-4 flex items-center justify-center md:justify-start">
        <span className="rounded-full bg-orange-300 px-4 py-2 font-bold text-orange-900">
          {t("home.know")}
        </span>
        <span className="ml-2 text-2xl">🌍</span>
      </div>
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">
        {t("home.travelling")}{" "}
        <span className="text-orange-500">{t("home.memories")}</span>
      </h1>
      <p className="mt-5 text-gray-600 dark:text-white">
        {t("home.description")}
      </p>
    </div>
  );
};
export default AgencyDescription;
