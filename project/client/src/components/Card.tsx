import {
  Typography,
  CardActions,
  Card,
  makeStyles,
  createStyles,
  CardContent,
  Button,
  ThemeProvider
} from "@material-ui/core";
import { theme, ThemeColors } from "../app/theme";
import { ThumbUp } from "@material-ui/icons";

const useStyles = makeStyles(() =>
  createStyles({
    card: { margin: "8px" }
  })
);

type GameCardProps = {
  title: string;
  body: string;
  author: string;
  colors: boolean;
  upvotes: number;
  play: () => void;
  info: () => void;
};

export const getRandomColor = (): string => {
  return ThemeColors[Math.floor(Math.random() * ThemeColors.length)];
};

const GameCard: React.FC<GameCardProps> = (props) => {
  const { title, body, colors, play, info, author, upvotes } = props;
  const classes = useStyles();
  const borders = { border: "solid", borderRadius: "5px", borderWidth: "1px" };
  const color = colors ? { backgroundColor: getRandomColor() } : {};
  const cardStyles = { ...borders, ...color };

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.card + " cardHover"} style={cardStyles}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Author: {author}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            <ThumbUp /> {upvotes}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={play} variant="contained" color="secondary">
            Play
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default GameCard;
