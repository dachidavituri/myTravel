import { servicesData } from "@/data";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800 dark:text-white">
          {t("about.services.title")}
        </h2>
        <p className="mb-12 text-gray-600 dark:text-white">
          {t("about.services.subtitle")}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.key}
              className="rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-300"
            >
              <h3 className="mb-2 text-xl font-medium text-gray-800">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
