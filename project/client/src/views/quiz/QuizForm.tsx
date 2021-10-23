import { Container, FormControl, MenuItem, TextField, InputLabel, Select, ListItem, List } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED } from "../../app/theme";
import Question from "../question/Index";
import { QuestionInput } from "../../utils/types";
import { QuizFromProps } from "./Props";
import { useRecoilState } from "recoil";
import { canEditAtom } from "../../atoms/quiz";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const QuizForm: React.FC<QuizFromProps> = ({ quiz, setQuizData }: QuizFromProps) => {
  const [questions, setQuestions] = useState<QuestionInput[]>(quiz.questions);
  const [title, setTitle] = useState(quiz.title);
  const [editState, setEditState] = useRecoilState(canEditAtom);
  const [numberOfQuestions, setNumberOfQuestions] = useState(quiz.questions.length);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createWithContent(ContentState.createFromText(quiz.description))
  );

  // Callbacks to Question child
  const handleSaveQuestion = (questionData: QuestionInput) => {
    const existingQuestion = questions.find((q) => q.id === questionData.id);
    if (existingQuestion) {
      const index = questions.findIndex((q) => q.id === questionData.id);
      updateQuestion(index, questionData);
    } else {
      addQuestion(questionData);
    }
  };

  const handleSaveQuiz = () => {
    const answers = questions.map( q => q.answers.map( ({AnswerId, ...answer})  => answer ));
    const cleanQuestions = questions.map( ({id, ...q}, index) => ({...q, answers: answers[index]}) );
    setQuizData({
      title: title,
      description: convertToRaw(editorState.getCurrentContent()).blocks[0].text,
      questions: cleanQuestions,
      creator: quiz.creator
    });
    setEditState(false);
  };

  const handleChange = (event: any) => {
    if (questions.length === 0) {
      // Initialise the question list
      appendQuestions(0, event.target.value);
    } else if (event.target.value < questions.length) {
      // Delete questions
      const newQuestionList = questions.filter((_, index) => index < event.target.value);
      setQuestions(newQuestionList);
    } else {
      // Append questions
      appendQuestions(questions.length, event.target.value);
    }
    setNumberOfQuestions(event.target.value);
  };

  const handleDeleteQuestion = (questionData: QuestionInput) => {
    if (questions.length <= 3) {
      alert("At least 3 questions in a quiz");
      return;
    }
    const newQuestions = questions.filter((q) => {
      return q.id !== questionData.id;
    });
    setQuestions(newQuestions);
    setNumberOfQuestions(numberOfQuestions - 1);
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

  const appendQuestions = (start: number, end: number) => {
    for (let index: number = start; index < end; index++) {
      const questionId = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      const questionData = { question: "", answers: [], id: questionId, userId: quiz.creator, upvotes: 0, report: "" };
      setQuestions((questions) => [...questions, questionData]);
    }
  };

  return (
    <Container component="main" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
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
        editorStyle={{ border: "1px solid #e9e9e9", margin: " 1%" }}
        onEditorStateChange={setEditorState}
      />
      <FormControl>
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
      <List>
        {questions.map((question, id) => { 
          return (
            <ListItem key={id}>
              <Question saveQuestion={handleSaveQuestion} handleDelete={handleDeleteQuestion} data={question} />
            </ListItem>
          );
        })}
      </List>
      <PrimaryButton text="Save Quiz" color={PURPLE} variant="h6" height="48px" onClick={() => handleSaveQuiz()} />
      {editState && (
        <PrimaryButton
          text="Delete Quiz"
          color={RED}
          variant="h6"
          height="48px"
          onClick={() => {
            /** Add function that handles deletion */
          }}
        />
      )}
    </Container>
  );
};

export default QuizForm;
