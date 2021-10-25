import { Container, List, TextField, Typography, ListItem, Button, FormControl } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { RED, TURQUOISE } from "../../app/theme";
import { QuestionFormProps } from "./props";
import AnswerPresenter from "../answer/AnswerPresenter";
import { AnswerInput } from "../../utils/types";

const QuestionForm: React.FC<QuestionFormProps> = ({
  handleSave,
  handleDelete,
  handleAdd,
  data
}: QuestionFormProps) => {
  // States
  const [formState, setFormState] = useState(data);

  const handleSaveAnswer = (answerData: AnswerInput) => {
    const index = data.answers.findIndex((a) => a.AnswerId === answerData.AnswerId);
    const newAnswers = [...data.answers];
    newAnswers[index] = answerData;
    handleSave({
      ...data,
      answers: newAnswers
    });
  };

  const handleDeleteAnswer = (answerData: AnswerInput) => {
    const newAnswers = data.answers.filter((a) => {
      return a.AnswerId !== answerData.AnswerId;
    });
    console.log(answerData);
    console.log(newAnswers);
    handleSave({
      ...data,
      answers: newAnswers
    });
  };

  return (
    <Container component="main" style={{ backgroundColor: "white", border: "solid 1px grey", padding: "10px"}}>
      <Typography variant="h5">{formState.question === "" ? "Your question is...." : formState.question}</Typography>
      <FormControl fullWidth>
      <TextField
        id="standard-basic"
        label="Your question is...."
        variant="standard"
        margin="normal"
        value={formState.question}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setFormState({
            ...data,
            question: event.target.value
          });
        }}
        onBlur={() => {
          handleSave(formState);
        }}
      />
      <List>
        {data.answers.map((answer, index) => {
          return (
            <ListItem key={index} style={{padding: "0px"}}>
              <AnswerPresenter handleSave={handleSaveAnswer} handleDelete={handleDeleteAnswer} data={answer} />
            </ListItem>
          );
        })}
      </List>
      <Button size="small" variant="contained" color="primary" onClick={() => handleAdd()}>Add answer</Button>
      <Button size="small" variant="contained" color="secondary" onClick={() => handleDelete(formState)}>Delete</Button>
      </FormControl>
    </Container>
  );
};

export default QuestionForm;
