import { Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AnswerInput } from "utils/types";
import AnswerView from "./AnswerView";
import { AnswerPresenterProps } from "./props";
import AnswerForm from "./AnswerForm";

const AnswerPresenter: React.FC<AnswerPresenterProps> = ({saveAnswerData, editQuestion, data}: AnswerPresenterProps) => {
  // States 
  const [editState, setEditState] = useState(false);
  const [answerData, setAnswerData] = useState(data)

  // Callbacks / Handlers 
  const handleSetEdit = (newEditState: boolean) => {
    setEditState(newEditState);
  };

  const handleSaveAnswer = (answerData: AnswerInput, newEditState: boolean) => {
    setAnswerData(answerData);
    setEditState(newEditState)
    saveAnswerData(data.id, answerData);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      {
          editState ? 
          <AnswerForm saveAnswer={handleSaveAnswer} editQuestion={editQuestion} setEdit={handleSetEdit} data={data}/> 
          : 
          <AnswerView setEdit={handleSetEdit} editQuestion={editQuestion} data={data}/>
      }
    </Container>
  );
};

export default AnswerPresenter;
