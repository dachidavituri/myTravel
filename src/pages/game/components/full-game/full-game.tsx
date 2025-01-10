import { countryNames } from "@/data";
import { useGetCountry } from "@/react-query/query/quiz";
import { useState, useEffect } from "react";
import QuestionCard from "../card";
import QuizControl from "../control";
import QuestionImage from "../image";
import QuizSummary from "../summary";

const FullGame: React.FC = () => {
  const [questions, setQuestions] = useState<
    {
      country: string;
      options: string[];
    }[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const generateQuestions = () => {
      const availableCountries = [...countryNames];
      const questionSet = Array.from({ length: 5 }, () => {
        const randomIndex = Math.floor(
          Math.random() * availableCountries.length,
        );
        const selectedCountry = availableCountries.splice(randomIndex, 1)[0];

        const shuffledOptions = [...countryNames]
          .filter((name) => name !== selectedCountry)
          .sort(() => Math.random() - 0.5)
          .slice(0, 2);

        const options = [selectedCountry, ...shuffledOptions].sort(
          () => Math.random() - 0.5,
        );

        return { country: selectedCountry, options };
      });
      setQuestions(questionSet);
    };

    generateQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex] || null;

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion?.country);
    setShowNext(true);
    if (answer === currentQuestion?.country) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowNext(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
    showModal();
  };

  const { data: countriesData } = useGetCountry(
    currentQuestion?.country || null,
  );

  if (!currentQuestion) return <p>Loading questions...</p>;

  return (
    <div className="min-h-screen p-3">
      <div className="m-2 mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center rounded-lg px-8 py-12 shadow-2xl">
        {countriesData && (
          <QuestionImage
            flagUrl={countriesData[0].flags.png}
            selectedAnswer={selectedAnswer}
          />
        )}
        <QuestionCard
          country={currentQuestion.country}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          isCorrect={isCorrect}
          onAnswerClick={handleAnswerClick}
        />

        <QuizControl
          showNext={showNext}
          isLastQuestion={currentQuestionIndex === 4}
          onNextQuestion={handleNextQuestion}
          onFinishQuiz={handleFinishQuiz}
        />
        {quizCompleted && (
          <QuizSummary
            score={score}
            questionLength={questions.length}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
};
export default FullGame;
