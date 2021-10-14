import { Container, Typography } from "@material-ui/core";
import { GREEN } from "../../app/theme";
import React from "react";
import { AnswerProps } from "./props";
import PrimaryButton from "../../components/PrimaryButton";
import { canEditAtom } from "../../atoms/quiz";
import { useRecoilState } from "recoil";

const AnswerView: React.FC<AnswerProps> = ({ data }: AnswerProps) => {
  const [editState, setEditState] = useRecoilState(canEditAtom);

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Answer</Typography>
      <p>Description: {data.description}</p>
      <p>Flag: {data.flag}</p>
      <PrimaryButton text="Edit" color={GREEN} variant="h6" height="48px" onClick={() => setEditState(true)} />
    </Container>
  );
};

export default AnswerView;
