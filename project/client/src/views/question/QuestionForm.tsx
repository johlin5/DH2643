import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { RED, TURQUOISE } from "../../app/theme";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { QuestionFormProps } from "./props";
import AnswerPresenter from "../answer/AnswerPresenter";
import { AnswerInput } from "../../utils/types"

const QuestionForm: React.FC<QuestionFormProps> = ({ handleSave, handleDelete, handleAdd, data }: QuestionFormProps) => {
  // States
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createWithContent(ContentState.createFromText(data.question))
  );
  const [formState, setFormState] = useState(data); 

  const handleSaveQuestion = (state: EditorState) => {
    setEditorState(state);
    setFormState({
      ...data,
      question: convertToRaw(editorState.getCurrentContent()).blocks[0].text
    });
  }

  const handleSaveAnswer = (answerData: AnswerInput) => {
    console.log("Invoking handleSaveAnswer");
    const index = data.answers.findIndex((a) => a.id === answerData.id);
    const newAnswers = [...data.answers];   
    newAnswers[index] = answerData;
    handleSave({
      ...data, 
      answers: newAnswers
    })
  }

  const handleDeleteAnswer = (answerData: AnswerInput) => {
    const newAnswers = data.answers.filter( (a) => {return a.id !== answerData.id });
    handleSave({
      ...data,
      answers: newAnswers
    });
  }

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Question form</Typography>
      <Editor 
        editorState={editorState} 
        editorStyle={{border: "1px solid #e9e9e9", margin: " 1%"}} 
        onEditorStateChange={handleSaveQuestion} 
        onBlur={() => handleSave(formState)}
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
