import useCurrentLang from "@/i18n/current-lang";
import { useGetGalleryImages } from "@/react-query/query/gallery";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import { Button } from "antd";
import { Link } from "react-router";
import {
  galleryGrid,
  galleryImage,
  imageWrapper,
  sectionHeader,
  title,
} from "./gallery-cva";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
  const { data } = useGetGalleryImages();
  const photos = data?.slice(0, 5);
  const currentLang = useCurrentLang();
  const { t } = useTranslation();

  return (
    <div className="mt-3">
      <div className={sectionHeader()}>
        <span className="rounded-full bg-orange-300 px-4 py-2 font-bold text-orange-900">
          {t("home.gallery")}
        </span>
      </div>
      <h1 className={title()}> {t("home.visit")}</h1>
      <div className={galleryGrid()}>
        {photos?.map((photo) => {
          const galleryImg = photo.image_url
            ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${photo.image_url}`
            : "";
          return (
            <div key={photo.id} className={imageWrapper()}>
              <img
                className={galleryImage()}
                src={galleryImg}
                alt="Gallery Image"
              />
            </div>
          );
        })}
      </div>
      <Link to={`/${currentLang}/${ADDITION_PATH.GALLERY}`}>
        <Button className="mt-3">{t("home.moreGallery")}</Button>
      </Link>
    </div>
  );
};

export default Gallery;
