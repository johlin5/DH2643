import { QuestionInput } from "../../utils/types";

export interface QuestionProps {
  data: QuestionInput;
}

export interface QuestionFormProps extends QuestionProps {
  saveQuestion: (questionData: QuestionInput, editState: boolean) => void;
}

export interface QuestionPresenterProps extends QuestionProps {
  saveQuestion: (id: string, questionData: QuestionInput) => void;
}
