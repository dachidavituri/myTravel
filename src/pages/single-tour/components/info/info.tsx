import { useTranslation } from "react-i18next";
import { TourProps } from "../index.types";
import { formatDate } from "@/lib/format-date";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import dayjs from "dayjs";
import useCurrentLang from "@/i18n/current-lang";

const Info: React.FC<TourProps> = ({ detailTour }) => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  dayjs.locale(currentLang);
  const { oneDay, timePassed, fullDate } = formatDate(detailTour.created_at);
  return (
    <>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900">
        {detailTour.tourName}
      </h1>
      <p className="mb-6 leading-relaxed text-gray-700">
        {detailTour.description}
      </p>
      <div className="mb-6 grid grid-cols-1 gap-4 text-sm text-gray-800 md:grid-cols-2">
        <div>
          <span className="font-semibold">{t("detail.country")}</span>{" "}
          {detailTour.country}
        </div>
        <div>
          <span className="font-semibold">{t("detail.city")}</span>{" "}
          {detailTour.city}
        </div>
        <div>
          <span className="font-semibold">{t("detail.location")}</span>{" "}
          {detailTour.location}
        </div>
        <div>
          <span className="font-semibold">{t("detail.airport")}</span>{" "}
          {detailTour.airport}
        </div>
        <div>
          <span className="font-semibold">{t("detail.hotel")}</span>{" "}
          {detailTour.hotel}
        </div>
        <div>
          <span className="font-semibold">{t("detail.duration")}</span>{" "}
          {detailTour.duration} {t("detail.days")}
        </div>
        <p className="mb-6 text-sm italic text-gray-500">
          Published: {oneDay ? timePassed : fullDate}
        </p>
      </div>
    </>
  );
};
export default Info;
