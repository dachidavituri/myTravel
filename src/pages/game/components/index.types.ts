import { Dispatch, SetStateAction } from "react";

export interface QuestionCardProps {
  country: string;
  options: string[];
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  onAnswerClick: (answer: string) => void;
}
export interface QuestionImageProps {
  flagUrl: string;
  selectedAnswer: string | null;
}
export interface QuizControlProps {
  showNext: boolean;
  isLastQuestion: boolean;
  onNextQuestion: () => void;
  onFinishQuiz: () => void;
}
export interface QuizSummaryProps {
  score: number;
  questionLength: number;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
