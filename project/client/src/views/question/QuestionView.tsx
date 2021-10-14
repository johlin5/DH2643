import { Container, TextField, Typography } from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { PURPLE, RED, TURQUOISE, GREEN } from "../../app/theme";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import Answer from "../answer/Index";
import { QuestionProps } from "./props";
import { QuestionInput } from "../../utils/types";
import { useRecoilState } from "recoil";
import { canEditAtom } from "../../atoms/quiz";

const QuestionView: React.FC<QuestionProps> = ({ data }: QuestionProps) => {
  const [editState, setEditState] = useRecoilState(canEditAtom);

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">{data.question}</Typography>
      <ul>
        {data.answers.map((answer) => {
          return (
            <li>
              <p>{answer.description}</p>
              <p>{answer.flag}</p>
            </li>
          );
        })}
      </ul>
      <h6>Upvotes: {data.upvotes}</h6>
      {editState && (
        <PrimaryButton text="Edit Question" color={GREEN} variant="h6" height="48px" onClick={() => setEditState(true)} />
      )}
    </Container>
  );
};

export default QuestionView;
