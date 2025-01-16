import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { formatDate } from "@/lib/format-date";
import { TourCardProps } from "../../index.types";
import { Link } from "react-router";
import useCurrentLang from "@/i18n/current-lang";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { useGetProfile } from "@/react-query/query/account";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";

const TourCard: React.FC<TourCardProps> = ({ tour, onEdit, onDelete }) => {
  const currentLang = useCurrentLang();
  const galleryImg = tour.img
    ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${tour.img}`
    : "";
  const { oneDay, timePassed, fullDate } = formatDate(tour.created_at);

  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <Link to={`/${currentLang}/${MAIN_PATH.TOURS}/${tour.id}`}>
        <div className="relative">
          <img src={galleryImg} className="h-48 w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              {tour.city}
            </h2>
            <p className="text-lg text-white drop-shadow-lg">{tour.country}</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          {oneDay ? timePassed : fullDate}
        </p>
        {data && data[0].admin && (
          <div className="flex items-center space-x-3">
            <button
              onClick={onEdit}
              className="rounded-full bg-blue-100 p-2 transition-all hover:bg-blue-200"
            >
              <EditTwoTone className="text-xl" />
            </button>
            <button
              onClick={() => onDelete(tour.id, tour.img)}
              className="rounded-full bg-red-100 p-2 transition-all hover:bg-red-200"
            >
              <DeleteTwoTone className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourCard;
