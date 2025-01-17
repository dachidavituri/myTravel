import { formatDate } from "@/lib/format-date";
import { useDeleteFeedback } from "@/react-query/mutation/feedback";
import { useGetFeedBacksByTour } from "@/react-query/query/feedback";
import { FEEDBACK_QUERY_KEYS } from "@/react-query/query/feedback/enum";
import { loginAtom } from "@/store";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import dayjs from "dayjs";
import { DeleteTwoTone, UserOutlined } from "@ant-design/icons";
import { Avatar, message, Rate } from "antd";
import { useAtomValue } from "jotai";
import { useQueryClient } from "react-query";
import { useParams } from "react-router";
import useCurrentLang from "@/i18n/current-lang";

const Comments: React.FC = () => {
  const { id } = useParams();
  const user = useAtomValue(loginAtom);
  const queryClient = useQueryClient();
  const currentLang = useCurrentLang();
  dayjs.locale(currentLang);

  const { data: feedbacksTour } = useGetFeedBacksByTour(Number(id));
  console.log(feedbacksTour);
  const { mutate: deleteFeedback } = useDeleteFeedback();

  const handleDeleteFeedback = (feedbackId: number) => {
    const payload = {
      feedbackId,
      userId: user?.user.id,
    };
    deleteFeedback(payload, {
      onSuccess: () => {
        message.success("Comment Deleted successfully");
        queryClient.invalidateQueries([FEEDBACK_QUERY_KEYS.FEEDBACKS_TOUR]);
      },
    });
  };

  return (
    <div className="mt-8 w-full max-w-4xl space-y-6">
      {feedbacksTour &&
        feedbacksTour.map((feedback) => {
          const { profiles, stars, comment, user_id, created_at } =
            feedback || {};
          const { avatar_url, username } = profiles || {};
          const { oneDay, timePassed, fullDate } = formatDate(
            feedback.created_at,
          );

          return (
            <div
              key={created_at}
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-4 shadow-lg transition-all hover:shadow-xl sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <Avatar
                size="large"
                src={avatar_url || undefined}
                icon={!avatar_url ? <UserOutlined /> : null}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold sm:text-base">
                    {username}
                  </p>
                  <Rate defaultValue={stars as number} disabled allowHalf />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm text-gray-600 sm:text-base">
                    {comment}
                  </p>
                  <div>
                    {user?.user.id === user_id && (
                      <DeleteTwoTone
                        className="cursor-pointer"
                        twoToneColor="gray"
                        onClick={() => handleDeleteFeedback(feedback.id)}
                      />
                    )}
                  </div>
                </div>
                <p className="mt-2 justify-self-end text-sm italic text-gray-500">
                  {oneDay ? timePassed : fullDate}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
