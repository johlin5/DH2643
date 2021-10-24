import { FIND_HISTORY } from "../../services/queries/History";
import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner";
import HistoryView from "./HistoryView";

export type History = {
  id: string;
  quizTitle: string;
  userId: string;
  score: number;
  maxScore: number;
  date: string;
};

export type HistoryData = { findHistory: History[] };

const HistoryPresenter: React.FC = () => {
  const { loading, error, data } = useQuery<HistoryData>(FIND_HISTORY);

  if (loading || !data) {
    return <Spinner />;
  }

  return <HistoryView history={data.findHistory} onClick={() => console.log("hej")} />;
};

export default HistoryPresenter;
