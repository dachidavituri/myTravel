import useCurrentLang from "@/i18n/hooks/current-lang";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import { Button } from "antd";
import { Link } from "react-router";
import Items from "#/profile/components/items";
import Info from "#/profile/components/info";
import Leaderboard from "#/profile/components/leaderbord";
import { useTranslation } from "react-i18next";
import Favourite from "#/profile/components/favourite";
import { useGetFavouriteTours } from "@/react-query/query/favourite";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { useGetBookedTours } from "@/react-query/query/book";
import { useGetProfile } from "@/react-query/query/account";

const ProfileView: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const user = useAtomValue(loginAtom);

  const { data: profileData } = useGetProfile({
    id: user?.user.id || "",
    queryOptions: { enabled: Boolean(user?.user.id) },
  });

  const { data: favTours } = useGetFavouriteTours({
    userId: user?.user.id ?? null,
  });

  const { data: bookedTours } = useGetBookedTours({
    userId: user?.user.id ?? null,
  });

  return (
    <div className="p-3">
      <div className="mx-auto mt-9 flex max-w-6xl flex-col gap-10 md:flex-row">
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg md:w-[65%]">
          <div className="h-24 bg-gradient-to-r from-orange-500 to-red-400"></div>
          <div className="-mt-16 flex flex-col items-center p-3">
            <Info data={profileData} />
            <Items tData={favTours} bData={bookedTours} data={profileData} />
            <Link to={`/${currentLang}/${ADDITION_PATH.SETTINGS}`}>
              <Button variant="solid" color="danger" className="mt-5">
                {t("profile.editProfile")}
              </Button>
            </Link>
          </div>
        </div>
        <Leaderboard />
      </div>
      <Favourite tData={favTours} bData={bookedTours} />
    </div>
  );
};

export default ProfileView;
