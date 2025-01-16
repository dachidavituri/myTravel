import { useState } from "react";
import { TravelType } from "../components/index.types";
import Result from "../components/result";
import Questions from "../components/questions";

const PersonalityView: React.FC = () => {
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<TravelType[]>([]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {!quizCompleted ? (
        <Questions onAnswers={setAnswers} onComplete={setQuizCompleted} />
      ) : (
        <Result answers={answers} />
      )}
    </div>
  );
};

export default PersonalityView;
