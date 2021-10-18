import GameView from "./GameView";
import { FETCH_QUIZ_BY_ID } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
type Question = {
  answers: { description: string; flag: boolean; id: string }[];
  question: string;
  id: string;
};

export type Quiz = {
  creator: string;
  id: string;
  title: string;
  upvotes: number;
  questions: Question[];
};

export type QuizData = { findQuizById: Quiz };

const GamePresenter: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<QuizData>(FETCH_QUIZ_BY_ID, {
    variables: { findQuizByIdId: id }
  });

  if (loading) {
    return <Spinner />;
  }

  return <GameView quiz={data?.findQuizById} />;
};

export default GamePresenter;
