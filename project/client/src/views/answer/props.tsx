import { AnswerInput } from "../../utils/types";

export interface AnswerProps {
  data: AnswerInput;
}

export interface AnswerPresenterProps extends AnswerProps {
  handleSave: (answerData: AnswerInput) => void;
  handleDelete: (answerData: AnswerInput) => void;
}

export interface AnswerFormProps extends AnswerProps {
  saveAnswer: (answerData: AnswerInput) => void;
  deleteAnswer: (answerData: AnswerInput) => void;
}
