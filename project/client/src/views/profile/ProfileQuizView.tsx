import { Quiz } from "./ProfileQuizPresenter";
import Card from "../../components/Card";
import { Grid } from "@material-ui/core";

type ProfileQuizViewProps = {
  quizes: Quiz[];
  onClick: () => void;
};

const ProfileQuizView: React.FC<ProfileQuizViewProps> = ({ quizes, onClick }) => {
  console.log(quizes);
  if (!quizes) {
    return <>You have not created any quezes yet</>;
  }

  return (
    <Grid container>
      {quizes.map((quiz) => {
        return (
          <Grid item xs={6} sm={4} md={3}>
            <Card title={quiz.title} body={quiz.description} author={quiz.creator} play={onClick} info={onClick} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProfileQuizView;
// title: string;
// body: string;
// author: string;
// play: () => void;
// info: () => void;
