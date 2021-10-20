import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { RED, TURQUOISE } from "../../app/theme";
import { QuestionFormProps } from "./props";
import AnswerPresenter from "../answer/AnswerPresenter";
import { AnswerInput, AnswerType } from "../../utils/types"

const QuestionForm: React.FC<QuestionFormProps> = ({ handleSave, handleDelete, handleAdd, data, index }: QuestionFormProps) => {
  // States
  const [formState, setFormState] = useState(data); 

  const handleSaveAnswer = (index: number, answerData: AnswerType) => {
    // const index = data.answers.findIndex((a) => a.AnswerId === answerData.AnswerId);
    
    const newAnswers = [...data.answers];   
    newAnswers[index] = answerData;
    handleSave(index, {
      ...data, 
      answers: newAnswers
    })
  }

  const handleDeleteAnswer = (index: number) => {
    const newAnswers = data.answers.filter( (_, i) => {return i !== index });
    handleSave(index, {
      ...data,
      answers: newAnswers
    });
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Question form</Typography>
      <TextField
        id="standard-basic"
        label="Standard"
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
            handleSave(index, formState);
          }
        }
      />
      <ul>
        {data.answers.map((answer, index) => {
          const id = (Math.random() + 1).toString(36).substring(7);
          return (
            <li key={id}>
              <AnswerPresenter handleSave={handleSaveAnswer} handleDelete={handleDeleteAnswer} data={answer} index={index} />
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
        onClick={() => handleDelete(index)}
      />
    </Container>
  );
};

export default QuestionForm;
