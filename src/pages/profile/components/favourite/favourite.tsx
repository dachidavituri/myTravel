import useCurrentLang from "@/i18n/hooks/current-lang";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { Menu, Card } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ProfileProps } from "../index.types";
import { items } from "@/data";

const Favourite: React.FC<ProfileProps> = ({ tData }) => {
  const currentLang = useCurrentLang();
  const { t } = useTranslation();

  const favouriteTours = tData || [];

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="dark:bg-black"
        items={items}
      />

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {favouriteTours.map((item) => {
          const galleryImg = item.tours.img
            ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${item.tours.img}`
            : "";
          return (
            <Link
              to={`/${currentLang}/${MAIN_PATH.TOURS}/${item.tours.id}`}
              key={item.tours.id}
            >
              <Card
                key={item.tours.id}
                hoverable
                cover={
                  <img
                    alt={item.tours.tourName}
                    src={galleryImg}
                    className="h-[250px]"
                  />
                }
                className="rounded-lg shadow-lg"
              >
                <Card.Meta
                  title={item.tours.tourName}
                  description={
                    <div>
                      <p>
                        {t("tour.city")}: {item.tours.city}
                      </p>
                      <p>
                        {t("tour.country")}: {item.tours.country}
                      </p>
                      <p>
                        {t("tour.price")}: ${item.tours.price}
                      </p>
                    </div>
                  }
                />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Favourite;
