import { AnswerInput, QuestionInput } from "../../utils/types";

export interface QuestionProps {
  questionData: QuestionInput;
}

export interface QuestionFormProps extends QuestionProps {
  handleSave: (questionData: QuestionInput) => void;
  handleDelete: (questionData: QuestionInput) => void;
  onAddAnswer: () => void;
  onDeleteAnswer: (answerData: AnswerInput) => void;
  onSaveAnswer: (answerData: AnswerInput) => void;
}

export interface QuestionPresenterProps extends QuestionProps {
  saveQuestion: (questionData: QuestionInput) => void;
  handleDelete: (questionData: QuestionInput) => void;
}
