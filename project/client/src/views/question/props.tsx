import { QuestionInput, QuestionType } from "../../utils/types";

export interface QuestionProps {
  data: QuestionType;
  index: number;
  handleDelete: (index: number) => void;
  handleSave: (index:number, questionData: QuestionType) => void;
}

export interface QuestionFormProps extends QuestionProps {
  handleAdd: () => void;
}
