import { Container, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED, TURQUOISE, GREEN } from "../../app/theme";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import Answer from "../answer/Index";
import { QuestionFormProps } from "./props";
import { AnswerInput } from "../../utils/types";
import AnswerPresenter from "../answer/AnswerPresenter";

const QuestionForm: React.FC<QuestionFormProps> = ({ saveQuestion, editQuiz, data }: QuestionFormProps) => {
  // States
  const [answers, setAnswers] = useState<AnswerInput[]>(data.answers);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createWithContent(ContentState.createFromText(data.question))
  );
  // Random string generator for ID
  const id = data.id ? data.id : (Math.random() + 1).toString(36).substring(7);

  // Callbacks / Handlers
  const handleSaveQuestion = (state: EditorState) => {
    // setEditorState(state);
    saveQuestion(
      {
        id: id,
        question: convertToRaw(editorState.getCurrentContent()).blocks[0].text,
        userId: "",
        answers: answers,
        upvotes: 0,
        report: ""
      },
      false
    );
  };

  const handleSaveAnswer = (answerId: string, answerData: AnswerInput) => {
    const existingQuestion = answers.find((a) => a.id === answerId);
    if (existingQuestion) {
      const index = answers.findIndex((a) => a.id === answerId);
      console.log(index);
      console.log("Updating Answer");
      updateAnswer(index, answerData);
    } else {
      addAnswer(answerData);
    }
    console.log(answerData);
  };

  // Utils
  const updateAnswer = (index: number, data: AnswerInput) => {
    const newAnswers = [...answers]; // copying the old datas array
    newAnswers[index] = data; // replace old data with new
    setAnswers(newAnswers);
  };

  const addAnswer = (answerData: AnswerInput) => {
    setAnswers([...answers, answerData]);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Question form</Typography>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      <ul>
        {answers.map((answer) => {
          return (
            <li>
              <AnswerPresenter saveAnswerData={handleSaveAnswer} editQuestion={editQuiz} data={answer} />
            </li>
          );
        })}
      </ul>

      <PrimaryButton
        text="Add Answer"
        color={TURQUOISE}
        variant="h6"
        height="48px"
        onClick={() => addAnswer({ description: "", id: "", flag: "0" })}
      />
      <PrimaryButton
        text="Save"
        color={PURPLE}
        variant="h6"
        height="48px"
        onClick={() => handleSaveQuestion(editorState)}
      />
      <PrimaryButton
        text="-"
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

export default QuestionForm;
