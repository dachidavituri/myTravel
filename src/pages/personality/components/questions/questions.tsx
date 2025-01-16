import { questions } from "@/data";
import React, { useState } from "react";
import { QuestionsProps, TravelType } from "../index.types";

const Questions: React.FC<QuestionsProps> = ({ onAnswers, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const handleAnswerOptionClick = (travelType: TravelType): void => {
    onAnswers((prevAnswers) => [...prevAnswers, travelType]);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      onComplete(true);
    }
  };
  return (
    <div className="w-full rounded-lg bg-white p-8 shadow-xl sm:w-96 lg:w-1/2 xl:w-1/3">
      <h2 className="mb-8 text-center text-4xl font-semibold text-black sm:text-3xl">
        {questions[currentQuestionIndex].questionText}
      </h2>
      <div className="space-y-6">
        {questions[currentQuestionIndex].answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option.travelType)}
            className="w-full transform rounded-lg bg-gray-200 p-5 text-left text-lg text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-300 focus:outline-none sm:text-base"
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Questions;
