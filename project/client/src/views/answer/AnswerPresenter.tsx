import { Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AnswerInput } from "utils/types";
import AnswerView from "./AnswerView";
import { AnswerPresenterProps } from "./props";
import AnswerForm from "./AnswerForm";
import { useRecoilValue } from 'recoil';
import { withEdit } from '../../selectors/quiz';

const AnswerPresenter: React.FC<AnswerPresenterProps> = ({
  saveAnswerData,
  data
}: AnswerPresenterProps) => {
  // States
  const editState = useRecoilValue(withEdit);
  const [answerData, setAnswerData] = useState(data);

  const handleSaveAnswer = (answerData: AnswerInput) => {
    setAnswerData(answerData);
    saveAnswerData(data.id, answerData);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <AnswerForm saveAnswer={handleSaveAnswer} data={data} />
    </Container>
  );
};

export default AnswerPresenter;
