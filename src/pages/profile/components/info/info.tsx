import useCurrentLang from "@/i18n/hooks/current-lang";
import InfoRow from "../info-row";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { InfoProps } from "../index.types";

const Info: React.FC<InfoProps> = ({ data }) => {
  const currentLang = useCurrentLang();

  const profile = data?.[0];
  const avatarUrl = profile?.avatar_url;
  const username = profile?.username;
  const name = currentLang === "ka" ? profile?.name_ka : profile?.name_en;
  const surname =
    currentLang === "ka" ? profile?.surname_ka : profile?.surname_en;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-24 w-24 rounded-full bg-white shadow-md">
        <Avatar
          size="large"
          src={data && avatarUrl ? avatarUrl : undefined}
          icon={!data || !avatarUrl ? <UserOutlined /> : null}
          className="h-full w-full"
        />
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
