import React from "react";
import { QuizControlProps } from "../index.types";
import { Button } from "antd";

const QuizControl: React.FC<QuizControlProps> = ({
  showNext,
  isLastQuestion,
  onNextQuestion,
  onFinishQuiz,
}) => {
  return (
    <div className="mt-6">
      {showNext && !isLastQuestion && (
        <Button
          onClick={onNextQuestion}
          variant="solid"
          color="danger"
          className="font-semibold"
        >
          Next Question
        </Button>
      )}

      {isLastQuestion && showNext && (
        <Button onClick={onFinishQuiz} variant="solid" color="cyan">
          Finish Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
