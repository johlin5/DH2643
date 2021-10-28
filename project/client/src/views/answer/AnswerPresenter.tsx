import React from "react";
import { AnswerProps } from "./props";
import AnswerForm from "./AnswerForm";

const AnswerPresenter: React.FC<AnswerProps> = ({ answerData, handleSave, handleDelete }: AnswerProps) => {
  return (
      <AnswerForm answerData={answerData} handleSave={handleSave} handleDelete={handleDelete} />
  );
};

export default AnswerPresenter;
