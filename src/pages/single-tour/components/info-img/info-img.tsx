import { TourProps } from "../index.types";

const InfoImg: React.FC<TourProps> = ({ detailTour }) => {
  const galleryImg = `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${detailTour.img}`;
  return (
    <div className="relative">
      <img src={galleryImg} alt="Tour" className="h-80 w-full object-cover" />
      <div className="absolute left-4 top-4 rounded-md bg-orange-600 bg-opacity-75 px-3 py-1 text-white shadow-lg">
        {detailTour.type}
      </div>
    </div>
  );
};
export default InfoImg;
