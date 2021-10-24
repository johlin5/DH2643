import { Typography, Card, makeStyles, createStyles, CardContent } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    card: { margin: "8px" }
  })
);

type HistoryCardProps = {
  quizTitle: string;
  score: number;
  maxScore: number;
  date: string;
};

const HistoryCard: React.FC<HistoryCardProps> = (props) => {
  const { quizTitle, score, maxScore, date } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {quizTitle}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          score: {score} out of {maxScore}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          date: {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
