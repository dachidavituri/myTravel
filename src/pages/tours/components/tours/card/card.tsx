import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { formatDate } from "@/lib/format-date";
import { TourCardProps } from "../../index.types";

const TourCard: React.FC<TourCardProps> = ({ tour, onEdit, onDelete }) => {
  const galleryImg = tour.img
    ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${tour.img}`
    : "";
  const { oneDay, timePassed, fullDate } = formatDate(tour.created_at);

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={galleryImg} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{tour.tourName}</h2>
        <div className="mt-4">
          <p className="text-gray-700">Price: ${tour.price}</p>
          <p className="text-gray-700">Duration: {tour.duration} days</p>
          <p className="text-gray-700">Type: {tour.type}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="dark:text-gray-600">{oneDay ? timePassed : fullDate}</p>
          <div>
            <button onClick={onEdit}>
              <EditTwoTone className="text-xl" />
            </button>
            <button onClick={() => onDelete(tour.id, tour.img)}>
              <DeleteTwoTone className="ml-3 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
