import { useGetAllProfile } from "@/react-query/query/account";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Leaderboard: React.FC = () => {
  const { data: profileList } = useGetAllProfile();

  const sortedProfiles =
    profileList
      ?.sort((a, b) => (b.points || 0) - (a.points || 0))
      .slice(0, 3) || [];

  return (
    <div className="w-full rounded-lg bg-white shadow-lg md:w-[35%]">
      <div className="rounded-lg bg-gradient-to-r from-orange-200 to-orange-600 p-5 text-center text-white">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
      </div>
      <div className="p-5">
        {sortedProfiles.map((profile, index) => {
          const isEvenRow = index % 2 === 0;
          const bgColor = isEvenRow ? "bg-gray-100" : "bg-white";
          const avatarIcon = !profile?.avatar_url ? <UserOutlined /> : null;
          const avatarSrc = profile?.avatar_url || undefined;
          const username = profile?.username || "Unknown User";
          const quizStatus = profile?.quiz_completed
            ? "Quiz Completed"
            : "Quiz Pending";
          const points = profile?.points || 0;

          return (
            <div
              key={profile.id}
              className={`flex items-center justify-between rounded-lg p-3 ${bgColor}`}
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white shadow-md">
                  <Avatar
                    size="large"
                    src={avatarSrc}
                    icon={avatarIcon}
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-black">{username}</p>
                  <p className="text-sm text-gray-500">{quizStatus}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-blue-600">{points} pts</p>
                {profile?.admin && (
                  <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                    Admin
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
