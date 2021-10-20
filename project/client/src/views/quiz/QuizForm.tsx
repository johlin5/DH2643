import { Container, FormControl, MenuItem, TextField, InputLabel, Select, Typography } from "@material-ui/core";
import { useState, ChangeEvent, useEffect } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED } from "../../app/theme";
import Question from "../question/Index";
import { QuestionInput, QuestionType } from "../../utils/types";
import { QuizFromProps } from "./Props";
import { useRecoilState } from "recoil";
import { canEditAtom } from "../../atoms/quiz";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const QuizForm: React.FC<QuizFromProps> = ({quiz, setQuizData}: QuizFromProps) => {
  const [editState, setEditState] = useRecoilState(canEditAtom);
  const [questions, setQuestions] = useState<QuestionType[]>(quiz.questions);
  const [title, setTitle] = useState(quiz.title);
  const [numberOfQuestions, setNumberOfQuestions] = useState(quiz.questions.length);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createWithContent(ContentState.createFromText(quiz.description))
  );

  // Callbacks to Question child
  const handleSaveQuestion = (index: number, questionData: QuestionType) => {
    const newQuestions = [...questions]; // copying the old datas array
    newQuestions[index] = questionData; // replace old data with new
    setQuestions(newQuestions);
  };

  const handleSaveQuiz = () => {
    setQuizData({
      title: title,
      description: convertToRaw(editorState.getCurrentContent()).blocks[0].text,
      questions: questions,
      creator: quiz.creator
    });
    setEditState(false);
  };

  const handleChange = (event: any) => {
    if(questions.length === 0) { // Initialise the question list 
      appendQuestions(0, event.target.value);
    } else if(event.target.value < questions.length) { // Delete questions 
      const newQuestionList = questions.filter( (_, index) => index < event.target.value);
      setQuestions(newQuestionList);
    } else { // Append questions
      appendQuestions(questions.length, event.target.value);
    }
    setNumberOfQuestions(event.target.value);
  };

  const handleDeleteQuestion = (index: number) => {
    if(questions.length <= 3){
      console.log("At least 3 questions in a quiz");
      return
    }
    const newQuestions = questions.filter( (_, i) => {return i !== index });
    setQuestions(newQuestions); 
    setNumberOfQuestions(numberOfQuestions - 1);
  }

  /** Utils */

  const addQuestion = (questionData: QuestionType) => {
    setQuestions([...questions, questionData]);
  };

  const appendQuestions = (start: number, end: number) => {
    for (let index: number = start; index < end; index++) {
      const questionData = { question: "" + index, answers: [], userId: quiz.creator, upvotes: 0, report: "" }
      setQuestions(questions => [...questions, questionData]);
    }
  }

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
      <Editor 
        editorState={editorState} 
        editorStyle={{border: "1px solid #e9e9e9", margin: " 1%"}} 
        onEditorStateChange={setEditorState} 
        // onBlur={() => handleSave(formState)}
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
      <ul>
        {
        questions.map((question, index) => {
          // const id = (Math.random() + 1).toString(36).substring(7);
          return (
            <li key={index}>
              <Question handleSave={handleSaveQuestion} handleDelete={handleDeleteQuestion} data={question} index={index}/>
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
