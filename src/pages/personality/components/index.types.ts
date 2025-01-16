export type TravelType =
  | "cultural"
  | "historical"
  | "educational"
  | "luxury"
  | "adventurous";

interface AnswerOption {
  answerText: string;
  travelType: TravelType;
}

export interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

export interface ResultProps {
  answers: TravelType[];
}

export interface QuestionsProps {
  onAnswers: React.Dispatch<React.SetStateAction<TravelType[]>>;
  onComplete: React.Dispatch<React.SetStateAction<boolean>>;
}
