import React from "react";
import { QuizControlProps } from "../index.types";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const QuizControl: React.FC<QuizControlProps> = ({
  showNext,
  isLastQuestion,
  onNextQuestion,
  onFinishQuiz,
}) => {
  const { t } = useTranslation();
  return (
    <div className="mt-6">
      {showNext && !isLastQuestion && (
        <Button
          onClick={onNextQuestion}
          variant="solid"
          color="danger"
          className="font-semibold"
        >
          {t("quiz.next")}
        </Button>
      )}

      {isLastQuestion && showNext && (
        <Button onClick={onFinishQuiz} variant="solid" color="cyan">
          {t("quiz.finish")}
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
