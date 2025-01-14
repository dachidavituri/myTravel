import { formatDate } from "@/lib/format-date";
import { useGetTours } from "@/react-query/query/tours";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import useCurrentLang from "@/i18n/current-lang";
import { useDeleteTour } from "@/react-query/mutation/tours";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
dayjs.extend(relativeTime);

const Tours: React.FC = () => {
  const currentLang = useCurrentLang();
  dayjs.locale(currentLang);
  const { data } = useGetTours();
  const { mutate: deleteTour } = useDeleteTour();

  const deleteTourHandler = (tourId: number, imgPath: string | null) => {
    deleteTour({
      tourId,
      imgPath,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((tour) => {
        const galleryImg = tour.img
          ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${tour.img}`
          : "";
        const { oneDay, timePassed, fullDate } = formatDate(tour.created_at);
        return (
          <div
            key={tour.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img src={galleryImg} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {tour.tourName}
              </h2>
              <div className="mt-4">
                <p className="text-gray-700">Price: ${tour.price}</p>
                <p className="text-gray-700">Duration: {tour.duration} days</p>
                <p className="text-gray-700">Type: {tour.type}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="dark:text-gray-600">
                  {oneDay ? timePassed : fullDate}
                </p>
                <div>
                  <button onClick={() => deleteTourHandler(tour.id, tour.img)}>
                    <EditTwoTone className="text-xl" />
                  </button>
                  <button onClick={() => deleteTourHandler(tour.id, tour.img)}>
                    <DeleteTwoTone className="ml-3 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
