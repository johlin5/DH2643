import { Container } from "@material-ui/core";
import { FETCH_ALL_QUIZES } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import DashboardView from "./DashboardView";
import Spinner from "../../components/Spinner";
export type Quiz = {
  id: string;
  title: string;
  author: string;
};

export type QuizData = { findAllQuiz: Quiz[] };

const DashboardPresenter: React.FC = () => {
  const { loading, error, data } = useQuery<QuizData>(FETCH_ALL_QUIZES);

  if (loading || !data) {
    return <Spinner />;
  }

  return (
    <DashboardView
      onPlay={() => {
        console.log("play");
      }}
      quizData={data}
    />
  );
};

export default DashboardPresenter;
