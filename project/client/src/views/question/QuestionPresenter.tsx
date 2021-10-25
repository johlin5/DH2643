import { Container } from "@material-ui/core";
import { useState } from "react";
import { QuestionInput } from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";

const QuestionPresenter: React.FC<QuestionPresenterProps> = ({
  saveQuestion,
  handleDelete,
  data
}: QuestionPresenterProps) => {
  // States
  const [questionData, setQuestionData] = useState<QuestionInput>(data);

  // Callbacks / Handlers
  const handleSave = (QuestionFormData: QuestionInput) => {
    setQuestionData(QuestionFormData);
    saveQuestion(QuestionFormData);
  };

  const handleAdd = () => {
    const answerId = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

    setQuestionData({
      ...questionData,
      answers: [...questionData.answers, { AnswerId: answerId, description: "", flag: false }]
    });
  };

  return (
    <QuestionForm handleSave={handleSave} handleDelete={handleDelete} handleAdd={handleAdd} data={questionData!} />
  );
};

export default QuestionPresenter;
