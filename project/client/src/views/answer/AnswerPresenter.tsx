import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { AnswerInput } from "utils/types";
import { AnswerPresenterProps } from "./props";
import AnswerForm from "./AnswerForm";

const AnswerPresenter: React.FC<AnswerPresenterProps> = ({ handleSave, handleDelete, data }: AnswerPresenterProps) => {
  // States
  const [answerData, setAnswerData] = useState(data);

  const saveAnswer = (data: AnswerInput) => {
    setAnswerData(data);
    handleSave(data);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <AnswerForm saveAnswer={saveAnswer} deleteAnswer={handleDelete} data={data} />
    </Container>
  );
};

export default AnswerPresenter;
