import { useGetProfile } from "@/react-query/query/account";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { ProfileProps } from "../index.types";
import { useTranslation } from "react-i18next";

const Items: React.FC<ProfileProps> = ({ tData, bData }) => {
  const { t } = useTranslation();

  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const points = data && data[0].points;

  return (
    <div className="mt-4 flex gap-8">
      <div className="text-center">
        <p className="text-xl font-bold text-black">{bData?.length}</p>
        <p className="text-sm text-gray-500">{t("profile.book")}</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold text-black">{tData?.length}</p>
        <p className="text-sm text-gray-500">{t("profile.favourite")}</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold text-black">{points}</p>
        <p className="text-sm text-gray-500">{t("profile.points")}</p>
      </div>
    </div>
  );
};
export default Items;
