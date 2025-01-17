import { formatDate } from "@/lib/format-date";
import {
  useDeleteFeedback,
  useUpdateFeedback,
} from "@/react-query/mutation/feedback";
import { useGetFeedBacksByTour } from "@/react-query/query/feedback";
import { FEEDBACK_QUERY_KEYS } from "@/react-query/query/feedback/enum";
import { loginAtom } from "@/store";
import "dayjs/locale/ka";
import "dayjs/locale/en";
import dayjs from "dayjs";
import { DeleteTwoTone, EditTwoTone, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, message, Pagination, Rate } from "antd";
import { useAtomValue } from "jotai";
import { useQueryClient } from "react-query";
import { useParams } from "react-router";
import useCurrentLang from "@/i18n/hooks/current-lang";
import usePagination from "@/hooks/pagination/usePagination";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { addFeedbackDefaultValues } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackShema } from "@/schema";
import { FeedbackTypes } from "../../index.types";
import { useState } from "react";
import { Feedback } from "@/supabase/feedback/index.types";
import Error from "@/components/error-message";

const Comments: React.FC = () => {
  const { id } = useParams();
  const user = useAtomValue(loginAtom);
  const queryClient = useQueryClient();
  const currentLang = useCurrentLang();
  dayjs.locale(currentLang);

  const { data: feedbacksTour } = useGetFeedBacksByTour(Number(id));
  const { mutate: deleteFeedback } = useDeleteFeedback();

  const {
    currentPage,
    paginatedData: paginatedFeedbacks,
    handlePageChange,
  } = usePagination({ data: feedbacksTour, pageSize: 3 });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackTypes>({
    defaultValues: addFeedbackDefaultValues,
    resolver: zodResolver(feedbackShema),
  });

  const [editableFeedbackId, setEditableFeedbackId] = useState<number | null>(
    null,
  );

  const handleDeleteFeedback = (feedbackId: number) => {
    deleteFeedback(
      { feedbackId, userId: user?.user.id },
      {
        onSuccess: () => {
          message.success("comment Deleted successfully");
          queryClient.invalidateQueries([
            FEEDBACK_QUERY_KEYS.FEEDBACKS_TOUR,
            Number(id),
          ]);
        },
      },
    );
  };

  const handleEditClick = (
    feedbackId: number,
    currentComment: string,
    currentStars: number,
  ) => {
    setEditableFeedbackId(feedbackId);
    reset({
      comment: currentComment,
      stars: currentStars,
    });
  };

  const cancelEditFeedback = () => setEditableFeedbackId(null);

  const { mutate: handleEditFeedBack } = useUpdateFeedback();

  const onSubmit: SubmitHandler<FeedbackTypes> = (data) => {
    const payload = {
      feedbackId: editableFeedbackId as number,
      comment: data.comment,
      stars: data.stars,
    };
    handleEditFeedBack(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          FEEDBACK_QUERY_KEYS.FEEDBACKS_TOUR,
          Number(id),
        ]);
        cancelEditFeedback();
      },
    });
  };

  const renderFeedback = (feedback: Feedback) => {
    const { profiles, stars, comment, user_id, created_at } = feedback || {};
    const { avatar_url, username } = profiles || {};
    const { oneDay, timePassed, fullDate } = formatDate(created_at);

    const isEditable = editableFeedbackId === feedback.id;
    const isUserFeedback = user?.user.id === user_id;

    return (
      <div
        key={created_at}
        className="flex flex-col items-start space-y-4 rounded-lg bg-white p-4 shadow-lg hover:shadow-xl sm:flex-row sm:space-x-4"
      >
        <Avatar
          size="large"
          src={avatar_url || undefined}
          icon={!avatar_url ? <UserOutlined /> : null}
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold sm:text-base">{username}</p>
            {isEditable ? (
              <Controller
                name="stars"
                control={control}
                render={({ field }) => (
                  <Rate {...field} allowHalf value={field.value} />
                )}
              />
            ) : (
              <Rate value={stars as number} disabled allowHalf />
            )}
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            {isEditable ? (
              <div className="w-full">
                <Controller
                  name="comment"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={2}
                      className="w-full rounded border border-gray-300 p-2"
                    />
                  )}
                />
                {errors.comment && <Error message={errors.comment.message} />}
              </div>
            ) : (
              <p className="text-sm text-gray-600 sm:text-base">{comment}</p>
            )}

            <div className="flex gap-3">
              {isUserFeedback && !isEditable && (
                <EditTwoTone
                  className="cursor-pointer"
                  twoToneColor="gray"
                  onClick={() =>
                    handleEditClick(
                      feedback.id,
                      comment as string,
                      stars as number,
                    )
                  }
                />
              )}
              {isUserFeedback && (
                <DeleteTwoTone
                  className="cursor-pointer"
                  twoToneColor="gray"
                  onClick={() => handleDeleteFeedback(feedback.id)}
                />
              )}
            </div>
          </div>

          {isEditable && (
            <div className="flex gap-3">
              <Button className="mt-2" onClick={cancelEditFeedback}>
                Cancel
              </Button>
              <Button
                color="danger"
                variant="solid"
                className="mt-2"
                type="primary"
                htmlType="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </div>
          )}

          <p className="mt-2 text-sm italic text-gray-500">
            {oneDay ? timePassed : fullDate}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 w-full max-w-4xl space-y-6">
      {feedbacksTour && paginatedFeedbacks.map(renderFeedback)}
      {feedbacksTour?.length !== 0 && (
        <Pagination
          showQuickJumper
          current={currentPage}
          total={feedbacksTour?.length || 0}
          pageSize={3}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Comments;
