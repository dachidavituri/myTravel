import useCurrentLang from "@/i18n/current-lang";
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

const ProfileView: React.FC = () => {
  const { t } = useTranslation();
  const currentLang = useCurrentLang();
  const user = useAtomValue(loginAtom);
  const { data } = useGetFavouriteTours({ userId: user?.user.id ?? null });

  return (
    <div className="p-3">
      <div className="mx-auto mt-9 flex max-w-6xl flex-col gap-10 md:flex-row">
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg md:w-[65%]">
          <div className="h-24 bg-gradient-to-r from-orange-500 to-red-400"></div>
          <div className="-mt-16 flex flex-col items-center p-3">
            <Info />
            <Items tData={data} />
            <Link to={`/${currentLang}/${ADDITION_PATH.SETTINGS}`}>
              <Button variant="solid" color="danger" className="mt-5">
                {t("profile.editProfile")}
              </Button>
            </Link>
          </div>
        </div>
        <Leaderboard />
      </div>
      <Favourite tData={data} />
    </div>
  );
};

export default ProfileView;
