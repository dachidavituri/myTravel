import { useGetProfile } from "@/react-query/query/account";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import { ProfileProps } from "../index.types";

const Items: React.FC<ProfileProps> = ({ tData }) => {
  const user = useAtomValue(loginAtom);

  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });

  const points = data && data[0].points;

  return (
    <div className="mt-4 flex gap-8">
      <div className="text-center">
        <p className="text-xl font-bold">2</p>
        <p className="text-sm text-gray-500">Booked</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">{tData?.length}</p>
        <p className="text-sm text-gray-500">Favourite</p>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">{points}</p>
        <p className="text-sm text-gray-500">Points</p>
      </div>
    </div>
  );
};
export default Items;
