import { useTranslation } from "react-i18next";
import { TourProps } from "../index.types";
import { formatDate } from "@/lib/format-date";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import dayjs from "dayjs";
import useCurrentLang from "@/i18n/hooks/current-lang";
import { HeartTwoTone } from "@ant-design/icons";
import {
  useAddToFavourite,
  useRemoveFromFavourite,
} from "@/react-query/mutation/favourite";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { useCheckFavourite } from "@/react-query/query/favourite";
import { useQueryClient } from "react-query";
import { FAVORUITE_QUERY_KEYS } from "@/react-query/query/favourite/enum";

const Info: React.FC<TourProps> = ({ detailTour }) => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const queryClient = useQueryClient();

  const user = useAtomValue(loginAtom);

  dayjs.locale(currentLang);
  const { oneDay, timePassed, fullDate } = formatDate(detailTour.created_at);

  const { mutate: addTourFav } = useAddToFavourite();

  const { mutate: removeTourFav } = useRemoveFromFavourite();

  const { data: isFavorited } = useCheckFavourite({
    userId: user?.user.id as string,
    tourId: detailTour.id,
  });

  const handleAddTourFav = () => {
    if (user && detailTour.id) {
      addTourFav(
        { userId: user.user.id, tourId: detailTour.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              FAVORUITE_QUERY_KEYS.CHECK_FAVOURITE,
            ]);
          },
        },
      );
    }
  };

  const handleRemoveTourFav = () => {
    if (user && detailTour.id) {
      removeTourFav(
        { userId: user.user.id, tourId: detailTour.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              FAVORUITE_QUERY_KEYS.CHECK_FAVOURITE,
            ]);
          },
        },
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900">
          {detailTour.tourName}
        </h1>
        <HeartTwoTone
          twoToneColor={isFavorited ? "red" : "transparent"}
          className="transform cursor-pointer text-2xl transition-transform duration-300 ease-in-out hover:scale-110 active:scale-100"
          onClick={isFavorited ? handleRemoveTourFav : handleAddTourFav}
        />
      </div>
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
