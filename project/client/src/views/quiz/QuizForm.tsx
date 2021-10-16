import { Container, FormControl, MenuItem, TextField, InputLabel, Select, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED, GREEN } from "../../app/theme";
import Question from "../question/Index";
import { QuestionInput, AnswerInput } from "../../utils/types";
import { QuizFromProps } from "./Props";
import { useRecoilState } from "recoil";
import { canEditAtom } from "../../atoms/quiz";

const QuizForm: React.FC<QuizFromProps> = ({quiz, setQuizData}: QuizFromProps) => {
  const [questions, setQuestions] = useState<QuestionInput[]>(quiz.questions);
  const [title, setTitle] = useState(quiz.title);
  const [editState, setEditState] = useRecoilState(canEditAtom);

  // Callbacks to Question child
  const handleSaveQuestion = (questionId: string, questionData: QuestionInput) => {
    const existingQuestion = questions.find((q) => q.id === questionId);
    if (existingQuestion) {
      const index = questions.findIndex((q) => q.id === questionId);
      updateQuestion(index, questionData);
    } else {
      addQuestion(questionData);
    }
    console.log(questionData);
  };

  const handleSaveQuiz = () => {
    setQuizData({
      title: title,
      questions: questions,
      creator: quiz.creator
    });
    setEditState(false);
  };

  /** Utils */
  const updateQuestion = (index: number, data: QuestionInput) => {
    const newQuestions = [...questions]; // copying the old datas array
    newQuestions[index] = data; // replace old data with new
    setQuestions(newQuestions);
  };

  const addQuestion = (questionData: QuestionInput) => {
    setQuestions([...questions, questionData]);
  };

  const [numberOfQuestions, setNumberOfQuestions] = useState(3);

  const handleChange = (event: any) => {
    setNumberOfQuestions(event.target.value);
    setQuestions([]);
    for (let index = 0; index < event.target.value; index++) {
      const questionData = { question: "", answers: [], id: "", userId: "", upvotes: 0, report: "" }
      setQuestions(questions => [...questions, questionData]);
      // console.log(event.target.value);
    }
    
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <TextField
        id="standard-basic"
        label="Quiz Title"
        variant="standard"
        margin="normal"
        value={title}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setTitle(event.target.value)}
      />
      <FormControl >
        <InputLabel id="demo-simple-select-standard-label">#Questions</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={numberOfQuestions}
          onChange={handleChange}
          label="NumberOfQuestions"
        >
          <MenuItem value="">
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
      <ul>
        {
        questions.map((question) => {
          return (
            <li>
              <Question saveQuestion={handleSaveQuestion} data={question} />
            </li>
          );
        })
        }
      </ul>
      {/* <PrimaryButton
        text="Add # Questions"
        color={GREEN}
        variant="h6"
        height="48px"
        onClick={() => addQuestion({ question: "", answers: [], id: "", userId: "", upvotes: 0, report: "" })}
      /> */}
      <PrimaryButton text="Save Quiz" color={PURPLE} variant="h6" height="48px" onClick={() => handleSaveQuiz()} />
      {editState && <PrimaryButton
        text="Delete Quiz"
        color={RED}
        variant="h6"
        height="48px"
        onClick={() => {
          /** Add function that handles deletion */
        }}
      />}
    </Container>
  );
};

export default QuizForm;
