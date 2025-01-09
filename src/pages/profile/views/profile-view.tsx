import useCurrentLang from "@/i18n/current-lang";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import { Button } from "antd";
import { Link } from "react-router";
import Items from "#/profile/components/items";
import Info from "#/profile/components/info";

const ProfileView: React.FC = () => {
  const currentLang = useCurrentLang();

  return (
    <div className="mx-auto mt-9 max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="h-24 bg-gradient-to-r from-orange-500 to-red-400"></div>
      <div className="-mt-16 flex flex-col items-center p-3">
        <Info />
        <Items />
        <Link to={`/${currentLang}/${ADDITION_PATH.SETTINGS}`}>
          <Button variant="solid" color="danger" className="mt-5">
            Edit profile
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ProfileView;
