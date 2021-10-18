import { AnswerInput, QuestionInput } from "../../utils/types";

export interface QuestionProps {
  data: QuestionInput;
}

export interface QuestionFormProps extends QuestionProps {
  handleSave: (questionData: QuestionInput) => void;
  handleDelete: (questionData: QuestionInput) => void;
  handleAdd: () => void;
}

export interface QuestionPresenterProps extends QuestionProps {
  saveQuestion: (questionData: QuestionInput) => void;
  handleDelete: (questionData: QuestionInput) => void;
}
