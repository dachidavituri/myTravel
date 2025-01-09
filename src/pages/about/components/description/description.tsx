import NatureIsland from "!/Phi+Phi+Island+Thailand.jpg";
import { useTranslation } from "react-i18next";

const Description: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">
            {t("about.description.whoWeAre.title")}
          </h2>
          <p className="mb-8 text-gray-600 dark:text-white">
            {t("about.description.whoWeAre.content")}
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">
            {t("about.description.ourMission.title")}
          </h2>
          <p className="text-gray-600 dark:text-white">
            {t("about.description.ourMission.content")}
          </p>
        </div>
        <div>
          <img
            src={NatureIsland}
            alt="Travel Destination"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Description;
