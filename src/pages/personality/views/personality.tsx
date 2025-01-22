import { useState } from "react";
import { TravelType } from "#/personality/components/index.types";
import Result from "#/personality/components/result";
import Questions from "#/personality/components/questions";

const PersonalityView: React.FC = () => {
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<TravelType[]>([]);

  const calculateTravelType = (): TravelType | undefined => {
    const travelTypeCounts = answers.reduce(
      (acc, travelType) => {
        acc[travelType] = (acc[travelType] || 0) + 1;
        return acc;
      },
      {} as Record<TravelType, number>,
    );
    const maxCount = Math.max(...Object.values(travelTypeCounts));
    return Object.keys(travelTypeCounts).find(
      (key) => travelTypeCounts[key as TravelType] === maxCount,
    ) as TravelType | undefined;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      {!quizCompleted ? (
        <Questions
          onAnswers={setAnswers}
          onComplete={setQuizCompleted}
          travelType={calculateTravelType()}
        />
      ) : (
        <Result travelType={calculateTravelType()} />
      )}
    </div>
  );
};

export default PersonalityView;
