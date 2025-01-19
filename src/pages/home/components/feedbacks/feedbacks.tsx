import { useGetFeedAllFeedbacks } from "@/react-query/query/feedback";
import { Avatar, Rate } from "antd";
import { sectionHeader, title } from "../gallery/gallery-cva";
import { UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const FeedBacks: React.FC = () => {
  const { t } = useTranslation();
  const { data: allFeedbacks } = useGetFeedAllFeedbacks();

  return (
    <>
      {allFeedbacks && (
        <div className="mt-8">
          <div className={sectionHeader()}>
            <span className="rounded-full bg-orange-300 px-4 py-2 font-bold text-orange-900">
              {t("home.customerFeed")}
            </span>
          </div>
          <h1 className={title()}>{t("home.seeFeed")}</h1>
          <div className="mt-10 flex flex-wrap gap-4 gap-y-10">
            {allFeedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="relative w-full rounded-lg border border-gray-200 bg-white px-2 pb-2 pt-6 shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="absolute left-1/2 top-[-35px] -translate-x-1/2 transform">
                  <Avatar
                    size="large"
                    src={feedback?.profiles?.avatar_url || undefined}
                    icon={!feedback?.profiles?.avatar_url && <UserOutlined />}
                    className="h-16 w-16 border-4"
                  />
                </div>

                <div className="mt-1 text-center">
                  <p className="text-lg font-semibold text-gray-900">
                    {feedback?.profiles?.username || "Anonymous"}
                  </p>
                </div>

                <div className="mt-4 text-center text-base text-gray-800">
                  {feedback?.comment || "No comment provided."}
                </div>

                <div className="mt-4 text-center">
                  <Rate
                    defaultValue={feedback?.stars || 0}
                    disabled
                    allowHalf
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBacks;
