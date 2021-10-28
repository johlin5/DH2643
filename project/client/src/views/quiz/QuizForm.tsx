import {
  Container,
  FormControl,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  ListItem,
  List,
  Typography
} from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE } from "../../app/theme";
import { QuizFromProps } from "./Props";
import QuestionPresenter from "../question/QuestionPresenter";


const QuizForm: React.FC<QuizFromProps> = ({ 
  quiz, 
  saveQuiz, 
  setQuizData, 
  setNumberOfQuestions,
  onSetQuestion,
  onDeleteQuestion,
  onUpdateQuestion
  }: QuizFromProps) => {

  return (
    <Container component="main" style={{ backgroundColor: "white", padding: "16px" }}>
      <FormControl fullWidth>
        <TextField
          id="standard-basic"
          label="Quiz Title"
          variant="standard"
          margin="normal"
          value={quiz.title}
          onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setQuizData({...quiz, title: event.target.value})}
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          margin="normal"
          value={quiz.description}
          onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>  setQuizData({...quiz, description: event.target.value})}
        />

        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={quiz.questions.length}
          onChange={ (e) => setNumberOfQuestions(e.target.value)}
          label="NumberOfQuestions"
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <List>
        {quiz.questions.map((question, index) => {
          return (
            <ListItem key={index}>
              <QuestionPresenter onSetQuestion={onSetQuestion} handleDelete={onDeleteQuestion} questionData={question} updateQuestion={onUpdateQuestion}/>
            </ListItem>
          );
        })}
      </List>
      <PrimaryButton text="Save Quiz" color={PURPLE} variant="h6" height="48px" onClick={() => saveQuiz(quiz)} />
    </Container>
  );
};

export default QuizForm;
