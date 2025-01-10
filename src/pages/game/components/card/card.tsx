import React, { useEffect } from "react";
import { message } from "antd";
import { QuestionCardProps } from "../index.types";
import { gameButtonStyles } from "./card-cva";

const QuestionCard: React.FC<QuestionCardProps> = ({
  country,
  options,
  selectedAnswer,
  isCorrect,
  onAnswerClick,
}) => {
  useEffect(() => {
    if (selectedAnswer !== null) {
      if (isCorrect) {
        message.success("Great job! 🎉 You guessed the country correctly!");
      } else {
        message.error(
          `Oops! ❌ The correct country was ${country}. Try again next time!`,
        );
      }
    }
  }, [selectedAnswer, isCorrect, country]);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-white">
        Guess the Country! (Question)
      </h1>

      <div className="mb-6 mt-9 flex flex-col items-center justify-center gap-3 md:flex-row">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerClick(option)}
            className={gameButtonStyles({
              selected:
                selectedAnswer === option
                  ? option === country
                    ? "correct"
                    : "incorrect"
                  : "default",
            })}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
