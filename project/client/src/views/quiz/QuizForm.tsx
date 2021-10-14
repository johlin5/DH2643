import { Container, TextField, Typography } from "@material-ui/core";
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

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        margin="normal"
        value={title}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setTitle(event.target.value)}
      />
      <ul>
        {questions.map((question) => {
          return (
            <li>
              <Question saveQuestion={handleSaveQuestion} data={question} />
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
