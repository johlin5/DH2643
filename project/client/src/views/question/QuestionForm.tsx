import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { RED, TURQUOISE } from "../../app/theme";
import { QuestionFormProps } from "./props";
import AnswerPresenter from "../answer/AnswerPresenter";
import { AnswerInput } from "../../utils/types"

const QuestionForm: React.FC<QuestionFormProps> = ({ handleSave, handleDelete, handleAdd, data }: QuestionFormProps) => {
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
  }

  const handleDeleteAnswer = (answerData: AnswerInput) => {
    const newAnswers = data.answers.filter( (a) => {return a.AnswerId !== answerData.AnswerId });
    handleSave({
      ...data,
      answers: newAnswers
    });
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Question form</Typography>
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
          }
        }
        onBlur={() => {
            handleSave(formState);
        }}
      />
      <ul>
        {data.answers.map((answer) => {
          const id = (Math.random() + 1).toString(36).substring(7);
          return (
            <li key={id}>
              <AnswerPresenter handleSave={handleSaveAnswer} handleDelete={handleDeleteAnswer} data={answer} />
            </li>
          );
        })}
      </ul>

      <PrimaryButton
        text="Add Answer"
        color={TURQUOISE}
        variant="h6"
        height="48px"
        onClick={() => handleAdd()}
      />
      <PrimaryButton
        text="Delete"
        color={RED}
        variant="h6"
        height="48px"
        onClick={() => handleDelete(formState)}
      />
    </Container>
  );
};

export default QuestionForm;
