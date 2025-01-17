import Error from "@/components/error-message";
import { feedbackShema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { FeedbackTypes } from "../../index.types";
import { addFeedbackDefaultValues } from "@/data";
import { useAddFeedback } from "@/react-query/mutation/feedback";
import { useParams } from "react-router";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { useQueryClient } from "react-query";
import { FEEDBACK_QUERY_KEYS } from "@/react-query/query/feedback/enum";

const Add: React.FC = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const user = useAtomValue(loginAtom);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FeedbackTypes>({
    resolver: zodResolver(feedbackShema),
    defaultValues: addFeedbackDefaultValues,
  });

  const { mutate: addFeedback } = useAddFeedback();

  const onSubmit: SubmitHandler<FeedbackTypes> = (data) => {
    const payload = {
      ...data,
      userId: user?.user.id,
      tourId: Number(id),
    };

    addFeedback(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          FEEDBACK_QUERY_KEYS.FEEDBACKS_TOUR,
          payload.tourId,
        ]);
        message.success("Commnet add successfully");
        reset();
      },
    });
  };

  return (
    <div className="mt-8 w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800">Add Your Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name="comment"
            render={({ field }) => (
              <TextArea {...field} placeholder="Add Comment" />
            )}
          />
          {errors.comment && <Error message={errors.comment.message} />}
        </div>
        <div className="mt-3">
          <Controller
            control={control}
            name="stars"
            render={({ field }) => <Rate {...field} allowHalf />}
          />
          {errors.stars && <Error message={errors.stars.message} />}
        </div>
        <Button
          type="primary"
          className="mt-4"
          htmlType="submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Submitting... " : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
};
export default Add;
