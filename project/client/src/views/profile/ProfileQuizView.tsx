import { Quiz } from "./ProfileQuizPresenter";
import Card from "../../components/Card";
import { Grid, Typography } from "@material-ui/core";

type ProfileQuizViewProps = {
  quizes: Quiz[];
  onClick: (id: string) => void;
};

const ProfileQuizView: React.FC<ProfileQuizViewProps> = ({ quizes, onClick }) => {
  if (!quizes) {
    return <>You have not created any quezes yet</>;
  }

  return (
    <>
      <Typography variant="h6" style={{ paddingLeft: "8px" }}>
        Your quizes
      </Typography>
      <Grid container>
        {quizes.map((quiz) => {
          return (
            <Grid item key={quiz.id} xs={6} sm={4} md={3}>
              <Card
                title={quiz.title}
                body={quiz.description}
                author={quiz.creator}
                play={() => {
                  onClick(quiz.id);
                }}
                info={() => {
                  console.log("info");
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProfileQuizView;
