import { Modal, Box, Paper, Button, Typography, makeStyles, createStyles } from "@material-ui/core";

type GameOverModalProps = {
  open: boolean;
  total: number;
  numberCorrect: number;
  playAgain: () => void;
  onClose: () => void;
};

const GameOverModal: React.FC<GameOverModalProps> = ({ open, total, numberCorrect, playAgain, onClose }) => {
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
          <Button onClick={onClose}>More quiezes</Button>
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
