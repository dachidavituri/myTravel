import { useState } from "react";
import { useGetGalleryImages } from "@/react-query/query/gallery";
import { CloseOutlined } from "@ant-design/icons";

const Photos: React.FC = () => {
  const { data } = useGetGalleryImages();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="m-auto mt-4 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.map((photo) => {
          const galleryImg = photo.image_url
            ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${photo.image_url}`
            : "";
          return (
            <div key={photo.id} className="relative overflow-hidden rounded-lg">
              <img
                className="h-auto w-full transform cursor-pointer object-cover transition-transform duration-300 hover:scale-110"
                src={galleryImg}
                alt="Gallery Image"
                onClick={() => handleImageClick(galleryImg)}
              />
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              src={selectedImage}
              alt="Selected"
            />
            <button
              className="absolute right-0 top-0 p-2 text-2xl text-white"
              onClick={closeModal}
            >
              <CloseOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
