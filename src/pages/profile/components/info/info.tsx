import useCurrentLang from "@/i18n/current-lang";
import { useGetProfile } from "@/react-query/query/account";
import { loginAtom } from "@/store";
import { useAtomValue } from "jotai";
import InfoRow from "../info-row";

const Info: React.FC = () => {
  const user = useAtomValue(loginAtom);
  const currentLang = useCurrentLang();

  const { data } = useGetProfile({
    id: user?.user.id || "",
    queryOptions: { enabled: Boolean(user?.user.id) },
  });

  const profile = data?.[0];
  const avatarUrl = profile?.avatar_url;
  const username = profile?.username;
  const name = currentLang === "ka" ? profile?.name_ka : profile?.name_en;
  const surname =
    currentLang === "ka" ? profile?.surname_ka : profile?.surname_en;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-24 w-24 rounded-full bg-white shadow-md">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`${username}'s avatar`}
            className="h-full w-full rounded-full"
          />
        )}
      </div>
      <h2 className="text-xl font-semibold text-black">{username}</h2>
      <div className="flex flex-col gap-3">
        <InfoRow label="Name" value={name} />
        <InfoRow label="Surname" value={surname} />
      </div>
    </div>
  );
};

export default Info;
