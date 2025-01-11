import { QuizSummaryProps } from "../index.types";
import { Modal } from "antd";
import { useNavigate } from "react-router";
import useCurrentLang from "@/i18n/current-lang";
import { ADDITION_PATH } from "@/routes/default-layout/index.enum";
import { useFillProfilePoint } from "@/react-query/mutation/account";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { useQueryClient } from "react-query";
import { PROFILE_QUERY_KEYS } from "@/react-query/query/account/enum";
import { FillProfilePoints } from "@/supabase/account/index.types";
import { useTranslation } from "react-i18next";

const QuizSummary: React.FC<QuizSummaryProps> = ({
  score,
  questionLength,
  isModalOpen,
  setIsModalOpen,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentLang = useCurrentLang();
  const user = useAtomValue(loginAtom);
  const queryClient = useQueryClient();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { mutate: handlePointUpdate } = useFillProfilePoint();

  const handleUpdate = () => {
    if (user?.user.id) {
      const payload: FillProfilePoints = {
        points: score * 150,
        userId: user.user.id,
        quizCompleted: true,
      };
      handlePointUpdate(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries([
            PROFILE_QUERY_KEYS.INFO,
            user.user.id,
          ]);
          navigate(`/${currentLang}/${ADDITION_PATH.PROFILE}`);
        },
      });
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handleUpdate();
  };

  return (
    <Modal
      title="Result"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="mb-4 text-xl font-bold text-black">Quiz Completed!</p>
      <p className="text-lg text-black">
        Your score: {score} out of {questionLength}
      </p>
      <p className="mt-2">{t("quiz.checkPoints")}</p>
    </Modal>
  );
};

export default QuizSummary;
