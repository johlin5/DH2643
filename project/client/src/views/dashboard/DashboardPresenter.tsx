import { Container } from "@material-ui/core";
import { FETCH_ALL_QUIZES } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import DashboardView from "./DashboardView";
import Spinner from "../../components/Spinner";
import { useHistory } from "react-router-dom";
export type Quiz = {
  id: string;
  title: string;
  creator: string;
  description: string;
  upvotes: number;
};

export type QuizData = { findAllQuiz: Quiz[] };

const DashboardPresenter: React.FC = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery<QuizData>(FETCH_ALL_QUIZES);

  if (loading || !data) {
    return <Spinner />;
  }

  return (
    <DashboardView
      onPlay={(id) => {
        history.push(`/play/${id}`);
      }}
      quizData={data}
    />
  );
};

export default DashboardPresenter;
