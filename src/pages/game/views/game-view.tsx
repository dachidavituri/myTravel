import { useAtomValue } from "jotai";
import { loginAtom } from "@/store";
import { useGetProfile } from "@/react-query/query/account";
import FullGame from "#/game/components/full-game";
import QuizCompleted from "#/game/components/quiz-complete";

const GameView: React.FC = () => {
  const user = useAtomValue(loginAtom);
  const { data } = useGetProfile({
    id: user?.user.id ?? "",
    queryOptions: { enabled: !!user?.user.id },
  });
  if (data && data[0].quiz_completed) {
    return <QuizCompleted />;
  }
  return <FullGame />;
};

export default GameView;
