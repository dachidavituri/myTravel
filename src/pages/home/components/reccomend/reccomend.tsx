import { useGetProfile } from "@/react-query/query/account";
import { useGetReccomendTour } from "@/react-query/query/tours";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { sectionHeader, title } from "../gallery/gallery-cva";
import { Link } from "react-router";
import useCurrentLang from "@/i18n/hooks/current-lang";
import { MAIN_PATH } from "@/routes/default-layout/index.enum";

const Reccomend: React.FC = () => {
  const currentLang = useCurrentLang();
  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const tourType = data?.[0]?.type ?? "";

  const { data: reccomendTour } = useGetReccomendTour(tourType);

  return (
    <>
      {reccomendTour?.length !== 0 && (
        <div className="mt-3 text-left">
          <div className={sectionHeader()}>
            <span className="rounded-full bg-orange-300 px-4 py-2 font-bold text-orange-900">
              Tours
            </span>
          </div>
          <h1 className={title()}>Recommendation Tours</h1>
          <div className="flex flex-wrap justify-start gap-6">
            {reccomendTour &&
              reccomendTour.map((tour) => {
                const galleryImg = tour.img
                  ? `${import.meta.env.VITE_SUPABASE_GALLERY_IMAGES}/${tour.img}`
                  : "";
                return (
                  <Link
                    key={tour.id}
                    to={`/${currentLang}/${MAIN_PATH.TOURS}/${tour.id}`}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                      <img
                        src={galleryImg}
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                        <h2 className="text-2xl font-bold text-white drop-shadow-lg sm:text-xl">
                          {tour.city}
                        </h2>
                        <p className="text-lg text-white drop-shadow-lg sm:text-base">
                          {tour.country}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Reccomend;
