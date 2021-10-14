import {
  Typography,
  CardActions,
  Card,
  makeStyles,
  createStyles,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    card: { margin: "8px" }
  })
);

type GameCardProps = {
  title: string;
  body: string;
  author: string;
  play: () => void;
  info: () => void;
};

const GameCard: React.FC<GameCardProps> = (props) => {
  const { title, body, play, info, author } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Author: {author}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={play} variant="contained" color="secondary">
          Play
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
