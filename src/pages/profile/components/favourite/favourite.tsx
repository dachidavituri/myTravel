import useCurrentLang from "@/i18n/hooks/current-lang";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";
import { Menu, Card } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ProfileProps } from "../index.types";
import { items } from "@/data";
import { useState } from "react";
import { TourData } from "@/supabase/favourite/index.types";
import { bookedTours } from "@/supabase/book/index.types";

const Favourite: React.FC<ProfileProps> = ({ tData, bData }) => {
  const currentLang = useCurrentLang();
  const { t } = useTranslation();

  const [selectedKey, setSelectedKey] = useState("1");
  const favouriteTours = tData || [];
  const bookedTours = bData || [];

  const handleMenuClick = (e: { key: string }) => {
    setSelectedKey(e.key);
  };

  const displayedTours: (TourData | bookedTours)[] =
    selectedKey === "1" ? favouriteTours : bookedTours;

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onClick={handleMenuClick}
        items={items}
      />

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayedTours.map((item) => {
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
                      {selectedKey === "2" && "booking_date" in item && (
                        <p className="mt-4">
                          {t("profile.travelDate")} {item.booking_date}
                        </p>
                      )}
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
