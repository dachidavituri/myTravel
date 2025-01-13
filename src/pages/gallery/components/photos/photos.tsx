import { useState } from "react";
import { useGetGalleryImages } from "@/react-query/query/gallery";
import { CloseOutlined } from "@ant-design/icons";
import {
  gridContainer,
  imageWrapper,
  image,
  modalWrapper,
  modalImageWrapper,
  modalImage,
  closeButton,
} from "./photos-cva";

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
      <div className={gridContainer()}>
        {data?.map((photo) => {
          const galleryImg = photo.image_url
            ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${photo.image_url}`
            : "";
          return (
            <div key={photo.id} className={imageWrapper()}>
              <img
                className={image()}
                src={galleryImg}
                alt="Gallery Image"
                onClick={() => handleImageClick(galleryImg)}
              />
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <div className={modalWrapper()} onClick={closeModal}>
          <div
            className={modalImageWrapper()}
            onClick={(e) => e.stopPropagation()}
          >
            <img className={modalImage()} src={selectedImage} alt="Selected" />
            <button className={closeButton()} onClick={closeModal}>
              <CloseOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
