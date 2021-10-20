import { AnswerInput, AnswerType } from "../../utils/types";

export interface AnswerProps {
  data: AnswerType;
  index: number;
  handleSave: (index: number, answerData: AnswerType) => void;
  handleDelete: (index: number) => void;
}
