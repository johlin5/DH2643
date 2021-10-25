import { History } from "./HistoryPresenter";
import Card from "../../components/HistoryCard";
import { Grid, Typography } from "@material-ui/core";

type HistoryViewProps = {
  history: History[];
};

const HistoryView: React.FC<HistoryViewProps> = ({ history }) => {
  if (!history) {
    return <>No quiz history!</>;
  }

  return (
    <>
      <Typography variant="h6" style={{ paddingLeft: "8px" }}>
        Quiz History
      </Typography>
      <Grid container>
        {history.map((history) => {
          return (
            <Grid item xs={12} sm={4} md={3} key={history.id}>
              <Card
                quizTitle={history.quizTitle}
                score={history.score}
                maxScore={history.maxScore}
                date={history.date}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default HistoryView;
