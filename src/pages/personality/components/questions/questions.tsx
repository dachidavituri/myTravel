import { questions } from "@/data";
import React, { useState } from "react";
import { QuestionsProps, TravelType } from "../index.types";
import { useFillProfileType } from "@/react-query/mutation/account";
import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { FillProfileType } from "@/supabase/account/index.types";
import { useQueryClient } from "react-query";
import { TOURS_QUERY_KEYS } from "@/react-query/query/tours/enum";
import {
  buttonStyles,
  containerStyles,
  questionHeadingStyles,
} from "./questions-cva";

const Questions: React.FC<QuestionsProps> = ({
  onAnswers,
  onComplete,
  travelType,
}) => {
  const queryClient = useQueryClient();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const user = useAtomValue(loginAtom);

  const { mutate: handleTypeUpdate } = useFillProfileType();

  const handleUpdate = () => {
    if (user?.user.id && travelType) {
      const payload: FillProfileType = {
        tourType: travelType,
        userId: user.user.id,
      };
      handleTypeUpdate(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries([
            TOURS_QUERY_KEYS.RECCOMEND,
            payload.tourType,
          ]);
        },
      });
    }
  };

  const handleAnswerOptionClick = (travelType: TravelType): void => {
    onAnswers((prevAnswers) => [...prevAnswers, travelType]);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      handleUpdate();
      onComplete(true);
    }
  };

  return (
    <div className={containerStyles({ size: "lg" })}>
      <h2 className={questionHeadingStyles({ size: "lg" })}>
        {questions[currentQuestionIndex].questionText}
      </h2>
      <div className="space-y-6">
        {questions[currentQuestionIndex].answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option.travelType)}
            className={buttonStyles({ state: "default", size: "lg" })}
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
