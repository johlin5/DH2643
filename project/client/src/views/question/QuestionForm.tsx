import { Container, List, TextField, Typography, ListItem, Button, FormControl } from "@material-ui/core";
import { ChangeEvent } from "react";
import { QuestionFormProps } from "./props";
import AnswerPresenter from "../answer/AnswerPresenter";

const QuestionForm: React.FC<QuestionFormProps> = ({
  handleDelete,
  onAddAnswer,
  onDeleteAnswer,
  onSaveAnswer,
  questionData,
  onSetQuestion
}: QuestionFormProps) => {

  return (
    <Container component="main" style={{ backgroundColor: "white", border: "solid 1px grey", padding: "10px"}}>
      <Typography variant="h5">{questionData.question}</Typography>
      <FormControl fullWidth>
      <TextField
        id="standard-basic"
        label="Your question is...."
        variant="standard"
        margin="normal"
        value={questionData.question}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onSetQuestion({...questionData, question: event.target.value})}
      />
      <List>
        {questionData.answers.map((answer, index) => {
          return (
            <ListItem key={index} style={{padding: "0px"}}>
              <AnswerPresenter handleSave={onSaveAnswer} handleDelete={onDeleteAnswer} answerData={answer} />
            </ListItem>
          );
        })}
      </List>
      <Button size="small" variant="contained" color="primary" onClick={() => onAddAnswer()}>Add answer</Button>
      <Button size="small" variant="contained" color="secondary" onClick={() => {handleDelete(questionData)}}>Delete</Button>
      </FormControl>
    </Container>
  );
};

export default QuestionForm;
