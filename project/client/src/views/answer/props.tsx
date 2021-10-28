import { AnswerInput } from "../../utils/types";

export interface AnswerProps {
  answerData: AnswerInput;
  handleSave: (answerData: AnswerInput) => void;
  handleDelete: (answerData: AnswerInput) => void;
}
