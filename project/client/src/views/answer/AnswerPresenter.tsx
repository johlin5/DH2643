import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { AnswerType } from "utils/types";
import { AnswerProps } from "./props";
import AnswerForm from "./AnswerForm";


const AnswerPresenter: React.FC<AnswerProps> = ({
  handleSave,
  handleDelete,
  data,
  index
}: AnswerProps) => {
  // States
  const [answerData, setAnswerData] = useState(data);

  const saveAnswer = (index: number, data: AnswerType) => {
    console.log("AnswerPresenter save")
    setAnswerData(data);
    handleSave(index, data);
  }
  
  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <AnswerForm handleSave={saveAnswer} handleDelete={handleDelete} data={answerData} index={index} />
    </Container>
  );
};

export default AnswerPresenter;
