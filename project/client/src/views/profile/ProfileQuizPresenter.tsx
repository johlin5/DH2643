import ProfileView from "./ProfileView";
import { FECTH_BY_CREATOR } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import { accountNameAtom } from "../../atoms/account";
import { useRecoilValue } from "recoil";
import Spinner from "../../components/Spinner";
import ProfileQuizView from "./ProfileQuizView";
import { useHistory } from "react-router-dom";
export type Quiz = {
  id: string;
  title: string;
  creator: string;
  description: string;
  upvotes: number;
};

export type QuizData = { findQuizByCreator: Quiz[] };

const ProfileQuizPresenter: React.FC = () => {
  const accountName = useRecoilValue(accountNameAtom);
  const history = useHistory();
  const { loading, error, data } = useQuery<QuizData>(FECTH_BY_CREATOR, {
    variables: { findQuizByCreatorCreator: accountName }
  });

  if (loading || !data) {
    return <Spinner />;
  }
  return (
    <ProfileQuizView
      quizes={data.findQuizByCreator}
      onClick={(id: string) => {
        history.push(`/play/${id}`);
      }}
    />
  );
};

export default ProfileQuizPresenter;
