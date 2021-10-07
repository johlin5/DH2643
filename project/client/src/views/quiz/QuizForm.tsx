import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED, GREEN } from "../../app/theme";
import Question from "../question/Index";
import { QuestionInput, AnswerInput } from "../../utils/types";
import { QuizFromProps, QuizViewProps } from "./Props";

const QuizForm: React.FC<QuizFromProps> = ({ setEdit, editState, data, setQuizData }: QuizFromProps) => {
  const [questions, setQuestions] = useState<QuestionInput[]>(data.questions);
  const [name, setName] = useState(data.name);

  // Callbacks to Question child
  const handleSaveQuestion = (questionId: string, questionData: QuestionInput) => {
    const existingQuestion = questions.find((q) => q.id === questionId);
    if (existingQuestion) {
      const index = questions.findIndex((q) => q.id === questionId);
      console.log(index);
      console.log("Updating question");
      updateQuestion(index, questionData);
    } else {
      addQuestion(questionData);
    }
    console.log(questionData);
  };

  const handleSaveQuiz = () => {
    setQuizData({
      name: name,
      questions: questions,
      creator: data.creator
    });
    setEdit(false);
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

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        margin="normal"
        value={name}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setName(event.target.value)}
      />
      <ul>
        {questions.map((question) => {
          return (
            <li>
              <Question saveQuestion={handleSaveQuestion} editQuiz={editState} data={question} />
            </li>
          );
        })}
      </ul>

      <PrimaryButton
        text="Add question"
        color={GREEN}
        variant="h6"
        height="48px"
        onClick={() => addQuestion({ question: "", answers: [], id: "", userId: "", upvotes: 0, report: "" })}
      />
      <PrimaryButton text="Save Quiz" color={PURPLE} variant="h6" height="48px" onClick={() => handleSaveQuiz()} />
      <PrimaryButton
        text="Delete Quiz"
        color={RED}
        variant="h6"
        height="48px"
        onClick={() => {
          /** Add function that handles deletion */
        }}
      />
    </Container>
  );
};

export default QuizForm;
