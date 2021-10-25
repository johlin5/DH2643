import { Modal, Box, Paper, Button, Typography, makeStyles, createStyles, IconButton } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { SUCESS_GREEN } from "../../app/theme";

type GameOverModalProps = {
  open: boolean;
  total: number;
  numberCorrect: number;
  playAgain: () => void;
  onClose: () => void;
  onUpvote: { onUpvoteClick: () => void; disabled: boolean };
};

const CustomColorIconButton = withStyles({
  root: {
    color: SUCESS_GREEN
  }
})(IconButton);

const GameOverModal: React.FC<GameOverModalProps> = ({ open, total, numberCorrect, playAgain, onClose, onUpvote }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={onClose} className={classes.modalRoot}>
      <Box>
        <Paper className={classes.box}>
          <Typography variant="h4">Game over!</Typography>
          <Typography variant="body1">
            You got {numberCorrect} questions correct out of {total}
          </Typography>
          <Button onClick={playAgain}>Play again</Button>
          <Button onClick={onClose}>More quizes</Button>
          <CustomColorIconButton disabled={onUpvote.disabled} onClick={onUpvote.onUpvoteClick}>
            <ThumbUp />
          </CustomColorIconButton>
        </Paper>
      </Box>
    </Modal>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    modalRoot: { display: "flex", alignItems: "center", justifyContent: "center" },
    box: { textAlign: "center", padding: "64px" }
  })
);

export default GameOverModal;
